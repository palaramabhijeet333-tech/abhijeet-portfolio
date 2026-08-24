const darkMode = document.getElementById("darkMode");
const darkModeContainer = document.getElementById("dark-light");
const blueBg = document.getElementById("blueBg")


darkModeContainer.addEventListener("click",()=>{

    document.body.classList.toggle("dark-mode");
    if( document.body.classList.contains("dark-mode")){
        darkModeContainer.innerHTML = '<i class="fa-regular fa-sun"></i>'
        blueBg.src = "assests/images/white background.png"
    }else{
        darkModeContainer.innerHTML = '<i class="fa-regular fa-moon"></i>'
        blueBg.src = "assests/images/blue background.png"
    }
})