const darkMode = document.getElementById("darkMode");
const darkModeContainer = document.getElementById("dark-light");
const blueBg = document.getElementById("blueBg")

function updateTheme(isDarkMode){
    if(isDarkMode){
        document.body.classList.add("dark-mode");
          darkModeContainer.innerHTML = '<i class="fa-regular fa-sun"></i>';
        blueBg.src = "assests/images/white background.png";
    }else{
        document.body.classList.remove("dark-mode")
          darkModeContainer.innerHTML = '<i class="fa-regular fa-moon"></i>';
        blueBg.src = "assests/images/blue background.png";
    }
}

let savedTheme = localStorage.getItem("theme");
if(savedTheme ==="dark"){
    updateTheme(true);
}else{
    updateTheme(false);
}

darkModeContainer.addEventListener("click",()=>{

    const isDarkMode = document.body.classList.contains("dark-mode");
    console.log(isDarkMode)
    if(isDarkMode){
        localStorage.setItem("theme","light");
        updateTheme(false)
    }else{
        localStorage.setItem("theme","dark");
        updateTheme(true)
    }
})