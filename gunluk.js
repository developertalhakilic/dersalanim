const tarihYazi = document.getElementById("tarih")
const baslikYazi = document.getElementById("baslik")
const icerikYazi = document.getElementById("icerik")
const sayfalarDiv = document.getElementById("sayfalarDiv")
const iptalButton = document.getElementById("iptalButton")
const silmeButton = document.getElementById("silmeButton")
const silmeIcerikOnayYazi = document.getElementById("icerikOnay")
const silmeOnayButton = document.getElementById("silmeOnayButton")
const sayfaDuzenleButton = document.getElementById("sayfaDuzenleButton")
const duzenlemeBaslik = document.getElementById("duzenlemeBaslik")
const duzenlemeBaslikInput = document.getElementById("duzenlemeBaslikInput")
const duzenlemeTarihInput = document.getElementById("duzenlemeTarihInput")
const duzenlemeIcerikInput = document.getElementById("duzenlemeIcerikInput")
const sayfayiDuzenleButton = document.getElementById("sayfayiDuzenleButton")
let tarih = new Date()
if(localStorage.getItem("gunlukPazartesiVerisi") == null){
  localStorage.setItem("gunlukPazartesiVerisi",0)
}
if(localStorage.getItem("gunlukSaliVerisi") == null){
  localStorage.setItem("gunlukSaliVerisi",0)
}
if(localStorage.getItem("gunlukCarsambaVerisi") == null){
  localStorage.setItem("gunlukCarsambaVerisi",0)
}
if(localStorage.getItem("gunlukPersembeVerisi") == null){
  localStorage.setItem("gunlukPersembeVerisi",0)
}
if(localStorage.getItem("gunlukCumaVerisi") == null){
  localStorage.setItem("gunlukCumaVerisi",0)
}
if(localStorage.getItem("gunlukCumartesiVerisi") == null){
  localStorage.setItem("gunlukCumartesiVerisi",0)
}
if(localStorage.getItem("gunlukPazarVerisi") == null){
  localStorage.setItem("gunlukPazarVerisi",0)
}

let gunlukHTML = localStorage.getItem("GunlukHTML")
if(gunlukHTML != null){
  sayfalarDiv.innerHTML = `${gunlukHTML}`
}

if(localStorage.getItem("yaziTarihleri") == null){
  localStorage.setItem("yaziTarihleri","")
}
if(localStorage.getItem("silinenIdlerGunluk") == null){
  localStorage.setItem("silinenIdlerGunluk","")
}
if(localStorage.getItem("sayfaSayisi") == null){
  localStorage.setItem("sayfaSayisi",0)
}

