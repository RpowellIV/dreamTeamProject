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
                $("#jobs-container").append(`
                    <div class="job">
                        <div class="card" style="width: 100%;">
                            <h3>${job.title} - ${job.city}, ${job.state}</h3>
                            <p><sub>${job.companyName}</sub></p>
                            <p>${job.description}</p>
                            <button type="button" class="btn btn-info btn-lg" id="jobModalBtn">Read More</button>
                        </div>
                        <!-- Modal -->
                        <div class="modal fade" id="jobModal" role="dialog">
                            <div class="modal-dialog">
    
                                <!-- Modal content-->
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" style="float: left; margin-left: 0px;">&times;</button>
                                            <h4 class="modal-title">${job.title}</h4>
                                            <p>${job.location}</p>
                                            <p><sub>${job.companyName}</sub></p>
                                    </div>
                                    <div class="modal-body">
                                        <p>${job.description}</p>
                                        <p><sub>${job.email}</sub></p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <script>
                        $('#jobModalBtn').click((e) => {
                            $('#jobModal').modal();
                        })
                        </script>
                    </div>
                `)
            }
        })
    }
    
})