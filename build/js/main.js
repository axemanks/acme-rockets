const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button') // define hamburgerBtn
    const mobileMenu = document.getElementById('mobile-menu') // define mobileMenu

    // toggle the two class attributes hidden and flex to show/hide the menu
    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')    
    }
    // add event listener to hamburgerBtn
    hamburgerBtn.addEventListener('click', toggleMenu)
    // add event listener to mobileMenu
    mobileMenu.addEventListener('click', toggleMenu)
}

// This is the trick to make sure that the function is not called before the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initApp)
