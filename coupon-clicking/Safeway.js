/********************************************
 * 
 * 
 *  Script to automatically select all coupons from Safeway
 *  coupon page.
 * 
 *  Run in console in browser window.
 * 
 *********************************************/

let availableButtons = 0;

var handle = setInterval(function () {checkButtons() },500);

function checkButtons() {

    alert(availableButtons);    
    window.scrollTo(0, document.body.scrollHeight);
    availableButtons = alert(document.querySelectorAll('span[role="button"]').length);
}

function stopInterval() {
    clearInterval(handle);
}

