const dersIsmi = document.getElementById("dersIsmi")
const kitapIsmi = document.getElementById("kitapIsmi")
const soruIsmi = document.getElementById("soruIsmi")
const sayfaTestNo = document.getElementById("sayfa/testNo")
const soruNo = document.getElementById("soruNo")
const cozmeTarihi = document.getElementById("cozmeTarihi")
const aciklamaText = document.getElementById("aciklama")
const sorularDiv = document.getElementById("sorularDiv")
const iptalButton = document.getElementById("iptalButton")
const silmeButton = document.getElementById("silmeButton")
const silmeIcerikOnayYazi = document.getElementById("icerikOnay")
const silmeOnayButton = document.getElementById("silmeOnayButton")
const sayfaDuzenleButton = document.getElementById("sayfaDuzenleButton")
const duzenlemeBaslik = document.getElementById("duzenlemeBaslik")
// const duzenlemeBaslikInput = document.getElementById("duzenlemeBaslikInput")
const duzenlemeDersIsmiInput = document.getElementById("duzenlemeDersIsmiInput")
const duzenlemeKitapIsmiInput = document.getElementById("duzenlemeKitapIsmiInput")
const duzenlemeSayfaNoInput = document.getElementById("duzenlemeSayfaNoInput")
const duzenlemeSoruNoInput = document.getElementById("duzenlemeSoruNoInput")
const duzenlemeCozmeTarihiInput = document.getElementById("duzenlemeCozmeTarihiInput")
const duzenlemeAciklamaInput = document.getElementById("duzenlemeAciklamaInput")
const duzenlemeSoruIsmiInput = document.getElementById("duzenlemesoruIsmiInput")
const sayfayiDuzenleButton = document.getElementById("sayfayiDuzenleButton")
let tarih = new Date()

if(localStorage.getItem("soruKaydetmePazartesiVerisi") == null){
  localStorage.setItem("soruKaydetmePazartesiVerisi",0)
}
if(localStorage.getItem("soruKaydetmeSaliVerisi") == null){
  localStorage.setItem("soruKaydetmeSaliVerisi",0)
}
if(localStorage.getItem("soruKaydetmeCarsambaVerisi") == null){
  localStorage.setItem("soruKaydetmeCarsambaVerisi",0)
}
if(localStorage.getItem("soruKaydetmePersembeVerisi") == null){
  localStorage.setItem("soruKaydetmePersembeVerisi",0)
}
if(localStorage.getItem("soruKaydetmeCumaVerisi") == null){
  localStorage.setItem("soruKaydetmeCumaVerisi",0)
}
if(localStorage.getItem("soruKaydetmeCumartesiVerisi") == null){
  localStorage.setItem("soruKaydetmeCumartesiVerisi",0)
}
if(localStorage.getItem("soruKaydetmePazarVerisi") == null){
  localStorage.setItem("soruKaydetmePazarVerisi",0)
}

let sorularHTML = localStorage.getItem("SorularHTML")
if(sorularHTML != null){
  sorularDiv.innerHTML = `${sorularHTML}`
}
if(localStorage.getItem("silinenIdlerGunluk") == null){
  localStorage.setItem("silinenIdlerGunluk","")
}

if(localStorage.getItem("kaydedilenSoru") == null){
  localStorage.setItem("kaydedilenSoru",0)
}

let kaydedilenSoru = Number(localStorage.getItem("kaydedilenSoru"))

// ? Todolar :

localStorage.setItem("soruIsmiValueKey0",0)
localStorage.setItem("dersIsmiValueKey0",0)
localStorage.setItem("kitapIsmiValueKey0",0)
localStorage.setItem("sayfaTestNoValueKey0",0)
localStorage.setItem("soruNoValueKey0",0)
localStorage.setItem("cozmeTarihiValueKey0",0)
localStorage.setItem("aciklamaTextValueKey0",0)

if(localStorage.getItem("kaydedilenSoru") == null){
    localStorage.setItem("kaydedilenSoru",0)
}
if(localStorage.getItem("cikarilanSoru") == null){
    localStorage.setItem("cikarilanSoru",0)
}
if(localStorage.getItem("pdfAlmaSayisi") == null){
    localStorage.setItem("pdfAlmaSayisi",0)
}

