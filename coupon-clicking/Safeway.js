/********************************************
 *
 *
 *  Script to automatically select all coupons from Safeway
 *  coupon page.
 *
 *  Run in console in browser window.
 *
 *********************************************/

/* Click button to load all coupons */

for (i = 0; i < 20; i++) {
  (function () {
    setTimeout(function () {
      clickmore = document.querySelector('button[class="btn load-more"]');
      if (typeof clickmore != "undefined") {
        clickmore.click();
      }}, 300)  
  })();
}

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
