var gameObject = {

// set variables:
// characters hero enemies defender

// create character objects - name, health points, attack power, counter attack power, image
    characters : [
        {
            name: "Obi-Wan Kenobi",
            hp: 120,
            ap: 13,
            ca: 9,
            img: "<img src='assets/images/obi.webp' alt='image of Obi-Wan Kenobi'>"
        },

        {
            name: "Luke Skywalker",
            hp: 100,
            ap: 20,
            ca: 33,
            img: "<img src='assets/images/luke.jpg' alt='image of Luke Skywalker'>"
        },

        {
            name: "Darth Sidious",
            hp: 150,
            ap: 10,
            ca: 14,
            img: "<img src='assets/images/darthsidious.webp' alt='image of Darth Sidious'>"
        },

        {
            name: "Darth Maul",
            hp: 180,
            ap: 16,
            ca: 25,
            img: "<img src='assets/images/darthmaul.jpg' alt='image of Darth Maul'>"
        }
    ],

    heroHealth : 0,
    heroAttack : 0,
    // heroCounter : 0, need to change to enemy
    enemyHealth : 0, // need to assign further down



    initialize : function() {
        $(document).ready(function() {
        // provide instructions
        gameObject.reset();
        });
    },
    
    reset : function() {
        // set variables to ""
        $("#status").append("<h3>Choose a hero: </h3>");
        $("<button>", {text : "Attack!", id : "attackBtn", class : "button"}).appendTo("main");
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
                console.log(this);
            });
            gameObject.chooseHero();
        },

    // need to have the option to switch hero
    // need button to move to next
    chooseHero : function() {
        for (var i = 0; i < 1; i++) {
            $(document).on("click", ".character", function() {
                console.log(this);
                $(this).attr("class", "hero");
                gameObject.heroHealth = ($(this).attr("data-hp"));
                gameObject.heroAttack = ($(this).attr("data-ap"));
                // gameObject.heroCounter = ($(this).attr("data-ca")); need to move enemy
                $(".hero").appendTo("#attacker");
                $("#status").text("You chose " + ($(this).attr("data-name")) + " as your hero.");
                $(".character").attr("class", "enemy");
                $("#characterContainer").contents().appendTo("#enemySelectionContainer");
                gameObject.chooseEnemy();
            });

        }
    },
    
    chooseEnemy : function() {
        for (var i = 0; i < 1; i++) {
            $(document).on("click", ".enemy", function() {
                $(this).attr("class", "defender");
                $(".defender").appendTo("#defender");
                $("#status").text("You chose to attack " + ($(this).attr("data-name")));
                $(".enemy").attr("class", "enemies");
                $("#enemySelectionContainer").contents().appendTo("#onDeck");
                $("#onDeck").hide();
                $(".button").show();
                gameObject.fight();
            });
        }
    },

    fight : function() {
        $("#attackBtn").click(function() { 
            $("#status").text("You attacked for " + gameObject.heroAttack + " damage!");
            var attack = parseInt(gameObject.heroAttack);
            attack = attack + attack;
            gameObject.heroAttack = attack;
            console.log(attack)
        });
    }
}

// attack power is iterative

// counter attack power doesn't change



// opponent counter attacks instantly

// characters div holds four options initially - white background green border
// select one and it moves to hero div 
// the other three move to enemies div - red background with black lines
// select one to fight which moves to defender div - black background with green border
// once hp === 0 enemy disappears

// only name and hp are displayed around character

// must be able to win no matter what character is chosen

// text at the bottom displays attack and counter damage and win / lose

gameObject.initialize();


