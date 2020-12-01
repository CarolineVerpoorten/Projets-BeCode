/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() { 
    
        let n = Number(document.getElementById("number").value);
        let res = 1;

        if (n < 0) {
            alert("Your number is negative, the operation isn't possible");
        } 
        
        else {
            
            for (let i=1 ; i<=n ; i++) {
                res = res * i;
            }
    
            alert(res);
        }
        // your code here
    });

})();s

