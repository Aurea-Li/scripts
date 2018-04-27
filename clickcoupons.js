/********************************************
 * 
 * 
 *  Script to automatically select all coupons from QFC 
 *  coupon page.
 * 
 *  Run in console in browser window.
 * 
 *********************************************/



let buttonList = document.querySelectorAll('.Button.Button--green.Button--small.Color');

for (var i = 0; i < buttonList.length; i++) {

    (function (i) {
        setTimeout(function () {
            buttonList[i].click();
        }, 500 * i)
    })(i);
}
