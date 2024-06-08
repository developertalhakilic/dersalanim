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
function beforeUnloadListener(event) {
    const message = 'Çıkmak istediğinize emin misiniz?';
    event.preventDefault();
    event.returnValue = message;
    return message;
}
let tarih = new Date()
let noSleep = new NoSleep();
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
if(localStorage.getItem("zamanlayiciDersDakikasi") == null){
    localStorage.setItem("zamanlayiciDersDakikasi",0)
}
if(localStorage.getItem("sonSaat") != null){
    saatcon.innerText = localStorage.getItem("sonSaat")
}
if(localStorage.getItem("sonDakika") != null){
    dakikacon.innerText = localStorage.getItem("sonDakika")
}
if(localStorage.getItem("sonSaniye") != null){
    saniyecon.innerText = localStorage.getItem("sonSaniye")
}



if(localStorage.getItem("zamanTutucuPazartesiVerisi") == null){
    localStorage.setItem("zamanTutucuPazartesiVerisi",0)
}
if(localStorage.getItem("zamanTutucuSaliVerisi") == null){
    localStorage.setItem("zamanTutucuSaliVerisi",0)
}
if(localStorage.getItem("zamanTutucuCarsambaVerisi") == null){
    localStorage.setItem("zamanTutucuCarsambaVerisi",0)
}
if(localStorage.getItem("zamanTutucuPersembeVerisi") == null){
    localStorage.setItem("zamanTutucuPersembeVerisi",0)
}
if(localStorage.getItem("zamanTutucuCumaVerisi") == null){
    localStorage.setItem("zamanTutucuCumaVerisi",0)
}
if(localStorage.getItem("zamanTutucuCumartesiVerisi") == null){
    localStorage.setItem("zamanTutucuCumartesiVerisi",0)
}
if(localStorage.getItem("zamanTutucuPazarVerisi") == null){
    localStorage.setItem("zamanTutucuPazarVerisi",0)
}


let zamanlayiciDersDakikasi = Number(localStorage.getItem("zamanlayiciDersDakikasi"))

window.addEventListener('beforeunload', function() {
    localStorage.setItem("sonSaat",saatcon.innerText)
    localStorage.setItem("sonDakika",dakikacon.innerText)
    localStorage.setItem("sonSaniye",saniyecon.innerText)
});

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
function inputTemizleme(){
    saatInput.value = ""
    dakikaInput.value = ""
    saniyeInput.value = ""
}
function kronometreAyar(){
    saatInputValue = saatInput.value
    dakikaInputValue = dakikaInput.value
    saniyeInputValue = saniyeInput.value
    inputTemizleme()
    document.getElementById("LGS").classList.remove("sinavSayaciSecili")
    document.getElementById("YKS").classList.remove("sinavSayaciSecili")
    document.getElementById("KPSS").classList.remove("sinavSayaciSecili")
    document.getElementById("MSÜ").classList.remove("sinavSayaciSecili")
    document.getElementById("ALES").classList.remove("sinavSayaciSecili")
    if(Number(saatInputValue) > 24 || Number(dakikaInputValue) > 59 || Number(saniyeInputValue) > 59 || Number(saatInputValue) < 0 || Number(dakikaInputValue) < 0 || Number(saniyeInputValue) < 0){
        alert("Lütfen geçerli bir zaman giriniz.")
        return null;
    }
    if(saatInputValue == ""){
        saatInputValue = 0
    }
    if(dakikaInputValue == ""){
        dakikaInputValue = 0
    }
    if(saniyeInputValue == ""){
        saniyeInputValue = 0
    }

    saatcon.innerText = saatInputValue
    dakikacon.innerText = dakikaInputValue
    saniyecon.innerText = saniyeInputValue
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
    if(saniyecon.innerText == "00" && dakikacon.innerText == "00" && saatcon.innerText == "00"){
        bitirButon.click()
        return null;
    }
    if(kontrolSayi != 1){
        saniyecon.innerText - 1
    }
    if(saniyecon.innerText == "00"){
        zamanlayiciDersDakikasi += 1
        localStorage.setItem("zamanlayiciDersDakikasi",zamanlayiciDersDakikasi)

        let gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
        let gun = gunler[tarih.getDay()]
        if(gun == "Pazartesi"){
            localStorage.setItem("zamanTutucuPazartesiVerisi",Number(localStorage.getItem("zamanTutucuPazartesiVerisi")) + 1)
        }
        if(gun == "Salı"){
            localStorage.setItem("zamanTutucuSaliVerisi",Number(localStorage.getItem("zamanTutucuSaliVerisi")) + 1)
        }
        if(gun == "Çarşamba"){
            localStorage.setItem("zamanTutucuCarsambaVerisi",Number(localStorage.getItem("zamanTutucuCarsambaVerisi")) + 1)
        }
        if(gun == "Perşembe"){
            localStorage.setItem("zamanTutucuPersembeVerisi",Number(localStorage.getItem("zamanTutucuPersembeVerisi")) + 1)
        }
        if(gun == "Cuma"){
            localStorage.setItem("zamanTutucuCumaVerisi",Number(localStorage.getItem("zamanTutucuCumaVerisi")) + 1)
        }
        if(gun == "Cumartesi"){
            localStorage.setItem("zamanTutucuCumartesiVerisi",Number(localStorage.getItem("zamanTutucuCumartesiVerisi")) + 1)
        }
        if(gun == "Pazar"){
            localStorage.setItem("zamanTutucuPazarVerisi",Number(localStorage.getItem("zamanTutucuPazarVerisi")) + 1)
        }
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
    if(saniyecon.innerText>0){
        let yeniVar2 = Number(saniyecon.innerText)
        saniyecon.innerText = yeniVar2-=1
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
    if(saatcon == -1){
        saatcon.innerText = "00"
        dakikacon.innerText = "00"
        saniyecon.innerText == "00"
    }
}

baslatButon.addEventListener('click', function() {
    if(saniyecon.innerText == "00" && dakikacon.innerText == "00" && saatcon.innerText == "00"){
        return null;
    }
    zamanlayici = setInterval(zamanlayiciBaslat,1000);
    noSleep.enable()
    window.addEventListener('beforeunload', beforeUnloadListener);
    
});
duraklatButon.addEventListener('click', function() {
    clearInterval(zamanlayici)
    noSleep.disable()
    window.removeEventListener('beforeunload', beforeUnloadListener);
});
restartButon.addEventListener('click', function() {
    zamanlayici = setInterval(zamanlayiciBaslat, 1000);
    noSleep.enable()
    window.addEventListener('beforeunload', beforeUnloadListener);
});
bitirButon.addEventListener('click', function() {
    clearInterval(zamanlayici)
    saatcon.innerText = "00 "
    dakikacon.innerText = "00"
    saniyecon.innerText = "00"
    noSleep.disable()
    window.removeEventListener('beforeunload', beforeUnloadListener);
});
function hideStartButton(){
    if(saniyecon.innerText == "00" && dakikacon.innerText == "00" && saatcon.innerText == "00"){
        alert("Lütfen düzenleme bölümünden geçerli bir zaman giriniz.")
        return null;
    }
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