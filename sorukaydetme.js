const dersIsmi = document.getElementById("dersIsmi")
const kitapIsmi = document.getElementById("kitapIsmi")
const sayfaTestNo = document.getElementById("sayfa/testNo")
const soruNo = document.getElementById("soruNo")
const cozmeTarihi = document.getElementById("cozmeTarihi")
const aciklamaText = document.getElementById("aciklama")
const sorularDiv = document.getElementById("sorularDiv")

let sorularHTML = localStorage.getItem("SorularHTML")
if(sorularHTML != null){
  sorularDiv.innerHTML = `${sorularHTML}`
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
    document.getElementById('cozmeTarihi').value = bugununTarihi;
}


function soruEkleme(){
    let olusturulacakDivler = ""
    let tumLocalKeyler = Object.keys(localStorage)
    let keyNumbers = []
    tumLocalKeyler.forEach(function kontrolSayiGen(key){
    if(key.slice(0,6) == "cozmeT" || "acikla" || "dersIs" || "soruNo" || "kitapI" || "sayfaT"){

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
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed acilanMenu" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
            <h5 class="menuBaslik">Soru ${i}.</h5>
            </button>
          </h2>
          <div class="row">
            <div class="col">
              <div id="collapse${i}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body col icerikBody">
                  <h4 class="icerikBaslik">Ders İsmi:</h4>
                  <p class="icerikP">${localStorage.getItem("dersIsmiValueKey" + i).toLowerCase()}</p>
                  <h4 class="icerikBaslik">Kitap İsmi:</h4>
                  <p class="icerikP">${localStorage.getItem("kitapIsmiValueKey" + i).toLowerCase()}</p>
                  <h4 class="icerikBaslik">Sayfa No:</h4>
                  <p class="icerikP">${localStorage.getItem("sayfaTestNoValueKey" + i).toLowerCase()}</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div id="collapse${i}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body col icerikBody">
                  <h4 class="icerikBaslik">Soru No:</h4>
                  <p class="icerikP">${localStorage.getItem("soruNoValueKey" + i).toLowerCase()}</p>
                  <h4 class="icerikBaslik">Çözme Tarihi</h4>
                  <p class="icerikP">${localStorage.getItem("cozmeTarihiValueKey" + i).toLowerCase()}</p>
                  <h4 class="icerikBaslik">Açıklama</h4>
                  <p class="icerikSpan">${localStorage.getItem("aciklamaTextValueKey" + i).toLowerCase()}</p>
                </div>
              </div>
            </div>
        </div>
        </div>`
        sorularDiv.innerHTML += olusturulacakDivler
}
    localStorage.setItem("SorularHTML",sorularDiv.innerHTML)
inputTemizleme()



/*
`
        <div class="kontrolDiv" id="kontrolDiv${i}">
        <div class="toDoQuestion" onclick="toDoQuestionBuyutme(${i})" id="toDoQuestion${i}">
        <div class="rightSide">
            <h2 class="soruKac">${i}. Soru</h2>
        </div>
        <div class="leftSide">
            <button class="deleteButton" id="${i}" onclick="todoSil(${i})"><i class="fa-solid fa-trash"></i></button>
        </div>
        <div class="questionData">
            <div class="dataLeft fade-in" id="dataLeft${i}">
                <h2>Ders İsmi:</h2>
                <h4>${localStorage.getItem("dersIsmiValueKey" + i)}</h4>
                <h2>Kitap İsmi:</h2>
                <h4>${localStorage.getItem("kitapIsmiValueKey" + i)}</h4>
                <h2>Sayfa No.</h2>
                <h4>${localStorage.getItem("sayfaTestNoValueKey" + i)}</h4>
                <h2>Soru No.</h2>
                <h4>${localStorage.getItem("soruNoValueKey" + i)}</h4>
            </div>
            <div class="dataRight fade-in" id="dataRight${i}">
                <h2>Çözme Tarihi:</h2>
                <h4>${localStorage.getItem("cozmeTarihiValueKey" + i)}</h4>
                <h2>Açıklama:</h2>
                <p>${localStorage.getItem("aciklamaTextValueKey" + i)}</p>
            </div>
        </div>
    </div>

    </div>`
*/



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
            keyNumbers.push(Number(key.match(/\d+$/)[0]))
        }
        catch{
            undefined
        }
    })
    let enBuyuk = keyNumbers.reduce((acc, currentValue) => Math.max(acc, currentValue), -Infinity);
    let metin = ""
    for(let i = 1; i<=enBuyuk; i++){

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
