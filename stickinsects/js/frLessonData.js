if (localStorage.getItem("currentLanguage") === "fr") {

    lessonNameData = ["[b]", "[p]", "[m]", "[f]", "[v]", "[n]", "[t]", "[d]", "[s]", "[z]", "[l]", "[ʃ]"];
    lessonSoundData = ["b", "p", "m", "f", "v", "n", "t", "d", "s", "z", "l", "ch"];

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
            "Translation": "time/weather"
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

    lesson10Json = [
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

    lesson11Json = [
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
    
    lessonJSONData = [lesson1Json];
}