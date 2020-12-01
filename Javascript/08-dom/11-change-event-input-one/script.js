/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    var password = document.getElementById("pass-one");
    var count = document.getElementById("counter");

    password.addEventListener("input", function() {

    	count.innerHTML = password.value.length + "/10";
    
    	if(password.value.length === 10){

    		password.disabled = true;
    	}
    });

})();
