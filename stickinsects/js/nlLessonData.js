if (localStorage.getItem("currentLanguage") === "nl") {

    lessonNameData = ["[b]", "[p]", "[f]", "[v]", "[m]", "[t]", "[d]", "[s]", "[z]", "[n]", "[l]", "[j]", "[r]", "[k]", "[x]", "ɣ", "[ŋ]", "[ɦ]", "[ɪ]", "[e]", "[ʌ]", "[o]", "[a]", "[ə]"];
    lessonSoundData = ["b", "p", "f", "v", "m", "t", "d", "s", "z", "n", "l", "j", "r", "k", "x", "ɣ", "ŋ", "ɦ", "ɪ", "e", "ʌ", "o", "a", "ə"];

    lesson1Json = [
        {
            "Content": "bal",
            "Question": "Which letter(s) make the sound [b]?",
            "Answers": ["b"],
            "Translation": "ball"
        },
        {
            "Content": "boek",
            "Question": "Which letter(s) make the sound [b]?",
            "Answers": ["b"],
            "Translation": "book"
        },
        {
            "Content": "bus",
            "Question": "Which letter(s) make the sound [b]?",
            "Answers": ["b"],
            "Translation": "bus"
        },
        {
            "Content": "banaan",
            "Question": "Which letter(s) make the sound [b]?",
            "Answers": ["b"],
            "Translation": "banana"
        },
        {
            "Content": "bier",
            "Question": "Which letter(s) make the sound [b]?",
            "Answers": ["b"],
            "Translation": "beer"
        },
        {
            "Content": "brood",
            "Question": "Which letter(s) make the sound [b]?",
            "Answers": ["b"],
            "Translation": "bread"
        },
        {
            "Content": "bed",
            "Question": "Which letter(s) make the sound [b]?",
            "Answers": ["b"],
            "Translation": "bed"
        }
        // Add more entries as needed
    ]

    lesson2Json = [
        {
            "Content": "pen",
            "Question": "Which letter(s) make the sound [p]?",
            "Answers": ["p"],
            "Translation": "pen"
        },
        {
            "Content": "potlood",
            "Question": "Which letter(s) make the sound [p]?",
            "Answers": ["p"],
            "Translation": "pencil"
        },
        {
            "Content": "poes",
            "Question": "Which letter(s) make the sound [p]?",
            "Answers": ["p"],
            "Translation": "cat"
        },
        {
            "Content": "pizza",
            "Question": "Which letter(s) make the sound [p]?",
            "Answers": ["p"],
            "Translation": "pizza"
        },
        {
            "Content": "piano",
            "Question": "Which letter(s) make the sound [p]?",
            "Answers": ["p"],
            "Translation": "piano"
        },
        {
            "Content": "piloot",
            "Question": "Which letter(s) make the sound [p]?",
            "Answers": ["p"],
            "Translation": "pilot"
        },
        {
            "Content": "poort",
            "Question": "Which letter(s) make the sound [p]?",
            "Answers": ["p"],
            "Translation": "gate"
        }
        // Add more entries as needed
    ]

    lesson3Json = [
        {
            "Content": "fiets",
            "Question": "Which letter(s) make the sound [f]?",
            "Answers": ["f"],
            "Translation": "bike"
        },
        {
            "Content": "fluit",
            "Question": "Which letter(s) make the sound [f]?",
            "Answers": ["f"],
            "Translation": "whistle"
        },
        {
            "Content": "foto",
            "Question": "Which letter(s) make the sound [f]?",
            "Answers": ["f"],
            "Translation": "photo"
        },
        {
            "Content": "fruit",
            "Question": "Which letter(s) make the sound [f]?",
            "Answers": ["f"],
            "Translation": "fruit"
        },
        {
            "Content": "fles",
            "Question": "Which letter(s) make the sound [f]?",
            "Answers": ["f"],
            "Translation": "bottle"
        },
        {
            "Content": "feest",
            "Question": "Which letter(s) make the sound [f]?",
            "Answers": ["f"],
            "Translation": "party"
        },
        {
            "Content": "vogel",
            "Question": "Which letter(s) make the sound [f]?",
            "Answers": ["v"],
            "Translation": "bird"
        }
        // Add more entries as needed
    ]

    lesson4Json = [
        {
            "Content": "vogel",
            "Question": "Which letter(s) make the sound [v]?",
            "Answers": ["v"],
            "Translation": "bird"
        },
        {
            "Content": "vriend",
            "Question": "Which letter(s) make the sound [v]?",
            "Answers": ["v"],
            "Translation": "friend"
        },
        {
            "Content": "vis",
            "Question": "Which letter(s) make the sound [v]?",
            "Answers": ["v"],
            "Translation": "fish"
        },
        {
            "Content": "vader",
            "Question": "Which letter(s) make the sound [v]?",
            "Answers": ["v"],
            "Translation": "father"
        },
        {
            "Content": "vier",
            "Question": "Which letter(s) make the sound [v]?",
            "Answers": ["v"],
            "Translation": "four"
        },
        {
            "Content": "verf",
            "Question": "Which letter(s) make the sound [v]?",
            "Answers": ["v"],
            "Translation": "paint"
        },
        {
            "Content": "vuur",
            "Question": "Which letter(s) make the sound [v]?",
            "Answers": ["v"],
            "Translation": "fire"
        }
        // Add more entries as needed
    ]

    lesson5Json = [
        {
            "Content": "maan",
            "Question": "Which letter(s) make the sound [m]?",
            "Answers": ["m"],
            "Translation": "moon"
        },
        {
            "Content": "muis",
            "Question": "Which letter(s) make the sound [m]?",
            "Answers": ["m"],
            "Translation": "mouse"
        },
        {
            "Content": "melk",
            "Question": "Which letter(s) make the sound [m]?",
            "Answers": ["m"],
            "Translation": "milk"
        },
        {
            "Content": "mes",
            "Question": "Which letter(s) make the sound [m]?",
            "Answers": ["m"],
            "Translation": "knife"
        },
        {
            "Content": "molen",
            "Question": "Which letter(s) make the sound [m]?",
            "Answers": ["m"],
            "Translation": "windmill"
        },
        {
            "Content": "morgen",
            "Question": "Which letter(s) make the sound [m]?",
            "Answers": ["m"],
            "Translation": "morning"
        },
        {
            "Content": "muziek",
            "Question": "Which letter(s) make the sound [m]?",
            "Answers": ["m"],
            "Translation": "music"
        }
        // Add more entries as needed
    ]

    lesson6Json = [
        {
            "Content": "tafel",
            "Question": "Which letter(s) make the sound [t]?",
            "Answers": ["t"],
            "Translation": "table"
        },
        {
            "Content": "trein",
            "Question": "Which letter(s) make the sound [t]?",
            "Answers": ["t"],
            "Translation": "train"
        },
        {
            "Content": "telefoon",
            "Question": "Which letter(s) make the sound [t]?",
            "Answers": ["t"],
            "Translation": "telephone"
        },
        {
            "Content": "toren",
            "Question": "Which letter(s) make the sound [t]?",
            "Answers": ["t"],
            "Translation": "tower"
        },
        {
            "Content": "tijd",
            "Question": "Which letter(s) make the sound [t]?",
            "Answers": ["t"],
            "Translation": "time"
        },
        {
            "Content": "toets",
            "Question": "Which letter(s) make the sound [t]?",
            "Answers": ["t"],
            "Translation": "key"
        },
        {
            "Content": "tuin",
            "Question": "Which letter(s) make the sound [t]?",
            "Answers": ["t"],
            "Translation": "garden"
        }
        // Add more entries as needed
    ]

    lesson7Json = [
        {
            "Content": "deur",
            "Question": "Which letter(s) make the sound [d]?",
            "Answers": ["d"],
            "Translation": "door"
        },
        {
            "Content": "dier",
            "Question": "Which letter(s) make the sound [d]?",
            "Answers": ["d"],
            "Translation": "animal"
        },
        {
            "Content": "doos",
            "Question": "Which letter(s) make the sound [d]?",
            "Answers": ["d"],
            "Translation": "box"
        },
        {
            "Content": "dokter",
            "Question": "Which letter(s) make the sound [d]?",
            "Answers": ["d"],
            "Translation": "doctor"
        },
        {
            "Content": "dorp",
            "Question": "Which letter(s) make the sound [d]?",
            "Answers": ["d"],
            "Translation": "village"
        },
        {
            "Content": "druk",
            "Question": "Which letter(s) make the sound [d]?",
            "Answers": ["d"],
            "Translation": "busy"
        },
        {
            "Content": "duif",
            "Question": "Which letter(s) make the sound [d]?",
            "Answers": ["d"],
            "Translation": "dove"
        }
        // Add more entries as needed
    ]

    lesson8Json = [
        {
            "Content": "stoel",
            "Question": "Which letter(s) make the sound [s]?",
            "Answers": ["s"],
            "Translation": "chair"
        },
        {
            "Content": "slang",
            "Question": "Which letter(s) make the sound [s]?",
            "Answers": ["s"],
            "Translation": "snake"
        },
        {
            "Content": "school",
            "Question": "Which letter(s) make the sound [s]?",
            "Answers": ["s"],
            "Translation": "school"
        },
        {
            "Content": "sterk",
            "Question": "Which letter(s) make the sound [s]?",
            "Answers": ["s"],
            "Translation": "strong"
        },
        {
            "Content": "schaap",
            "Question": "Which letter(s) make the sound [s]?",
            "Answers": ["s"],
            "Translation": "sheep"
        },
        {
            "Content": "steen",
            "Question": "Which letter(s) make the sound [s]?",
            "Answers": ["s"],
            "Translation": "stone"
        },
        {
            "Content": "straat",
            "Question": "Which letter(s) make the sound [s]?",
            "Answers": ["s"],
            "Translation": "street"
        }
        // Add more entries as needed
    ]

    lesson9Json = [
        {
            "Content": "zee",
            "Question": "Which letter(s) make the sound [z]?",
            "Answers": ["z"],
            "Translation": "sea"
        },
        {
            "Content": "zon",
            "Question": "Which letter(s) make the sound [z]?",
            "Answers": ["z"],
            "Translation": "sun"
        },
        {
            "Content": "zetel",
            "Question": "Which letter(s) make the sound [z]?",
            "Answers": ["z"],
            "Translation": "seat"
        },
        {
            "Content": "zwaan",
            "Question": "Which letter(s) make the sound [z]?",
            "Answers": ["z"],
            "Translation": "swan"
        },
        {
            "Content": "zilver",
            "Question": "Which letter(s) make the sound [z]?",
            "Answers": ["z"],
            "Translation": "silver"
        },
        {
            "Content": "zand",
            "Question": "Which letter(s) make the sound [z]?",
            "Answers": ["z"],
            "Translation": "sand"
        },
        {
            "Content": "zorg",
            "Question": "Which letter(s) make the sound [z]?",
            "Answers": ["z"],
            "Translation": "care"
        }
        // Add more entries as needed
    ]

    lesson10Json = [
        {
            "Content": "neus",
            "Question": "Which letter(s) make the sound [n]?",
            "Answers": ["n"],
            "Translation": "nose"
        },
        {
            "Content": "nacht",
            "Question": "Which letter(s) make the sound [n]?",
            "Answers": ["n"],
            "Translation": "night"
        },
        {
            "Content": "naam",
            "Question": "Which letter(s) make the sound [n]?",
            "Answers": ["n"],
            "Translation": "name"
        },
        {
            "Content": "nieuw",
            "Question": "Which letter(s) make the sound [n]?",
            "Answers": ["n"],
            "Translation": "new"
        },
        {
            "Content": "noord",
            "Question": "Which letter(s) make the sound [n]?",
            "Answers": ["n"],
            "Translation": "north"
        },
        {
            "Content": "niveau",
            "Question": "Which letter(s) make the sound [n]?",
            "Answers": ["n"],
            "Translation": "level"
        },
        {
            "Content": "nederig",
            "Question": "Which letter(s) make the sound [n]?",
            "Answers": ["n"],
            "Translation": "humble"
        }
        // Add more entries as needed
    ]

    lesson11Json = [
        {
            "Content": "lamp",
            "Question": "Which letter(s) make the sound [l]?",
            "Answers": ["l"],
            "Translation": "lamp"
        },
        {
            "Content": "laars",
            "Question": "Which letter(s) make the sound [l]?",
            "Answers": ["l"],
            "Translation": "boot"
        },
        {
            "Content": "leven",
            "Question": "Which letter(s) make the sound [l]?",
            "Answers": ["l"],
            "Translation": "life"
        },
        {
            "Content": "liefde",
            "Question": "Which letter(s) make the sound [l]?",
            "Answers": ["l"],
            "Translation": "love"
        },
        {
            "Content": "lijst",
            "Question": "Which letter(s) make the sound [l]?",
            "Answers": ["l"],
            "Translation": "list"
        },
        {
            "Content": "lucht",
            "Question": "Which letter(s) make the sound [l]?",
            "Answers": ["l"],
            "Translation": "air"
        },
        {
            "Content": "land",
            "Question": "Which letter(s) make the sound [l]?",
            "Answers": ["l"],
            "Translation": "land"
        }
        // Add more entries as needed
    ]

    lesson12Json = [
        {
            "Content": "jaar",
            "Question": "Which letter(s) make the sound [j]?",
            "Answers": ["j"],
            "Translation": "year"
        },
        {
            "Content": "juichen",
            "Question": "Which letter(s) make the sound [j]?",
            "Answers": ["j"],
            "Translation": "cheer"
        },
        {
            "Content": "jasje",
            "Question": "Which letter(s) make the sound [j]?",
            "Answers": ["j"],
            "Translation": "jacket"
        },
        {
            "Content": "ja",
            "Question": "Which letter(s) make the sound [j]?",
            "Answers": ["j"],
            "Translation": "yes"
        },
        {
            "Content": "jodium",
            "Question": "Which letter(s) make the sound [j]?",
            "Answers": ["j"],
            "Translation": "iodine"
        },
        {
            "Content": "jagen",
            "Question": "Which letter(s) make the sound [j]?",
            "Answers": ["j"],
            "Translation": "hunt"
        },
        {
            "Content": "botje",
            "Question": "Which letter(s) make the sound [j]?",
            "Answers": ["j"],
            "Translation": "little bone"
        }
        // Add more entries as needed
    ]

    lesson13Json = [
        {
            "Content": "roos",
            "Question": "Which letter(s) make the sound [r]?",
            "Answers": ["r"],
            "Translation": "rose"
        },
        {
            "Content": "radio",
            "Question": "Which letter(s) make the sound [r]?",
            "Answers": ["r"],
            "Translation": "radio"
        },
        {
            "Content": "regen",
            "Question": "Which letter(s) make the sound [r]?",
            "Answers": ["r"],
            "Translation": "rain"
        },
        {
            "Content": "restaurant",
            "Question": "Which letter(s) make the sound [r]?",
            "Answers": ["r"],
            "Translation": "restaurant"
        },
        {
            "Content": "rijst",
            "Question": "Which letter(s) make the sound [r]?",
            "Answers": ["r"],
            "Translation": "rice"
        },
        {
            "Content": "ruimte",
            "Question": "Which letter(s) make the sound [r]?",
            "Answers": ["r"],
            "Translation": "space"
        },
        {
            "Content": "rood",
            "Question": "Which letter(s) make the sound [r]?",
            "Answers": ["r"],
            "Translation": "red"
        }
        // Add more entries as needed
    ]

    lesson14Json = [
        {
            "Content": "kaas",
            "Question": "Which letter(s) make the sound [k]?",
            "Answers": ["k"],
            "Translation": "cheese"
        },
        {
            "Content": "klok",
            "Question": "Which letter(s) make the sound [k]?",
            "Answers": ["k"],
            "Translation": "clock"
        },
        {
            "Content": "koud",
            "Question": "Which letter(s) make the sound [k]?",
            "Answers": ["k"],
            "Translation": "cold"
        },
        {
            "Content": "koffer",
            "Question": "Which letter(s) make the sound [k]?",
            "Answers": ["k"],
            "Translation": "suitcase"
        },
        {
            "Content": "kamer",
            "Question": "Which letter(s) make the sound [k]?",
            "Answers": ["k"],
            "Translation": "room"
        },
        {
            "Content": "krijt",
            "Question": "Which letter(s) make the sound [k]?",
            "Answers": ["k"],
            "Translation": "chalk"
        },
        {
            "Content": "kasteel",
            "Question": "Which letter(s) make the sound [k]?",
            "Answers": ["k"],
            "Translation": "castle"
        }
        // Add more entries as needed
    ]

    lesson15Json = [
        {
            "Content": "nacht",
            "Question": "Which letter(s) make the sound [x]?",
            "Answers": ["ch"],
            "Translation": "night"
        },
        {
            "Content": "lachen",
            "Question": "Which letter(s) make the sound [x]?",
            "Answers": ["ch"],
            "Translation": "to laugh"
        },
        {
            "Content": "licht",
            "Question": "Which letter(s) make the sound [x]?",
            "Answers": ["ch"],
            "Translation": "light"
        },
        {
            "Content": "zacht",
            "Question": "Which letter(s) make the sound [x]?",
            "Answers": ["ch"],
            "Translation": "soft"
        },
        {
            "Content": "pech",
            "Question": "Which letter(s) make the sound [x]?",
            "Answers": ["ch"],
            "Translation": "bad luck"
        },
        {
            "Content": "techniek",
            "Question": "Which letter(s) make the sound [x]?",
            "Answers": ["ch"],
            "Translation": "technology"
        },
        {
            "Content": "nicht",
            "Question": "Which letter(s) make the sound [x]?",
            "Answers": ["ch"],
            "Translation": "niece"
        }
        // Add more entries as needed
    ]

    lesson16Json = [
        {
            "Content": "negen",
            "Question": "Which letter(s) make the sound [ɣ]?",
            "Answers": ["g"],
            "Translation": "nine"
        },
        {
            "Content": "morgen",
            "Question": "Which letter(s) make the sound [ɣ]?",
            "Answers": ["g"],
            "Translation": "morning"
        },
        {
            "Content": "zeggen",
            "Question": "Which letter(s) make the sound [ɣ]?",
            "Answers": ["gg"],
            "Translation": "to say"
        },
        {
            "Content": "lachen",
            "Question": "Which letter(s) make the sound [ɣ]?",
            "Answers": ["g"],
            "Translation": "to laugh"
        },
        {
            "Content": "weg",
            "Question": "Which letter(s) make the sound [ɣ]?",
            "Answers": ["g"],
            "Translation": "away"
        },
        {
            "Content": "mogelijk",
            "Question": "Which letter(s) make the sound [ɣ]?",
            "Answers": ["g"],
            "Translation": "possible"
        },
        {
            "Content": "regen",
            "Question": "Which letter(s) make the sound [ɣ]?",
            "Answers": ["g"],
            "Translation": "rain"
        }
        // Add more entries as needed
    ]

    lesson17Json = [
        {
            "Content": "zingen",
            "Question": "Which letter(s) make the sound [ŋ]?",
            "Answers": ["ng"],
            "Translation": "to sing"
        },
        {
            "Content": "jongen",
            "Question": "Which letter(s) make the sound [ŋ]?",
            "Answers": ["ng"],
            "Translation": "boy"
        },
        {
            "Content": "dingen",
            "Question": "Which letter(s) make the sound [ŋ]?",
            "Answers": ["ng"],
            "Translation": "things"
        },
        {
            "Content": "lang",
            "Question": "Which letter(s) make the sound [ŋ]?",
            "Answers": ["ng"],
            "Translation": "long"
        },
        {
            "Content": "wangen",
            "Question": "Which letter(s) make the sound [ŋ]?",
            "Answers": ["ng"],
            "Translation": "cheeks"
        },
        {
            "Content": "zanger",
            "Question": "Which letter(s) make the sound [ŋ]?",
            "Answers": ["ng"],
            "Translation": "singer"
        },
        {
            "Content": "koningsdag",
            "Question": "Which letter(s) make the sound [ŋ]?",
            "Answers": ["ng"],
            "Translation": "King's Day"
        }
        // Add more entries as needed
    ]

    lesson18Json = [
        {
            "Content": "hond",
            "Question": "Which letter(s) make the sound [ɦ]?",
            "Answers": ["h"],
            "Translation": "dog"
        },
        {
            "Content": "hoed",
            "Question": "Which letter(s) make the sound [ɦ]?",
            "Answers": ["h"],
            "Translation": "hat"
        },
        {
            "Content": "huis",
            "Question": "Which letter(s) make the sound [ɦ]?",
            "Answers": ["h"],
            "Translation": "house"
        },
        {
            "Content": "haar",
            "Question": "Which letter(s) make the sound [ɦ]?",
            "Answers": ["h"],
            "Translation": "hair"
        },
        {
            "Content": "heerlijk",
            "Question": "Which letter(s) make the sound [ɦ]?",
            "Answers": ["h"],
            "Translation": "delicious"
        },
        {
            "Content": "hoek",
            "Question": "Which letter(s) make the sound [ɦ]?",
            "Answers": ["h"],
            "Translation": "corner"
        },
        {
            "Content": "helder",
            "Question": "Which letter(s) make the sound [ɦ]?",
            "Answers": ["h"],
            "Translation": "clear"
        }
        // Add more entries as needed
    ]

    lesson19Json = [
        {
            "Content": "kikker",
            "Question": "Which letter(s) make the sound [ɪ]?",
            "Answers": ["i"],
            "Translation": "frog"
        },
        {
            "Content": "kip",
            "Question": "Which letter(s) make the sound [ɪ]?",
            "Answers": ["i"],
            "Translation": "chicken"
        },
        {
            "Content": "kist",
            "Question": "Which letter(s) make the sound [ɪ]?",
            "Answers": ["i"],
            "Translation": "box"
        },
        {
            "Content": "klimmen",
            "Question": "Which letter(s) make the sound [ɪ]?",
            "Answers": ["i"],
            "Translation": "to climb"
        },
        {
            "Content": "koningin",
            "Question": "Which letter(s) make the sound [ɪ]?",
            "Answers": ["i"],
            "Translation": "queen"
        },
        {
            "Content": "klinker",
            "Question": "Which letter(s) make the sound [ɪ]?",
            "Answers": ["i"],
            "Translation": "vowel"
        },
        {
            "Content": "kipnuggets",
            "Question": "Which letter(s) make the sound [ɪ]?",
            "Answers": ["i"],
            "Translation": "chicken nuggets"
        }
        // Add more entries as needed
    ]

    lesson20Json = [
        {
            "Content": "bed",
            "Question": "Which letter(s) make the sound [e]?",
            "Answers": ["e"],
            "Translation": "bed"
        },
        {
            "Content": "veter",
            "Question": "Which letter(s) make the sound [e]?",
            "Answers": ["e"],
            "Translation": "shoelace"
        },
        {
            "Content": "lekker",
            "Question": "Which letter(s) make the sound [e]?",
            "Answers": ["e"],
            "Translation": "delicious"
        },
        {
            "Content": "weg",
            "Question": "Which letter(s) make the sound [e]?",
            "Answers": ["e"],
            "Translation": "away"
        },
        {
            "Content": "wesp",
            "Question": "Which letter(s) make the sound [e]?",
            "Answers": ["e"],
            "Translation": "wasp"
        },
        {
            "Content": "telefoon",
            "Question": "Which letter(s) make the sound [e]?",
            "Answers": ["e"],
            "Translation": "telephone"
        },
        {
            "Content": "pen",
            "Question": "Which letter(s) make the sound [e]?",
            "Answers": ["e"],
            "Translation": "pen"
        },
        // Add more entries as needed
    ]

    lesson21Json = [
        {
            "Content": "bus",
            "Question": "Which letter(s) make the sound [ʌ]?",
            "Answers": ["u"],
            "Translation": "bus"
        },
        {
            "Content": "put",
            "Question": "Which letter(s) make the sound [ʌ]?",
            "Answers": ["u"],
            "Translation": "well"
        },
        {
            "Content": "hut",
            "Question": "Which letter(s) make the sound [ʌ]?",
            "Answers": ["u"],
            "Translation": "hut"
        },
        {
            "Content": "rug",
            "Question": "Which letter(s) make the sound [ʌ]?",
            "Answers": ["u"],
            "Translation": "back"
        },
        {
            "Content": "zus",
            "Question": "Which letter(s) make the sound [ʌ]?",
            "Answers": ["u"],
            "Translation": "sister"
        },
        {
            "Content": "mut",
            "Question": "Which letter(s) make the sound [ʌ]?",
            "Answers": ["u"],
            "Translation": "cap"
        },
        {
            "Content": "putt",
            "Question": "Which letter(s) make the sound [ʌ]?",
            "Answers": ["u"],
            "Translation": "putt"
        }
        // Add more entries as needed
    ]

    lesson22Json = [
        {
            "Content": "roos",
            "Question": "Which letter(s) make the sound [o]?",
            "Answers": ["o"],
            "Translation": "rose"
        },
        {
            "Content": "boot",
            "Question": "Which letter(s) make the sound [o]?",
            "Answers": ["oo"],
            "Translation": "boat"
        },
        {
            "Content": "hoofd",
            "Question": "Which letter(s) make the sound [o]?",
            "Answers": ["oo"],
            "Translation": "head"
        },
        {
            "Content": "klok",
            "Question": "Which letter(s) make the sound [o]?",
            "Answers": ["o"],
            "Translation": "clock"
        },
        {
            "Content": "koe",
            "Question": "Which letter(s) make the sound [o]?",
            "Answers": ["oe"],
            "Translation": "cow"
        },
        {
            "Content": "zoon",
            "Question": "Which letter(s) make the sound [o]?",
            "Answers": ["oo"],
            "Translation": "son"
        },
        {
            "Content": "rood",
            "Question": "Which letter(s) make the sound [o]?",
            "Answers": ["oo"],
            "Translation": "red"
        }
        // Add more entries as needed
    ]

    lesson23Json = [
        {
            "Content": "kat",
            "Question": "Which letter(s) make the sound [a]?",
            "Answers": ["a"],
            "Translation": "cat"
        },
        {
            "Content": "bal",
            "Question": "Which letter(s) make the sound [a]?",
            "Answers": ["a"],
            "Translation": "ball"
        },
        {
            "Content": "jas",
            "Question": "Which letter(s) make the sound [a]?",
            "Answers": ["a"],
            "Translation": "coat"
        },
        {
            "Content": "pad",
            "Question": "Which letter(s) make the sound [a]?",
            "Answers": ["a"],
            "Translation": "toad"
        },
        {
            "Content": "zak",
            "Question": "Which letter(s) make the sound [a]?",
            "Answers": ["a"],
            "Translation": "bag"
        },
        {
            "Content": "man",
            "Question": "Which letter(s) make the sound [a]?",
            "Answers": ["a"],
            "Translation": "man"
        },
        {
            "Content": "staart",
            "Question": "Which letter(s) make the sound [a]?",
            "Answers": ["aa"],
            "Translation": "tail"
        }
        // Add more entries as needed
    ]

    lesson24Json = [
        {
            "Content": "deur",
            "Question": "Which letter(s) make the sound [ə]?",
            "Answers": ["eu"],
            "Translation": "door"
        },
        {
            "Content": "leer",
            "Question": "Which letter(s) make the sound [ə]?",
            "Answers": ["ee"],
            "Translation": "leather"
        },
        {
            "Content": "wekker",
            "Question": "Which letter(s) make the sound [ə]?",
            "Answers": ["er"],
            "Translation": "alarm clock"
        },
        {
            "Content": "spel",
            "Question": "Which letter(s) make the sound [ə]?",
            "Answers": ["e"],
            "Translation": "game"
        },
        {
            "Content": "weg",
            "Question": "Which letter(s) make the sound [ə]?",
            "Answers": ["e"],
            "Translation": "way"
        },
        {
            "Content": "beker",
            "Question": "Which letter(s) make the sound [ə]?",
            "Answers": ["er"],
            "Translation": "cup"
        },
        {
            "Content": "meisje",
            "Question": "Which letter(s) make the sound [ə]?",
            "Answers": ["ei"],
            "Translation": "girl"
        }
        // Add more entries as needed
    ]

    lessonJSONData = [lesson1Json, lesson2Json, lesson3Json, lesson4Json, lesson5Json, lesson6Json, lesson7Json, lesson8Json, lesson9Json, lesson10Json, lesson11Json, lesson12Json, lesson13Json, lesson14Json, lesson15Json, lesson16Json, lesson17Json, lesson18Json, lesson19Json, lesson20Json, lesson21Json, lesson22Json, lesson23Json, lesson24Json];
}
