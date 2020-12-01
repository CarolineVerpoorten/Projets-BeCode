function Person(race, item) {
    this.race = race;
    this.item = item;
    this.currenthealth = 100;
    this.maxHealth = 100;

    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;
}

// GET ACTION BUTTONS
let p1Hit = document.getElementById("p1-hit");
let p1Heal = document.getElementById("p1-heal");
let p1Yield = document.getElementById("p1-yield");
let p2Hit = document.getElementById("p2-hit");
let p2Heal = document.getElementById("p2-heal");
let p2Yield = document.getElementById("p2-yield");

// CREATE PLAYERS
let player1 = new Person();
let player2 = new Person();

player1.race = document.getElementById("race-one").value;
player1.item = document.getElementById("item-one").value;
player2.race = document.getElementById("race-two").value;
player2.item = document.getElementById("item-two").value;

player1Name = document.getElementById("name-one").value;
player2Name = document.getElementById("name-two").value;

// SET APPEARANCE
document.getElementById("creation").style.display = "flex";
document.getElementById("battle").style.display = "none";
document.getElementById("start").style.display = "none";
document.getElementById("start-again").style.display = "none";
document.getElementById("log-container").style.display = "none";

// LOG SROLLING
let scrolling = document.getElementById("log-container");


// CHARACTER CREATION
document.getElementById("run").addEventListener("click", function() {

    // RETRIEVE INFO
    player1.race = document.getElementById("race-one").value;
    player1.item = document.getElementById("item-one").value;
    player2.race = document.getElementById("race-two").value;
    player2.item = document.getElementById("item-two").value;

    document.getElementById("p1-race").innerHTML += player1.race;
    document.getElementById("p1-item").innerHTML += player1.item;
    document.getElementById("p2-race").innerHTML += player2.race;
    document.getElementById("p2-item").innerHTML += player2.item;

    // NAMES
    if(document.getElementById("name-one").value.length == 0){
        player1Name = "Player 1";
    }
    else{
        player1Name = document.getElementById("name-one").value;
    }
    
    if(document.getElementById("name-two").value.length == 0){
        player2Name = "Player 2";
    }
    else{
        player2Name = document.getElementById("name-two").value;
    }

    document.getElementById("p1-name").innerHTML = player1Name;
    document.getElementById("p2-name").innerHTML = player2Name;


    // BLOCK ACTION BUTTONS
    p2Hit.disabled = true;
    p2Heal.disabled = true;
    p2Yield.disabled = true;

    p1Hit.disabled = true;
    p1Heal.disabled = true;
    p1Yield.disabled = true;

    // HEALTHBAR
    document.getElementById("p1-healthbar").style.width = player1.currenthealth + "%";
    document.getElementById("p2-healthbar").style.width = player2.currenthealth + "%";

    // IMAGE SELECTION
    switch (player1.race) {
        case "Human":
            document.getElementById("p1-img").src = "ressources/human.png";
            document.getElementById("p1-img").alt = "Human";
        break;

        case "Elf":
            document.getElementById("p1-img").src = "ressources/elf.png";
            document.getElementById("p1-img").alt = "Elf";
        break;

        case "Vampire":
            document.getElementById("p1-img").src = "ressources/vampire.png";
            document.getElementById("p1-img").alt = "Vampire";
        break;

        case "Orc":
            document.getElementById("p1-img").src = "ressources/orc.png";
            document.getElementById("p1-img").alt = "Orc";

            //BONUS ORC
            player1.currenthealth = 140;
            player1.maxHealth = 140;
        break;
    }

    switch (player2.race) {
        case "Human":
            document.getElementById("p2-img").src = "ressources/human.png";
            document.getElementById("p2-img").alt = "Human";
        break;

        case "Elf":
            document.getElementById("p2-img").src = "ressources/elf.png";
            document.getElementById("p2-img").alt = "Elf";
        break;

        case "Vampire":
            document.getElementById("p2-img").src = "ressources/vampire.png";
            document.getElementById("p2-img").alt = "Vampire";
        break;

        case "Orc":
            document.getElementById("p2-img").src = "ressources/orc.png";
            document.getElementById("p2-img").alt = "Orc";

            //BONUS ORC
            player2.currenthealth = 140;
            player2.maxHealth = 140;
        break;
    }

    // SWITCH APPEARENCE
    document.getElementById("creation").style.display = "none";
    document.getElementById("run").style.display = "none";
    document.getElementById("powers").style.display = "none";
    document.getElementById("battle").style.display = "flex";
    document.getElementById("start").style.display = "block";

    // DISPLAY HEALTH
    document.getElementById("p1-health-points").innerHTML = "Health : " + player1.currenthealth;
    document.getElementById("p2-health-points").innerHTML = "Health : " + player2.currenthealth;
});


