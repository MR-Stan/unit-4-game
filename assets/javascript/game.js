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
    ]

    // reset : function() {
    //     // set variables to ""
    //     // move character images back to #characters
    //     // show all characters
 
    // }

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

}

for (var i = 0; i < gameObject.characters.length; i++) {
    console.log(gameObject.characters[i].img);
    $("#characters").append(gameObject.characters[i].img);

}

