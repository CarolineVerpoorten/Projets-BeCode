/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function ask() {
    var age = prompt("How old are you?");
    var gender = prompt("What's your gender?");
    var town = prompt("What town do you live in?");
    
    if (confirm("You are " + age + ", you identify as " + gender + " and you live in " + town)) {
        alert("Thank you!");
    } 
    else {
        alert("Let's try again!");
        ask();
    }
    // your code here

})();
