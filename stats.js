const statsInfoButton = document.getElementById("statsInfoButton")
const pomodoroStatsButton = document.getElementById("pomodoroStatsButton")
const zamanTutucuButton = document.getElementById("zamanTutucuButton")
const soruKaydetmeStatsButton = document.getElementById("soruKaydetmeStatsButton")
const todoListStatsButton = document.getElementById("todoListStatsButton")

// TODO ---- BUTONLAR ---

const statsInfo = document.getElementById("statsInfo")
const pomodoroStats = document.getElementById("pomodoroStats")
const zamanTutucu = document.getElementById("zamanTutucu")
const soruKaydetmeStats = document.getElementById("soruKaydetmeStats")
const todoListStats = document.getElementById("todoListStats")

// TODO ---- DİVLER ---

// TODO ---- POMODORO STATS ---
const pomodoroSaat = document.getElementById("pomodoroSaat")
const pomodoroDakika = document.getElementById("pomodoroDakika")
const pomodoroSaniye = document.getElementById("pomodoroSaniye")
const kacPomodoro = document.getElementById("kacPomodoro")

// TODO ---- SORU SAVE STATS ---
const kacSoru = document.getElementById("kacSoru")
const soruCikarma = document.getElementById("soruCikarma")
const soruPDFSayi = document.getElementById("soruPDFSayi")

function showStatsInfo(){
    statsInfo.style.display = "block"
    pomodoroStats.style.display = "none"
    zamanTutucu.style.display = "none"
    soruKaydetmeStats.style.display = "none"
    todoListStats.style.display = "none"

    statsInfoButton.style.color = "#0baee4"
    pomodoroStatsButton.style.color = "#fff"
    zamanTutucuButton.style.color = "#fff"
    soruKaydetmeStatsButton.style.color = "#fff"
    todoListStatsButton.style.color = "#fff"
}

function showPomodoroStats(){
    statsInfo.style.display = "none"
    pomodoroStats.style.display = "block"
    zamanTutucu.style.display = "none"
    soruKaydetmeStats.style.display = "none"
    todoListStats.style.display = "none"

    statsInfoButton.style.color = "#fff"
    pomodoroStatsButton.style.color = "#0baee4"
    zamanTutucuButton.style.color = "#fff"
    soruKaydetmeStatsButton.style.color = "#fff"
    todoListStatsButton.style.color = "#fff"

    dersSaniye = localStorage.getItem("dersSaniyesi")
    dersDakika = dersSaniye/60
    dersSaat = dersDakika/60

    pomodoroSaniye.innerText = dersSaniye
    pomodoroDakika.innerText = parseInt(dersDakika)
    pomodoroSaat.innerText = parseInt(dersSaat)
    kacPomodoro.innerText = localStorage.getItem("pomodoroSayisi")
}

function showZamanTutucu(){
    statsInfo.style.display = "none"
    pomodoroStats.style.display = "none"
    zamanTutucu.style.display = "block"
    soruKaydetmeStats.style.display = "none"
    todoListStats.style.display = "none"

    statsInfoButton.style.color = "#fff"
    pomodoroStatsButton.style.color = "#fff"
    zamanTutucuButton.style.color = "#0baee4"
    soruKaydetmeStatsButton.style.color = "#fff"
    todoListStatsButton.style.color = "#fff"
}

function showSoruKaydetmeStats(){
    statsInfo.style.display = "none"
    pomodoroStats.style.display = "none"
    zamanTutucu.style.display = "none"
    soruKaydetmeStats.style.display = "block"
    todoListStats.style.display = "none"

    statsInfoButton.style.color = "#fff"
    pomodoroStatsButton.style.color = "#fff"
    zamanTutucuButton.style.color = "#fff"
    soruKaydetmeStatsButton.style.color = "#0baee4"
    todoListStatsButton.style.color = "#fff"
    kacSoru.innerText = localStorage.getItem("kaydedilenSoru")
    soruCikarma.innerText = localStorage.getItem("cikarilanSoru")
    soruPDFSayi.innerText = localStorage.getItem("pdfAlmaSayisi")
}

function showTodoListStats(){
    statsInfo.style.display = "none"
    pomodoroStats.style.display = "none"
    zamanTutucu.style.display = "none"
    soruKaydetmeStats.style.display = "none"
    todoListStats.style.display = "block"

    statsInfoButton.style.color = "#fff"
    pomodoroStatsButton.style.color = "#fff"
    zamanTutucuButton.style.color = "#fff"
    soruKaydetmeStatsButton.style.color = "#fff"
    todoListStatsButton.style.color = "#0baee4"
}
