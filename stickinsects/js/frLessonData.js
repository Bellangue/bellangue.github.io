if (localStorage.getItem("currentLanguage") === "fr") {

    lessonNameData = ["[b]", "[p]", "[m]", "[f]", "[v]", "[n]", "[t]", "[d]", "[s]", "[z]", "[l]", "[ʃ]", "[ʒ]", "[k]", "[g]", "[ʁ]", "[w]", "[i]", "[e]", "[a]", "[y]", "[œ]", "[u]", "[o]"];
    lessonSoundData = ["b", "p", "m", "f", "v", "n", "t", "d", "s", "z", "l", "ʃ", "ʒ", "k", "g", "ʁ", "w", "i", "e", "a", "y", "œ", "u", "o"];

    lesson1Json = [
        {
            "Content": "ballon",
            "Question": "Which letter(s) make the sound [b]?",
            "Answers": ["b"],
            "Translation": "balloon"
        },
        {
            "Content": "bateau",
            "Question": "Which letter(s) make the sound [b]?",
            "Answers": ["b"],
            "Translation": "boat"
        },
        
        {
            "Content": "banane",
            "Question": "Which letter(s) make the sound [b]?",
            "Answers": ["b"],
            "Translation": "banana"
        },
        {
            "Content": "bébé",
            "Question": "Which letter(s) make the sound [b]?",
            "Answers": ["b"],
            "Translation": "baby"
        },
        {
            "Content": "arbre",
            "Question": "Which letter(s) make the sound [b]?",
            "Answers": ["b"],
            "Translation": "tree"
        },
        {
            "Content": "bougie",
            "Question": "Which letter(s) make the sound [b]?",
            "Answers": ["b"],
            "Translation": "candle"
        },
        {
            "Content": "robot",
            "Question": "Which letter(s) make the sound [b]?",
            "Answers": ["b"],
            "Translation": "robot"
        }
    ]

    lesson2Json = [
        {
            "Content": "pomme",
            "Question": "Which letter(s) make the sound [p]?",
            "Answers": ["p"],
            "Translation": "apple"
        },
        {
            "Content": "porte",
            "Question": "Which letter(s) make the sound [p]?",
            "Answers": ["p"],
            "Translation": "door"
        },
        {
            "Content": "papillon",
            "Question": "Which letter(s) make the sound [p]?",
            "Answers": ["p"],
            "Translation": "butterfly"
        },
        {
            "Content": "poisson",
            "Question": "Which letter(s) make the sound [p]?",
            "Answers": ["p"],
            "Translation": "fish"
        },
        {
            "Content": "piano",
            "Question": "Which letter(s) make the sound [p]?",
            "Answers": ["p"],
            "Translation": "piano"
        },
        {
            "Content": "plage",
            "Question": "Which letter(s) make the sound [p]?",
            "Answers": ["p"],
            "Translation": "beach"
        },
        {
            "Content": "pied",
            "Question": "Which letter(s) make the sound [p]?",
            "Answers": ["p"],
            "Translation": "foot"
        }
    ]

    lesson3Json = [
        {
            "Content": "maison",
            "Question": "Which letter(s) make the sound [m]?",
            "Answers": ["m"],
            "Translation": "house"
        },
        {
            "Content": "montagne",
            "Question": "Which letter(s) make the sound [m]?",
            "Answers": ["m"],
            "Translation": "mountain"
        },
        {
            "Content": "manteau",
            "Question": "Which letter(s) make the sound [m]?",
            "Answers": ["m"],
            "Translation": "coat"
        },
        {
            "Content": "mère",
            "Question": "Which letter(s) make the sound [m]?",
            "Answers": ["m"],
            "Translation": "mother"
        },
        {
            "Content": "moto",
            "Question": "Which letter(s) make the sound [m]?",
            "Answers": ["m"],
            "Translation": "motorcycle"
        },
        {
            "Content": "musique",
            "Question": "Which letter(s) make the sound [m]?",
            "Answers": ["m"],
            "Translation": "music"
        },
        {
            "Content": "mer",
            "Question": "Which letter(s) make the sound [m]?",
            "Answers": ["m"],
            "Translation": "sea"
        }
    ]

    lesson4Json = [
        {
            "Content": "fleur",
            "Question": "Which letter(s) make the sound [f]?",
            "Answers": ["f"],
            "Translation": "flower"
        },
        {
            "Content": "fenêtre",
            "Question": "Which letter(s) make the sound [f]?",
            "Answers": ["f"],
            "Translation": "window"
        },
        {
            "Content": "feu",
            "Question": "Which letter(s) make the sound [f]?",
            "Answers": ["f"],
            "Translation": "fire"
        },
        {
            "Content": "fourmi",
            "Question": "Which letter(s) make the sound [f]?",
            "Answers": ["f"],
            "Translation": "ant"
        },
        {
            "Content": "fruit",
            "Question": "Which letter(s) make the sound [f]?",
            "Answers": ["f"],
            "Translation": "fruit"
        },
        {
            "Content": "fête",
            "Question": "Which letter(s) make the sound [f]?",
            "Answers": ["f"],
            "Translation": "party"
        },
        {
            "Content": "forêt",
            "Question": "Which letter(s) make the sound [f]?",
            "Answers": ["f"],
            "Translation": "forest"
        }
    ]

    lesson5Json = [
        {
            "Content": "voiture",
            "Question": "Which letter(s) make the sound [v]?",
            "Answers": ["v"],
            "Translation": "car"
        },
        {
            "Content": "vache",
            "Question": "Which letter(s) make the sound [v]?",
            "Answers": ["v"],
            "Translation": "cow"
        },
        {
            "Content": "verre",
            "Question": "Which letter(s) make the sound [v]?",
            "Answers": ["v"],
            "Translation": "glass"
        },
        {
            "Content": "ville",
            "Question": "Which letter(s) make the sound [v]?",
            "Answers": ["v"],
            "Translation": "city"
        },
        {
            "Content": "vêtement",
            "Question": "Which letter(s) make the sound [v]?",
            "Answers": ["v"],
            "Translation": "clothing"
        },
        {
            "Content": "volcan",
            "Question": "Which letter(s) make the sound [v]?",
            "Answers": ["v"],
            "Translation": "volcano"
        },
        {
            "Content": "vent",
            "Question": "Which letter(s) make the sound [v]?",
            "Answers": ["v"],
            "Translation": "wind"
        }
    ]

    lesson6Json = [
        {
            "Content": "nuage",
            "Question": "Which letter(s) make the sound [n]?",
            "Answers": ["n"],
            "Translation": "cloud"
        },
        {
            "Content": "neige",
            "Question": "Which letter(s) make the sound [n]?",
            "Answers": ["n"],
            "Translation": "snow"
        },
        {
            "Content": "nature",
            "Question": "Which letter(s) make the sound [n]?",
            "Answers": ["n"],
            "Translation": "nature"
        },
        {
            "Content": "nuit",
            "Question": "Which letter(s) make the sound [n]?",
            "Answers": ["n"],
            "Translation": "night"
        },
        {
            "Content": "nom",
            "Question": "Which letter(s) make the sound [n]?",
            "Answers": ["n"],
            "Translation": "name"
        },
        {
            "Content": "nouveau",
            "Question": "Which letter(s) make the sound [n]?",
            "Answers": ["n"],
            "Translation": "new"
        },
        {
            "Content": "navire",
            "Question": "Which letter(s) make the sound [n]?",
            "Answers": ["n"],
            "Translation": "ship"
        }
    ]

    lesson7Json = [
        {
            "Content": "table",
            "Question": "Which letter(s) make the sound [t]?",
            "Answers": ["t"],
            "Translation": "table"
        },
        {
            "Content": "téléphone",
            "Question": "Which letter(s) make the sound [t]?",
            "Answers": ["t"],
            "Translation": "telephone"
        },
        {
            "Content": "temps",
            "Question": "Which letter(s) make the sound [t]?",
            "Answers": ["t"],
            "Translation": "time"
        },
        {
            "Content": "travail",
            "Question": "Which letter(s) make the sound [t]?",
            "Answers": ["t"],
            "Translation": "work"
        },
        {
            "Content": "tortue",
            "Question": "Which letter(s) make the sound [t]?",
            "Answers": ["t"],
            "Translation": "turtle"
        },
        {
            "Content": "tropique",
            "Question": "Which letter(s) make the sound [t]?",
            "Answers": ["t"],
            "Translation": "tropic"
        },
        {
            "Content": "tour",
            "Question": "Which letter(s) make the sound [t]?",
            "Answers": ["t"],
            "Translation": "tower"
        }
    ]

    lesson8Json = [
        {
            "Content": "doigt",
            "Question": "Which letter(s) make the sound [d]?",
            "Answers": ["d"],
            "Translation": "finger"
        },
        {
            "Content": "déjeuner",
            "Question": "Which letter(s) make the sound [d]?",
            "Answers": ["d"],
            "Translation": "breakfast"
        },
        {
            "Content": "danse",
            "Question": "Which letter(s) make the sound [d]?",
            "Answers": ["d"],
            "Translation": "dance"
        },
        {
            "Content": "dimanche",
            "Question": "Which letter(s) make the sound [d]?",
            "Answers": ["d"],
            "Translation": "Sunday"
        },
        {
            "Content": "douleur",
            "Question": "Which letter(s) make the sound [d]?",
            "Answers": ["d"],
            "Translation": "pain"
        },
        {
            "Content": "date",
            "Question": "Which letter(s) make the sound [d]?",
            "Answers": ["d"],
            "Translation": "date"
        },
        {
            "Content": "dessin",
            "Question": "Which letter(s) make the sound [d]?",
            "Answers": ["d"],
            "Translation": "drawing"
        }
    ]

    lesson9Json = [
        {
            "Content": "soleil",
            "Question": "Which letter(s) make the sound [s]?",
            "Answers": ["s"],
            "Translation": "sun"
        },
        {
            "Content": "serpent",
            "Question": "Which letter(s) make the sound [s]?",
            "Answers": ["s"],
            "Translation": "snake"
        },
        {
            "Content": "salade",
            "Question": "Which letter(s) make the sound [s]?",
            "Answers": ["s"],
            "Translation": "salad"
        },
        {
            "Content": "silence",
            "Question": "Which letter(s) make the sound [s]?",
            "Answers": ["s"],
            "Translation": "silence"
        },
        {
            "Content": "sourire",
            "Question": "Which letter(s) make the sound [s]?",
            "Answers": ["s"],
            "Translation": "smile"
        },
        {
            "Content": "sable",
            "Question": "Which letter(s) make the sound [s]?",
            "Answers": ["s"],
            "Translation": "sand"
        },
        {
            "Content": "symbole",
            "Question": "Which letter(s) make the sound [s]?",
            "Answers": ["s"],
            "Translation": "symbol"
        }
    ]

    lesson10Json = [
        {
            "Content": "zèbre",
            "Question": "Which letter(s) make the sound [z]?",
            "Answers": ["z"],
            "Translation": "zebra"
        },
        {
            "Content": "zone",
            "Question": "Which letter(s) make the sound [z]?",
            "Answers": ["z"],
            "Translation": "zone"
        },
        {
            "Content": "zoo",
            "Question": "Which letter(s) make the sound [z]?",
            "Answers": ["z"],
            "Translation": "zoo"
        },
        {
            "Content": "zéro",
            "Question": "Which letter(s) make the sound [z]?",
            "Answers": ["z"],
            "Translation": "zero"
        },
        {
            "Content": "zodiaque",
            "Question": "Which letter(s) make the sound [z]?",
            "Answers": ["z"],
            "Translation": "zodiac"
        },
        {
            "Content": "zigzag",
            "Question": "Which letter(s) make the sound [z]?",
            "Answers": ["z"],
            "Translation": "zigzag"
        },
        {
            "Content": "zéphyr",
            "Question": "Which letter(s) make the sound [z]?",
            "Answers": ["z"],
            "Translation": "zephyr"
        }
    ]

    lesson11Json = [
        {
            "Content": "lune",
            "Question": "Which letter(s) make the sound [l]?",
            "Answers": ["l"],
            "Translation": "moon"
        },
        {
            "Content": "lit",
            "Question": "Which letter(s) make the sound [l]?",
            "Answers": ["l"],
            "Translation": "bed"
        },
        {
            "Content": "livre",
            "Question": "Which letter(s) make the sound [l]?",
            "Answers": ["l"],
            "Translation": "book"
        },
        {
            "Content": "lumière",
            "Question": "Which letter(s) make the sound [l]?",
            "Answers": ["l"],
            "Translation": "light"
        },
        {
            "Content": "éléphant",
            "Question": "Which letter(s) make the sound [l]?",
            "Answers": ["l"],
            "Translation": "elephant"
        },
        {
            "Content": "fleur",
            "Question": "Which letter(s) make the sound [l]?",
            "Answers": ["l"],
            "Translation": "flower"
        },
        {
            "Content": "soleil",
            "Question": "Which letter(s) make the sound [l]?",
            "Answers": ["l"],
            "Translation": "sun"
        }
    ]

    lesson12Json = [
        {
            "Content": "chapeau",
            "Question": "Which letter(s) make the sound [ʃ]?",
            "Answers": ["ch"],
            "Translation": "hat"
        },
        {
            "Content": "chaussure",
            "Question": "Which letter(s) make the sound [ʃ]?",
            "Answers": ["ch"],
            "Translation": "shoe"
        },
        {
            "Content": "écharpe",
            "Question": "Which letter(s) make the sound [ʃ]?",
            "Answers": ["ch"],
            "Translation": "scarf"
        },
        {
            "Content": "château",
            "Question": "Which letter(s) make the sound [ʃ]?",
            "Answers": ["ch"],
            "Translation": "castle"
        },
        {
            "Content": "chocolat",
            "Question": "Which letter(s) make the sound [ʃ]?",
            "Answers": ["ch"],
            "Translation": "chocolate"
        },
        {
            "Content": "cherche",
            "Question": "Which letter(s) make the sound [ʃ]?",
            "Answers": ["ch"],
            "Translation": "search"
        },
        {
            "Content": "chanson",
            "Question": "Which letter(s) make the sound [ʃ]?",
            "Answers": ["ch"],
            "Translation": "song"
        }
    ]

    lesson13Json = [
        {
            "Content": "jeune",
            "Question": "Which letter(s) make the sound [ʒ]?",
            "Answers": ["j"],
            "Translation": "young"
        },
        {
            "Content": "genre",
            "Question": "Which letter(s) make the sound [ʒ]?",
            "Answers": ["g"],
            "Translation": "genre"
        },
        {
            "Content": "je",
            "Question": "Which letter(s) make the sound [ʒ]?",
            "Answers": ["j"],
            "Translation": "I"
        },
        {
            "Content": "aujourd'hui",
            "Question": "Which letter(s) make the sound [ʒ]?",
            "Answers": ["j"],
            "Translation": "today"
        },
        {
            "Content": "journal",
            "Question": "Which letter(s) make the sound [ʒ]?",
            "Answers": ["j"],
            "Translation": "newspaper"
        },
        {
            "Content": "ne ... jamais",
            "Question": "Which letter(s) make the sound [ʒ]?",
            "Answers": ["j"],
            "Translation": "never"
        },
        {
            "Content": "jambon",
            "Question": "Which letter(s) make the sound [ʒ]?",
            "Answers": ["j"],
            "Translation": "ham"
        },
    ]

    lesson14Json = [
        {
            "Content": "couteau",
            "Question": "Which letter(s) make the sound [k]?",
            "Answers": ["c"],
            "Translation": "knife"
        },
        {
            "Content": "café",
            "Question": "Which letter(s) make the sound [k]?",
            "Answers": ["c"],
            "Translation": "coffee"
        },
        {
            "Content": "basket",
            "Question": "Which letter(s) make the sound [k]?",
            "Answers": ["k"],
            "Translation": "basket"
        },
        {
            "Content": "cookie",
            "Question": "Which letter(s) make the sound [k]?",
            "Answers": ["c"],
            "Translation": "cookie"
        },
        {
            "Content": "crayon",
            "Question": "Which letter(s) make the sound [k]?",
            "Answers": ["c"],
            "Translation": "pencil"
        },
        {
            "Content": "kayak",
            "Question": "Which letter(s) make the sound [k]?",
            "Answers": ["k"],
            "Translation": "kayak"
        },
        {
            "Content": "kiwi",
            "Question": "Which letter(s) make the sound [k]?",
            "Answers": ["k"],
            "Translation": "kiwi"
        }
    ]

    lesson15Json = [
        {
            "Content": "gâteau",
            "Question": "Which letter(s) make the sound [g]?",
            "Answers": ["g"],
            "Translation": "cake"
        },
        {
            "Content": "graffiti",
            "Question": "Which letter(s) make the sound [g]?",
            "Answers": ["g"],
            "Translation": "graffiti"
        },
        {
            "Content": "gorge",
            "Question": "Which letter(s) make the sound [g]?",
            "Answers": ["g"],
            "Translation": "throat"
        },
        {
            "Content": "grain",
            "Question": "Which letter(s) make the sound [g]?",
            "Answers": ["g"],
            "Translation": "grain"
        },
        {
            "Content": "glace",
            "Question": "Which letter(s) make the sound [g]?",
            "Answers": ["g"],
            "Translation": "ice cream"
        },
        {
            "Content": "gazon",
            "Question": "Which letter(s) make the sound [g]?",
            "Answers": ["g"],
            "Translation": "lawn"
        },
        {
            "Content": "groupe",
            "Question": "Which letter(s) make the sound [g]?",
            "Answers": ["g"],
            "Translation": "group"
        }
    ]

    lesson16Json = [
        {
            "Content": "radiateur",
            "Question": "Which letter(s) make the sound [ʁ]?",
            "Answers": ["r"],
            "Translation": "radiator"
        },
        {
            "Content": "rêve",
            "Question": "Which letter(s) make the sound [ʁ]?",
            "Answers": ["r"],
            "Translation": "dream"
        },
        {
            "Content": "restaurant",
            "Question": "Which letter(s) make the sound [ʁ]?",
            "Answers": ["r"],
            "Translation": "restaurant"
        },
        {
            "Content": "rose",
            "Question": "Which letter(s) make the sound [ʁ]?",
            "Answers": ["r"],
            "Translation": "rose"
        },
        {
            "Content": "région",
            "Question": "Which letter(s) make the sound [ʁ]?",
            "Answers": ["r"],
            "Translation": "region"
        },
        {
            "Content": "porte",
            "Question": "Which letter(s) make the sound [ʁ]?",
            "Answers": ["r"],
            "Translation": "door"
        },
        {
            "Content": "sourire",
            "Question": "Which letter(s) make the sound [ʁ]?",
            "Answers": ["r"],
            "Translation": "smile"
        }
    ]

    lesson17Json = [
        {
            "Content": "wagon",
            "Question": "Which letter(s) make the sound [w]?",
            "Answers": ["w"],
            "Translation": "wagon"
        },
        {
            "Content": "oiseau",
            "Question": "Which letter(s) make the sound [w]?",
            "Answers": ["oi"],
            "Translation": "bird"
        },
        {
            "Content": "oui",
            "Question": "Which letter(s) make the sound [w]?",
            "Answers": ["ou"],
            "Translation": "yes"
        },
        {
            "Content": "week-end",
            "Question": "Which letter(s) make the sound [w]?",
            "Answers": ["w"],
            "Translation": "weekend"
        },
        {
            "Content": "fouet",
            "Question": "Which letter(s) make the sound [w]?",
            "Answers": ["ue"],
            "Translation": "whip"
        },
        {
            "Content": "roi",
            "Question": "Which letter(s) make the sound [w]?",
            "Answers": ["oi"],
            "Translation": "king"
        },
        {
            "Content": "poisson",
            "Question": "Which letter(s) make the sound [w]?",
            "Answers": ["oi"],
            "Translation": "fish"
        },
    ]

    lesson18Json = [
        {
            "Content": "livre",
            "Question": "Which letter(s) make the sound [i]?",
            "Answers": ["i"],
            "Translation": "book"
        },
        {
            "Content": "lit",
            "Question": "Which letter(s) make the sound [i]?",
            "Answers": ["i"],
            "Translation": "bed"
        },
        {
            "Content": "fille",
            "Question": "Which letter(s) make the sound [i]?",
            "Answers": ["i"],
            "Translation": "girl"
        },
        {
            "Content": "hibou",
            "Question": "Which letter(s) make the sound [i]?",
            "Answers": ["i"],
            "Translation": "owl"
        },
        {
            "Content": "sirène",
            "Question": "Which letter(s) make the sound [i]?",
            "Answers": ["i"],
            "Translation": "mermaid"
        },
        {
            "Content": "ouvir",
            "Question": "Which letter(s) make the sound [i]?",
            "Answers": ["i"],
            "Translation": "to listen"
        },
        {
            "Content": "lit",
            "Question": "Which letter(s) make the sound [i]?",
            "Answers": ["i"],
            "Translation": "bed"
        }
    ]

    lesson19Json = [
        {
            "Content": "belle",
            "Question": "Which letter(s) make the sound [e]?",
            "Answers": ["e"],
            "Translation": "beautiful"
        },
        {
            "Content": "fête",
            "Question": "Which letter(s) make the sound [e]?",
            "Answers": ["ête"],
            "Translation": "party"
        },
        {
            "Content": "fenêtre",
            "Question": "Which letter(s) make the sound [e]?",
            "Answers": ["e"],
            "Translation": "window"
        },
        {
            "Content": "été",
            "Question": "Which letter(s) make the sound [e]?",
            "Answers": ["é"],
            "Translation": "summer"
        },
        {
            "Content": "légume",
            "Question": "Which letter(s) make the sound [e]?",
            "Answers": ["é"],
            "Translation": "vegetable"
        },
        {
            "Content": "mer",
            "Question": "Which letter(s) make the sound [e]?",
            "Answers": ["e"],
            "Translation": "sea"
        },
        {
            "Content": "fête",
            "Question": "Which letter(s) make the sound [e]?",
            "Answers": ["ê"],
            "Translation": "party"
        }
    ]

    lesson20Json = [
        {
            "Content": "chat",
            "Question": "Which letter(s) make the sound [a]?",
            "Answers": ["a"],
            "Translation": "cat"
        },
        {
            "Content": "pâte",
            "Question": "Which letter(s) make the sound [a]?",
            "Answers": ["âte"],
            "Translation": "paste"
        },
        {
            "Content": "vache",
            "Question": "Which letter(s) make the sound [a]?",
            "Answers": ["a"],
            "Translation": "cow"
        },
        {
            "Content": "papa",
            "Question": "Which letter(s) make the sound [a]?",
            "Answers": ["a"],
            "Translation": "dad"
        },
        {
            "Content": "patte",
            "Question": "Which letter(s) make the sound [a]?",
            "Answers": ["a"],
            "Translation": "paw"
        },
        {
            "Content": "chapeau",
            "Question": "Which letter(s) make the sound [a]?",
            "Answers": ["a"],
            "Translation": "hat"
        },
        {
            "Content": "parapluie",
            "Question": "Which letter(s) make the sound [a]?",
            "Answers": ["a"],
            "Translation": "umbrella"
        }
    ]

    lesson21Json = [
        {
            "Content": "fusée",
            "Question": "Which letter(s) make the sound [y]?",
            "Answers": ["u"],
            "Translation": "rocket"
        },
        {
            "Content": "lune",
            "Question": "Which letter(s) make the sound [y]?",
            "Answers": ["u"],
            "Translation": "moon"
        },
        {
            "Content": "fût",
            "Question": "Which letter(s) make the sound [y]?",
            "Answers": ["u"],
            "Translation": "keg"
        },
        {
            "Content": "mûr",
            "Question": "Which letter(s) make the sound [y]?",
            "Answers": ["û"],
            "Translation": "ripe"
        },
        {
            "Content": "sur",
            "Question": "Which letter(s) make the sound [y]?",
            "Answers": ["u"],
            "Translation": "on"
        },
        {
            "Content": "tu",
            "Question": "Which letter(s) make the sound [y]?",
            "Answers": ["u"],
            "Translation": "you"
        },
        {
            "Content": "une",
            "Question": "Which letter(s) make the sound [y]?",
            "Answers": ["u"],
            "Translation": "one"
        },
    ]

    lesson22Json = [
        {
            "Content": "fleur",
            "Question": "Which letter(s) make the sound [œ]?",
            "Answers": ["eu"],
            "Translation": "flower"
        },
        {
            "Content": "peur",
            "Question": "Which letter(s) make the sound [œ]?",
            "Answers": ["eu"],
            "Translation": "fear"
        },
        {
            "Content": "œufs",
            "Question": "Which letter(s) make the sound [œ]?",
            "Answers": ["œu"],
            "Translation": "eggs"
        },
        {
            "Content": "heure",
            "Question": "Which letter(s) make the sound [œ]?",
            "Answers": ["eu"],
            "Translation": "hour"
        },
        {
            "Content": "œil",
            "Question": "Which letter(s) make the sound [œ]?",
            "Answers": ["œi"],
            "Translation": "eye"
        },
        {
            "Content": "peu",
            "Question": "Which letter(s) make the sound [œ]?",
            "Answers": ["eu"],
            "Translation": "few"
        },
        {
            "Content": "neuf",
            "Question": "Which letter(s) make the sound [œ]?",
            "Answers": ["eu"],
            "Translation": "nine"
        }
    ]
    
    lesson23Json = [
        {
            "Content": "loup",
            "Question": "Which letter(s) make the sound [u]?",
            "Answers": ["ou"],
            "Translation": "wolf"
        },
        {
            "Content": "fou",
            "Question": "Which letter(s) make the sound [u]?",
            "Answers": ["ou"],
            "Translation": "crazy"
        },
        {
            "Content": "nous",
            "Question": "Which letter(s) make the sound [u]?",
            "Answers": ["ou"],
            "Translation": "we"
        },
        {
            "Content": "jouet",
            "Question": "Which letter(s) make the sound [u]?",
            "Answers": ["ou"],
            "Translation": "toy"
        },
        {
            "Content": "vous",
            "Question": "Which letter(s) make the sound [u]?",
            "Answers": ["ou"],
            "Translation": "you"
        },
        {
            "Content": "où",
            "Question": "Which letter(s) make the sound [u]?",
            "Answers": ["où"],
            "Translation": "where"
        },
        
    ]
        
    lesson24Json = [
        {
            "Content": "porte",
            "Question": "Which letter(s) make the sound [o]?",
            "Answers": ["o"],
            "Translation": "door"
        },
        {
            "Content": "soleil",
            "Question": "Which letter(s) make the sound [o]?",
            "Answers": ["o"],
            "Translation": "sun"
        },
        {
            "Content": "gros",
            "Question": "Which letter(s) make the sound [o]?",
            "Answers": ["o"],
            "Translation": "big"
        },
        {
            "Content": "froid",
            "Question": "Which letter(s) make the sound [o]?",
            "Answers": ["oi"],
            "Translation": "cold"
        },
        {
            "Content": "corps",
            "Question": "Which letter(s) make the sound [o]?",
            "Answers": ["o"],
            "Translation": "body"
        },
        {
            "Content": "portefeuille",
            "Question": "Which letter(s) make the sound [o]?",
            "Answers": ["o", "euil"],
            "Translation": "wallet"
        },
        {
            "Content": "morceau",
            "Question": "Which letter(s) make the sound [o]?",
            "Answers": ["o"],
            "Translation": "piece"
        }         
    ]

    lessonJSONData = [lesson1Json, lesson2Json, lesson3Json, lesson4Json, lesson5Json, lesson6Json, lesson7Json, lesson8Json, lesson9Json, lesson10Json, lesson11Json, lesson12Json, lesson13Json, lesson14Json, lesson15Json, lesson16Json, lesson17Json, lesson18Json, lesson19Json, lesson20Json, lesson21Json, lesson22Json, lesson23Json, lesson24Json];
}
