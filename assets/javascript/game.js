let winCounter = 0;

let lossCounter = 0;

let gameObject = {

    // character objects
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    characters : [
        {
            name: "Obi-Wan Kenobi",
            hp: 120, // health points
            ap: 8, // attack power
            ca: 12, // counter attack power
            img: "<img src='assets/images/obi.webp' alt='image of Obi-Wan Kenobi' class='image'>"
        },

        {
            name: "Luke Skywalker",
            hp: 110, // health points
            ap: 12, // attack power
            ca: 8, // counter attack power
            img: "<img src='assets/images/luke.jpg' alt='image of Luke Skywalker' class='image'>"
        },

        {
            name: "Darth Sidious",
            hp: 150, // health points
            ap: 5, // attack power
            ca: 15, // counter attack power
            img: "<img src='assets/images/darthsidious.webp' alt='image of Darth Sidious' class='image'>"
        },

        {
            name: "Darth Maul",
            hp: 100, // health points
            ap: 5, // attack power
            ca: 15, // counter attack power
            img: "<img src='assets/images/darthmaul.jpg' alt='image of Darth Maul' class='image'>"
        },

        {
            name: "Yoda",
            hp: 140, // health points
            ap: 10, // attack power
            ca: 10, // counter attack power
            img: "<img src='assets/images/yoda.jpg' alt='image of Yoda' class='image'>"
        }

    ],

    // gameObject variables
    // ------------------------------------------------------------------------------------------------------------------------------------------------------

    heroHealth : 0,

    heroAttack : 0,

    heroBase : 0,

    enemyCounter : 0, 

    enemyHealth : 0, 

    enemiesRemaining : 0, 

    heroID : 0,

    heroImg : "",

    heroName : "",

    enemyID : 0,

    enemyImg : "",

    heroName : "",
    
    // reset game 
    // ------------------------------------------------------------------------------------------------------------------------------------------------------

    reset : function() {
        $("main").empty();
        this.createDivs();
        $("#status").text("Choose a hero to begin your journey.");
        $("#versus").hide(); 
        $("#battleLog").hide();
        $(".button").hide();
        $("#enemySelectionContainer").hide()
        $("#battleContainer").hide();
        $.each(this.characters, function (index) {
            gameObject.enemiesRemaining = (Math.max(index) - 1);
            $("#characterContainer").append("<div id='character" + index + "'</div>");
            $("#character" + index).addClass("character");
            $("#character" + index).attr({
                'data-name' : gameObject.characters[index].name,
                'data-hp' : gameObject.characters[index].hp,
                'data-ap' : gameObject.characters[index].ap,
                'data-ca' : gameObject.characters[index].ca
            });
            $("#character" + index).append(this.img);
            $("#character" + index).append("<br>" + this.name);
            $("#character" + index).append("<br>Health: " + this.hp); 
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

                // add 'Wins:0' text
                $("#winText").text("Battles Won: " + winCounter);

            // create lossText - holds losses
            $("<div/>").attr("id", "lossText").appendTo("#gameStatus");

                // add 'Losses: ' text
                $("#lossText").text("Heroes Lost: " + lossCounter);
        // end of gameStatus container

        // create status - tracks status of game
        $("<div/>").attr("id", "status").appendTo("main");

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

        // create next enemy button
        $("<button>", {text : "Next Enemy", id : "nextBtn", class : "button"}).appendTo("#buttonContainer");

        // create battleLog - keeps track of attack and counter damage
        $("<div/>").attr("id", "battleLog").appendTo("main");
    },

    // Assigns hero information when character is selected
    // ------------------------------------------------------------------------------------------------------------------------------------------------------

    chooseHero : function() {
        $("#characterContainer").on("click", ".character", function() {
            $("#battleContainer").show();
            gameObject.heroHealth = ($(this).attr("data-hp"));
            gameObject.heroBase = ($(this).attr("data-ap"));
            gameObject.heroAttack = 0;
            $(this).attr("class", "hero");
            $(".hero").appendTo("#attacker");
            $(".character").appendTo("#enemySelectionContainer")
            $("#enemySelectionContainer").hide();
            $("#characterContainer").hide();
            $("#status").text("You chose " + ($(this).attr("data-name")) + " as your hero. Are you sure?");
            gameObject.heroId = this.id;
            gameObject.heroName = $(this).attr("data-name");
            let lastChar = gameObject.heroId[gameObject.heroId.length -1];
            gameObject.heroImg = gameObject.characters[lastChar].img;
            gameObject.confirmHeroSelection();
        });
    },

    // Confirms hero selection
    // ------------------------------------------------------------------------------------------------------------------------------------------------------

    confirmHeroSelection : function() {
        $("#confirmHeroBtn").show();
        $("#returnHeroBtn").show();
        $("#confirmHeroBtn").on("click", function() {
            $(".button").hide();
            $(".hero").hide();
            gameObject.chooseEnemy();
        });
        $("#returnHeroBtn").on("click", function() {
            gameObject.reset();
        });
    },

    // Assigns enemy information when character is selected
    // ------------------------------------------------------------------------------------------------------------------------------------------------------

    chooseEnemy : function() {
        $("#nextBtn").hide();
        $("#status").text("Select an enemy to battle.");
        $("#enemySelectionContainer").show();
        $("#enemySelectionContainer").on("click", ".character", function(e) {
            e.stopImmediatePropagation()
            gameObject.enemyCounter = ($(this).attr("data-ca")); 
            gameObject.enemyHealth = ($(this).attr("data-hp"));
            $(this).attr("class", "defender");
            $(".defender").appendTo("#defender");
            $("#status").text("You chose to battle " + ($(this).attr("data-name")) + ". Are you sure?");
            $("#enemySelectionContainer").hide();
            gameObject.enemyId = this.id;
            gameObject.enemyName = $(this).attr("data-name");
            let lastChar = gameObject.enemyId[gameObject.enemyId.length -1];
            gameObject.enemyImg = gameObject.characters[lastChar].img;
            gameObject.confirmEnemySelection(); 
        });
    },

    // Confirms enemy selection
    // ------------------------------------------------------------------------------------------------------------------------------------------------------

    confirmEnemySelection : function() {
        $("#confirmEnemyBtn").show();
        $("#returnEnemyBtn").show();
        $("#confirmEnemyBtn").on("click", function() {
            $(".button").hide();
            $("#enemySelectionContainer").hide();
            gameObject.battle();
        });
        $("#returnEnemyBtn").on("click", function() {
            $(".defender").appendTo("#enemySelectionContainer");
            $(".defender").attr("class", "character");
            $("#enemySelectionContainer").show();
            $(".button").hide();
            gameObject.chooseEnemy();
        });
    },

    // Battle screen - attacker (hero) - VS - enemy (defender)
    // ------------------------------------------------------------------------------------------------------------------------------------------------------

    battle : function() {
        $("#status").text("Prepare to battle!");
        $(".button").hide() 
        $(".hero").show();
        $("#versus").show();
        $("#attackBtn").show();
        let attack = parseInt(this.heroAttack);
        $("#attackBtn").click(function(e) { 
            e.stopImmediatePropagation();
            $("#status").text("May the force be with you!"); 
            $("#battleLog").show();
            attack += parseInt(gameObject.heroBase);
            $("#battleLog").append("<br>You attacked for " + attack + " damage!");
            $("#battleLog").append("<br>You were counter attacked for " + gameObject.enemyCounter + " damage!<br>")
            gameObject.enemyHealth -= attack;
            if (gameObject.enemyHealth > 0) {
                gameObject.heroHealth -= gameObject.enemyCounter;
                if (gameObject.heroHealth < 0) {
                    gameObject.heroHealth = 0;
                }
            }
            else if (gameObject.enemyHealth <= 0) {
                gameObject.enemyHealth = 0;
            }
            $("#" + gameObject.heroId).html(gameObject.heroImg + "<br>" + gameObject.heroName + "<br>Health: " + gameObject.heroHealth); 
            $("#" + gameObject.enemyId).html(gameObject.enemyImg + "<br>" + gameObject.enemyName + "<br>Health: " + gameObject.enemyHealth); 
            gameObject.checkWin();
        });
    },

    // Keeping track of wins
    // ------------------------------------------------------------------------------------------------------------------------------------------------------

    winCount : function() {
        $("#status").text("You win!");
        //let winCounter = 0;
        return function() {
            winCounter += 1; 
            $("#winText").text("Battles Won: " + winCounter);
            return winCounter;
        }
    }(),

    // Keeping track of losses
    // ------------------------------------------------------------------------------------------------------------------------------------------------------

    lossCount : function() {
        $("#status").text("You lose!");
        //let lossCounter = 0;
        return function() {
            lossCounter += 1; 
            $("#lossText").text("Heroes Lost: " + lossCounter);
            return lossCounter;
        }
    }(),

    // Checking to see if win / loss occurred on last attackBtn click
    // ------------------------------------------------------------------------------------------------------------------------------------------------------

    checkWin : function() {
        $("#status").show();
        if (this.enemyHealth === 0) {
            gameObject.winCount();
            if (this.enemiesRemaining === 0) {
                $("#battleContainer").hide();
                $("#status").text("You have defeated all enemies!")
                this.playAgain();
            }
            else {
                this.nextEnemy();
            }
        }
        else if (this.enemyHealth > 0) {
            if (this.heroHealth <= 0) {
                $("#status").text("You were defeated!");
                this.lossCount();
                this.playAgain();
            }
        }
    },

    // Returns to enemy selection after defender is defeated if additional enemies remain
    // ------------------------------------------------------------------------------------------------------------------------------------------------------

    nextEnemy : function() {
        this.enemiesRemaining--;
        $("#status").text("You defeated an enemy.")
        $("#attackBtn").hide();
        $("#nextBtn").show();
        $("#nextBtn").on("click", function() {
            $(".hero").hide();
            $("#versus").hide();
            $(".defender").empty();
            $("#battleLog").empty();
            $("#battleLog").hide();
            $("#enemySelectionContainer").show();
            gameObject.chooseEnemy();
        });
    },

    // Gives the user the option to reset the game
    // ------------------------------------------------------------------------------------------------------------------------------------------------------

    playAgain : function() {
        $(".button").hide();
        $("#battleLog").hide();
        $("#playAgainBtn").show(); 
        $("#playAgainBtn").click(function() { 
            gameObject.reset();
        });
    },
}

gameObject.reset();


