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
        if(String(localStorage.getItem("gonderilenTodolar")).includes(i)){
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
    <li class="list-group-item todo" onclick="yapilmislaraGonder(${i})" onmouseover="mouseOverUl(${i})" id="todo${i}" onmouseout="mouseOutUl(${i})">
      <div class="row">
        <div class="col-8 left-side">
        <input class="form-check-input me-1 color" onclick="yapilmislaraGonder(${i})" style="background-color:${localStorage.getItem("todoRenkValueKey" + i)}" type="checkbox" id="checkBox${i}">
        <div class="labelDesc">
          <label class="form-check-label" for="firstCheckbox">${localStorage.getItem("todoBaslikYaziValueKey" + i)}</label>
          <p class="form-check-p">${localStorage.getItem("todoIcerikYaziValueKey" + i)}</p>
        </div>
      </div>
      <div class="col-4 right-side">
            <div class="dropdown">
                <button class="btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item dropdown-button" href="#">Kaldır</a></li>
                <li><a class="dropdown-item dropdown-button" href="#">Düzenle</a></li>
                <li><a class="dropdown-item dropdown-button" href="#">Yapılanlara Taşı</a></li>
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
  document.getElementById(`ul${id}`).classList.add("animate__fadeOut")
  window.addEventListener('beforeunload', function(){
    document.getElementById(`ul${id}`).classList.remove("animate__fadeOut")
    document.getElementById(`ul${id}`).remove()
    localStorage.setItem("yapilmamisHTML",yapilmamisTodolarDiv.innerHTML)
  });
  setTimeout(function() {
    document.getElementById(`ul${id}`).classList.remove("animate__fadeOut")
    document.getElementById(`ul${id}`).remove()
    localStorage.setItem("yapilmamisHTML",yapilmamisTodolarDiv.innerHTML)
  }, 250);
  yapilmisTodolarDiv.innerHTML += `
  <ul class="list-group yapilmamisTodolar animate__animated" onclick="null" id="ul${id}">
  <li class="list-group-item todo">
    <div class="row">
      <div class="col-1 left-side">
        <input class="form-check-input me-1 color" style="background-color:${localStorage.getItem("todoRenkValueKey" + id)}" type="checkbox" id="firstCheckbox">
      </div>
      <div class="col-7 mid-side">
        <label class="form-check-label" for="firstCheckbox">${localStorage.getItem("todoBaslikYaziValueKey" + id)}</label>
        <p class="form-check-p">${localStorage.getItem("todoIcerikYaziValueKey" + id)}</p>
      </div>
      <div class="col-4 right-side">
        <!-- <div class="buttonContainer">
          <button class="deleteButton button"><i class="bi bi-trash2 icon"></i></button>
          <button class="editButton button"><i class="bi bi-pencil-square icon"></i></button>
        </div> -->
      </div>
    </div>
  </li>
</ul> 
  `
  let gonderilenTodolar = localStorage.getItem("gonderilenTodolar")
  gonderilenTodolar += id
  localStorage.setItem("gonderilenTodolar",gonderilenTodolar)
  localStorage.setItem("yapilmisHTML",yapilmisTodolarDiv.innerHTML)
  window.removeEventListener('beforeunload', function(){
    document.getElementById(`ul${id}`).classList.remove("animate__fadeOut")
    document.getElementById(`ul${id}`).remove()
    localStorage.setItem("yapilmamisHTML",yapilmamisTodolarDiv.innerHTML)
  });


}


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
