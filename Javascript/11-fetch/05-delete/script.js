/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    async function deleteHeroes(){

        let response = await fetch("http://localhost:3000/heroes");
 
        let xmen = await response.json();

        document.getElementById("run").addEventListener("click",() => {

            let choice = document.getElementById("hero-id").value;

            if(choice <= xmen.length && choice > 0){

                xmen.splice(choice - 1, 1);

                console.log(xmen);
            }

            else{

                alert("Only numbers between 1 and " + xmen.length);
            }
            
        })

    }
    // your code here

    deleteHeroes();
})();
