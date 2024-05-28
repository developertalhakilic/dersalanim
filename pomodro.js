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
const tamEkranButton = document.getElementById('tamEkranButton');
const hamburger = document.getElementById("hamburgerButton")
const side = document.getElementById("sideBar")
const bilgiButton = document.getElementById("bilgiButton")
let tarih = new Date()
let noSleep = new NoSleep();
if(localStorage.getItem("sonDakikaPomodoro") != null){
    dakikacon.innerText = localStorage.getItem("sonDakikaPomodoro")
}
if(localStorage.getItem("sonSaniyePomodoro") != null){
    saniyecon.innerText = localStorage.getItem("sonSaniyePomodoro")
}

window.addEventListener('beforeunload', function() {
    localStorage.setItem("sonDakikaPomodoro",dakikacon.innerText)
    localStorage.setItem("sonSaniyePomodoro",saniyecon.innerText)
});

if(localStorage.getItem("pomodoroPazartesiVerisi") == null){
    localStorage.setItem("pomodoroPazartesiVerisi",0)
}
if(localStorage.getItem("pomodoroSaliVerisi") == null){
    localStorage.setItem("pomodoroSaliVerisi",0)
}
if(localStorage.getItem("pomodoroCarsambaVerisi") == null){
    localStorage.setItem("pomodoroCarsambaVerisi",0)
}
if(localStorage.getItem("pomodoroPersembeVerisi") == null){
    localStorage.setItem("pomodoroPersembeVerisi",0)
}
if(localStorage.getItem("pomodoroCumaVerisi") == null){
    localStorage.setItem("pomodoroCumaVerisi",0)
}
if(localStorage.getItem("pomodoroCumartesiVerisi") == null){
    localStorage.setItem("pomodoroCumartesiVerisi",0)
}
if(localStorage.getItem("pomodoroPazarVerisi") == null){
    localStorage.setItem("pomodoroPazarVerisi",0)
}

let kontrolSayi = 2;
if(localStorage.getItem("pomodoroDersDakikasi") == null){
    localStorage.setItem("pomodoroDersDakikasi",0)
}
let pomodoroDersDakikasi = Number(localStorage.getItem("pomodoroDersDakikasi"))
function zamanlayiciBaslat(){
    if(saniyecon.innerText==0 && dakikacon.innerText != -1){
        let yeniVar = Number(dakikacon.innerText)
        dakikacon.innerText = yeniVar-1
        pomodoroDersDakikasi += 1
        localStorage.setItem("pomodoroDersDakikasi",pomodoroDersDakikasi)
        let gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
        let gun = gunler[tarih.getDay()]
        if(gun == "Pazartesi"){
            localStorage.setItem("pomodoroPazartesiVerisi",Number(localStorage.getItem("pomodoroPazartesiVerisi")) + 1)
        }
        if(gun == "Salı"){
            localStorage.setItem("pomodoroSaliVerisi",Number(localStorage.getItem("pomodoroSaliVerisi")) + 1)
        }
        if(gun == "Çarşamba"){
            localStorage.setItem("pomodoroCarsambaVerisi",Number(localStorage.getItem("pomodoroCarsambaVerisi")) + 1)
        }
        if(gun == "Perşembe"){
            localStorage.setItem("pomodoroPersembeVerisi",Number(localStorage.getItem("pomodoroPersembeVerisi")) + 1)
        }
        if(gun == "Cuma"){
            localStorage.setItem("pomodoroCumaVerisi",Number(localStorage.getItem("pomodoroCumaVerisi")) + 1)
        }
        if(gun == "Cumartesi"){
            localStorage.setItem("pomodoroCumartesiVerisi",Number(localStorage.getItem("pomodoroCumartesiVerisi")) + 1)
        }
        if(gun == "Pazar"){
            localStorage.setItem("pomodoroPazarVerisi",Number(localStorage.getItem("pomodoroPazarVerisi")) + 1)
        }
        saniyecon.innerText = "60"
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
    }
    if(dakikacon.innerText == -1 && kontrolSayi % 2 == 0){
        kontrolSayi+=1
        pomodoroSayisi+=1
        dakikacon.innerText = "4"
        saniyecon.innerText = "59"
        pomodroContainer.style.boxShadow = "0px 0px 49px 0px #ed0303"
        pomodroContainer.style.border = "3px solid red"
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
    zamanlayici = setInterval(zamanlayiciBaslat, 1000);
    noSleep.enable()
});
duraklatButon.addEventListener('click', function() {
    clearInterval(zamanlayici)
    noSleep.disable()
});
restartButon.addEventListener('click', function() {
    zamanlayici = setInterval(zamanlayiciBaslat, 1000);
    noSleep.enable()
});
bitirButon.addEventListener('click', function() {
    clearInterval(zamanlayici)
    dakikacon.innerText = "25"
    saniyecon.innerText = "00"
    noSleep.disable()
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