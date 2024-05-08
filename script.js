const scrollThreshold = 255;
window.onload = function () {
    dateForWeatherWidget();	// Calculate current date for weather widget

    document.querySelector('#mainLogo').classList.add ("hidden")
    document.querySelector('#btn-subscribe').classList.add('hidden');
    //onLeftSidenavToggle();
}
window.onscroll = stickyNavbarOnScroll;
function dateForWeatherWidget() {
    // Get current date with format "Day, Month Nth YYYY"
    const date = new Date();
    const day = date.toLocaleString('it-IT', {weekday: 'long'});
    const month = date.toLocaleString('it-IT', {month: 'long'});
    const dayNumber = date.getDate();
    const year = date.getFullYear();
    const hour =date.getHours();
    const Minutes =date.getMinutes();
    // Get cardinal suffix for the day number (e.g. 1st, 2nd, 3rd, 4th, ...)


    // Set date in weather widget
    document.querySelector('#today-date').innerHTML = `${dayNumber} ${month} ${year} - Aggiornato alle ${hour}.${Minutes}`;
    //document.querySelector('#weather-date-sidenav').innerHTML = `${day}, ${month} ${dayNumber}${cardinalSuffix(dayNumber)} ${year}`;
}
// Click event for sidebar toggle
function onLeftSidenavToggle() {
    // Toggle sidenav
    if (isLeftSidenavOpen()) closeLeftSidenav();
    else {
        //showStickyNavbar();
        openLeftSidenav();
    }
}
function isLeftSidenavOpen() {
    return Array.from(document.querySelector('#sidenav-left').classList).includes('active');
}

function openLeftSidenav() {
    document.querySelector('#sidenav-left').classList.add('active');
    document.querySelector('body').classList.add('overlay');
    document.querySelector('#sidenav-left-toggle-btn').children[0].classList.remove('fa-bars');
    document.querySelector('#sidenav-left-toggle-btn').children[0].classList.add('fa-times');
}
function closeLeftSidenav() {
    document.querySelector('#sidenav-left').classList.remove('active');
    document.querySelector('body').classList.remove('overlay');
    document.querySelector('#sidenav-left-toggle-btn').children[0].classList.remove('fa-times');
    document.querySelector('#sidenav-left-toggle-btn').children[0].classList.add('fa-bars');
    stickyNavbarOnScroll();
}

function stickyNavbarOnScroll() {
    // If page is scrolled, show navbar as fixed and add logo to it
    const scroll = document.documentElement.scrollTop || document.body.scrollTop;
    document.querySelector('.nav-primary-middle').classList.toggle('hidden', scroll > scrollThreshold);

    if (scroll > scrollThreshold) showStickyNavbar();
    else hideStickyNavbar();
}

function showStickyNavbar() {
    document.querySelector('#btn-subscribe').classList.remove ("hidden")
    document.querySelector('#central-subscribe').classList.add ("hidden")

    document.querySelector('#mainLogo').classList.remove ("hidden")
    document.querySelector('#sticky-navbar').classList.add('fixed-top');

}

function hideStickyNavbar() {
     document.querySelector('#sticky-navbar').classList.remove('fixed-top');
     document.querySelector('#btn-subscribe').classList.add('hidden');

    document.querySelector('#mainLogo').classList.add ("hidden")
    document.querySelector('#central-subscribe').classList.remove ("hidden")
}

function hideFooter() {
    if(document.getElementById("rep-page-footer").className.includes("is-open")){
        document.getElementById("rep-page-footer").className = "rep-page-footer";
    } else
    {
        document.getElementById("rep-page-footer").className = "rep-page-footer is-open";
    }
}