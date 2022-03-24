

const toggle = document.querySelector(".toggle");
const navLinksContainer = document.querySelector(".nav-links-container");

const avtar = document.querySelector(".avtar-container")
const dashboardContainer = document.querySelector(".dashboard-container");

// toggle function for mobile desing

toggle.addEventListener("click", function(){
    toggle.classList.toggle("rotate");
    dashboardContainer.classList.toggle("show-dashboard-container");
    navLinksContainer.classList.toggle("show-nav-links-container");
});

avtar.addEventListener("click", function(){
    
   
});



// ===============================================================================================
// View Estimation 
// chart detail
// ===============================================================================================

const labels = [
    'Task A',
    'Task B',
    'Task c',
    'Task D',
    'Task E'
   
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [
          [10,18], [5,10], [8,12], [5, 10], [2,6]
        //   18, 10, 5, 2, 20, 30, 45
        ],
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {

        plugins: {
          title: {
            display: true,
            text: 'Chart Title',
          }
        }
      }
    };
    
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );