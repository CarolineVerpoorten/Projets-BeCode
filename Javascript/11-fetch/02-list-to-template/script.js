/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
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

        let template = document.getElementById("tpl-hero").content;

        let target = document.getElementById("target");

        xmen.forEach(element => {

            let clone = template.cloneNode(true);

            clone.querySelector(".name").innerHTML = element.name;
            clone.querySelector(".alter-ego").innerHTML = element.alterEgo;
            clone.querySelector(".powers").innerHTML = element.abilities;

            target.appendChild(clone);

        });
 
    });
})();
