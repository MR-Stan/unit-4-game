let gameObject = {

    // create character objects
    // sum of hp, ap, and ca equals 150 for each character ****************** need to update *******************
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    characters : [
        {
            name: "Obi-Wan Kenobi",
            hp: 130, // health points
            ap: 12, // attack power
            ca: 8, // counter attack power
            img: "<img src='assets/images/obi.webp' alt='image of Obi-Wan Kenobi' class='image'>"
        },

        {
            name: "Luke Skywalker",
            hp: 120, // health points
            ap: 15, // attack power
            ca: 15, // counter attack power
            img: "<img src='assets/images/luke.jpg' alt='image of Luke Skywalker' class='image'>"
        },

        {
            name: "Darth Sidious",
            hp: 125, // health points
            ap: 10, // attack power
            ca: 15, // counter attack power
            img: "<img src='assets/images/darthsidious.webp' alt='image of Darth Sidious' class='image'>"
        },

        {
            name: "Darth Maul",
            hp: 100, // health points
            ap: 30, // attack power
            ca: 20, // counter attack power
            img: "<img src='assets/images/darthmaul.jpg' alt='image of Darth Maul' class='image'>"
        },

        {
            name: "Yoda",
            hp: 130, // health points
            ap: 12, // attack power
            ca: 8, // counter attack power
            img: "<img src='assets/images/yoda.jpg' alt='image of Yoda' class='image'>"
        }

    ],

    // set gameObject variables
    // ------------------------------------------------------------------------------------------------------------------------------------------------------

    heroHealth : 0,

    heroAttack : 0,

    heroBase : 0,

    enemyCounter : 0, 

    enemyHealth : 0, 

    enemiesRemaining : 0, 

    // initialize game
    // ------------------------------------------------------------------------------------------------------------------------------------------------------

    initialize : function() {
        $(document).ready(function() {
        // provide instructions
        gameObject.reset();
        });
    },
    
    // reset game 
    // ------------------------------------------------------------------------------------------------------------------------------------------------------

    reset : function() {
        $("main").empty();
        gameObject.createDivs();
        $("#status").text("Choose a hero to begin your journey.");
        $("#versus").hide(); 
        $("#battleLog").hide();
        $(".button").hide();
        $.each(this.characters, function (index) {
            gameObject.enemiesRemaining = Math.max(index);
            $("#characterContainer").append("<div id='character" + index + "'</div>");
            $("#character" + index).addClass("character");
            $("#character" + index).attr({
                'data-name' : gameObject.characters[index].name,
                'data-hp' : gameObject.characters[index].hp,
                'data-ap' : gameObject.characters[index].ap,
                'data-ca' : gameObject.characters[index].ca
            });
            $("#character" + index).append(this.img);
        });
        gameObject.chooseHero();
        },

    // create HTML elements
    // ------------------------------------------------------------------------------------------------------------------------------------------------------

    createDivs : function() {

        // create gameStatus container
        $("<div/>").attr("id", "gameStatus").appendTo("main");

            // create winText - hold wins
            $("<div/>").attr("id", "winText").appendTo("#gameStatus");

                // create wins - holds 'Wins: '
                $("<span/>").attr("id", "wins").after("#winText");

                // add 'Wins: ' text
                $("#winText").text("Wins: ");

            // create lossText - holds losses
            $("<div/>").attr("id", "lossText").appendTo("#gameStatus");

                // create losses - holds 'Losses: '
                $("<span/>").attr("id", "losses").after("#lossText");

                // add 'Losses: ' text
                $("#lossText").text("Losses: ");

            // create status - tracks status of game
            $("<div/>").attr("id", "status").appendTo("main");
        // end of gameStatus container

        // create characterContainer - holds characters prior to hero selection
        $("<div/>").attr("id", "characterContainer").appendTo("main");

        // create enemySelectionContainer - holds remaining characters after hero selection
        $("<div/>").attr("id", "enemySelectionContainer").appendTo("main");

        // create battleContainer - holds battle information
        $("<div/>").attr("id", "battleContainer").appendTo("main");

            // create battleText - keeps track of what characters are fighting
            $("<div/>").attr("id", "battleText").appendTo("#battleContainer");

            // create attacker - holds hero image
            $("<div/>").attr("id", "attacker").appendTo("#battleContainer");

            // create versus - holds 'VS' in between attacker and defender
            $("<div/>").attr("id", "versus").appendTo("#battleContainer");

                // adds VS text to versus
                $("#versus").html("VS");

            // create defender - holds enemy image
            $("<div/>").attr("id", "defender").appendTo("#battleContainer");
        // end of battleContainer

        // create buttonContainer to hold buttons
        $("<div/>").attr("id", "buttonContainer").appendTo("main");

        // create button for hero confirmation
        $("<button>", {text : "Confirm Hero", id : "confirmHeroBtn", class : "button"}).appendTo("#buttonContainer");

        // create button for hero return
        $("<button>", {text : "Select New Hero", id : "returnHeroBtn", class : "button"}).appendTo("#buttonContainer");

        // create button for enemy confirmation
        $("<button>", {text : "Confirm Enemy", id : "confirmEnemyBtn", class : "button"}).appendTo("#buttonContainer");

        // create button for enemy return
        $("<button>", {text : "Select New Enemy", id : "returnEnemyBtn", class : "button"}).appendTo("#buttonContainer");

        // create attack button
        $("<button>", {text : "Attack!", id : "attackBtn", class : "button"}).appendTo("#buttonContainer");

        // create play again button
        $("<button>", {text : "Play Again", id : "playAgainBtn", class : "button"}).appendTo("#buttonContainer");

        // create battleLog - keeps track of attack and counter damage
        $("<div/>").attr("id", "battleLog").appendTo("main");

    },

    // 
    // ------------------------------------------------------------------------------------------------------------------------------------------------------

    chooseHero : function() {
        for (let i = 0; i < 1; i++) {
            $("#characterContainer").on("click", ".character", function() {
                gameObject.heroHealth = ($(this).attr("data-hp"));
                gameObject.heroBase = ($(this).attr("data-ap"));
                gameObject.heroAttack = 0;
                $(this).attr("class", "hero");
                $(".hero").appendTo("#attacker");
                $(".character").appendTo("#enemySelectionContainer")
                $("#enemySelectionContainer").hide();
                $("#status").text("You chose " + ($(this).attr("data-name")) + " as your hero. Are you sure?");
                gameObject.confirmHeroSelection();
            });
        }
    },

    // 
    // ------------------------------------------------------------------------------------------------------------------------------------------------------

    confirmHeroSelection : function() {
        $("#confirmHeroBtn").show();
        $("#returnHeroBtn").show();
        $("#confirmHeroBtn").on("click", function() {
            gameObject.confirmHero();
        });
        $("#returnHeroBtn").on("click", function() {
            gameObject.reset();
        });
    },

    // 
    // ------------------------------------------------------------------------------------------------------------------------------------------------------

    confirmHero : function() {
        $("#confirmHeroBtn").hide();
        $("#returnHeroBtn").hide();
        $(".hero").hide();
        gameObject.chooseEnemy();
    },

    // 
    // ------------------------------------------------------------------------------------------------------------------------------------------------------

    chooseEnemy : function() {
        $("#status").text("Select an enemy to battle.");
        $("#enemySelectionContainer").show();
        for (let i = 0; i < 1; i++) {
            $("#enemySelectionContainer").on("click", ".character", function() {
                gameObject.enemyCounter = ($(this).attr("data-ca")); 
                gameObject.enemyHealth = ($(this).attr("data-hp"));
                $(this).attr("class", "defender");
                $(".defender").appendTo("#defender");
                $("#status").text("You chose to battle " + ($(this).attr("data-name")) + ". Are you sure?");
                $("#enemySelectionContainer").hide();
                gameObject.confirmEnemySelection();
            });
        }
    },

    // 
    // ------------------------------------------------------------------------------------------------------------------------------------------------------

    confirmEnemySelection : function() {
        $("#confirmEnemyBtn").show();
        $("#returnEnemyBtn").show();
        $("#confirmEnemyBtn").on("click", function() {
            gameObject.confirmEnemy();
        });
        $("#returnEnemyBtn").on("click", function() {
            gameObject.returnEnemy();
        });
    },

    // 
    // ------------------------------------------------------------------------------------------------------------------------------------------------------

    confirmEnemy : function() {
        $("#confirmEnemyBtn").hide();
        $("#returnEnemyBtn").hide();
        $("#enemySelectionContainer").hide();
        gameObject.battle();
    },

    // 
    // ------------------------------------------------------------------------------------------------------------------------------------------------------

    returnEnemy : function() {
        $(".defender").appendTo("#enemySelectionContainer");
        $(".defender").attr("class", "character");
        $("#enemySelectionContainer").show();
        $("#confirmEnemyBtn").hide();
        $("#returnEnemyBtn").hide();
        gameObject.chooseEnemy();
    },

    // 
    // ------------------------------------------------------------------------------------------------------------------------------------------------------

    battle : function() {
        $("#status").text("Prepare to battle!");
        $(".button").hide() // why are enemy buttons showing here?
        $(".hero").show();
        $("#versus").show();
        $("#attackBtn").show();
        let attack = parseInt(gameObject.heroAttack);
        $("#attackBtn").click(function() { 
            $("#status").text("May the force be with you!"); // create array of star wars lines and loop through
            $("#battleLog").show();
            attack += parseInt(gameObject.heroBase);
            $("#battleLog").append("<br>You attacked for " + attack + " damage!");
            $("#battleLog").append("<br>You were counter attacked for " + gameObject.enemyCounter + " damage!<br>")
            gameObject.enemyHealth -= attack;
            console.log(gameObject.enemyHealth);
            gameObject.checkWin();
            gameObject.heroHealth -= gameObject.enemyCounter;
            gameObject.checkWin();
            return attack; 
        });
    },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------

    winCount : function() {
        $("#status").text("You win!");
        let winCounter = 0;
        return function() {
            winCounter += 1; 
            $("#wins").text(winCounter);
            return winCounter;
        }
    },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------

    lossCount : function() {
        $("#status").text("You lose!");
        let lossCounter = 0;
        return function() {
            lossCounter += 1; 
            $("#losses").text(lossCounter);
            return lossCounter;
        }
    },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------

    checkWin : function() {
        $("#status").show();
        console.log(gameObject.enemiesRemaining);
        if (gameObject.enemyHealth <= 0 ) {
            gameObject.winCount();
            if (gameObject.enemiesRemaining >= 1) { 
                gameObject.nextEnemy();
            }
            else {
                $("#status").text("You have defeated all enemies!")
                gameObject.playAgain();
            }
        }
        else if (gameObject.heroHealth <= 0) {
            gameObject.lossCount();

        }
    },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------

    nextEnemy : function() {
        gameObject.enemiesRemaining--;
        $("#status").text("You defeated an enemy.")
        $("#attackBtn").hide();
        $("#battleLog").empty();
        $("#battleLog").hide();
        $(".hero").hide();
        $("#versus").hide();
        $(".defender").empty();
        $("#enemySelectionContainer").show();
        gameObject.chooseEnemy();
    },

    // ------------------------------------------------------------------------------------------------------------------------------------------------------

    playAgain : function() {
        $("#attackBtn").hide();
        $("#battleLog").hide();
        $("#status").append(" Would you like to play again?");
        $("#playAgainBtn").show(); 
        $("#playAgainBtn").click(function() { 
        gameObject.reset();
        });
        
    },

    // keep count of wins and losses by battle. if win select next enemy. if lose replace enemy and select next.

}


// name and hp are displayed around character

// must be able to win no matter what character is chosen

gameObject.initialize();


