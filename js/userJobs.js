$().ready(() => {
    fetch('/userJobs')
        .then(response => response.json())
        .then((data) => {
            let jobIds = [];
            for(i = 0; i < data.jobs.length; i++){
                jobIds[i] = data.jobs[i].JobId;
            }
            console.log(jobIds)
            console.log(typeof jobIds)
            // findJobs(jobIds);

            Promise.all( 
                jobIds.map((id) => {
                    return fetch(`jobs/matchJob/${id}`)
                        .then(response => response.json())
            })).then(jobs => console.log(jobs))
           
        })


    })
//     let findJobs = (jobIdArray) => {
//         fetch('/job/matchJob')
//             .then(response => response.json())
//             .then((data) => {
//                 renderJobs(data.jobs, jobIdArray)
                
//             })
//     }

//     let renderJobs = (jobsArray, idArray) => {
//         let index = 0;

//         jobsArray.forEach((job) => {
//             if(job.id === idArray[index]){

//                 index++;
                
//                 $("#added-jobs").append(`
//                     <div class="job">
//                         <div class="card" style="width: 60%;margin: auto;margin-top: 25px;">
//                             <h3>${job.title} - ${job.city}, ${job.state}</h3>
//                             <p><sub>${job.companyName}</sub></p>
//                             <p id="descText">${job.description}</p>
//                         </div>
//                     </div>
//                 `)  
//             }
//         })
//     }
// })