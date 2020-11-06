<<<<<<< HEAD
// const { default: fetch } = require("node-fetch");
let form = document.getElementById("bioForm");

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(e);
    const data = new FormData(form);
    console.log(stringifyFormData(data));
    postData('http://localhost:3000/dashboard', data) 
});

function stringifyFormData(fd) {
    const data = {};
    for (let key of fd.keys()){
        data[key] = fd.get(key);
    }
    return JSON.stringify(data,null,4);
};
=======
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
>>>>>>> development
