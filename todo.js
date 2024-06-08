const baslik = document.getElementById("baslik")
const icerik = document.getElementById("icerik")
const renk = document.getElementById("todoRenk")
const color = document.querySelectorAll(".color")
const yapilmamisTodolarDiv = document.getElementById("yapilmamisTodolarDiv")
const yapilmisTodolarDiv = document.getElementById("yapilmisTodolarDiv")
const suresiGecmisTodolarDiv = document.getElementById("suresiGecmisTodolarDiv")
const yapilacaklarButton = document.getElementById("yapilacaklarButton")
const yapilanlarButton = document.getElementById("yapilanlarButton")
const suresiGecmislerButton = document.getElementById("suresiGecmislerButton")
const icerikOnay = document.getElementById("icerikOnay")
const silmeButton = document.getElementById("silmeButton")
const silmeOnayButton = document.getElementById("silmeOnayButton")
const duzenlemeOnayButton = document.getElementById("duzenlemeOnayButton")
const duzenlemeBaslik = document.getElementById("duzenlemeBaslik")
const baslikDuzenlemeInput = document.getElementById("baslikDuzenleme")
const icerikDuzenlemeInput = document.getElementById("icerikDuzenleme")
const todoRenkDuzenleme = document.getElementById("todoRenkDuzenleme")
const duzenleButton = document.getElementById("duzenleButton")

renk.setAttribute("value",randomHexOlustur())

let tarih = new Date()

let yapilmamisHTML = localStorage.getItem("yapilmamisHTML")
let yapilmisHTML = localStorage.getItem("yapilmisHTML")
if(yapilmamisHTML != null){
  yapilmamisTodolarDiv.innerHTML = `${yapilmamisHTML}`
}
if(yapilmisHTML != null){
  yapilmisTodolarDiv.innerHTML = `${yapilmisHTML}`
}

if(localStorage.getItem("todoPazartesiVerisi") == null){
    localStorage.setItem("todoPazartesiVerisi",0)
  }
  if(localStorage.getItem("todoSaliVerisi") == null){
    localStorage.setItem("todoSaliVerisi",0)
  }
  if(localStorage.getItem("todoCarsambaVerisi") == null){
    localStorage.setItem("todoCarsambaVerisi",0)
  }
  if(localStorage.getItem("todoPersembeVerisi") == null){
    localStorage.setItem("todoPersembeVerisi",0)
  }
  if(localStorage.getItem("todoCumaVerisi") == null){
    localStorage.setItem("todoCumaVerisi",0)
  }
  if(localStorage.getItem("todoCumartesiVerisi") == null){
    localStorage.setItem("todoCumartesiVerisi",0)
  }
  if(localStorage.getItem("todoPazarVerisi") == null){
    localStorage.setItem("todoPazarVerisi",0)
  }
  if(localStorage.getItem("gonderilenTodolar") == null){
    localStorage.setItem("gonderilenTodolar","")
  }
  if(localStorage.getItem("silinenTodolar") == null){
    localStorage.setItem("silinenTodolar","")
  }

localStorage.setItem("todoIcerikYaziValueKey0",0)
localStorage.setItem("todoBaslikYaziValueKey0",0)
localStorage.setItem("todoRenkValueKey0",0)
function inputTemizleme(){
    baslik.value = ""
    icerik.value = ""
    renk.value = randomHexOlustur()
}

