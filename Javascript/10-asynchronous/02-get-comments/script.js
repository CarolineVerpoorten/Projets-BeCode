/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    function callback(error, articlesArray) {
        
        if (error != null){

            console.log("error");
        } 
        
        else {

            articlesArray.forEach(article => {

                window.lib.getComments(article.id, (error,commentsArray) => {

                    if (error != null){

                        console.log("error");
                    } 
                    
                    else {

                        article.comments = commentsArray;
                    }

                })
            })
        }
        
        console.log(articlesArray);

    }

    document.getElementById("run").addEventListener("click",() => {
    
        window.lib.getPosts(callback);
    
    })

})();
