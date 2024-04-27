const basYazi = document.getElementById("basYazi")
const pomodroContainer = document.getElementById("pomodroContainer")
const icerik1 = document.getElementById("icerik1")
const icerik2 = document.getElementById("icerik2")
const logo = document.getElementById("logo")
const saatcon = document.getElementById("saat")
const dakikacon = document.getElementById("dakika")
const saniyecon = document.getElementById("saniye")
const baslatButon = document.getElementById("butonBaslat")
const duraklatButon = document.getElementById("butonDuraklat")
const bitirButon = document.getElementById("butonBitir")
const restartButon = document.getElementById("butonGeriBaslat")
const tamEkranButton = document.getElementById('tamEkranButton');
const hamburger = document.getElementById("hamburgerButton")
const side = document.getElementById("sideBar")
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
tamEkranButton.addEventListener('click', () => {
    const body = document.body;

    if (!document.fullscreenElement) {
        body.requestFullscreen().then(() => {
            tamEkranButton.style.color = "red"
            basYazi.style.display = "none"
            pomodroContainer.style.marginTop = "170px"
            pomodroContainer.style.width = "90%"
            hamburger.style.color = "white"
            hamburger.style.display = "none"
            side.style.display = "none"
        });
    } else {
        document.exitFullscreen().then(() => {
            tamEkranButton.style.color = "white"
            basYazi.style.display = "block"
            pomodroContainer.style.marginTop = "0px"
            pomodroContainer.style.width = "58%"
            hamburger.style.display = "block"
        });
    }
});
let kontrolSayi = 2;
if(localStorage.getItem("pomodoroSayisi") == null){
    localStorage.setItem("pomodoroSayisi",0)
}
if(localStorage.getItem("dersSaniyesi") == null){
    localStorage.setItem("dersSaniyesi",0)
}
let pomodoroSayisi = Number(localStorage.getItem("pomodoroSayisi"))
let dersSaniyesi = Number(localStorage.getItem("dersSaniyesi"))
function zamanlayiciBaslat(){
    if(saniyecon.innerText==0 && dakikacon.innerText != -1){
        let yeniVar = Number(dakikacon.innerText)
        dakikacon.innerText = yeniVar-1
        saniyecon.innerText = "60"
    }
    if(saniyecon.innerText>0){
        let yeniVar2 = Number(saniyecon.innerText)
        saniyecon.innerText = yeniVar2-=1
        dersSaniyesi+=1
        localStorage.setItem("dersSaniyesi",dersSaniyesi)
        if(saniyecon.innerText.length == 1){
            saniyecon.innerText = "0" + saniyecon.innerText
        }
        if(dakikacon.innerText.length == 1){
            dakikacon.innerText = "0" + dakikacon.innerText
        }
    }
    if(dakikacon.innerText == -1 && kontrolSayi % 2 == 0){
        kontrolSayi+=1
        pomodoroSayisi+=1
        saatcon.innerText = Number(saatcon.innerText)-1
        dakikacon.innerText = "59"
        saniyecon.innerText = "59"
    }
    if(dakikacon.innerText== -1 && kontrolSayi % 2 != 0){
        kontrolSayi+=1
        dakikacon.innerText = "25"
        saniyecon.innerText = "00"
        pomodroContainer.style.boxShadow = "0px 0px 49px 0px #030eed"
        pomodroContainer.style.border = "3px solid blue"
    }
}

baslatButon.addEventListener('click', function() {
    zamanlayici = setInterval(zamanlayiciBaslat, 1);
});
duraklatButon.addEventListener('click', function() {
    clearInterval(zamanlayici)
});
restartButon.addEventListener('click', function() {
    zamanlayici = setInterval(zamanlayiciBaslat, 1);
});
bitirButon.addEventListener('click', function() {
    clearInterval(zamanlayici)
    saatcon.innerText = "01"
    dakikacon.innerText = "00"
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