// START FIGHT
document.getElementById("start").addEventListener("click", function() {

    let randomStart = Math.random();

    // RANDOMIZE START
    if(randomStart < 0.5){
        
        p1Hit.disabled = false;
        p1Heal.disabled = false;
        p1Yield.disabled = false;  
    }

    else {

        p2Hit.disabled = false;
        p2Heal.disabled = false;
        p2Yield.disabled = false;
    }

    // DISPLAY LOG
    document.getElementById("log-container").style.display = "block";
    document.getElementById("start").style.display = "none";
   
});

// HEAL ACTION PLAYER 1
document.getElementById("p1-heal").addEventListener("click", function(){

    let heal = Math.floor((Math.random()*27)+3);

    // STAFF BONUS
    if(player1.item === "Staff"){
        player1.currenthealth += heal + (Math.floor(heal*0.2));
        document.getElementById("log").innerHTML += player1Name + " healed themselves with the help of their staff (+" + (heal + (Math.floor(heal*0.2))) + " health)</br></br>";
    }
    else{
        player1.currenthealth += heal;
        document.getElementById("log").innerHTML += player1Name + " decided to heal themselves (+" + heal + " health)</br></br>";
    }

    // NOT OVER MAXHEALTH
    if(player1.currenthealth > player1.maxHealth){
        player1.currenthealth = player1.maxHealth;
    }

    // CHANGE PLAYER
    p1Hit.disabled = true;
    p1Heal.disabled = true;
    p1Yield.disabled = true;

    p2Hit.disabled = false;
    p2Heal.disabled = false;
    p2Yield.disabled = false;

    // VAMPIRE BONUS
    if(player2.race === "Vampire"){
        let steal = Math.floor(player1.currenthealth*0.1);
        player1.currenthealth -= steal;
        player2.currenthealth += steal;
        document.getElementById("log").innerHTML += player2Name + " is a vampire, they stole " + steal + " hitpoints from " + player1Name + ".</br></br>";
    
        if(player2.currenthealth > player2.maxHealth){
            player2.currenthealth = player2.maxHealth;
        }
    }

    // DISPLAY HEALTH
    document.getElementById("p1-health-points").innerHTML = "Health : " + player1.currenthealth;
    document.getElementById("p2-health-points").innerHTML = "Health : " + player2.currenthealth;
    document.getElementById("p1-healthbar").style.width = player1.currenthealth + "%";
    document.getElementById("p2-healthbar").style.width = player2.currenthealth + "%";

    // LOG SCROLLING
    scrolling.scrollTop = scrolling.scrollHeight;
});

// HEAL ACTION PLAYER 2
document.getElementById("p2-heal").addEventListener("click", function(){

    let heal = Math.floor((Math.random()*27)+3);

    // STAFF BONUS
    if(player2.item === "Staff"){
        player2.currenthealth += heal + (Math.floor(heal*0.2));
        document.getElementById("log").innerHTML += player2Name + " healed themselves with the help of their staff (+" + (heal + (Math.floor(heal*0.2))) + " health)</br></br>";
    }
    else{
        player2.currenthealth += Math.floor((Math.random()*27)+3);
        document.getElementById("log").innerHTML += player2Name + " decided to heal themselves (+" + heal + " health)</br></br>";
    }

    // NOT OVER MAXHEALTH
    if(player2.currenthealth > player2.maxHealth){
        player2.currenthealth = player2.maxHealth;
    }

    // CHANGE PLAYER
    p1Hit.disabled = false;
    p1Heal.disabled = false;
    p1Yield.disabled = false;

    p2Hit.disabled = true;
    p2Heal.disabled = true;
    p2Yield.disabled = true;

    // VAMPIRE BONUS
    if(player1.race === "Vampire"){
        let steal = Math.floor(player2.currenthealth*0.1);
        player2.currenthealth -= steal;
        player1.currenthealth += steal;
        document.getElementById("log").innerHTML += player1Name + " is a vampire, they stole " + steal + " hitpoints from " + player2Name + ".</br></br>";
        
        if(player1.currenthealth > player1.maxHealth){
            player1.currenthealth = player1.maxHealth;
        }
    }

    // DISPLAY HEALTH
    document.getElementById("p1-health-points").innerHTML = "Health : " + player1.currenthealth;
    document.getElementById("p2-health-points").innerHTML = "Health : " + player2.currenthealth;
    document.getElementById("p1-healthbar").style.width = player1.currenthealth + "%";
    document.getElementById("p2-healthbar").style.width = player2.currenthealth + "%";

    // LOG SCROLLING
    scrolling.scrollTop = scrolling.scrollHeight;
});

