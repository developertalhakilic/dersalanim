const basYazi = document.getElementById("basYazi")
const pomodroContainer = document.getElementById("pomodroContainer")
const icerik1 = document.getElementById("icerik1")
const icerik2 = document.getElementById("icerik2")
const logo = document.getElementById("logo")
const dakikacon = document.getElementById("dakika")
const saniyecon = document.getElementById("saniye")
const baslatButon = document.getElementById("butonBaslat")
const duraklatButon = document.getElementById("butonDuraklat")
const bitirButon = document.getElementById("butonBitir")
const restartButon = document.getElementById("butonGeriBaslat")
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
let kontrolNum = 1;
function zamanlayiciBaslat(){
    if(saniyecon.innerText > 0){
        let saniyeconN = Number(saniyecon.innerText)
        saniyeconN-=1
        saniyecon.innerText = saniyeconN
        pomodroContainer.style.boxShadow = "0px 0px 49px 0px #030eed"
        pomodroContainer.style.border = "3px solid blue"
    }
    else if(dakikacon.innerText > 0){
        let dakikaconN= Number(dakikacon.innerText)
        dakikaconN-=1
        dakikacon.innerText = dakikaconN
        saniyecon.innerText = "59"
    }
    else if (kontrolNum%2 != 0){
        kontrolNum+=1
        saniyecon.innerText = "1"
        dakikacon.innerText = "00"
        pomodroContainer.style.boxShadow = "0px 0px 49px 0px #ed0313"
        pomodroContainer.style.border = "3px solid #ed0313"
    }
    else{
        dakikacon.innerText = "25"
        saniyecon.innerText = "00"
    }
}

baslatButon.addEventListener('click', function() {
    zamanlayici = setInterval(zamanlayiciBaslat, 1000);
});
duraklatButon.addEventListener('click', function() {
    clearInterval(zamanlayici)
});
restartButon.addEventListener('click', function() {
    zamanlayici = setInterval(zamanlayiciBaslat, 1000);
});
bitirButon.addEventListener('click', function() {
    clearInterval(zamanlayici)
    dakikacon.innerText = "25"
    saniyecon.innerText = "00"
});
function hideStartButton(){
    baslatButon.style.display = "none"
    duraklatButon.style.display = "inline-block"
    bitirButon.style.display = "inline-block"
}
function showTheBaslatButon(){
    restartButon.style.display = "inline-block"
    duraklatButon.style.display = "none"
}
function showTheDuraklatButon(){
    restartButon.style.display = "none"
    duraklatButon.style.display = "inline-block"
}
function stopButton(){
    baslatButon.style.display = "inline-block"
    duraklatButon.style.display = "none"
    bitirButon.style.display = "none"
    restartButon.style.display = "none"
}