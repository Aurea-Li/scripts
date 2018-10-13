/********************************************
 *
 *
 *  Script to automatically select all coupons from Safeway
 *  coupon page.
 *
 *  Run in console in browser window.
 *
 *********************************************/


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
