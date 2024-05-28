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
// if(localStorage.getItem("pomodoroDersDakikasi") != null){
//     yapilacakİsYazi.innerText = localStorage.getItem("pomodoroDersDakikasi")
// }
if(localStorage.getItem("sayfaSayisi") != null){
    sayfaSayiYazi.innerText = localStorage.getItem("sayfaSayisi")
}

const timerDiv = document.getElementById('timer');
var dataZamanTutucuUp1000 = {
    labels: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
    datasets: [{
        label: 'Dakika',
        data: [Number(localStorage.getItem("zamanTutucuPazartesiVerisi")), Number(localStorage.getItem("zamanTutucuSaliVerisi")), Number(localStorage.getItem("zamanTutucuCarsambaVerisi")), Number(localStorage.getItem("zamanTutucuPersembeVerisi")), Number(localStorage.getItem("zamanTutucuCumaVerisi")), Number(localStorage.getItem("zamanTutucuCumartesiVerisi")), Number(localStorage.getItem("zamanTutucuPazarVerisi"))],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ], 
          borderWidth: 1
    }]
};
var dataZamanTutucuDown1000 = {
    labels: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
    datasets: [{
        label: 'Dakika',
        data: [Number(localStorage.getItem("zamanTutucuPazartesiVerisi")), Number(localStorage.getItem("zamanTutucuSaliVerisi")), Number(localStorage.getItem("zamanTutucuCarsambaVerisi")), Number(localStorage.getItem("zamanTutucuPersembeVerisi")), Number(localStorage.getItem("zamanTutucuCumaVerisi")), Number(localStorage.getItem("zamanTutucuCumartesiVerisi")), Number(localStorage.getItem("zamanTutucuPazarVerisi"))],
        backgroundColor: 'rgba(54, 162, 235, 0.2)', 
        borderColor: 'rgba(54, 162, 235, 1)', 
        borderWidth: 1
    }]
};

window.addEventListener('resize', function(){
    timerChartOlustur()
});
timerChartOlustur()
function timerChartOlustur(){
    if(window.innerWidth > 1000){
        let myChartUpTimer = new Chart(timerDiv, {
            type: 'bar',
            data: dataZamanTutucuUp1000,
            options: {
                title: {
                    display: true,
                    text: 'Zaman Tutucu İstatistikleri',
                    fontColor: 'red', 
                    fontSize: 20 
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            color: '#202020' 
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            color: '#202020' 
                        }
                    }],
                    y: {
                      beginAtZero: true
                    }
                  }      
            }
        });
        
    }
    else{
        let myChartDownTimer = new Chart(timerDiv, {
            type: 'line',
            data: dataZamanTutucuDown1000,
            options: {
                title: {
                    display: true,
                    text: 'Zaman Tutucu İstatistikleri',
                    fontColor: 'red', 
                    fontSize: 20 
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            color: '#202020' 
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            color: '#202020' 
                        }
                    }],
                    y: {
                      beginAtZero: true
                    }
                  }      
            }
        });
        
    }
}



const questionSaverDiv = document.getElementById('questionSaver');
var dataQuestionSaverUp1000 = {
    labels: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
    datasets: [{
        label: 'Soru Sayısı',
        data: [Number(localStorage.getItem("soruKaydetmePazartesiVerisi")), Number(localStorage.getItem("soruKaydetmeSaliVerisi")), Number(localStorage.getItem("soruKaydetmeCarsambaVerisi")), Number(localStorage.getItem("soruKaydetmePersembeVerisi")), Number(localStorage.getItem("soruKaydetmeCumaVerisi")), Number(localStorage.getItem("soruKaydetmeCumartesiVerisi")), Number(localStorage.getItem("soruKaydetmePazarVerisi"))],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ], 
          borderWidth: 1
    }]
};
var dataQuestionSaverDown1000 = {
    labels: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
    datasets: [{
        label: 'Soru Sayısı',
        data: [Number(localStorage.getItem("soruKaydetmePazartesiVerisi")), Number(localStorage.getItem("soruKaydetmeSaliVerisi")), Number(localStorage.getItem("soruKaydetmeCarsambaVerisi")), Number(localStorage.getItem("soruKaydetmePersembeVerisi")), Number(localStorage.getItem("soruKaydetmeCumaVerisi")), Number(localStorage.getItem("soruKaydetmeCumartesiVerisi")), Number(localStorage.getItem("soruKaydetmePazarVerisi"))],
        backgroundColor: 'rgba(54, 162, 235, 0.2)', 
        borderColor: 'rgba(54, 162, 235, 1)', 
        borderWidth: 1
    }]
};

window.addEventListener('resize', function(){
    questionSaverChartOlustur()
});
questionSaverChartOlustur()
function questionSaverChartOlustur(){
    if(window.innerWidth > 1000){
        let myChartUpQuestionSaver = new Chart(questionSaverDiv, {
            type: 'bar',
            data: dataQuestionSaverUp1000,
            options: {
                title: {
                    display: true,
                    text: 'Soru Kaydetme İstatistikileri',
                    fontColor: 'red', 
                    fontSize: 20 
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            color: '#202020' 
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            color: '#202020' 
                        }
                    }],
                    y: {
                      beginAtZero: true
                    }
                  }      
            }
        });
        
    }
    else{
        let myChartDownQuestionSaver = new Chart(questionSaverDiv, {
            type: 'line',
            data: dataQuestionSaverDown1000,
            options: {
                title: {
                    display: true,
                    text: 'Soru Kaydetme İstatistikleri',
                    fontColor: 'red', 
                    fontSize: 20 
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            color: '#202020' 
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            color: '#202020' 
                        }
                    }],
                    y: {
                      beginAtZero: true
                    }
                  }      
            }
        });
        
    }
}

