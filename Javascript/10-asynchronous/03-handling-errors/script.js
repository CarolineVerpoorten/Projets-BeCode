/* becode/javascript
 *
 * /10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    function callback(error, peopleArray){

        if(error != null){

            console.log("error");
        } 
        
        else {

            console.log(peopleArray);
        }

    }

    document.getElementById("run").addEventListener("click",() => {

        window.lib.getPersons(callback);

    })
    
})();
