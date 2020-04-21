// Hide Loading
let Loading = document.querySelector('.body-loading');
let LoadingImg = document.querySelector('.lds-ellipsis');


window.onload = () => {    
    // Hide Loading
    setTimeout( () => {
        LoadingImg.classList.add('img-hide');
    }, 600);
    setTimeout( () => {
        Loading.classList.add('img-hide');
    }, 800);
    setTimeout( () => {
        Loading.remove()
    }, 1000);
}