const ctx = document.getElementById('pomodoro');
var data = {
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
          ], // Çizgi rengi
          borderWidth: 1
    }]
};

// Grafik oluşturma
var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        title: {
            display: true,
            text: 'Zaman Tutucu İstatistikleri',
            fontColor: 'red', // Başlık rengi
            fontSize: 20 // Başlık font boyutu
        },
        scales: {
            xAxes: [{
                gridLines: {
                    color: '#202020' // Sütun çizgilerinin rengi (kırmızı renk örneği)
                }
            }],
            yAxes: [{
                gridLines: {
                    color: '#202020' // Sütun çizgilerinin rengi (yeşil renk örneği)
                }
            }],
            y: {
              beginAtZero: true
            }
          }      
    }
});
