const meetMitra = document.getElementById('meet-mitra')
const ourMessage = document.getElementById('message-header')
const priorities = document.getElementById('priorities')
const endorsements = document.getElementById('endorsements')
const join = document.getElementById('join')
const meetMitraMobile = document.getElementById('meet-mitra-mobile')
const ourMessageMobile = document.getElementById('our-message-mobile')
const prioritiesMobile = document.getElementById('priorities-mobile')
const mobileNav = document.getElementById("mobile-button")
const mobileIcon = document.getElementById("mobile-icon")
const mobileMenu = document.getElementById("mobile-menu")
const mediaQuery = window.matchMedia('(min-width: 1250px)')

meetMitra.addEventListener('click', () => {
    document.querySelector('.meet-mitra').scrollIntoView({ block: 'start', behavior: 'smooth' });
    return false;
})

ourMessage.addEventListener('click', () => {
    document.querySelector('.message-header').scrollIntoView({ block: 'start', behavior: 'smooth' });
    return false;
})

priorities.addEventListener('click', () => {
    document.querySelector('.priorities').scrollIntoView({ block: 'start', behavior: 'smooth' });
    return false;
})

mobileNav.addEventListener('click', () => {
    mobileIcon.classList.toggle("toggled");
    mobileMenu.classList.toggle("open");
    return false;
})

meetMitraMobile.addEventListener('click', () => {
    mobileIcon.classList.toggle("toggled");
    mobileMenu.classList.toggle("open");
    document.querySelector('.meet-mitra').scrollIntoView({ block: 'start', behavior: 'smooth' });
    return false;
})
ourMessageMobile.addEventListener('click', () => {
    mobileIcon.classList.toggle("toggled");
    mobileMenu.classList.toggle("open");
    document.querySelector('.message-header').scrollIntoView({ block: 'start', behavior: 'smooth' });
    return false;
})
prioritiesMobile.addEventListener('click', () => {
    mobileIcon.classList.toggle("toggled");
    mobileMenu.classList.toggle("open");
    document.querySelector('.priorities').scrollIntoView({ block: 'start', behavior: 'smooth' });
    return false;
})

function handleMobileResize(e){
    if (e.matches){
        mobileIcon.classList.remove("toggled");
        mobileMenu.classList.remove("open");
    }
}

mediaQuery.addListener(handleMobileResize);