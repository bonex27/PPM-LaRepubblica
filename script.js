
window.onload = function () {
    dateForWeatherWidget();	// Calculate current date for weather widget

}

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
function hideFooter() {
    if(document.getElementById("rep-page-footer").className.includes("is-open")){
        document.getElementById("rep-page-footer").className = "rep-page-footer";
    } else
    {
        document.getElementById("rep-page-footer").className = "rep-page-footer is-open";
    }
}