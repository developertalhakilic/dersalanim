const pomodoroDakikaYazi = document.getElementById("pomodoroDakikaYazi")
const zamanlayiciDakikaYazi = document.getElementById("zamanlayiciDakikaYazi")
const soruSayiYazi = document.getElementById("soruSayiYazi")
const yapilacakİsYazi = document.getElementById("yapilacakİsYazi")
const sayfaSayiYazi = document.getElementById("sayfaSayiYazi")
if(localStorage.getItem("pomodoroDersDakikasi") != null){
    pomodoroDakikaYazi.innerText = localStorage.getItem("pomodoroDersDakikasi")
}
if(localStorage.getItem("zamanlayiciDersDakikasi") != null){
    zamanlayiciDakikaYazi.innerText = localStorage.getItem("zamanlayiciDersDakikasi")
}
if(localStorage.getItem("kaydedilenSoru") != null){
    soruSayiYazi.innerText = localStorage.getItem("kaydedilenSoru")
}
// if(localStorage.getItem("pomodoroDakikaYazi") != null){
//     pomodoroDakikaYazi.innerText = localStorage.getItem("pomodoroDakikaYazi")
// }
if(localStorage.getItem("sayfaSayisi") != null){
    sayfaSayiYazi.innerText = localStorage.getItem("sayfaSayisi")
}