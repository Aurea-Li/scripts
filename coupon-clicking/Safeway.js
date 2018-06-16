/********************************************
 * 
 * 
 *  Script to automatically select all coupons from Safeway
 *  coupon page.
 * 
 *  Run in console in browser window.
 * 
 *********************************************/

/* Scroll to bottom of page */
function scrollToBottom() {
    while (window.scrollY + document.documentElement.clientHeight < document.body.scrollHeight) {
        window.scrollTo(0, document.body.scrollHeight - document.documentElement.clientHeight);
    } 
    return;
}
scrollToBottom();

/* Click all coupon buttons */
buttonList = document.querySelectorAll('span[role="button"]');


for (var i = 0; i < buttonList.length; i++) {

    (function (i) {
        setTimeout(function () {
            buttonList[i].click();
            console.log('Coupon ' + i + ' clicked!');
        }, 200 * i)
    })(i);
}




let handle = setInterval(checkButtons,500);






function stop() {

    alert('hi');
    if (numButtons == document.querySelectorAll('span[role="button"]').length) {
        clearInterval(handle);
        alert('Interval cleared');
    }
}

window.onload = stop;

function checkButtons() {

    let numButtons = document.querySelectorAll('span[role="button"]').length;
  
    window.scrollTo(0, document.body.scrollHeight);


}

function stopInterval() {
    clearInterval(handle);
}



/* Temporary Code - Refreshes page and add buttons until stops */

