/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById("run").addEventListener("click", async() => {

        let response = await fetch("http://localhost:3000/heroes");
 
        let xmen = await response.json();
 
        let choice = document.getElementById("hero-id").value;

        let chosenOne = xmen[choice - 1];

        if(choice <= 5 && choice > 0){

            document.getElementById("target").innerHTML = 
            
                `<li class="hero">
                    <h4 class="title">
                        <strong class="name"> ${chosenOne.name} </strong>
                        <em class="alter-ego"> ${chosenOne.alterEgo} </em>
                    </h4>
                     <p class="powers"> ${chosenOne.abilities} </p>
                </li>`
    
        }

        else {
            alert("Only numbers between 1 and 5!")
        }
    });

})();