//YIELD ACTION PLAYER 1
document.getElementById("p1-yield").addEventListener("click", function(){
    document.getElementById("log").innerHTML = "<h3>" + player1Name + " yielded! " + player2Name + " wins!</h3>";
    document.getElementById("start-again").style.display = "block";

    // BLOCK ACTION BUTTONS
    p2Hit.disabled = true;
    p2Heal.disabled = true;
    p2Yield.disabled = true;

    p1Hit.disabled = true;
    p1Heal.disabled = true;
    p1Yield.disabled = true;

    document.getElementById("start-again").addEventListener("click", function(){
        window.location.reload();
    });
});

//YIELD ACTION PLAYER 2
document.getElementById("p2-yield").addEventListener("click", function(){
    document.getElementById("log").innerHTML = "<h3>" + player2Name + " yielded! " + player1Name + " wins!</h3>";
    document.getElementById("start-again").style.display = "block";

    // BLOCK ACTION BUTTONS
    p2Hit.disabled = true;
    p2Heal.disabled = true;
    p2Yield.disabled = true;

    p1Hit.disabled = true;
    p1Heal.disabled = true;
    p1Yield.disabled = true;

    document.getElementById("start-again").addEventListener("click", function(){
        window.location.reload();
    });
});

// ATTACK ACTION PLAYER 1
document.getElementById("p1-hit").addEventListener("click", function(){

    let damage = Math.floor((Math.random()*17)+3);

    // ATTACK
    switch(player1.item){
        case "Sword":
            damage += Math.floor(damage*0.3);
            document.getElementById("log").innerHTML += player1Name + " attacked with their sword. (+30% damage)</br>";
        break;

        case "Bow":
            let x = Math.floor(Math.random()*100);
            if(x < 30){
                damage = damage*2;
                document.getElementById("log").innerHTML += player1Name + " attacked TWICE with their bow.</br>";
            }
            else{
                damage = damage;
                document.getElementById("log").innerHTML += player1Name + " attacked.</br>";
            }
        break;

        default:
            damage = damage;
            document.getElementById("log").innerHTML += player1Name + " attacked.</br>";
        break;
    }

    switch(player2.race){
        case "Human":
            damage -= Math.floor(damage*0.2);
            document.getElementById("log").innerHTML += player2Name + " is a strong human. (-20% damage)</br>";
        break;

        case "Elf":
            let y = Math.floor(Math.random()*100);
            if(y < 30){
                damage = Math.floor(damage*0.5);
                player1.currenthealth -= damage;
                document.getElementById("log").innerHTML += player2Name + " sent the attack back.</br>"  + player1Name + " takes " + damage + " damage.</br>";
                damage = 0;
            }
            else{
                damage = damage;
            }
        break;
    }

    if(player2.item == "Boots"){
        let z = Math.floor(Math.random()*100);
        if(z < 30){
            damage = 0;
            document.getElementById("log").innerHTML += player2Name + " dodged the attack.</br>";
        }
        else{
            damage = damage;
        }
    }

    player2.currenthealth -= damage;
    document.getElementById("log").innerHTML += "(" + damage + " damage)</br></br>";

    // CHANGE PLAYER
    p1Hit.disabled = true;
    p1Heal.disabled = true;
    p1Yield.disabled = true;

    p2Hit.disabled = false;
    p2Heal.disabled = false;
    p2Yield.disabled = false;

    // VAMPIRE BONUS
    if(player2.race === "Vampire"){
        let steal = Math.floor(player1.currenthealth*0.1);
        player1.currenthealth -= steal;
        player2.currenthealth += steal;
        document.getElementById("log").innerHTML += player2Name + " is a vampire, they stole " + steal + " hitpoints from " + player1Name + ".</br></br>";
    
        if(player2.currenthealth > player2.maxHealth){
            player2.currenthealth = player2.maxHealth;
        }
    }

    // LOG SCROLLING
    scrolling.scrollTop = scrolling.scrollHeight;

    // WIN OR LOSE
    if(player1.currenthealth <= 0){
        player1.currenthealth = 0;
        document.getElementById("log").innerHTML = "<h3>" + player1Name + " died! " + player2Name + " wins!</h3>";
        document.getElementById("start-again").style.display = "block";

        // BLOCK ACTION BUTTONS
        p2Hit.disabled = true;
        p2Heal.disabled = true;
        p2Yield.disabled = true;

        p1Hit.disabled = true;
        p1Heal.disabled = true;
        p1Yield.disabled = true;

        document.getElementById("start-again").addEventListener("click", function(){
            window.location.reload();
        });
    }
    if(player2.currenthealth <= 0){
        player2.currenthealth = 0;
        document.getElementById("log").innerHTML = "<h3>" + player2Name + " died! " + player1Name + " wins!</h3>";
        document.getElementById("start-again").style.display = "block";

        // BLOCK ACTION BUTTONS
        p2Hit.disabled = true;
        p2Heal.disabled = true;
        p2Yield.disabled = true;

        p1Hit.disabled = true;
        p1Heal.disabled = true;
        p1Yield.disabled = true;

        document.getElementById("start-again").addEventListener("click", function(){
            window.location.reload();
        });
    }

    // DISPLAY HEALTH
    document.getElementById("p1-health-points").innerHTML = "Health : " + player1.currenthealth;
    document.getElementById("p2-health-points").innerHTML = "Health : " + player2.currenthealth;
    document.getElementById("p1-healthbar").style.width = player1.currenthealth + "%";
    document.getElementById("p2-healthbar").style.width = player2.currenthealth + "%";
});



