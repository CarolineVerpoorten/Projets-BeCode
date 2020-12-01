/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    var password = document.getElementById("pass-one");
    var valid = document.getElementById("validity");
    var regex = /\d[\D]*\d/;

    password.addEventListener("input", function() {
    
    	if(password.value.length >= 8 && regex.test(password.value)){
    		valid.innerHTML = "OK";
        }
    });
})();