const pomodoroDiv = document.getElementById('pomodoro');
var dataPomodoroUp1000 = {
    labels: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
    datasets: [{
        label: 'Dakika',
        data: [Number(localStorage.getItem("pomodoroPazartesiVerisi")), Number(localStorage.getItem("pomodoroSaliVerisi")), Number(localStorage.getItem("pomodoroCarsambaVerisi")), Number(localStorage.getItem("pomodoroPersembeVerisi")), Number(localStorage.getItem("pomodoroCumaVerisi")), Number(localStorage.getItem("pomodoroCumartesiVerisi")), Number(localStorage.getItem("pomodoroPazarVerisi"))],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ], 
          borderWidth: 1
    }]
};
var dataPomodoroDown1000 = {
    labels: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
    datasets: [{
        label: 'Dakika',
        data: [Number(localStorage.getItem("pomodoroPazartesiVerisi")), Number(localStorage.getItem("pomodoroSaliVerisi")), Number(localStorage.getItem("pomodoroCarsambaVerisi")), Number(localStorage.getItem("pomodoroPersembeVerisi")), Number(localStorage.getItem("pomodoroCumaVerisi")), Number(localStorage.getItem("pomodoroCumartesiVerisi")), Number(localStorage.getItem("pomodoroPazarVerisi"))],
        backgroundColor: 'rgba(54, 162, 235, 0.2)', 
        borderColor: 'rgba(54, 162, 235, 1)', 
        borderWidth: 1
    }]
};

window.addEventListener('resize', function(){
    pomodoroChartOlustur()
});
pomodoroChartOlustur()
function pomodoroChartOlustur(){
    if(window.innerWidth > 1000){
        let myChartUpPomodoro = new Chart(pomodoroDiv, {
            type: 'bar',
            data: dataPomodoroUp1000,
            options: {
                title: {
                    display: true,
                    text: 'Pomodoro İstatistikileri',
                    fontColor: 'red', 
                    fontSize: 20 
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            color: '#202020' 
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            color: '#202020' 
                        }
                    }],
                    y: {
                      beginAtZero: true
                    }
                  }      
            }
        });
        
    }
    else{
        let myChartDownPomodoro = new Chart(pomodoroDiv, {
            type: 'line',
            data: dataPomodoroDown1000,
            options: {
                title: {
                    display: true,
                    text: 'Pomodoro İstatistikleri',
                    fontColor: 'red', 
                    fontSize: 20 
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            color: '#202020' 
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            color: '#202020' 
                        }
                    }],
                    y: {
                      beginAtZero: true
                    }
                  }      
            }
        });
        
    }
}

const diaryDiv = document.getElementById('diary');
var dataDiaryUp1000 = {
    labels: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
    datasets: [{
        label: 'Sayfa',
        data: [Number(localStorage.getItem("gunlukPazartesiVerisi")), Number(localStorage.getItem("gunlukSaliVerisi")), Number(localStorage.getItem("gunlukCarsambaVerisi")), Number(localStorage.getItem("gunlukPersembeVerisi")), Number(localStorage.getItem("gunlukCumaVerisi")), Number(localStorage.getItem("gunlukCumartesiVerisi")), Number(localStorage.getItem("gunlukPazarVerisi"))],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ], 
          borderWidth: 1
    }]
};
var dataDiaryDown1000 = {
    labels: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
    datasets: [{
        label: 'Sayfa',
        data: [Number(localStorage.getItem("gunlukPazartesiVerisi")), Number(localStorage.getItem("gunlukSaliVerisi")), Number(localStorage.getItem("gunlukCarsambaVerisi")), Number(localStorage.getItem("gunlukPersembeVerisi")), Number(localStorage.getItem("gunlukCumaVerisi")), Number(localStorage.getItem("gunlukCumartesiVerisi")), Number(localStorage.getItem("gunlukPazarVerisi"))],
        backgroundColor: 'rgba(54, 162, 235, 0.2)', 
        borderColor: 'rgba(54, 162, 235, 1)', 
        borderWidth: 1
    }]
};

window.addEventListener('resize', function(){
    diaryChartOlustur()
});
diaryChartOlustur()
function diaryChartOlustur(){
    if(window.innerWidth > 1000){
        let myChartUpDiary = new Chart(diaryDiv, {
            type: 'bar',
            data: dataDiaryUp1000,
            options: {
                title: {
                    display: true,
                    text: 'Günlük İstatistikileri',
                    fontColor: 'red', 
                    fontSize: 20 
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            color: '#202020' 
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            color: '#202020' 
                        }
                    }],
                    y: {
                      beginAtZero: true
                    }
                  }      
            }
        });
        
    }
    else{
        let myChartDownDiary = new Chart(diaryDiv, {
            type: 'line',
            data: dataDiaryDown1000,
            options: {
                title: {
                    display: true,
                    text: 'Günlük İstatistikleri',
                    fontColor: 'red', 
                    fontSize: 20 
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            color: '#202020' 
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            color: '#202020' 
                        },
                        
                    }],
                    y: {
                      beginAtZero: true,
                    }
                  }      
            }
        });
        
    }
}

