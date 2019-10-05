var gameObject = {

// set variables:
// characters hero enemies defender

// create character objects - name, health points, attack power, counter attack power, image
    characters : [
        {
            name: "Obi-Wan Kenobi",
            hp: 120,
            ap: "",
            ca: "",
            img: "<img src='assets/images/obi.webp' alt='image of Obi-Wan Kenobi'>"
        },

        {
            name: "Luke Skywalker",
            hp: 100,
            ap: "",
            ca: "",
            img: "<img src='assets/images/luke.jpg' alt='image of Luke Skywalker'>"
        },

        {
            name: "Darth Sidious",
            hp: 150,
            ap: "",
            ca: "",
            img: "<img src='assets/images/darthsidious.webp' alt='image of Darth Sidious'>"
        },

        {
            name: "Darth Maul",
            hp: 180,
            ap: "",
            ca: "",
            img: "<img src='assets/images/darthmaul.jpg' alt='image of Darth Maul'>"
        }
    ],

    initialize : function() {
        $(document).ready(function() {
        // provide instructions
        this.reset();
        });
    },

    
    reset : function() {
        // set variables to ""
        $("#status").append("<h3>Choose a hero: </h3>");
        for (var i = 0; i < this.characters.length; i++) {
            $("#characterContainer").append("<div id='character" + i + "'</div>");
            $("#character" + i).addClass("character");
            $("#character" + i).attr("data-name", this.characters[i].name)
            $("#character" + i).append(this.characters[i].img);
        }
    },

    // still have the option to switch hero
    // need button to move to next
    chooseHero : function() {
        $(document).on("click", ".character", function() {
            $(this).appendTo("#heroContainer");
            $("#characterContainer").contents().appendTo("#enemySelectionContainer");
            $("#characterContainer").empty();
            $("#status").text("You chose: " + ($(this).attr("data-name")));
        });
    },
    
        // once button is clicked, choose defender
    chooseEnemy : function() {
        $("#enemySelectionContainer");
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
gameObject.chooseHero();
gameObject.chooseEnemy();