function yeniGörevEkle(){
    let olusturulacakDivler = ""
    let tumLocalKeyler = Object.keys(localStorage)
    let keyNumbers = []
    tumLocalKeyler.forEach(function kontrolSayiGen(key){
    if(key.slice(0,6) == "todoIc" || key.slice(0,6) == "todoBa" || key.slice(0,6) == "todoRe"){
        try{  
            keyNumbers.push(Number(key.match(/\d+$/)[0]))
        }
        catch{
            undefined
        }
    }
    })
    let enBuyuk = keyNumbers.reduce((acc, currentValue) => Math.max(acc, currentValue), -Infinity);
    let sonTodoBaslikYaziValue = baslik.value
    let sonTodoIcerikYaziValue = icerik.value
    let sonTodoRenkValue = renk.value
    if(sonTodoBaslikYaziValue != "" && sonTodoIcerikYaziValue != ""){
        null
    }
    else{
        alert("Lütfen hiç bir alanı boş bırakmayınız.")
        return false
    }
    let gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    let gun = gunler[tarih.getDay()]
    if(gun == "Pazartesi"){
        localStorage.setItem("todoPazartesiVerisi",Number(localStorage.getItem("todoPazartesiVerisi")) + 1)
    }
    if(gun == "Salı"){
        localStorage.setItem("todoSaliVerisi",Number(localStorage.getItem("todoSaliVerisi")) + 1)
    }
    if(gun == "Çarşamba"){
        localStorage.setItem("todoCarsambaVerisi",Number(localStorage.getItem("todoCarsambaVerisi")) + 1)
    }
    if(gun == "Perşembe"){
        localStorage.setItem("todoPersembeVerisi",Number(localStorage.getItem("todoPersembeVerisi")) + 1)
    }
    if(gun == "Cuma"){
        localStorage.setItem("todoCumaVerisi",Number(localStorage.getItem("todoCumaVerisi")) + 1)
    }
    if(gun == "Cumartesi"){
        localStorage.setItem("todoCumartesiVerisi",Number(localStorage.getItem("todoCumartesiVerisi")) + 1)
    }
    if(gun == "Pazar"){
        localStorage.setItem("todoPazarVerisi",Number(localStorage.getItem("todoPazarVerisi")) + 1)
    }
    yapilmamisTodolarDiv.innerHTML = ""
    for(let i = 1; i<=enBuyuk+1; i++){ 
      let kontrol;
      localStorage.getItem("gonderilenTodolar").split(',').forEach(function(silinenId){
        if(i == silinenId){
          kontrol = true
        }
      })
      if(kontrol == true){
        continue
      }


      let kontrol1;
      localStorage.getItem("silinenTodolar").split(',').forEach(function(silinenId1){
        if(i == silinenId1){
          kontrol1 = true
        }
      })
      if(kontrol1 == true){
        continue
      }
        if(tumLocalKeyler.includes(`todoBaslikYaziValueKey${i}`) == false){
            localStorage.setItem("todoBaslikYaziValueKey" + i, sonTodoBaslikYaziValue)
        }
        if(tumLocalKeyler.includes(`todoIcerikYaziValueKey${i}`) == false){
            localStorage.setItem("todoIcerikYaziValueKey" + i, sonTodoIcerikYaziValue)
        }
        if(tumLocalKeyler.includes(`todoRenkValueKey${i}`) == false){
            localStorage.setItem("todoRenkValueKey" + i, sonTodoRenkValue)
        }
    olusturulacakDivler = `
    <ul class="list-group yapilmamisTodolar animate__animated" id="ul${i}">
    <li class="list-group-item todo" id="todo${i}">
      <div class="row">
        <div class="col-11 left-side" onclick="yapilmislaraGonder(${i})" onmouseout="mouseOutUl(${i})" onmouseover="mouseOverUl(${i})">
        <input class="form-check-input me-1 color" onclick="yapilmislaraGonder(${i})"style="background-color:${localStorage.getItem("todoRenkValueKey" + i)}" type="checkbox" id="checkBox${i}">
        <div class="labelDesc">
          <label class="form-check-label" for="firstCheckbox" id="baslik${i}">${localStorage.getItem("todoBaslikYaziValueKey" + i)}</label>
          <p class="form-check-p" id="icerik${i}">${localStorage.getItem("todoIcerikYaziValueKey" + i)}</p>
        </div>
      </div>
      <div class="col-1 right-side" onmouseout="mouseOutUl(${i})" onmouseover="mouseOverUl(${i})">
            <div class="dropdown">
                <button class="btn btn-secondary button1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </button>
              <ul class="dropdown-menu">
                <li><button class="dropdown-item dropdown-button" href="#" onclick="elementSil(${i},false)">Kaldır</button></li>
                <li><button class="dropdown-item dropdown-button" onclick="elementDuzenle(${i})" href="#">Düzenle</button></li>
                <li><button class="dropdown-item dropdown-button" href="#" onclick="yapilmislaraGonder(${i})">Yapılanlara Taşı</button></li>
              </ul>
            </div>
        </div>
      </div>
    </li>
  </ul>
        `
        yapilmamisTodolarDiv.innerHTML += olusturulacakDivler

}
        localStorage.setItem("yapilmamisHTML",yapilmamisTodolarDiv.innerHTML)
        inputTemizleme()
}

function yapilmisDivShow(){
    yapilmisTodolarDiv.style.display = "block"
    yapilmamisTodolarDiv.style.display = "none"
    yapilanlarButton.style.color = "#4d9bdf"
    yapilacaklarButton.style.color = "#fff"
}
function yapilmamisDivShow(){
    yapilmamisTodolarDiv.style.display = "block"
    yapilmisTodolarDiv.style.display = "none"
    yapilacaklarButton.style.color = "#4d9bdf"
    yapilanlarButton.style.color = "#fff"
}

