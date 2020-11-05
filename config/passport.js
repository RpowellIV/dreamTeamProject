require('dotenv').config()
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models').Users;

console.log(User)
// Setting up Passport and the passport strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CLIENT_CALLBACK
},
    async function (accessToken, refreshToken, profile, done) {
        // Check if the user already exists, i.e. they logged in before.
        let user = await User.findOne({ where: { googleId: parseInt(profile.id) } })

        if (!user) {
            // if User doesn't exist then make a new database entry
            user = await User.build({
                googleId: parseInt(profile.id),
                displayName: profile.displayName,
                firstName: profile.name.givenName,
                lastName: profile.name.familyName,
                image: profile.photos[0].value,
                email: profile.emails[0].value,
                createdAt: new Date(),
                updatedAt: new Date(),

            })
            await user.save()
        }

        done(null, user)
        // console.log(profile)
    }
));

passport.serializeUser(function (user, done) {
    /*
    From the user take just the id (to minimize the cookie size) and just pass the id of the user
    to the done callback
    PS: You dont have to do it like this its just usually done like this
    */
    done(null, user);
});

passport.deserializeUser(function (id, done) {
    /*
    Instead of user this function usually recives the id 
    then you use the id to select the user from the db and pass the user obj to the done callback
    PS: You can later access this data in any routes in: req.user
    */
   done(null, id)

    // User.findByPk(id, function (err, user) {
    //     done(null, id)
    // })


});


module.exports = passport;