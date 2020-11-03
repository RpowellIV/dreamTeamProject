$().ready(() => {
    // const routes = require('./router/main')
    // const sequelize = require('../config/sequelize')
    // import * as sequelize from "./config/sequelize.js";
    

    $('#search-btn').click((e) => {
        e.preventDefault();
        const searchVal = $('#search-bar').val();
        console.log(searchVal);
        let results = sequelize.query("select * from User where firstName = " + searchVal)
        console.log(results)
    })
})