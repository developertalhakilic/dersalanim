const hamburgerButton = document.getElementById("hamburgerButton")
const sideBarFull = document.getElementById("sideBar")
function displayNone(){
    sideBarFull.style.display
}
function openSideBar(){
    if(sideBarFull.style.display == "block"){
        hamburgerButton.style.color = "white"
        sideBarFull.classList.remove("slide-in-left")
        sideBarFull.classList.add("slide-out-left")
        setTimeout(function() {
            sideBarFull.style.display = "none"
        }, 400);
    }
    else{
        sideBarFull.style.display = "block"
        hamburgerButton.style.color = "red"
        sideBarFull.classList.remove("slide-out-left")
        sideBarFull.classList.add("slide-in-left")
    }
}