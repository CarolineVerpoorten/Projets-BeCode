/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    async function newHeroes(){

        let response = await fetch("http://localhost:3000/heroes");
 
        let xmen = await response.json();

        document.getElementById("run").addEventListener("click",() => {

            let name = document.getElementById("hero-name").value;
            let alterEgo = document.getElementById("hero-alter-ego").value;
            let power = document.getElementById("hero-powers").value;

            if(name == "" || alterEgo == "" || power == ""){

                alert("You must fill all the fields!")
            }

            else{

                let addXmen = {
                    "id": xmen.length +1,
                    "name": name,
                    "alterEgo": alterEgo,
                    "abilities": [power.split(",")]
                }
        
                xmen.push(addXmen);

                console.log(xmen);

            }
            
        })

    }
    // your code here

    newHeroes();

})();
