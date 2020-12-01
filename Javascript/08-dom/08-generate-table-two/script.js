/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    
    var table = document.createElement("table");

    document.getElementById("target").appendChild(table);

    for (var i = 0; i < 10; i++) {

        var row = table.insertRow(i);

        for (var j = 0; j < 10; j++) {

            var cell = row.insertCell(j);

            cell.innerHTML = (j + 1) * (i + 1);
        }
        
    }

})();
 