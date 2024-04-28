const soruEkleDiv = document.getElementById("soruEkle")
const soruBilgiAdd = document.getElementById("soruBilgiAdd")
const leftSide = document.getElementById("left")
const rightSide = document.getElementById("right")

// ? Inputlar :

const dersIsmi = document.getElementById("dersIsmi")
const kitapIsmi = document.getElementById("kitapIsmi")
const sayfaTestNo = document.getElementById("sayfa/testNo")
const soruNo = document.getElementById("soruNo")
const cozmeTarihi = document.getElementById("cozmeTarihi")
const aciklamaText = document.getElementById("aciklama")
const sorularDiv = document.getElementById("sorularDiv")

let sorularHTML = localStorage.getItem("SorularHTML")
if(sorularHTML != null){
  sayfalarDiv.innerHTML = `${sorularHTML}`
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

function soruEkleBasma(){
    if (soruEkleDiv.style.height == "450px"){
        soruEkleDiv.style.height = "65px"
        soruBilgiAdd.style.height = "0px"
        leftSide.style.display = "none"
        rightSide.style.display = "none"
    }
    else{
        soruEkleDiv.style.height = "450px"
        soruBilgiAdd.style.height = "370px"
        leftSide.style.display = "inline-block"
        rightSide.style.display = "inline-block"
    }
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
      <div id="collapse${i}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body icerikBody">
          <h3 class="icerikBaslik">${localStorage.getItem("baslikYaziValueKey" + i)}</h3> <br> <p class="icerikP">${localStorage.getItem("icerikYaziValueKey" + i)}</p>
        </div>
      </div>
    </div>
        
        `
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

function toDoQuestionBuyutme(id){
    const toDoQuestiondiv = document.getElementById("toDoQuestion"+id)
    const dataLeft = document.getElementById("dataLeft"+id)
    const dataRight = document.getElementById("dataRight"+id)
    if(dataRight.style.display == 'block'){
        toDoQuestiondiv.style.height = '50px'
        toDoQuestiondiv.style.backgroundColor = 'red'
        dataLeft.style.display = 'none'
        dataRight.style.display = 'none'
    }
    else{
        toDoQuestiondiv.style.height = '400px'
        toDoQuestiondiv.style.backgroundColor = 'blue'
        dataLeft.style.display = 'block'
        dataRight.style.display = 'block'
    }
}

function todoSil(elementId){
    localStorage.removeItem(`dersIsmiValueKey${elementId}`)
    localStorage.removeItem(`kitapIsmiValueKey${elementId}`)
    localStorage.removeItem(`sayfaTestNoValueKey${elementId}`)
    localStorage.removeItem(`soruNoValueKey${elementId}`)
    localStorage.removeItem(`cozmeTarihiValueKey${elementId}`)
    localStorage.removeItem(`aciklamaTextValueKey${elementId}`)
    let kontrolDiv = document.getElementById(`kontrolDiv${elementId}`)
    kontrolDiv.remove()
    console.log(sorularDiv.innerHTML)
    localStorage.setItem("SorularHTML",sorularDiv.innerHTML)
    let silinenSoruSayi = Number(localStorage.getItem("cikarilanSoru"))
    silinenSoruSayi += 1
    localStorage.setItem("cikarilanSoru",silinenSoruSayi)
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
