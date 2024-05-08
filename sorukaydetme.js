const dersIsmi = document.getElementById("dersIsmi")
const kitapIsmi = document.getElementById("kitapIsmi")
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

const sayfayiDuzenleButton = document.getElementById("sayfayiDuzenleButton")
let sorularHTML = localStorage.getItem("SorularHTML")
if(sorularHTML != null){
  sorularDiv.innerHTML = `${sorularHTML}`
}
if(localStorage.getItem("silinenIdlerGunluk") == null){
  localStorage.setItem("silinenIdlerGunluk","")
}
// ? Todolar :

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
    let dersIsmiValue = dersIsmi.value
    let kitapIsmiValue = kitapIsmi.value
    let sayfaTestNoValue = sayfaTestNo.value
    let soruNoValue = soruNo.value
    let cozmeTarihiValue = cozmeTarihi.value
    let aciklamaTextValue = aciklamaText.value
    if(dersIsmiValue != "" && kitapIsmiValue != "" && sayfaTestNoValue != "" && soruNoValue != "" && cozmeTarihiValue != "" && aciklamaTextValue != ""){
        null
    }
    else{
        return false
    }
    sorularDiv.innerHTML = ""
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
        let soruSayisi = Number(localStorage.getItem("kaydedilenSoru"))
        soruSayisi += 1
        localStorage.setItem("kaydedilenSoru",soruSayisi)
        olusturulacakDivler = `
        <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item" id="soruElement${i}">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed acilanMenu" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
            <h5 class="menuBaslik">Soru ${i}.</h5>
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
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash2" viewBox="0 0 16 16">
                    <path d="M14 3a.7.7 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225A.7.7 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2M3.215 4.207l1.493 8.957a1 1 0 0 0 .986.836h4.612a1 1 0 0 0 .986-.836l1.493-8.957C11.69 4.689 9.954 5 8 5s-3.69-.311-4.785-.793"/>
                    </svg>
                    </button>
                      <button class="editButton button" onclick="elementDuzenle(${i},${localStorage.getItem("tarihYaziValueKey" + i)})">
                      <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                      <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                    </svg>
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
    duzenlemeBaslik.innerText = `"Soru ${elementId}." Öğesini Düzenle`
    duzenlemeDersIsmiInput.value = localStorage.getItem("dersIsmiValueKey" + elementId)
    duzenlemeKitapIsmiInput.value = localStorage.getItem("kitapIsmiValueKey" + elementId)
    duzenlemeSayfaNoInput.value = localStorage.getItem("sayfaTestNoValueKey" + elementId)
    duzenlemeSoruNoInput.value = localStorage.getItem("soruNoValueKey" + elementId)
    duzenlemeAciklamaInput.value = localStorage.getItem("aciklamaTextValueKey" + elementId)
    duzenlemeCozmeTarihiInput.value = localStorage.getItem("cozmeTarihiValueKey" + elementId) 
    sayfayiDuzenleButton.addEventListener("click",function(){
        localStorage.setItem(`dersIsmiValueKey${elementId}`,duzenlemeDersIsmiInput.value)
        localStorage.setItem(`kitapIsmiValueKey${elementId}`, duzenlemeKitapIsmiInput.value)
        localStorage.setItem(`sayfaTestNoValueKey${elementId}`,duzenlemeSayfaNoInput.value)
        localStorage.setItem(`soruNoValueKey${elementId}`,duzenlemeSoruNoInput.value)
        localStorage.setItem(`aciklamaTextValueKey${elementId}`,duzenlemeAciklamaInput.value)
        localStorage.setItem(`cozmeTarihiValueKey${elementId}`,duzenlemeCozmeTarihiInput.value)

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
    silmeButton.addEventListener("click",function(){
        document.getElementById(`soruElement${elementId}`).remove()
        localStorage.setItem(`dersIsmiValueKey${elementId}`,"")
        localStorage.setItem(`kitapIsmiValueKey${elementId}`,"")
        localStorage.setItem(`sayfaTestNoValueKey${elementId}`,"")
        localStorage.setItem(`soruNoValueKey${elementId}`,"")
        localStorage.setItem(`aciklamaTextValueKey${elementId}`,"")
        localStorage.setItem(`cozmeTarihiValueKey${elementId}`,"")
      let silinenIdListe = localStorage.getItem("silinenIdlerGunluk")
      silinenIdListe += elementId
      localStorage.setItem("silinenIdlerGunluk", silinenIdListe)
      iptalButton.click()
    })

  }


function inputTemizleme(){
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
        metin += "\n"
        metin += `Soru ${i}`+ "\n\n"
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
