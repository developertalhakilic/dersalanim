if(localStorage.getItem("lastBackground") == null){
    localStorage.setItem("lastBackground","#000")
}

function temayiDegistir(){
    let background = localStorage.getItem("lastBackground")
    console.log(background)
    const toggleButton = document.querySelector(".darkToggle")
    console.log(toggleButton.style.backgroundColor)
    if(background == "#000"){
        localStorage.setItem("lastBackground","#fff")
        background = "#fff"

        toggleButton.style.backgroundColor = "#fff"
        
        return null;
    }
    if(background == "#fff"){
        localStorage.setItem("lastBackground","#000")
        background = "#000"

        toggleButton.style.backgroundColor = "#000"
        // ! Dark Theme Kodları

        return null;
    }
}