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
let kontrolSayi = 0
let sorularHTML = localStorage.getItem("SorularHTML")
console.log(sorularHTML)
sorularDiv.innerHTML += sorularHTML
// ? Todolar :



localStorage.setItem("dersIsmiValueKey0",0)
localStorage.setItem("kitapIsmiValueKey0",0)
localStorage.setItem("sayfaTestNoValueKey0",0)
localStorage.setItem("soruNoValueKey0",0)
localStorage.setItem("cozmeTarihiValueKey0",0)
localStorage.setItem("aciklamaTextValueKey0",0)

soruEkleme()
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
    sorularDiv.innerHTML = ""
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
    let dersIsmiValue = dersIsmi.value
    let kitapIsmiValue = kitapIsmi.value
    let sayfaTestNoValue = sayfaTestNo.value
    let soruNoValue = soruNo.value
    let cozmeTarihiValue = cozmeTarihi.value
    let aciklamaTextValue = aciklamaText.value
    if(dersIsmiValue != "" && kitapIsmiValue != "" && sayfaTestNoValue != "" && soruNoValue != "" && cozmeTarihiValue != "" && aciklamaTextValue != ""){
        console.log("continueing")
        kontrolSayi+=1
    }
    else{
        return false
    }
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
        olusturulacakDivler = `
        <div class="toDoQuestion" onclick="toDoQuestionBuyutme(${i})" id="toDoQuestion${i}">
        <h2 style="text-align: center; margin-left: 10px;font-family: 'Mcgannahan', sans-serif;font-size: 38px; letter-spacing: 2px;">${i}. Soru</h2>
        <div class="questionData">
            <div class="dataLeft" id="dataLeft${i}">
                <h2>Ders İsmi:</h2>
                <h4>${localStorage.getItem("dersIsmiValueKey" + i)}</h4>
                <h2>Kitap İsmi:</h2>
                <h4>${localStorage.getItem("kitapIsmiValueKey" + i)}</h4>
                <h2>Sayfa No.</h2>
                <h4>${localStorage.getItem("sayfaTestNoValueKey" + i)}</h4>
                <h2>Soru No.</h2>
                <h4>${localStorage.getItem("soruNoValueKey" + i)}</h4>
            </div>
            <div class="dataRight" id="dataRight${i}">
                <h2>Çözme Tarihi:</h2>
                <h4>${localStorage.getItem("cozmeTarihiValueKey" + i)}</h4>
                <h2>Açıklama:</h2>
                <p>${localStorage.getItem("aciklamaTextValueKey" + i)}</p>
            </div>
        </div>
    </div>

        `
        sorularDiv.innerHTML += olusturulacakDivler
}
    localStorage.setItem("SorularHTML",sorularDiv.innerHTML)
inputTemizleme()
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
    console.log(id)
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
        toDoQuestiondiv.style.height = '500px'
        toDoQuestiondiv.style.backgroundColor = 'blue'
        dataLeft.style.display = 'block'
        dataRight.style.display = 'block'
    }
}