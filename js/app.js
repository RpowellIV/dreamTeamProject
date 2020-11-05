$().ready(() => {
    $('#search-btn').click((e) => {
        e.preventDefault();
        fetch('/router/jobs').then(response => response.json()).then(data => console.log(data))
        const searchVal = $('#search-bar').val();
        console.log(searchVal)
        // let results = sequelize.query("select * from User where firstName = " + searchVal);
        // console.log(results);
    })
})