function bugununTarihi(kontrolSayi){
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
    if(kontrolSayi == 0){
        document.getElementById('cozmeTarihi').value = bugununTarihi;
    }
    else{
        document.getElementById("duzenlemeCozmeTarihiInput").value = bugununTarihi
    }
}


function soruEkleme(){
    let olusturulacakDivler = ""
    let tumLocalKeyler = Object.keys(localStorage)
    let keyNumbers = []
    tumLocalKeyler.forEach(function kontrolSayiGen(key){
    if(key.slice(0,6) == "cozmeT" || key.slice(0,6) == "acikla" || key.slice(0,6) == "dersIs" || key.slice(0,6) == "soruNo" || key.slice(0,6) == "kitapI" || key.slice(0,6) == "sayfaT"){
        try{
            keyNumbers.push(Number(key.match(/\d+$/)[0]))
        }
        catch{
            undefined
        }
    }
    })
    let enBuyuk = keyNumbers.reduce((acc, currentValue) => Math.max(acc, currentValue), -Infinity);
    let dersIsmiValue = dersIsmi.value
    let kitapIsmiValue = kitapIsmi.value
    let sayfaTestNoValue = sayfaTestNo.value
    let soruNoValue = soruNo.value
    let cozmeTarihiValue = cozmeTarihi.value
    let aciklamaTextValue = aciklamaText.value
    let soruIsmiTextValue = soruIsmi.value
    if(dersIsmiValue != "" && kitapIsmiValue != "" && sayfaTestNoValue != "" && soruNoValue != "" && cozmeTarihiValue != "" && aciklamaTextValue != "" && soruIsmiTextValue != ""){
        null
    }
    else{
        return false
    }
    sorularDiv.innerHTML = ""
    kaydedilenSoru += 1
    localStorage.setItem("kaydedilenSoru",kaydedilenSoru)
    let gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    let gun = gunler[tarih.getDay()]
    if(gun == "Pazartesi"){
        localStorage.setItem("soruKaydetmePazartesiVerisi",Number(localStorage.getItem("soruKaydetmePazartesiVerisi")) + 1)
    }
    if(gun == "Salı"){
        localStorage.setItem("soruKaydetmeSaliVerisi",Number(localStorage.getItem("soruKaydetmeSaliVerisi")) + 1)
    }
    if(gun == "Çarşamba"){
        localStorage.setItem("soruKaydetmeCarsambaVerisi",Number(localStorage.getItem("soruKaydetmeCarsambaVerisi")) + 1)
    }
    if(gun == "Perşembe"){
        localStorage.setItem("soruKaydetmePersembeVerisi",Number(localStorage.getItem("soruKaydetmePersembeVerisi")) + 1)
    }
    if(gun == "Cuma"){
        localStorage.setItem("soruKaydetmeCumaVerisi",Number(localStorage.getItem("soruKaydetmeCumaVerisi")) + 1)
    }
    if(gun == "Cumartesi"){
        localStorage.setItem("soruKaydetmeCumartesiVerisi",Number(localStorage.getItem("soruKaydetmeCumartesiVerisi")) + 1)
    }
    if(gun == "Pazar"){
        localStorage.setItem("soruKaydetmePazarVerisi",Number(localStorage.getItem("soruKaydetmePazarVerisi")) + 1)
    }

    for(let i = 1; i<=enBuyuk+1; i++){
        if(localStorage.getItem("silinenIdlerGunluk").includes(i)){
          continue
        }
        if(tumLocalKeyler.includes(`dersIsmiValueKey${i}`) == false){
            localStorage.setItem("dersIsmiValueKey" + i, dersIsmiValue)
        }
        if(tumLocalKeyler.includes(`kitapIsmiValueKey${i}`) == false){
            localStorage.setItem("kitapIsmiValueKey" + i, kitapIsmiValue)
        }
        if(tumLocalKeyler.includes(`sayfaTestNoValueKey${i}`) == false){
            localStorage.setItem("sayfaTestNoValueKey" + i, sayfaTestNoValue)
        }
        if(tumLocalKeyler.includes(`soruNoValueKey${i}`) == false){
            localStorage.setItem("soruNoValueKey" + i, soruNoValue)
        }
        if(tumLocalKeyler.includes(`cozmeTarihiValueKey${i}`) == false){
            localStorage.setItem("cozmeTarihiValueKey" + i, cozmeTarihiValue)
        }
        if(tumLocalKeyler.includes(`aciklamaTextValueKey${i}`) == false){
            localStorage.setItem("aciklamaTextValueKey" + i, aciklamaTextValue)
        }
        if(tumLocalKeyler.includes(`soruIsmiValueKey${i}`) == false){
          localStorage.setItem("soruIsmiValueKey" + i, aciklamaTextValue)
      }
        olusturulacakDivler = `
        <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item" id="soruElement${i}">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed acilanMenu" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
            <h5 class="menuBaslik" id="soruIsmi${i}">${localStorage.getItem("soruIsmiValueKey" + i)}</h5>
            </button>
          </h2>
          <div class="row">
            <div class="col-6">
              <div id="collapse${i}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body col icerikBody">
                  <h4 class="icerikBaslik">Ders İsmi:</h4>
                  <p class="icerikP" id="dersIsmi${i}">${localStorage.getItem("dersIsmiValueKey" + i).toLowerCase()}</p>
                  <h4 class="icerikBaslik">Kitap İsmi:</h4>
                  <p class="icerikP" id="kitapIsmi${i}">${localStorage.getItem("kitapIsmiValueKey" + i).toLowerCase()}</p>
                  <h4 class="icerikBaslik">Sayfa No:</h4>
                  <p class="icerikP" id="sayfaTestNo${i}">${localStorage.getItem("sayfaTestNoValueKey" + i).toLowerCase()}</p>
                  <h4 class="icerikBaslik">Soru No:</h4>
                  <p class="icerikP" id="soruNo${i}">${localStorage.getItem("soruNoValueKey" + i).toLowerCase()}</p>
                  <h4 class="icerikBaslik">Çözme Tarihi:</h4>
                  <p class="icerikP" id="cozmeTarihi${i}">${localStorage.getItem("cozmeTarihiValueKey" + i).toLowerCase()}</p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div id="collapse${i}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body col icerikBody">
                  <h4 class="icerikBaslik">Açıklama</h4>
                  <p class="icerikSpan" id="aciklamaText${i}">${localStorage.getItem("aciklamaTextValueKey" + i).toLowerCase()}</p>
                </div>
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
        </div>
        </div>`
        sorularDiv.innerHTML += olusturulacakDivler
}
    localStorage.setItem("SorularHTML",sorularDiv.innerHTML)
inputTemizleme()
}

