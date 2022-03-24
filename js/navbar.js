const navbar = document.querySelector(".nav-bar");
const navContent = `
        <div class="nav-center flex">
                <div class="logo"></div>
                <button class="toggle">
                    <i class="fas fa-align-justify fa-2x"></i>
                </button>
        </div>

        <div class="nav-links-container flex">
            <div class="search-container flex">
                <input type="text" name="search" id="nav-search" placeholder="Search Here">
                <img src="../assets/searchlogo.png" alt="search icon" id="arrow-logo">
            </div>
            <img src="../assets/email-logo.png" alt="email logo" class="nav-icons-grp ">
            <img src="../assets/notificaton-logo.png" alt="notification logo" id="notification-logo" class="nav-icons-grp">
            <img src="../assets/setting-logo.png" alt="setting logo" class="nav-icons-grp" id="setting-logo">  
             
            <div class="avtar-container flex">
                <img src="../assets/avatar.png" alt="avatar logo" class="nav-icons-grp">
                <img src="../assets/down-arrow.png" alt="down-arrow logo" class="arrow-logo" id="profile-down-arrow">
            </div> 
        </div>
`;

function navLoader(){
    navbar.innerHTML = navContent;
}

navLoader();