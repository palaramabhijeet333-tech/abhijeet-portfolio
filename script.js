const darkMode = document.getElementById("darkMode");
const darkModeContainer = document.getElementById("dark-light");
const blueBg = document.getElementById("blueBg");
const backBtn = document.getElementById("backBtn");
const forwardBtn = document.getElementById("forwardBtn");
const certificateDisplay = document.querySelector(".certificate-scroll-container");
const cancelBtn = document.getElementById("cancelBtn");
const certificateImg = certificateDisplay.querySelectorAll("img");
const zoomContainer = document.querySelector(".display-img-zoom");
const zoomImageCard = document.querySelector(".zoomed-image-card");
const zoomImage = document.getElementById("zoomImage");


// FUNCTION FOR DARK AND LIGHT MODE.
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
// WHEN PAGE LOADS IT WILL TOGGLE MODE ACCORDING TO YOU PREVIOUS MODE CHOOSE    
let savedTheme = localStorage.getItem("theme");
if(savedTheme ==="dark"){
    updateTheme(true);
}else{
    updateTheme(false);
}





// EVENT LISTENER AREA.
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
});
function displayZoomedImg(e){

    zoomImage.src = e.target.src

    zoomContainer.style.display = "block"
    
}
forwardBtn.addEventListener("click",()=>{
    const card = certificateDisplay.querySelector(".certificate-card");
    certificateDisplay.scrollLeft += (card.offsetWidth)*3 + 20;
   certificateDisplay.scrollBy({
    left:(card.offsetWidth * 3) + 20,
    behavior:"smooth"
   })
});
backBtn.addEventListener("click",()=>{
    const card = certificateDisplay.querySelector(".certificate-card");
    certificateDisplay.scrollLeft -= (card.offsetWidth)*3 + 20;
     certificateDisplay.scrollBy({
    left:-(card.offsetWidth * 3) + 20,
    behavior:"smooth"
   })
});
certificateImg.forEach(img =>{
    img.addEventListener("click",displayZoomedImg)
});
cancelBtn.addEventListener("click",()=>{
    zoomContainer.style.display = "none"
})