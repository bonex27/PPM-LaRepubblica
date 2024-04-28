function hideFooter() {
    if(document.getElementById("rep-page-footer").className.includes("is-open")){
        document.getElementById("rep-page-footer").className = "rep-page-footer";
    } else
    {
        document.getElementById("rep-page-footer").className = "rep-page-footer is-open";
    }
}