function yapilmislaraGonder(id){
  document.getElementById(`ul${id}`).remove()
  yapilmisTodolarDiv.innerHTML += `
<ul class="list-group yapilmamisTodolar animate__animated" id="ul${id}">
<li class="list-group-item todo" id="todo${id}">
  <div class="row">
    <div class="col-11 left-side">
    <input class="form-check-input me-1 color" checked="true" disabled  style="background-color:${localStorage.getItem("todoRenkValueKey" + id)}" type="checkbox" id="checkBox${id}">
    <div class="labelDesc">
      <label class="form-check-label topLine" id="baslik${id}" for="firstCheckbox">${localStorage.getItem("todoBaslikYaziValueKey" + id)}</label>
      <p class="form-check-p topLine" id="icerik${id}">${localStorage.getItem("todoIcerikYaziValueKey" + id)}</p>
    </div>
  </div>
  <div class="col-1 right-side">
        <div class="dropdown">
            <button class="btn btn-secondary button1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </button>
          <ul class="dropdown-menu">
            <li><button class="dropdown-item dropdown-button" onclick="elementSil(${id},true)">Kaldır</button></li>
            <li><button class="dropdown-item dropdown-button" onclick="yapilmamislaraGonder(${id})">Yapılacaklara Taşı</button></li>
          </ul>
        </div>
    </div>
  </div>
</li>
</ul>
  `
  let silinenIdListe = localStorage.getItem("gonderilenTodolar")
  silinenIdListe = silinenIdListe ? silinenIdListe.split(',') : [];
  silinenIdListe.push(id)
  localStorage.setItem("gonderilenTodolar", silinenIdListe.join(','));
  localStorage.setItem("yapilmisHTML",yapilmisTodolarDiv.innerHTML)
  localStorage.setItem("yapilmamisHTML",yapilmamisTodolarDiv.innerHTML)


}

function yapilmamislaraGonder(id){
    document.getElementById(`ul${id}`).remove()
    yapilmamisTodolarDiv.innerHTML += `
    <ul class="list-group yapilmamisTodolar animate__animated" id="ul${id}">
    <li class="list-group-item todo" id="todo${id}">
      <div class="row">
        <div class="col-11 left-side" onclick="yapilmislaraGonder(${id})" onmouseout="mouseOutUl(${id})" onmouseover="mouseOverUl(${id})">
        <input class="form-check-input me-1 color" onclick="yapilmislaraGonder(${id})" style="background-color:${localStorage.getItem("todoRenkValueKey" + id)}" type="checkbox" id="checkBox${id}">
        <div class="labelDesc">
          <label class="form-check-label" for="firstCheckbox" id="baslik${id}">${localStorage.getItem("todoBaslikYaziValueKey" + id)}</label>
          <p class="form-check-p" id="icerik${id}">${localStorage.getItem("todoIcerikYaziValueKey" + id)}</p>
        </div>
      </div>
      <div class="col-1 right-side" onmouseout="mouseOutUl(${id})" onmouseover="mouseOverUl(${id})">
            <div class="dropdown">
                <button class="btn btn-secondary button1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </button>
              <ul class="dropdown-menu">
                <li><button class="dropdown-item dropdown-button" href="#" onclick="elementSil(${id},false)">Kaldır</button></li>
                <li><button class="dropdown-item dropdown-button" href="#" onclick="elementDuzenle(${id}")>Düzenle</button></li>
                <li><button class="dropdown-item dropdown-button" href="#" onclick="yapilmislaraGonder(${id})">Yapılanlara Taşı</button></li>
              </ul>
            </div>
        </div>
      </div>
    </li>
  </ul>
    `
    let silinenIdListe2 = localStorage.getItem("gonderilenTodolar")
    silinenIdListe2 = silinenIdListe2 ? silinenIdListe2.split(',') : [];
    let index = silinenIdListe2.indexOf(id);
    silinenIdListe2.splice(index, 1);
    localStorage.setItem("gonderilenTodolar", silinenIdListe2.join(','));
    localStorage.setItem("yapilmisHTML",yapilmisTodolarDiv.innerHTML)
    localStorage.setItem("yapilmamisHTML",yapilmamisTodolarDiv.innerHTML)
};

