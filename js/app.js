


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
        $("#jobs-container").empty()
        let searchVal = $('#search-bar').val();
        searchVal.toLowerCase();
        jobTitles.map((job) => {
            if(job.title.toLowerCase().includes(searchVal)) {
                let jobID = job.id;
                console.log(jobID)
                $("#jobs-container").append(`
                    <div class="job">
                        <div class="card" style="width: 60%;margin: auto;margin-bottom: 25px;">
                            <h3>${job.title} - ${job.city}, ${job.state}</h3>
                            <p><sub>${job.companyName}</sub></p>
                            <p id="descText">${job.description}</p>
                            <button type="button" class="btn btn-info btn-sm" id="jobModalBtn" style="width: 35%; margin: auto;">Read More</button>
                        </div>
                        <!-- Modal -->
                        <div class="modal fade" id="jobModal" role="dialog">
                            <div class="modal-dialog"> 
                                <!-- Modal content-->
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title">${job.title}</h4>
                                    </div>
                                    <div class="modal-body">
                                        <p><sub>${job.companyName}</sub></p>
                                        <p>${job.description}</p>
                                        <p><sub>${job.email}</sub></p>
                                        <p>${job.location}</p>
                                    </div>
                                    <div class="modal-footer">


                                        <form action="" method="POST">
                                            <button formmethod="POST" value="${job.id}" type="submit" id="addJob" name="addJob" class="btn btn-default">Add Job</button>
                                        </form>


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
//             const button = document.getElementById('add-job');
//             button.addEventListener('click', async _ => {
//                 try {     
//                     const response = await fetch('/addJob', {
//                     method: 'post',
//                     body: {
//                         jobID
//                     }
//                 });
//             console.log('Completed!', response);
//         } catch(err) {
//         console.error(`Error: ${err}`);
//     }
// });
        })

    }
    
})

// let addNewJob = (jobID) => {
//     $.post("addJob.js", {JobID: jobID});
// }


