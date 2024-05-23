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
const saatInput = document.getElementById("saatInput")
const dakikaInput = document.getElementById("dakikaInput")
const saniyeInput = document.getElementById("saniyeInput")
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
// tamEkranButton.addEventListener('click', () => {
//     const body = document.body;

//     if (!document.fullscreenElement) {
//         body.requestFullscreen().then(() => {
//             tamEkranButton.style.color = "red"
//             basYazi.style.display = "none"
//             pomodroContainer.style.marginTop = "170px"
//             pomodroContainer.style.width = "90%"
//             hamburger.style.color = "white"
//             hamburger.style.display = "none"
//             side.style.display = "none"
//         });
//     } else {
//         document.exitFullscreen().then(() => {
//             tamEkranButton.style.color = "white"
//             basYazi.style.display = "block"
//             pomodroContainer.style.marginTop = "0px"
//             pomodroContainer.style.width = "58%"
//             hamburger.style.display = "block"
//         });
//     }
// });
let kontrolSayi = 2;
if(localStorage.getItem("pomodoroSayisi") == null){
    localStorage.setItem("pomodoroSayisi",0)
}
if(localStorage.getItem("dersSaniyesi") == null){
    localStorage.setItem("dersSaniyesi",0)
}
let pomodoroSayisi = Number(localStorage.getItem("pomodoroSayisi"))
let dersSaniyesi = Number(localStorage.getItem("dersSaniyesi"))

function sinavAyar(sinavIsmi){
    if(sinavIsmi == "LGS"){
        saatInput.value = 2
        dakikaInput.value = 35
        saniyeInput.value = 0
    }
    if(sinavIsmi == "YKS"){
        saatInput.value = 3
        dakikaInput.value = 0
        saniyeInput.value = 0
    }
    if(sinavIsmi == "KPSS"){
        saatInput.value = 2
        dakikaInput.value = 10
        saniyeInput.value = 0
    }
    if(sinavIsmi == "MSÜ"){
        saatInput.value = 2
        dakikaInput.value = 45
        saniyeInput.value = 0
    }
    if(sinavIsmi == "ALES"){
        saatInput.value = 2
        dakikaInput.value = 30
        saniyeInput.value = 0
    }
    document.getElementById("LGS").classList.remove("sinavSayaciSecili")
    document.getElementById("YKS").classList.remove("sinavSayaciSecili")
    document.getElementById("KPSS").classList.remove("sinavSayaciSecili")
    document.getElementById("MSÜ").classList.remove("sinavSayaciSecili")
    document.getElementById("ALES").classList.remove("sinavSayaciSecili")
    document.getElementById(sinavIsmi).classList.add("sinavSayaciSecili")
    event.preventDefault();
}

function kronometreAyar(){
    saatInputValue = saatInput.value
    dakikaInputValue = dakikaInput.value
    saniyeInputValue = saniyeInput.value

    if(Number(saatInputValue) > 24 || Number(dakikaInputValue) > 59 || Number(saniyeInputValue) > 59){
        return null;
    }

    saatcon.innerText = saatInputValue
    dakikacon.innerText = dakikaInputValue
    saniyecon.innerText = saniyeInputValue
    dersSaniyesi+=1
    localStorage.setItem("dersSaniyesi",dersSaniyesi)
    if(saniyecon.innerText.length == 1){
        saniyecon.innerText = "0" + saniyecon.innerText
    }
    if(dakikacon.innerText.length == 1){
        dakikacon.innerText = "0" + dakikacon.innerText
    }
    if(saatcon.innerText.length == 1){
        saatcon.innerText = "0" + saatcon.innerText
    }
}
function zamanlayiciBaslat(){
    if(kontrolSayi != 1){
        saniyecon.innerText - 1
    }
    if(saniyecon.innerText == "00"){
        saniyecon.innerText = -1
        let kontrolSayi = 1
    }

    if(saniyecon.innerText == -1){
        saniyecon.innerText = "60"
        dakikacon.innerText = dakikacon.innerText - 1
        if(dakikacon.innerText == "00"){
            dakikacon.innerText = -1
        }
    }
    if(dakikacon.innerText == -1){
        saniyecon.innerText == "59"
        dakikacon.innerText = "59"
        saatcon.innerText = saatcon.innerText -1
    }
    if(saatcon.innerText == -1){
        saatcon.innerText = "00"
        dakikacon.innerText = "00"
        saniyecon.innerText = "00"
        return null
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
        if(saatcon.innerText.length == 1){
            saatcon.innerText = "0" + saatcon.innerText
        }
    }
}

baslatButon.addEventListener('click', function() {
    zamanlayici = setInterval(zamanlayiciBaslat,1000);
});
duraklatButon.addEventListener('click', function() {
    clearInterval(zamanlayici)
});
restartButon.addEventListener('click', function() {
    zamanlayici = setInterval(zamanlayiciBaslat, 1000);
});
bitirButon.addEventListener('click', function() {
    clearInterval(zamanlayici)
    saatcon.innerText = "00 "
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