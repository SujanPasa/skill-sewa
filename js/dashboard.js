const dasboard = document.querySelector(".dashboard-container");
const dashboardContent = `
            <h1 class="dashboard-header">
                Dashboard
            </h1>

            <div class="dashboard-heading">
                <div class="dasboard-sub-heading flex">
                    <img src="../assets/screen-logo.png" alt="" class="dasboard-sub-heading-img">
                    <h3>Work Management</h3>
                </div>
                <div class="bullet-points flex">
                    <img src="../assets/triagle-bullet.png" alt="">
                    <a href="../pages/add-new-estimation.html" class="dashboard-links">
                        <h6>Add Types</h6>
                    </a>
                    
                </div>
            </div>

            <div class="dashboard-heading">
                <div class="dasboard-sub-heading flex">
                    <img src="../assets/screen-logo.png" alt="" class="dasboard-sub-heading-img">
                        <h3>Estimation Manager</h3>
                </div>

                <div class="bullet-points flex">
                    <img src="../assets/triagle-bullet.png" alt="">
                    <a href="../pages/view-estimation.html" class="dashboard-links">
                        <h6>View Estimation</h6>
                    </a>
                   
                </div>

                <div class="bullet-points flex">
                    <img src="../assets/triagle-bullet.png" alt="">
                    <a href="../pages/add-new-estimation.html" class="dashboard-links">
                        <h6>Add new estimation</h6>
                    </a>
                   
                </div>
            </div>


            <div class="dashboard-heading">
                <div class="dasboard-sub-heading flex">
                    <img src="../assets/screen-logo.png" alt="" class="dasboard-sub-heading-img">
                    <h3>Renovatoin Management</h3>
                </div>

                <div class="bullet-points flex">
                    <img src="../assets/triagle-bullet.png" alt="">
                    <a href="#" class="dashboard-links">
                        <h6>View Report</h6>
                    </a>
                    
                </div>
                <div class="bullet-points flex">
                    <img src="../assets/triagle-bullet.png" alt="">
                    <a href="#" class="dashboard-links">
                        <h6>Assign Supervisor</h6>
                    </a>
                    
                </div>
                <div class="bullet-points flex">
                    <img src="../assets/triagle-bullet.png" alt="">
                    <a href="#" class="dashboard-links">
                        <h6>Manage Supervisor</h6>
                    </a>
                    
                </div>
                <div class="bullet-points flex">
                    <img src="../assets/triagle-bullet.png" alt="">
                    <a href="../pages/assign-contractor.html" class="dashboard-links">
                        <h6>Assign Contractor</h6>
                    </a>
                    
                </div>
                <div class="bullet-points flex">
                    <img src="../assets/triagle-bullet.png" alt="">
                    <a href="#" class="dashboard-links">
                         <h6>View Work</h6>
                    </a>
                   
                </div>

            </div>

            <div class="dashboard-heading">
                <div class="dasboard-sub-heading flex">
                    <img src="../assets/screen-logo.png" alt="" class="dasboard-sub-heading-img">
                    <h3>Inspection Management</h3>
                </div>

                <div class="bullet-points flex">
                    <img src="../assets/triagle-bullet.png" alt="">
                    <a href="#" class="dashboard-links">
                       <h6>View all inspection</h6>
                    </a>
                  
                </div>
                <div class="bullet-points flex">
                    <img src="../assets/triagle-bullet.png" alt="">
                    <a href="#" class="dashboard-links">
                        <h6>Assign Inspector</h6>
                     </a>
                    
                </div>
                <div class="bullet-points flex">
                    <img src="../assets/triagle-bullet.png" alt="">
                    <a href="#" class="dashboard-links">
                        <h6>Report Preparation</h6>
                     </a>
                   
                </div>
                <div class="bullet-points flex">
                    <img src="../assets/triagle-bullet.png" alt="">
                    <a href="#" class="dashboard-links">
                        <h6>Assign Contractor</h6>
                     </a>
                   
                </div>
                <div class="bullet-points flex">
                    <img src="../assets/triagle-bullet.png" alt="">
                    <a href="#" class="dashboard-links">
                        <h6>View Work</h6>
                     </a>
                </div>

            </div>

            <div class="dashboard-heading">
                <div class="dasboard-sub-heading flex">
                    <img src="../assets/screen-logo.png" alt="" class="dasboard-sub-heading-img">
                    <h3>Lead Management</h3>
                </div>
                <div class="bullet-points flex">
                    <img src="../assets/triagle-bullet.png" alt="">
                    <a href="#" class="dashboard-links">
                        <h6>Add Client</h6>
                     </a>
                    
                </div>
                <div class="bullet-points flex">
                    <img src="../assets/triagle-bullet.png" alt="">
                    <a href="#" class="dashboard-links">
                        <h6>Manage Inspection</h6>
                     </a>
                    
                </div>
            </div>

            <div class="dashboard-heading">
                <div class="dasboard-sub-heading flex">
                    <img src="../assets/screen-logo.png" alt="" class="dasboard-sub-heading-img">
                    <h3>User Roles</h3>
                </div>
                <div class="bullet-points flex">
                    <img src="../assets/triagle-bullet.png" alt="">
                    <a href="#" class="dashboard-links">
                        <h6>Add Client</h6>
                    </a>
                    
                </div>
                <div class="bullet-points flex">
                    <img src="../assets/triagle-bullet.png" alt="">
                    <a href="#" class="dashboard-links">
                        <h6>Manage Inspector</h6>
                    </a>
                    
                </div>
            </div>
            
            
            <div class="dashboard-heading">
                <div class="dasboard-sub-heading flex">
                    <img src="../assets/screen-logo.png" alt="" class="dasboard-sub-heading-img">
                    <h3>Support for help</h3>
                </div>
            
            </div>
`;

function dashboardLoader(){
    dasboard.innerHTML = dashboardContent;
}

dashboardLoader();