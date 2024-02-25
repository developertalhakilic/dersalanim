const basYazi = document.getElementById("basYazi")
const pomodroContainer = document.getElementById("pomodroContainer")
const icerik1 = document.getElementById("icerik1")
const icerik2 = document.getElementById("icerik2")
const logo = document.getElementById("logo")
function tamEkran() {
    var element = document.documentElement; // Sayfanın kök elementini alı
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

const tamEkranButton = document.getElementById('tamEkranButton');

tamEkranButton.addEventListener('click', () => {
    const body = document.body;

    if (!document.fullscreenElement) {
        body.requestFullscreen().then(() => {
            tamEkranButton.style.color = "red"
            basYazi.style.display = "none"
            pomodroContainer.style.marginTop = "170px"
            pomodroContainer.style.width = "90%"
            logo.style.display = "none"
            icerik1.style.display = "none"
            icerik2.style.display = "none"
        });
    } else {
        document.exitFullscreen().then(() => {
            tamEkranButton.style.color = "white"
            basYazi.style.display = "block"
            pomodroContainer.style.marginTop = "0px"
            pomodroContainer.style.width = "58%"
            logo.style.display = "block"
            icerik1.style.display = "block"
            icerik2.style.display = "block"
        });
    }
});