let sayfaSayisi = Number(localStorage.getItem("sayfaSayisi"))
localStorage.setItem("icerikYaziValueKey0",0)
localStorage.setItem("baslikYaziValueKey0",0)
localStorage.setItem("tarihYaziValueKey0",0)
function yeniSayfaEkle(){
    let olusturulacakDivler = ""
    let tumLocalKeyler = Object.keys(localStorage)
    let keyNumbers = []
    tumLocalKeyler.forEach(function kontrolSayiGen(key){
    if(key.slice(0,6) == "tarihY" || key.slice(0,6) == "baslik" || key.slice(0,6) == "icerik"){
        console.log(key)
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
    sayfaSayisi += 1
    localStorage.setItem("sayfaSayisi",sayfaSayisi)
    let gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    let gun = gunler[tarih.getDay()]
    if(gun == "Pazartesi"){
        localStorage.setItem("gunlukPazartesiVerisi",Number(localStorage.getItem("gunlukPazartesiVerisi")) + 1)
    }
    if(gun == "Salı"){
        localStorage.setItem("gunlukSaliVerisi",Number(localStorage.getItem("gunlukSaliVerisi")) + 1)
    }
    if(gun == "Çarşamba"){
        localStorage.setItem("gunlukCarsambaVerisi",Number(localStorage.getItem("gunlukCarsambaVerisi")) + 1)
    }
    if(gun == "Perşembe"){
        localStorage.setItem("gunlukPersembeVerisi",Number(localStorage.getItem("gunlukPersembeVerisi")) + 1)
    }
    if(gun == "Cuma"){
        localStorage.setItem("gunlukCumaVerisi",Number(localStorage.getItem("gunlukCumaVerisi")) + 1)
    }
    if(gun == "Cumartesi"){
        localStorage.setItem("gunlukCumartesiVerisi",Number(localStorage.getItem("gunlukCumartesiVerisi")) + 1)
    }
    if(gun == "Pazar"){
        localStorage.setItem("gunlukPazarVerisi",Number(localStorage.getItem("gunlukPazarVerisi")) + 1)
    }
    for(let i = 1; i<=enBuyuk+1; i++){ 
        if(localStorage.getItem("silinenIdlerGunluk").includes(i)){
          continue
        }
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
    <div class="accordion accordion-flush" id="gunlukElement${i}">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed acilanMenu" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
        <h5 class="menuBaslik"> <span id="menuTarih${i}">${localStorage.getItem("tarihYaziValueKey" + i)} </span> - <span id="menuTarihGun${i}">${bugununGunu(localStorage.getItem("tarihYaziValueKey" + i))}</span></h5>
        </button>
        <!--<button>
        <i class="bi bi-trash3"></i>
        </button>-->
      </h2>
      <div id="collapse${i}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body icerikBody">
          <h3 class="icerikBaslik"  id="menuBaslik${i}">${localStorage.getItem("baslikYaziValueKey" + i)}</h3> <br> <p class="icerikP" id="menuIcerik${i}">${localStorage.getItem("icerikYaziValueKey" + i)}</p>
          <div class="buttonContainer">
          <button class="deleteButton button" onclick="elementSil(${i})">
          <i class="bi bi-trash2 icon"></i>
          </button>
            <button class="editButton button" onclick="elementDuzenle(${i},${localStorage.getItem("tarihYaziValueKey" + i)})">
            <i class="bi bi-pencil-square icon"></i>
          </button>
      </div>
        </div>
      </div>
    </div>`
        sayfalarDiv.innerHTML += olusturulacakDivler

}
    localStorage.setItem("GunlukHTML",sayfalarDiv.innerHTML)
    inputTemizleme()
}


function elementDuzenle(elementId){
  sayfaDuzenleButton.click()
  let gun = bugununGunu(localStorage.getItem("tarihYaziValueKey" + elementId))
  duzenlemeBaslik.innerText = '"' + gun + " - " + localStorage.getItem("tarihYaziValueKey" + elementId) + '"' + " Gününü Düzenle"
  duzenlemeBaslikInput.value = localStorage.getItem("baslikYaziValueKey" + elementId)
  duzenlemeTarihInput.value = localStorage.getItem("tarihYaziValueKey" + elementId)
  duzenlemeIcerikInput.value = localStorage.getItem("icerikYaziValueKey" + elementId)
  sayfayiDuzenleButton.addEventListener("click",function(){
  localStorage.setItem(`tarihYaziValueKey${elementId}`,duzenlemeTarihInput.value)
  localStorage.setItem(`baslikYaziValueKey${elementId}`,duzenlemeBaslikInput.value)
  localStorage.setItem(`icerikYaziValueKey${elementId}`,duzenlemeIcerikInput.value)
  document.getElementById(`menuBaslik${elementId}`).innerText = localStorage.getItem(`baslikYaziValueKey${elementId}`)
  document.getElementById(`menuIcerik${elementId}`).innerText = localStorage.getItem(`icerikYaziValueKey${elementId}`)
  document.getElementById(`menuTarih${elementId}`).innerText = localStorage.getItem(`tarihYaziValueKey${elementId}`)
  document.getElementById(`menuTarihGun${elementId}`).innerText = bugununGunu(localStorage.getItem(`tarihYaziValueKey${elementId}`,duzenlemeTarihInput.value))
  localStorage.setItem("GunlukHTML",sayfalarDiv.innerHTML)
  })
}
function elementSil(elementId){
  let gun = bugununGunu(localStorage.getItem("tarihYaziValueKey" + elementId))
  silmeOnayButton.click()
  silmeIcerikOnayYazi.innerHTML =  `
  <label for="message-text" class="col-form-label text-white">
  <b>${'"' + gun + " - " + localStorage.getItem("tarihYaziValueKey" + elementId) + '"'}</b> Günü silinecek emin misiniz?
  </label>
  `
  silmeButton.addEventListener("click",function(){
    document.getElementById(`gunlukElement${elementId}`).remove()
    localStorage.setItem("GunlukHTML",sayfalarDiv.innerHTML)
    let silinenIdListe = localStorage.getItem("silinenIdlerGunluk")
    silinenIdListe += elementId
    localStorage.setItem("silinenIdlerGunluk", silinenIdListe)
    iptalButton.click()
  })

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
    duzenlemeTarihInput.value = bugununTarihi
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

function duzenlemeInputlariTemizle(){
  duzenlemeBaslikInput.value = ""
  duzenlemeTarihInput.value = ""
  duzenlemeIcerikInput.value = ""
}
function inputTemizleme(){
  baslikYazi.value = ""
  tarihYazi.value = ""
  icerikYazi.value = ""
}