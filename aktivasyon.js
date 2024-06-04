if(localStorage.getItem("active") != null){
    if(localStorage.getItem("active") == "true"){
        null
    }
    else{
        window.location.href = "aktive.html"
    }
}
else{
    localStorage.setItem("active","false")
    window.location.reload()
}