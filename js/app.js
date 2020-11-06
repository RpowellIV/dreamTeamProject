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
                $("#jobs-container").append(`
                    <div class="job">
                        <div class="card" style="width: 100%;">
                            <h3>${job.title} - ${job.location}</h3>
                            <p><sub>${job.companyName}</sub></p>
                            <p>${job.description}</p>
                        </div>
                    </div>
                `)
            }
        })
    }
})