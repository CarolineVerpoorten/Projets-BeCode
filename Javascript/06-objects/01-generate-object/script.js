/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", function() {
        
        var moi = {
            lastname: "Verpoorten",
            firstname: "Caroline",
            age: "25",
            city: "Liège",
            country: "Belgium",
            summary : function () {
                return "Hello! My name is " + this.firstname + " " + this.lastname + ", I'm " + this.age + 
                        " and I live in " + this.city + ", " + this.country + ".";
            }
        };

        console.log(moi.summary(toString));

    });
    // your code here
})();
