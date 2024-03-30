const hamburgerButton = document.getElementById("hamburgerButton")
const sideBarFull = document.getElementById("sideBar")
function displayNone(){
    sideBarFull.style.display
}
function openSideBar(){
    if(sideBarFull.style.display == "block"){
        hamburgerButton.style.color = "white"
        sideBarFull.classList.remove("animate__fadeInLeft")
        sideBarFull.classList.remove("animate__animated")
        sideBarFull.classList.add("animate__animated")
        sideBarFull.classList.add("animate__fadeOutLeft")
        setTimeout(function() {
            sideBarFull.style.display = "none"
        }, 1000);
    }
    else{
        sideBarFull.style.display = "block"
        hamburgerButton.style.color = "red"
        sideBarFull.classList.remove("animate__animated")
        sideBarFull.classList.remove("animate__fadeOutLeft")
        sideBarFull.classList.add("animate__animated")
        sideBarFull.classList.add("animate__fadeInLeft")
    }
}