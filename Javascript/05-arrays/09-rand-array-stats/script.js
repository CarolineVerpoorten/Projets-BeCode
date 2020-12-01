/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {
        
        let nums = [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
        ];

        document.getElementById("n-1").innerHTML = nums[0];
        document.getElementById("n-2").innerHTML = nums[1];
        document.getElementById("n-3").innerHTML = nums[2];
        document.getElementById("n-4").innerHTML = nums[3];
        document.getElementById("n-5").innerHTML = nums[4];
        document.getElementById("n-6").innerHTML = nums[5];
        document.getElementById("n-7").innerHTML = nums[6];
        document.getElementById("n-8").innerHTML = nums[7];
        document.getElementById("n-9").innerHTML = nums[8];
        document.getElementById("n-10").innerHTML = nums[9];
    

        let small = Math.min(...nums);
        let big = Math.max(...nums);
        let sum = nums.reduce((total, amount) => total + amount);
        let average = nums.reduce((total, amount) => total + amount, 0) / nums.length;
        
        document.getElementById("min").innerHTML = small;
        document.getElementById("max").innerHTML = big;
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("average").innerHTML = average;

    });
    // your code here

})();
