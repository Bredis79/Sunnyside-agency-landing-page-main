const hamburger = document.querySelector(".hamburger-icon")
const mobileNavigation = document.querySelector(".mobile__navigation")

//toggle hamburger menu
hamburger.addEventListener("click", function(e){
    
    if (mobileNavigation.style.display === "none") {
            mobileNavigation.style.display = "flex"
            hamburger.style.opacity = "0.5"
        } else {
            mobileNavigation.style.display = "none"
            hamburger.style.opacity = "1"
    }
 
})