//   let gonderilenTodolar = localStorage.getItem("gonderilenTodolar")
//   console.log(Array(gonderilenTodolar))
//   Array(gonderilenTodolar) -= id
//   localStorage.setItem("gonderilenTodolar",gonderilenTodolar)
//   localStorage.setItem("yapilmamisHTML",yapilmamisTodolarDiv.innerHTML)
//   localStorage.setItem("yapilmisHTML",yapilmisTodolarDiv.innerHTML)
//   console.log(gonderilenTodolar)
//   window.addEventListener('beforeunload', function(){
//     localStorage.setItem("gonderilenTodolar",gonderilenTodolar)
//     localStorage.setItem("yapilmamisHTML",yapilmamisTodolarDiv.innerHTML)
//     localStorage.setItem("yapilmisHTML",yapilmisTodolarDiv.innerHTML)
// })

function mouseOverUl(elementId){
  document.getElementById("checkBox" + elementId).checked = true
  document.getElementById("todo" + elementId).style.backgroundColor = "#1E2023"

}
function mouseOutUl(elementId){
  document.getElementById("checkBox" + elementId).checked = false
  document.getElementById("todo" + elementId).style.backgroundColor = "#212529"
}


function randomHexOlustur() {
  let hexCode = '#';
  const hexCharacters = '0123456789ABCDEF';

  for (let i = 0; i < 6; i++) {
      hexCode += hexCharacters[Math.floor(Math.random() * 16)];
  }

  return hexCode;
}


function elementSil(elementId,occasion){

    silmeOnayButton.click()
    if(occasion == true){
      icerikOnay.innerHTML = `
      <label for="message-text" class="col-form-label text-white"><b>"${localStorage.getItem("todoBaslikYaziValueKey" + elementId)}"</b> Başlıklı Yapılmış İş Silinsin mi?</label>
      `
    }
    else{
      icerikOnay.innerHTML = `
      <label for="message-text" class="col-form-label text-white"><b>"${localStorage.getItem("todoBaslikYaziValueKey" + elementId)}"</b> Başlıklı Yapılacak İş Silinsin mi?</label>
      `
    }

    silmeButton.addEventListener("click",function(){
      document.getElementById(`ul${elementId}`).remove()
      localStorage.setItem("yapilmamisHTML",yapilmamisTodolarDiv.innerHTML)
      localStorage.setItem("yapilmisHTML",yapilmisTodolarDiv.innerHTML)
      let silinenIdListe1 = localStorage.getItem("silinenTodolar")
      silinenIdListe1 = silinenIdListe1 ? silinenIdListe1.split(',') : [];
      silinenIdListe1.push(elementId)
      localStorage.setItem("silinenTodolar", silinenIdListe1.join(','));
    })
}

function elementDuzenle(elementId){
  duzenlemeOnayButton.click()
  duzenlemeBaslik.innerHTML = `"${localStorage.getItem("todoBaslikYaziValueKey" + elementId)}" Başlıklı Yapılacak İşi Düzenle`
  baslikDuzenlemeInput.value = `${localStorage.getItem("todoBaslikYaziValueKey" + elementId)}`
  icerikDuzenlemeInput.value = `${localStorage.getItem("todoIcerikYaziValueKey" + elementId)}`
  todoRenkDuzenleme.setAttribute("value",localStorage.getItem("todoRenkValueKey" + elementId))
  function duzenleme(){
    if(baslikDuzenlemeInput.value != "" && icerikDuzenlemeInput.value != ""){
      null
    }
  else{
      alert("Lütfen hiç bir alanı boş bırakmayınız.")
      return false
  }
    localStorage.setItem("todoBaslikYaziValueKey" + elementId, baslikDuzenlemeInput.value)
    localStorage.setItem("todoIcerikYaziValueKey" + elementId, icerikDuzenlemeInput.value)
    localStorage.setItem("todoRenkValueKey" + elementId, todoRenkDuzenleme.value)

    document.getElementById("checkBox" + elementId).style.backgroundColor = localStorage.getItem("todoRenkValueKey" + elementId)
    document.getElementById("baslik" + elementId).innerText = localStorage.getItem("todoBaslikYaziValueKey" + elementId)
    document.getElementById("icerik" + elementId).innerText = localStorage.getItem("todoIcerikYaziValueKey" + elementId)

    localStorage.setItem("yapilmisHTML",yapilmisTodolarDiv.innerHTML)
    localStorage.setItem("yapilmamisHTML",yapilmamisTodolarDiv.innerHTML)
    duzenleButton.removeEventListener("click",duzenleme)
  }
  duzenleButton.addEventListener("click",duzenleme)

}

function inputTemizlemeDuzenle(elementId){
  baslikDuzenlemeInput.value = ""
  icerikDuzenlemeInput.value = ""
  todoRenkDuzenleme.value = ""
}