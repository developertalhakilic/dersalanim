const input = document.querySelector(".aktivasyonInput")
const kontrolLabel = document.getElementById("kontrolLabel")
const zaman = document.getElementById("zaman")
const bilgiYazi = document.getElementById("bilgiYazi")
const aktivasyonKodlari = localStorage.getItem("aktivasyonKodlari") 


if(localStorage.getItem("active") == null){
    localStorage.setItem("active","false")
    window.location.reload()
}
function sayfaYonlendirme(){
    window.location.href = "home.html"
}
function zamanAzaltma(){
    zaman.innerText = Number(zaman.innerText) -1
}
function aktivasyonKontrol(){
    const aktiveKodu = input.value

    if(String(aktivasyonKodlari).includes(aktiveKodu)){
        bilgiYazi.style.display = "block"
        zaman.innerText = "3"
        kontrolLabel.style.color = "#16EA0E"
        kontrolLabel.innerText = "Site başarıyla aktif edilmiştir"
        localStorage.setItem("active","true")
        setTimeout(sayfaYonlendirme,3000)
        setTimeout(zamanAzaltma,1000)
        setTimeout(zamanAzaltma,2000)
        setTimeout(zamanAzaltma,3000)
    }
    else{
        kontrolLabel.style.color = "red"
        kontrolLabel.innerHTML = `
        Lütfen geçerli bir kod giriniz.
        `
    }
}