var gameObject = {

// set variables:
// characters hero enemies defender

// create character objects - name, health points, attack power, counter attack power, image
    characters : [
        {
            name: "Obi-Wan Kenobi",
            hp: 120,
            ap: "test",
            ca: "",
            img: "<img src='assets/images/obi.webp' alt='image of Obi-Wan Kenobi'>"
        },

        {
            name: "Luke Skywalker",
            hp: 100,
            ap: "test",
            ca: "",
            img: "<img src='assets/images/luke.jpg' alt='image of Luke Skywalker'>"
        },

        {
            name: "Darth Sidious",
            hp: 150,
            ap: "test",
            ca: "",
            img: "<img src='assets/images/darthsidious.webp' alt='image of Darth Sidious'>"
        },

        {
            name: "Darth Maul",
            hp: 180,
            ap: "test",
            ca: "",
            img: "<img src='assets/images/darthmaul.jpg' alt='image of Darth Maul'>"
        }
    ],

    heroAttack : 0,

    initialize : function() {
        $(document).ready(function() {
        // provide instructions
        this.reset();
        });
    },
    
    reset : function() {
        // set variables to ""
        $("#status").append("<h3>Choose a hero: </h3>");
        $("<button>", {text : "Attack!", id : "attackBtn", class : "button"}).appendTo("main");
        $(".button").hide();
        for (var i = 0; i < this.characters.length; i++) {
            $("#characterContainer").append("<div id='character" + i + "'</div>");
            $("#character" + i).addClass("character");
            $("#character" + i).attr("data-name", this.characters[i].name)
            $("#character" + i).append(this.characters[i].img);
            gameObject.chooseHero();
        }
    },

    // still have the option to switch hero
    // need button to move to next
    chooseHero : function() {
        for (var i = 0; i < 1; i++) {
            $(document).on("click", ".character", function() {
                $(this).attr("class", "hero");
                gameObject.heroAttack = ($(this).ap)
                $(".hero").appendTo("#attacker");
                $("#status").text("You chose " + ($(this).attr("data-name")) + " as your hero.");
                $(".character").attr("class", "enemy");
                $("#characterContainer").contents().appendTo("#enemySelectionContainer");
                gameObject.chooseEnemy();
            });

        }
    },
    
        // once button is clicked, choose defender
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

gameObject.reset();


