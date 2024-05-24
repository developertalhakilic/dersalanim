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
