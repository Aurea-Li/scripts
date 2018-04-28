/********************************************
 * 
 * 
 *  Script to automatically select all coupons from Safeway
 *  coupon page.
 * 
 *  Run in console in browser window.
 * 
 *********************************************/

let

setInterval(function () { 
    window.scrollTo(0, document.body.scrollHeight);
    console.log(document.querySelectorAll('span[role="button"]').length);
},500);


let buttonList = document.querySelectorAll('span[role="button"]');



for (let i = 0; i < buttonList.length; i++) {

    (function (i) {
        setTimeout(function () {
            buttonList[i].click();
        }, 500 * i)
    })(i);
}