function elementDuzenle(elementId){
    sayfaDuzenleButton.click()
    console.log(elementId)
    duzenlemeBaslik.innerText = `"${localStorage.getItem("soruIsmiValueKey" + elementId)}" Öğesini Düzenle`
    duzenlemeSoruIsmiInput.value = localStorage.getItem("soruIsmiValueKey" + elementId)
    duzenlemeDersIsmiInput.value = localStorage.getItem("dersIsmiValueKey" + elementId)
    duzenlemeKitapIsmiInput.value = localStorage.getItem("kitapIsmiValueKey" + elementId)
    duzenlemeSayfaNoInput.value = localStorage.getItem("sayfaTestNoValueKey" + elementId)
    duzenlemeSoruNoInput.value = localStorage.getItem("soruNoValueKey" + elementId)
    duzenlemeAciklamaInput.value = localStorage.getItem("aciklamaTextValueKey" + elementId)
    duzenlemeCozmeTarihiInput.value = localStorage.getItem("cozmeTarihiValueKey" + elementId) 
    sayfayiDuzenleButton.addEventListener("click",function(){
        localStorage.setItem(`soruIsmiValueKey${elementId}`,duzenlemeSoruIsmiInput.value)
        localStorage.setItem(`dersIsmiValueKey${elementId}`,duzenlemeDersIsmiInput.value)
        localStorage.setItem(`kitapIsmiValueKey${elementId}`, duzenlemeKitapIsmiInput.value)
        localStorage.setItem(`sayfaTestNoValueKey${elementId}`,duzenlemeSayfaNoInput.value)
        localStorage.setItem(`soruNoValueKey${elementId}`,duzenlemeSoruNoInput.value)
        localStorage.setItem(`aciklamaTextValueKey${elementId}`,duzenlemeAciklamaInput.value)
        localStorage.setItem(`cozmeTarihiValueKey${elementId}`,duzenlemeCozmeTarihiInput.value)

        document.getElementById(`soruIsmi${elementId}`).innerText = localStorage.getItem(`soruIsmiValueKey${elementId}`)
        document.getElementById(`dersIsmi${elementId}`).innerText = localStorage.getItem(`dersIsmiValueKey${elementId}`)
        document.getElementById(`kitapIsmi${elementId}`).innerText = localStorage.getItem(`kitapIsmiValueKey${elementId}`)
        document.getElementById(`sayfaTestNo${elementId}`).innerText = localStorage.getItem(`sayfaTestNoValueKey${elementId}`)
        document.getElementById(`soruNo${elementId}`).innerText = localStorage.getItem(`soruNoValueKey${elementId}`)
        document.getElementById(`aciklamaText${elementId}`).innerText = localStorage.getItem(`aciklamaTextValueKey${elementId}`)
        document.getElementById(`cozmeTarihi${elementId}`).innerText = localStorage.getItem(`cozmeTarihiValueKey${elementId}`)
        localStorage.setItem("SorularHTML",sorularDiv.innerHTML)
    })
  }
  function elementSil(elementId){
    silmeOnayButton.click()
    silmeIcerikOnayYazi.innerHTML = `
    <label for="message-text" class="col-form-label text-white"><b>"${localStorage.getItem("soruIsmiValueKey" + elementId)}"</b> İsimli Soru Silinsin mi?</label>
    `
    silmeButton.addEventListener("click",function(){
        document.getElementById(`soruElement${elementId}`).remove()
        localStorage.setItem(`soruIsmiValueKey${elementId}`,"")
        localStorage.setItem(`dersIsmiValueKey${elementId}`,"")
        localStorage.setItem(`kitapIsmiValueKey${elementId}`,"")
        localStorage.setItem(`sayfaTestNoValueKey${elementId}`,"")
        localStorage.setItem(`soruNoValueKey${elementId}`,"")
        localStorage.setItem(`aciklamaTextValueKey${elementId}`,"")
        localStorage.setItem(`cozmeTarihiValueKey${elementId}`,"")
      let silinenIdListe = localStorage.getItem("silinenIdlerGunluk")
      silinenIdListe += elementId
      localStorage.setItem("SorularHTML",sorularDiv.innerHTML)
      localStorage.setItem("silinenIdlerGunluk", silinenIdListe)
      iptalButton.click()
    })

  }


