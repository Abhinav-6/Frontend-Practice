const openBurgerNavButton = document.getElementById("open-menu")
const closeBurgerNavButton = document.getElementById("close-menu")
const burgerNav = document.getElementById("burger-nav")

openBurgerNavButton.addEventListener("click", ()=>{
    openBurgerNavButton.style.display = "none"
    burgerNav.style.display = "flex"
    burgerNav.style.transform = "translateX(0%)"
})

closeBurgerNavButton.addEventListener("click", ()=> {
    
    burgerNav.style.display = "none"
    burgerNav.style.transform = "translateX(-100%)"
    openBurgerNavButton.style.display = "block"
})