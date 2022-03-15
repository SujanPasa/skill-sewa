const toggle = document.querySelector(".toggle");
const navLinksContainer = document.querySelector(".nav-links-container");

const avtar = document.querySelector(".avtar-container")
const dashboardContainer = document.querySelector(".dashboard-container");

// toggle function for mobile desing

toggle.addEventListener("click", function(){
    navLinksContainer.classList.toggle("show-nav-links-container");
    toggle.classList.toggle("rotate");
});

avtar.addEventListener("click", function(){
    
    dashboardContainer.classList.toggle("show-dashboard-container");
})