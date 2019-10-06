let gameObject = {
    // sum of hp, ap, and ca equals 150 for each character
    characters : [
        {
            name: "Obi-Wan Kenobi",
            hp: 130, // health points
            ap: 12, // attack power
            ca: 8, // counter attack power
            img: "<img src='assets/images/obi.webp' alt='image of Obi-Wan Kenobi'>"
        },

        {
            name: "Luke Skywalker",
            hp: 120, // health points
            ap: 15, // attack power
            ca: 15, // counter attack power
            img: "<img src='assets/images/luke.jpg' alt='image of Luke Skywalker'>"
        },

        {
            name: "Darth Sidious",
            hp: 125, // health points
            ap: 10, // attack power
            ca: 15, // counter attack power
            img: "<img src='assets/images/darthsidious.webp' alt='image of Darth Sidious'>"
        },

        {
            name: "Darth Maul",
            hp: 100, // health points
            ap: 30, // attack power
            ca: 20, // counter attack power
            img: "<img src='assets/images/darthmaul.jpg' alt='image of Darth Maul'>"
        }
    ],

    heroHealth : 0,

    heroAttack : 0,

    heroBase : 0,

    enemyCounter : 0, 

    enemyHealth : 0, // need to assign further down

    initialize : function() {
        $(document).ready(function() {
        // provide instructions
        gameObject.reset();
        });
    },
    
    reset : function() {
        $("main").empty();
        gameObject.createDivs();
        $("#status").append("<h3>Choose a hero: </h3>");
        $("#versus").hide(); 
        $(".button").hide();

        $.each(this.characters, function (index) {
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

    // create HTML divs
    createDivs : function() {

        // create gameStatus container
        $("<div/>").attr("id", "gameStatus").appendTo("main");

            // create winText - hold wins
            $("<div/>").attr("id", "winText").appendTo("#gameStatus");

                // create wins - holds 'Wins: '
                $("<span/>").attr("id", "wins").after("#winText");

                    // add 'Wins: ' text
                    $("#wins").append("Wins: ");

            // create lossText - holds losses
            $("<div/>").attr("id", "lossText").appendTo("#gameStatus");

                // create losses - holds 'Losses: '
                $("<span/>").attr("id", "losses").after("#lossText");

                    // add 'Losses: ' text
                    $("#losses").append("Losses: ");

            // create status - tracks status of game
            $("<div/>").attr("id", "status").appendTo("#gameStatus");
        // end of gameStatus container

        // create characterContainer - holds characters prior to hero selection
        $("<div/>").attr("id", "characterContainer").appendTo("main");

        // create enemySelectionContainer - holds remaining characters after hero selection
        $("<div/>").attr("id", "enemySelectionContainer").appendTo("main");

        // create onDeckContainer - holds remaining characters after hero and enemy selection
        $("<div/>").attr("id", "onDeckContainer").appendTo("main");

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

        // create battleLog - keeps track of attack and counter damage
        $("<div/>").attr("id", "battleLog").appendTo("main");

        // create attack button
        $("<button>", {text : "Attack!", id : "attackBtn", class : "button"}).appendTo("main");

    },

    // need to have the option to switch hero
    // need button to move to next
    chooseHero : function() {
        for (let i = 0; i < 1; i++) {
            $("#characterContainer").on("click", ".character", function() {
                gameObject.heroHealth = ($(this).attr("data-hp"));
                gameObject.heroBase = ($(this).attr("data-ap"));
                gameObject.heroAttack = 0;
                $(this).attr("class", "hero");
                $(".hero").appendTo("#attacker");
                $("#status").text("You chose " + ($(this).attr("data-name")) + " as your hero.");
                $(".character").appendTo("#enemySelectionContainer");
                gameObject.chooseEnemy();
            });

        }
    },
    
    chooseEnemy : function() {
        for (let i = 0; i < 1; i++) {
            $("#enemySelectionContainer").on("click", ".character", function() {
                gameObject.enemyCounter = ($(this).attr("data-ca")); 
                gameObject.enemyHealth = ($(this).attr("data-hp"));
                $(this).attr("class", "defender");
                $(".defender").appendTo("#defender");
                $("#status").text("You chose to attack " + ($(this).attr("data-name")));
                $(".character").appendTo("#onDeckContainer");
                $("#onDeckContainer").hide();
                gameObject.battle();
            });
        }
    },

    // need to do something on first attack
    battle : function() {
        $("#versus").show();
        $(".button").show();
        let attack = parseInt(gameObject.heroAttack);
        $("#attackBtn").click(function() { 
            attack += parseInt(gameObject.heroBase);
            $("#battleLog").append("You attacked for " + attack + " damage!");
            $("#battleLog").append("You were counter attacked for " + gameObject.enemyCounter + " damage!")
            gameObject.enemyHealth -= attack;
            gameObject.checkWin();
            gameObject.heroHealth -= gameObject.enemyCounter;
            gameObject.checkWin();
            console.log(gameObject.enemyHealth);
            console.log(gameObject.heroHealth);
            return attack; 
        });
    },

    winCount : function() {
        let winCounter = 0;
        return function() {
            winCounter += 1; 
            $("#wins").text(winCounter);
            return winCounter;
        }
    },

    lossCount : function() {
        let lossCounter = 0;
        return function() {
            lossCounter += 1; 
            $("#losses").text(lossCounter);
            return lossCounter;
        }
    },

    checkWin : function() {
        if (gameObject.enemyHealth <= 0 ) {
            gameObject.winCount();
            gameObject.reset();
        }
        else if (gameObject.heroHealth <= 0) {
            gameObject.lossCount();
            gameObject.reset();
        }
    }

}

// attack power is iterative

// counter attack power doesn't change



// opponent counter attacks instantly

// characters div holds four options initially - white background green border
// select one and it moves to hero div 
// the other three move to enemies div - red background with black lines
// select one to battle which moves to defender div - black background with green border
// once hp === 0 enemy disappears

// only name and hp are displayed around character

// must be able to win no matter what character is chosen

// text at the bottom displays attack and counter damage and win / lose

gameObject.initialize();