// ATTACK ACTION PLAYER 2
document.getElementById("p2-hit").addEventListener("click", function(){

    let damage = Math.floor((Math.random()*17)+3);

    // ATTACK
    switch(player2.item){
        case "Sword":
            damage += Math.floor(damage*0.3);
            document.getElementById("log").innerHTML += player2Name + " attacked with their sword. (+30% damage)</br>";
        break;

        case "Bow":
            let x = Math.floor(Math.random()*100);
            if(x < 30){
                damage = damage*2;
                document.getElementById("log").innerHTML += player2Name + " attacked TWICE with their bow.</br>";
            }
            else{
                damage = damage;
                document.getElementById("log").innerHTML += player2Name + " attacked.</br>";
            }
        break;

        default:
            damage = damage;
            document.getElementById("log").innerHTML += player2Name + " attacked.</br>";
        break;
    }

    switch(player1.race){
        case "Human":
            damage -= Math.floor(damage*0.2);
            document.getElementById("log").innerHTML += player1Name + " is a strong human. (-20% damage)</br>";
        break;

        case "Elf":
            let y = Math.floor(Math.random()*100);
            if(y < 30){
                damage = Math.floor(damage*0.5);
                player2.currenthealth -= damage;
                document.getElementById("log").innerHTML += player1Name + " sent the attack back.</br>" + player2Name + " takes " + damage + " damage.</br>"
                damage = 0;
            }
            else{
                damage = damage;
            }
        break;
    }

    if(player1.item == "Boots"){
        let z = Math.floor(Math.random()*100);
        if(z < 30){
            damage = 0;
            document.getElementById("log").innerHTML += player1Name + " dodged the attack.</br>";
        }
        else{
            damage = damage;
        }
    }

    player1.currenthealth -= damage;
    document.getElementById("log").innerHTML += "(" + damage + " damage)</br></br>";

    // CHANGE PLAYER
    p1Hit.disabled = false;
    p1Heal.disabled = false;
    p1Yield.disabled = false;

    p2Hit.disabled = true;
    p2Heal.disabled = true;
    p2Yield.disabled = true;

    // VAMPIRE BONUS
    if(player1.race === "Vampire"){
        let steal = Math.floor(player2.currenthealth*0.1);
        player2.currenthealth -= steal;
        player1.currenthealth += steal;
        document.getElementById("log").innerHTML += player1Name + " is a vampire, they stole " + steal + " hitpoints from " + player2Name + ".</br></br>";
        
        if(player1.currenthealth > player1.maxHealth){
            player1.currenthealth = player1.maxHealth;
        }
    }

    // LOG SCROLLING
    scrolling.scrollTop = scrolling.scrollHeight;

    // WIN OR LOSE
    if(player1.currenthealth <= 0){
        player1.currenthealth = 0;
        document.getElementById("log").innerHTML = "<h3>" + player1Name + " died! " + player2Name + " wins!</h3>";
        document.getElementById("start-again").style.display = "block";

        // BLOCK ACTION BUTTONS
        p2Hit.disabled = true;
        p2Heal.disabled = true;
        p2Yield.disabled = true;

        p1Hit.disabled = true;
        p1Heal.disabled = true;
        p1Yield.disabled = true;

        document.getElementById("start-again").addEventListener("click", function(){
            window.location.reload();
        });
    }
    if(player2.currenthealth <= 0){
        player2.currenthealth = 0;
        document.getElementById("log").innerHTML = "<h3>" + player2Name + " died! " + player1Name + " wins!</h3>";
        document.getElementById("start-again").style.display = "block";

        // BLOCK ACTION BUTTONS
        p2Hit.disabled = true;
        p2Heal.disabled = true;
        p2Yield.disabled = true;

        p1Hit.disabled = true;
        p1Heal.disabled = true;
        p1Yield.disabled = true;

        document.getElementById("start-again").addEventListener("click", function(){
            window.location.reload();
        });
    }

    // DISPLAY HEALTH
    document.getElementById("p1-health-points").innerHTML = "Health : " + player1.currenthealth;
    document.getElementById("p2-health-points").innerHTML = "Health : " + player2.currenthealth;
    document.getElementById("p1-healthbar").style.width = player1.currenthealth + "%";
    document.getElementById("p2-healthbar").style.width = player2.currenthealth + "%";

});

