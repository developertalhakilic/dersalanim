const tarihYazi = document.getElementById("tarih")
const baslikYazi = document.getElementById("baslik")
const icerikYazi = document.getElementById("icerik")
const sayfalarDiv = document.getElementById("sayfalarDiv")
let gunlukHTML = localStorage.getItem("GunlukHTML")
if(gunlukHTML != null){
  sayfalarDiv.innerHTML = `${gunlukHTML}`
}

if(localStorage.getItem("yaziTarihleri") == null){
  localStorage.setItem("yaziTarihleri","")
}
localStorage.setItem("icerikYaziValueKey0",0)
localStorage.setItem("baslikYaziValueKey0",0)
localStorage.setItem("tarihYaziValueKeyKey0",0)
function yeniSayfaEkle(){
    let olusturulacakDivler = ""
    let tumLocalKeyler = Object.keys(localStorage)
    let keyNumbers = []
    tumLocalKeyler.forEach(function kontrolSayiGen(key){
    if(key.slice(0,6) == "tarihY" || "baslik" || "icerik"){
        try{
            keyNumbers.push(Number(key.match(/\d+$/)[0]))
        }
        catch{
            undefined
        }
    }
    })
    let enBuyuk = keyNumbers.reduce((acc, currentValue) => Math.max(acc, currentValue), -Infinity);
    let tarihYaziValue = tarihYazi.value
    let baslikYaziValue = baslikYazi.value
    let icerikYaziValue = icerikYazi.value
    let tarihler = localStorage.getItem("yaziTarihleri")
    if(tarihler == ""){
      tarihler += tarihYaziValue
    }
    else{
      tarihler += ","
      tarihler += tarihYaziValue
    }
    localStorage.setItem("yaziTarihleri",tarihler)
    if(tarihYaziValue != "" && baslikYaziValue != "" && icerikYaziValue != ""){
        null
    }
    else{
        return false
    }
    sayfalarDiv.innerHTML = ""
    for(let i = 1; i<=enBuyuk+1; i++){ 
        if(tumLocalKeyler.includes(`tarihYaziValueKey${i}`) == false){
            localStorage.setItem("tarihYaziValueKey" + i, tarihYaziValue)
        }
        if(tumLocalKeyler.includes(`baslikYaziValueKey${i}`) == false){
            localStorage.setItem("baslikYaziValueKey" + i, baslikYaziValue)
        }
        if(tumLocalKeyler.includes(`icerikYaziValueKey${i}`) == false){
            localStorage.setItem("icerikYaziValueKey" + i, icerikYaziValue)
        }
    olusturulacakDivler = `
    <div class="accordion accordion-flush" id="accordionFlushExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed acilanMenu" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
        <h5 class="menuBaslik">${localStorage.getItem("tarihYaziValueKey" + i) + " - " + bugununGunu(localStorage.getItem("tarihYaziValueKey" + i))}</h5>
        </button>
        <!--<button>
        <i class="bi bi-trash3"></i>
        </button>-->
      </h2>
      <div id="collapse${i}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body icerikBody">
          <h3 class="icerikBaslik">${localStorage.getItem("baslikYaziValueKey" + i)}</h3> <br> <p class="icerikP">${localStorage.getItem("icerikYaziValueKey" + i)}</p>
          <div class="buttonContainer">
          <button class="editButton">
          <i class="bi bi-trash2"></i>
          </button>
          <button class="editButton">
          <i class="bi bi-pencil-square"></i>
          </button>
          </div>
        </div>
      </div>
    </div>`
        sayfalarDiv.innerHTML += olusturulacakDivler

}
    localStorage.setItem("GunlukHTML",sayfalarDiv.innerHTML)
}
function bugununTarihi(){
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1; 
    var year = today.getFullYear();
    if (day < 10) {
      day = '0' + day; 
    }
    if (month < 10) {
      month = '0' + month; 
    }
    var bugununTarihi = year + '-' + month + '-' + day;
    document.getElementById('tarih').value = bugununTarihi;
}
function bugununGunu(tarih){
  let gun = ""
  let tarihBugun = new Date()
  tarihBugun.setDate(tarih.slice(8,10))
  tarihBugun.setFullYear(tarih.slice(0,4))
  tarihBugun.setMonth(Number(tarih.slice(5,7))-1)
  let gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
  return gunler[tarihBugun.getDay()]
}
