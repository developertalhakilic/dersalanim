const soruEkleDiv = document.getElementById("soruEkle")
const soruBilgiAdd = document.getElementById("soruBilgiAdd")
const leftSide = document.getElementById("left")
const rightSide = document.getElementById("right")
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
    console.log("Fonksiyon Bağlı")
}