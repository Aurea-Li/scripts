/********************************************
 * 
 * 
 *  Script to automatically select all coupons from Safeway
 *  coupon page.
 * 
 *  Run in console in browser window.
 * 
 *********************************************/


var handle = setInterval(function () {checkButtons() },500);

function checkButtons() {

    let numButtons = document.querySelectorAll('span[role="button"]').length;

    alert(numButtons);    
    window.scrollTo(0, document.body.scrollHeight);
    setTimeOut(){
    
        if (numButtons == document.querySelectorAll('span[role="button"]').length){
            clearInterval(handle);
            alert('Interval cleared');
        }
    }, 2000);
}

function stopInterval() {
    clearInterval(handle);
}

