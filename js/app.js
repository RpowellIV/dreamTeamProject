$().ready(() => {
    $('#search-btn').click((e) => {
        e.preventDefault();
        const searchVal = $('#search-bar').val();
        let results = sequelize.query("select * from User where firstName = " + searchVal);
        console.log(results);
    })
})