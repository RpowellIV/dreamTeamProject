$().ready(() => {
    $('#search-btn').click((e) => {
        e.preventDefault();
        fetch('/jobs')
            .then(response => response.json())
            .then((data) => {
                renderJobs(data.jobs)
            })
    })

    let renderJobs = (jobTitles) => {
        let searchVal = $('#search-bar').val();
        searchVal.toLowerCase();
        jobTitles.map((job) => {
            if(job.title.toLowerCase().includes(searchVal)) {
                console.log(job.title);
            }
        })
    }
})