function inputTemizleme(){
    soruIsmi.value = ""
    dersIsmi.value = ""
    kitapIsmi.value = ""
    sayfaTestNo.value = ""
    soruNo.value = ""
    cozmeTarihi.value = ""
    aciklamaText.value = ""
}

function convertToPdf(){
    let tumLocalKeyler = Object.keys(localStorage)
    let keyNumbers = []
    tumLocalKeyler.forEach(function kontrolSayiGen(key){
        try{
            if(key.toString() != ""){
              keyNumbers.push(Number(key.match(/\d+$/)[0]))
            }
        }
        catch{
            undefined
        }
    })
    let enBuyuk = keyNumbers.reduce((acc, currentValue) => Math.max(acc, currentValue), -Infinity);
    let metin = ""
    for(let i = 1; i<=enBuyuk; i++){
        if(localStorage.getItem("dersIsmiValueKey" + i ) == ""){
          continue
        }
        metin += "\n\n"
        metin += localStorage.getItem(`dersIsmiValueKey${i}`)+ "\n"
        metin += "Ders İsmi: " + localStorage.getItem(`dersIsmiValueKey${i}`)+ "\n"
        metin += "Kitap İsmi: " + localStorage.getItem(`kitapIsmiValueKey${i}`)+ "\n"
        metin += "Sayfa No: " + localStorage.getItem(`sayfaTestNoValueKey${i}`)+ "\n"
        metin += "Soru No: " + localStorage.getItem(`soruNoValueKey${i}`)+ "\n"
        metin += "Çözme Tarihi: " + localStorage.getItem(`cozmeTarihiValueKey${i}`)+ "\n"
        metin += "Açıklama: " + localStorage.getItem(`aciklamaTextValueKey${i}`)+ "\n"
    }

    var docDefinition = {
        content: [
            metin
        ],
    };
    pdfMake.createPdf(docDefinition).download("Kayitli_Sorular.pdf");

    let pdfSayi = Number(localStorage.getItem("pdfAlmaSayisi"))
    pdfSayi += 1
    localStorage.setItem("pdfAlmaSayisi",pdfSayi)
}
