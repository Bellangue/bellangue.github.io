if (localStorage.getItem("currentLanguage") === "pt") {

    lessonNameData = ["[b]", "[p]", "[m]", "[f]", "[v]", "[n]", "[t]", "[d]", "[s]", "[z]", "[l]", "[ʃ]", "[ʒ]", "[ʎ]", "[k]", "[g]", "[ʁ]", "[i]", "[e]", "[a]", "[ɔ]", "[o]", "[u]", "[ãw̃]"];
    lessonSoundData = ["b", "p", "m", "f", "v", "n", "t", "d", "s", "z", "l", "ʃ", "ʒ", "ʎ", "k", "g", "ʁ", "i", "e", "a", "ɔ", "o", "u", "ão"];


    lesson1Json = [
        {
            "Content": "bola",
            "Question": "Which letter(s) make the sound [b]?",
            "Answers": ["b"],
            "Translation": "ball"
        },
        {
            "Content": "barco",
            "Question": "Which letter(s) make the sound [b]?",
            "Answers": ["b"],
            "Translation": "boat"
        },
        {
            "Content": "banana",
            "Question": "Which letter(s) make the sound [b]?",
            "Answers": ["b"],
            "Translation": "banana"
        },
        {
            "Content": "bebê",
            "Question": "Which letter(s) make the sound [b]?",
            "Answers": ["b"],
            "Translation": "baby"
        },
        {
            "Content": "bolo",
            "Question": "Which letter(s) make the sound [b]?",
            "Answers": ["b"],
            "Translation": "cake"
        },
        {
            "Content": "brinquedo",
            "Question": "Which letter(s) make the sound [b]?",
            "Answers": ["b"],
            "Translation": "toy"
        },
        {
            "Content": "batata",
            "Question": "Which letter(s) make the sound [b]?",
            "Answers": ["b"],
            "Translation": "potato"
        }
    ]

    lesson2Json = [
        {
            "Content": "pato",
            "Question": "Which letter(s) make the sound [p]?",
            "Answers": ["p"],
            "Translation": "duck"
        },
        {
            "Content": "pipa",
            "Question": "Which letter(s) make the sound [p]?",
            "Answers": ["p"],
            "Translation": "kite"
        },
        {
            "Content": "palavra",
            "Question": "Which letter(s) make the sound [p]?",
            "Answers": ["p"],
            "Translation": "word"
        },
        {
            "Content": "peixe",
            "Question": "Which letter(s) make the sound [p]?",
            "Answers": ["p"],
            "Translation": "fish"
        },
        {
            "Content": "pão",
            "Question": "Which letter(s) make the sound [p]?",
            "Answers": ["p"],
            "Translation": "bread"
        },
        {
            "Content": "prato",
            "Question": "Which letter(s) make the sound [p]?",
            "Answers": ["p"],
            "Translation": "plate"
        },
        {
            "Content": "pessoa",
            "Question": "Which letter(s) make the sound [p]?",
            "Answers": ["p"],
            "Translation": "person"
        }
    ]

    lesson3Json = [
        {
            "Content": "maçã",
            "Question": "Which letter(s) make the sound [m]?",
            "Answers": ["m"],
            "Translation": "apple"
        },
        {
            "Content": "mochila",
            "Question": "Which letter(s) make the sound [m]?",
            "Answers": ["m"],
            "Translation": "backpack"
        },
        {
            "Content": "mãe",
            "Question": "Which letter(s) make the sound [m]?",
            "Answers": ["m"],
            "Translation": "mother"
        },
        {
            "Content": "melancia",
            "Question": "Which letter(s) make the sound [m]?",
            "Answers": ["m"],
            "Translation": "watermelon"
        },
        {
            "Content": "mesa",
            "Question": "Which letter(s) make the sound [m]?",
            "Answers": ["m"],
            "Translation": "table"
        },
        {
            "Content": "mão",
            "Question": "Which letter(s) make the sound [m]?",
            "Answers": ["m"],
            "Translation": "hand"
        },
        {
            "Content": "música",
            "Question": "Which letter(s) make the sound [m]?",
            "Answers": ["m"],
            "Translation": "music"
        }
    ]

    lesson4Json = [
        {
            "Content": "foca",
            "Question": "Which letter(s) make the sound [f]?",
            "Answers": ["f"],
            "Translation": "seal"
        },
        {
            "Content": "folha",
            "Question": "Which letter(s) make the sound [f]?",
            "Answers": ["f"],
            "Translation": "leaf"
        },
        {
            "Content": "futebol",
            "Question": "Which letter(s) make the sound [f]?",
            "Answers": ["f"],
            "Translation": "football"
        },
        {
            "Content": "frio",
            "Question": "Which letter(s) make the sound [f]?",
            "Answers": ["f"],
            "Translation": "cold"
        },
        {
            "Content": "flor",
            "Question": "Which letter(s) make the sound [f]?",
            "Answers": ["f"],
            "Translation": "flower"
        },
        {
            "Content": "família",
            "Question": "Which letter(s) make the sound [f]?",
            "Answers": ["f"],
            "Translation": "family"
        },
        {
            "Content": "festa",
            "Question": "Which letter(s) make the sound [f]?",
            "Answers": ["f"],
            "Translation": "party"
        }
    ]

    lesson5Json = [
        {
            "Content": "vaca",
            "Question": "Which letter(s) make the sound [v]?",
            "Answers": ["v"],
            "Translation": "cow"
        },
        {
            "Content": "verde",
            "Question": "Which letter(s) make the sound [v]?",
            "Answers": ["v"],
            "Translation": "green"
        },
        {
            "Content": "velho",
            "Question": "Which letter(s) make the sound [v]?",
            "Answers": ["v"],
            "Translation": "old"
        },
        {
            "Content": "voar",
            "Question": "Which letter(s) make the sound [v]?",
            "Answers": ["v"],
            "Translation": "to fly"
        },
        {
            "Content": "viver",
            "Question": "Which letter(s) make the sound [v]?",
            "Answers": ["v"],
            "Translation": "to live"
        },
        {
            "Content": "viagem",
            "Question": "Which letter(s) make the sound [v]?",
            "Answers": ["v"],
            "Translation": "trip"
        },
        {
            "Content": "vontade",
            "Question": "Which letter(s) make the sound [v]?",
            "Answers": ["v"],
            "Translation": "will"
        }
    ]

    lesson6Json = [
        {
            "Content": "navio",
            "Question": "Which letter(s) make the sound [n]?",
            "Answers": ["n"],
            "Translation": "ship"
        },
        {
            "Content": "ninho",
            "Question": "Which letter(s) make the sound [n]?",
            "Answers": ["n"],
            "Translation": "nest"
        },
        {
            "Content": "noite",
            "Question": "Which letter(s) make the sound [n]?",
            "Answers": ["n"],
            "Translation": "night"
        },
        {
            "Content": "novo",
            "Question": "Which letter(s) make the sound [n]?",
            "Answers": ["n"],
            "Translation": "new"
        },
        {
            "Content": "nome",
            "Question": "Which letter(s) make the sound [n]?",
            "Answers": ["n"],
            "Translation": "name"
        },
        {
            "Content": "nariz",
            "Question": "Which letter(s) make the sound [n]?",
            "Answers": ["n"],
            "Translation": "nose"
        },
        {
            "Content": "notícia",
            "Question": "Which letter(s) make the sound [n]?",
            "Answers": ["n"],
            "Translation": "news"
        }
    ]

    lesson7Json = [
        {
            "Content": "tigre",
            "Question": "Which letter(s) make the sound [t]?",
            "Answers": ["t"],
            "Translation": "tiger"
        },
        {
            "Content": "telefone",
            "Question": "Which letter(s) make the sound [t]?",
            "Answers": ["t"],
            "Translation": "telephone"
        },
        {
            "Content": "terra",
            "Question": "Which letter(s) make the sound [t]?",
            "Answers": ["t"],
            "Translation": "earth"
        },
        {
            "Content": "tempo",
            "Question": "Which letter(s) make the sound [t]?",
            "Answers": ["t"],
            "Translation": "time"
        },
        {
            "Content": "tomate",
            "Question": "Which letter(s) make the sound [t]?",
            "Answers": ["t"],
            "Translation": "tomato"
        },
        {
            "Content": "trabalho",
            "Question": "Which letter(s) make the sound [t]?",
            "Answers": ["t"],
            "Translation": "work"
        },
        {
            "Content": "trem",
            "Question": "Which letter(s) make the sound [t]?",
            "Answers": ["t"],
            "Translation": "train"
        }
    ]

    lesson8Json = [
        {
            "Content": "dedo",
            "Question": "Which letter(s) make the sound [d]?",
            "Answers": ["d"],
            "Translation": "finger"
        },
        {
            "Content": "doce",
            "Question": "Which letter(s) make the sound [d]?",
            "Answers": ["d"],
            "Translation": "sweet"
        },
        {
            "Content": "dente",
            "Question": "Which letter(s) make the sound [d]?",
            "Answers": ["d"],
            "Translation": "tooth"
        },
        {
            "Content": "dia",
            "Question": "Which letter(s) make the sound [d]?",
            "Answers": ["d"],
            "Translation": "day"
        },
        {
            "Content": "dedo",
            "Question": "Which letter(s) make the sound [d]?",
            "Answers": ["d"],
            "Translation": "finger"
        },
        {
            "Content": "dedo",
            "Question": "Which letter(s) make the sound [d]?",
            "Answers": ["d"],
            "Translation": "finger"
        },
        {
            "Content": "dedo",
            "Question": "Which letter(s) make the sound [d]?",
            "Answers": ["d"],
            "Translation": "finger"
        }

    ]

    lesson9Json = [
        {
            "Content": "sol",
            "Question": "Which letter(s) make the sound [s]?",
            "Answers": ["s"],
            "Translation": "sun"
        },
        {
            "Content": "sapato",
            "Question": "Which letter(s) make the sound [s]?",
            "Answers": ["s"],
            "Translation": "shoe"
        },
        {
            "Content": "sorvete",
            "Question": "Which letter(s) make the sound [s]?",
            "Answers": ["s"],
            "Translation": "ice cream"
        },
        {
            "Content": "serpente",
            "Question": "Which letter(s) make the sound [s]?",
            "Answers": ["s"],
            "Translation": "snake"
        },
        {
            "Content": "saúde",
            "Question": "Which letter(s) make the sound [s]?",
            "Answers": ["s"],
            "Translation": "health"
        },
        {
            "Content": "som",
            "Question": "Which letter(s) make the sound [s]?",
            "Answers": ["s"],
            "Translation": "sound"
        },
        {
            "Content": "coração",
            "Question": "Which letter(s) make the sound [s]?",
            "Answers": ["ç"],
            "Translation": "heart"
        }

    ]

    lesson10Json = [
        {
            "Content": "zero",
            "Question": "Which letter(s) make the sound [z]?",
            "Answers": ["z"],
            "Translation": "zero"
        },
        {
            "Content": "zoológico",
            "Question": "Which letter(s) make the sound [z]?",
            "Answers": ["z"],
            "Translation": "zoo"
        },
        {
            "Content": "zangado",
            "Question": "Which letter(s) make the sound [z]?",
            "Answers": ["z"],
            "Translation": "angry"
        },
        {
            "Content": "zebra",
            "Question": "Which letter(s) make the sound [z]?",
            "Answers": ["z"],
            "Translation": "zebra"
        },
        {
            "Content": "azar",
            "Question": "Which letter(s) make the sound [z]?",
            "Answers": ["z"],
            "Translation": "bad luck"
        },
        {
            "Content": "zoom",
            "Question": "Which letter(s) make the sound [z]?",
            "Answers": ["z"],
            "Translation": "zoom"
        },
        {
            "Content": "azeitona",
            "Question": "Which letter(s) make the sound [z]?",
            "Answers": ["z"],
            "Translation": "olive"
        }

    ]

    lesson11Json = [
        {
            "Content": "lua",
            "Question": "Which letter(s) make the sound [l]?",
            "Answers": ["l"],
            "Translation": "moon"
        },
        {
            "Content": "lápis",
            "Question": "Which letter(s) make the sound [l]?",
            "Answers": ["l"],
            "Translation": "pencil"
        },
        {
            "Content": "lago",
            "Question": "Which letter(s) make the sound [l]?",
            "Answers": ["l"],
            "Translation": "lake"
        },
        {
            "Content": "livro",
            "Question": "Which letter(s) make the sound [l]?",
            "Answers": ["l"],
            "Translation": "book"
        },
        {
            "Content": "leão",
            "Question": "Which letter(s) make the sound [l]?",
            "Answers": ["l"],
            "Translation": "lion"
        },
        {
            "Content": "luva",
            "Question": "Which letter(s) make the sound [l]?",
            "Answers": ["l"],
            "Translation": "glove"
        },
        {
            "Content": "limão",
            "Question": "Which letter(s) make the sound [l]?",
            "Answers": ["l"],
            "Translation": "lemon"
        }

    ]

    lesson12Json = [
        {
            "Content": "chave",
            "Question": "Which letter(s) make the sound [ʃ]?",
            "Answers": ["ch"],
            "Translation": "key"
        },
        {
            "Content": "chuva",
            "Question": "Which letter(s) make the sound [ʃ]?",
            "Answers": ["ch"],
            "Translation": "rain"
        },
        {
            "Content": "chão",
            "Question": "Which letter(s) make the sound [ʃ]?",
            "Answers": ["ch"],
            "Translation": "floor"
        },
        {
            "Content": "chocolate",
            "Question": "Which letter(s) make the sound [ʃ]?",
            "Answers": ["ch"],
            "Translation": "chocolate"
        },
        {
            "Content": "chamar",
            "Question": "Which letter(s) make the sound [ʃ]?",
            "Answers": ["ch"],
            "Translation": "to call"
        },
        {
            "Content": "choque",
            "Question": "Which letter(s) make the sound [ʃ]?",
            "Answers": ["ch"],
            "Translation": "shock"
        },
        {
            "Content": "chef",
            "Question": "Which letter(s) make the sound [ʃ]?",
            "Answers": ["ch"],
            "Translation": "chef"
        }
    ]

    lesson13Json = [
        {
            "Content": "jornal",
            "Question": "Which letter(s) make the sound [ʒ]?",
            "Answers": ["j"],
            "Translation": "newspaper"
        },
        {
            "Content": "jarro",
            "Question": "Which letter(s) make the sound [ʒ]?",
            "Answers": ["j"],
            "Translation": "jug"
        },
        {
            "Content": "jeito",
            "Question": "Which letter(s) make the sound [ʒ]?",
            "Answers": ["j"],
            "Translation": "way/manner"
        },
        {
            "Content": "janela",
            "Question": "Which letter(s) make the sound [ʒ]?",
            "Answers": ["j"],
            "Translation": "window"
        },
        {
            "Content": "jardim",
            "Question": "Which letter(s) make the sound [ʒ]?",
            "Answers": ["j"],
            "Translation": "garden"
        },
        {
            "Content": "jogar",
            "Question": "Which letter(s) make the sound [ʒ]?",
            "Answers": ["j"],
            "Translation": "to play"
        },
        {
            "Content": "junto",
            "Question": "Which letter(s) make the sound [ʒ]?",
            "Answers": ["j"],
            "Translation": "together"
        }
    ]

    lesson14Json = [
        {
            "Content": "brilho",
            "Question": "Which letter(s) make the sound [ʎ]?",
            "Answers": ["lh"],
            "Translation": "brightness"
        },
        {
            "Content": "trabalho",
            "Question": "Which letter(s) make the sound [ʎ]?",
            "Answers": ["lh"],
            "Translation": "work"
        },
        {
            "Content": "ilha",
            "Question": "Which letter(s) make the sound [ʎ]?",
            "Answers": ["lh"],
            "Translation": "island"
        },
        {
            "Content": "molho",
            "Question": "Which letter(s) make the sound [ʎ]?",
            "Answers": ["lh"],
            "Translation": "sauce"
        },
        {
            "Content": "brilhar",
            "Question": "Which letter(s) make the sound [ʎ]?",
            "Answers": ["lh"],
            "Translation": "to shine"
        },
        {
            "Content": "alho",
            "Question": "Which letter(s) make the sound [ʎ]?",
            "Answers": ["lh"],
            "Translation": "garlic"
        },
        {
            "Content": "coelho",
            "Question": "Which letter(s) make the sound [ʎ]?",
            "Answers": ["lh"],
            "Translation": "rabbit"
        }
    ]

    lesson15Json = [
        {
            "Content": "cachorro",
            "Question": "Which letter(s) make the sound [k]?",
            "Answers": ["c"],
            "Translation": "dog"
        },
        {
            "Content": "cadeira",
            "Question": "Which letter(s) make the sound [k]?",
            "Answers": ["c"],
            "Translation": "chair"
        },
        {
            "Content": "cozinha",
            "Question": "Which letter(s) make the sound [k]?",
            "Answers": ["c"],
            "Translation": "kitchen"
        },
        {
            "Content": "cavalo",
            "Question": "Which letter(s) make the sound [k]?",
            "Answers": ["c"],
            "Translation": "horse"
        },
        {
            "Content": "coração",
            "Question": "Which letter(s) make the sound [k]?",
            "Answers": ["c"],
            "Translation": "heart"
        },
        {
            "Content": "copo",
            "Question": "Which letter(s) make the sound [k]?",
            "Answers": ["c"],
            "Translation": "cup"
        },
    ]

    lesson16Json = [
        {
            "Content": "gato",
            "Question": "Which letter(s) make the sound [g]?",
            "Answers": ["g"],
            "Translation": "cat"
        },
        {
            "Content": "garrafa",
            "Question": "Which letter(s) make the sound [g]?",
            "Answers": ["g"],
            "Translation": "bottle"
        },
        {
            "Content": "guitarra",
            "Question": "Which letter(s) make the sound [g]?",
            "Answers": ["g"],
            "Translation": "guitar"
        },
        {
            "Content": "galinha",
            "Question": "Which letter(s) make the sound [g]?",
            "Answers": ["g"],
            "Translation": "chicken"
        },
        {
            "Content": "grande",
            "Question": "Which letter(s) make the sound [g]?",
            "Answers": ["g"],
            "Translation": "big"
        },
        {
            "Content": "água",
            "Question": "Which letter(s) make the sound [g]?",
            "Answers": ["g"],
            "Translation": "water"
        },
        {
            "Content": "gostoso",
            "Question": "Which letter(s) make the sound [g]?",
            "Answers": ["g"],
            "Translation": "tasty"
        },
    ]

    lesson17Json = [
        {
            "Content": "rato",
            "Question": "Which letter(s) make the sound [ʁ]?",
            "Answers": ["r"],
            "Translation": "rat"
        },
        {
            "Content": "rosa",
            "Question": "Which letter(s) make the sound [ʁ]?",
            "Answers": ["r"],
            "Translation": "rose"
        },
        {
            "Content": "rua",
            "Question": "Which letter(s) make the sound [ʁ]?",
            "Answers": ["r"],
            "Translation": "street"
        },
        {
            "Content": "relógio",
            "Question": "Which letter(s) make the sound [ʁ]?",
            "Answers": ["r"],
            "Translation": "watch"
        },
        {
            "Content": "roda",
            "Question": "Which letter(s) make the sound [ʁ]?",
            "Answers": ["r"],
            "Translation": "wheel"
        },
        {
            "Content": "rosto",
            "Question": "Which letter(s) make the sound [ʁ]?",
            "Answers": ["r"],
            "Translation": "face"
        },
        {
            "Content": "raio",
            "Question": "Which letter(s) make the sound [ʁ]?",
            "Answers": ["r"],
            "Translation": "ray"
        }
    ]

    lesson18Json = [
        {
            "Content": "lírio",
            "Question": "Which letter(s) make the sound [i]?",
            "Answers": ["í"],
            "Translation": "lily"
        },
        {
            "Content": "riso",
            "Question": "Which letter(s) make the sound [i]?",
            "Answers": ["i"],
            "Translation": "laughter"
        },
        {
            "Content": "frio",
            "Question": "Which letter(s) make the sound [i]?",
            "Answers": ["i"],
            "Translation": "cold"
        },
        {
            "Content": "livro",
            "Question": "Which letter(s) make the sound [i]?",
            "Answers": ["i"],
            "Translation": "book"
        },
        {
            "Content": "rio",
            "Question": "Which letter(s) make the sound [i]?",
            "Answers": ["i"],
            "Translation": "river"
        },
        {
            "Content": "tijolo",
            "Question": "Which letter(s) make the sound [i]?",
            "Answers": ["i"],
            "Translation": "brick"
        },
        {
            "Content": "menino",
            "Question": "Which letter(s) make the sound [i]?",
            "Answers": ["i"],
            "Translation": "boy"
        }

    ]

    lesson19Json = [
        {
            "Content": "mesa",
            "Question": "Which letter(s) make the sound [e]?",
            "Answers": ["e"],
            "Translation": "table"
        },
        {
            "Content": "telefone",
            "Question": "Which letter(s) make the sound [e]?",
            "Answers": ["e"],
            "Translation": "telephone"
        },
        {
            "Content": "elefante",
            "Question": "Which letter(s) make the sound [e]?",
            "Answers": ["e"],
            "Translation": "elephant"
        },
        {
            "Content": "leite",
            "Question": "Which letter(s) make the sound [e]?",
            "Answers": ["e"],
            "Translation": "milk"
        },
        {
            "Content": "escola",
            "Question": "Which letter(s) make the sound [e]?",
            "Answers": ["e"],
            "Translation": "school"
        },
        {
            "Content": "terra",
            "Question": "Which letter(s) make the sound [e]?",
            "Answers": ["e"],
            "Translation": "earth"
        },
        {
            "Content": "festa",
            "Question": "Which letter(s) make the sound [e]?",
            "Answers": ["e"],
            "Translation": "party"
        }
    ]

    lesson20Json = [
        {
            "Content": "casa",
            "Question": "Which letter(s) make the sound [a]?",
            "Answers": ["a"],
            "Translation": "house"
        },
        {
            "Content": "gato",
            "Question": "Which letter(s) make the sound [a]?",
            "Answers": ["a"],
            "Translation": "cat"
        },
        {
            "Content": "mala",
            "Question": "Which letter(s) make the sound [a]?",
            "Answers": ["a"],
            "Translation": "suitcase"
        },
        {
            "Content": "papel",
            "Question": "Which letter(s) make the sound [a]?",
            "Answers": ["a"],
            "Translation": "paper"
        },
        {
            "Content": "banana",
            "Question": "Which letter(s) make the sound [a]?",
            "Answers": ["a"],
            "Translation": "banana"
        },
        {
            "Content": "sala",
            "Question": "Which letter(s) make the sound [a]?",
            "Answers": ["a"],
            "Translation": "room"
        },
        {
            "Content": "água",
            "Question": "Which letter(s) make the sound [a]?",
            "Answers": ["á"],
            "Translation": "water"
        }
    ]

    lesson21Json = [
        {
            "Content": "sol",
            "Question": "Which letter(s) make the sound [o]?",
            "Answers": ["o"],
            "Translation": "sun"
        },
        {
            "Content": "coco",
            "Question": "Which letter(s) make the sound [o]?",
            "Answers": ["o"],
            "Translation": "coconut"
        },
        {
            "Content": "rosto",
            "Question": "Which letter(s) make the sound [o]?",
            "Answers": ["o"],
            "Translation": "face"
        },
        {
            "Content": "bola",
            "Question": "Which letter(s) make the sound [o]?",
            "Answers": ["o"],
            "Translation": "ball"
        },
        {
            "Content": "coração",
            "Question": "Which letter(s) make the sound [o]?",
            "Answers": ["o"],
            "Translation": "heart"
        },
        {
            "Content": "porta",
            "Question": "Which letter(s) make the sound [o]?",
            "Answers": ["o"],
            "Translation": "door"
        },
        {
            "Content": "olho",
            "Question": "Which letter(s) make the sound [o]?",
            "Answers": ["o"],
            "Translation": "eye"
        }

    ]

    lesson22Json = [
        {
            "Content": "cachorro",
            "Question": "Which letter(s) make the sound [ɔ]?",
            "Answers": ["o"],
            "Translation": "dog"
        },
        {
            "Content": "porta",
            "Question": "Which letter(s) make the sound [ɔ]?",
            "Answers": ["o"],
            "Translation": "door"
        },
        {
            "Content": "bola",
            "Question": "Which letter(s) make the sound [ɔ]?",
            "Answers": ["o"],
            "Translation": "ball"
        },
        {
            "Content": "sorriso",
            "Question": "Which letter(s) make the sound [ɔ]?",
            "Answers": ["o"],
            "Translation": "smile"
        },
        {
            "Content": "mochila",
            "Question": "Which letter(s) make the sound [ɔ]?",
            "Answers": ["o"],
            "Translation": "backpack"
        },
        {
            "Content": "torta",
            "Question": "Which letter(s) make the sound [ɔ]?",
            "Answers": ["o"],
            "Translation": "pie"
        }
        // Add more entries as needed
    ]

    lesson23Json = [
        {
            "Content": "lua",
            "Question": "Which letter(s) make the sound [u]?",
            "Answers": ["u"],
            "Translation": "moon"
        },
        {
            "Content": "luta",
            "Question": "Which letter(s) make the sound [u]?",
            "Answers": ["u"],
            "Translation": "fight"
        },
        {
            "Content": "fruta",
            "Question": "Which letter(s) make the sound [u]?",
            "Answers": ["u"],
            "Translation": "fruit"
        },
        {
            "Content": "mundo",
            "Question": "Which letter(s) make the sound [u]?",
            "Answers": ["u"],
            "Translation": "world"
        },
        {
            "Content": "guru",
            "Question": "Which letter(s) make the sound [u]?",
            "Answers": ["u"],
            "Translation": "guru"
        },
        {
            "Content": "burro",
            "Question": "Which letter(s) make the sound [u]?",
            "Answers": ["u"],
            "Translation": "donkey"
        },
        {
            "Content": "surdo",
            "Question": "Which letter(s) make the sound [u]?",
            "Answers": ["u"],
            "Translation": "deaf"
        }
        // Add more entries as needed
    ]

    lesson24Json = [
        {
            "Content": "cão",
            "Question": "Which letter(s) make the sound [ãw̃]?",
            "Answers": ["ão"],
            "Translation": "dog"
        },
        {
            "Content": "pão",
            "Question": "Which letter(s) make the sound [ãw̃]?",
            "Answers": ["ão"],
            "Translation": "bread"
        },
        {
            "Content": "mão",
            "Question": "Which letter(s) make the sound [ãw̃]?",
            "Answers": ["ão"],
            "Translation": "hand"
        },
        {
            "Content": "irmão",
            "Question": "Which letter(s) make the sound [ãw̃]?",
            "Answers": ["ão"],
            "Translation": "brother"
        },
        {
            "Content": "nação",
            "Question": "Which letter(s) make the sound [ãw̃]?",
            "Answers": ["ão"],
            "Translation": "nation"
        },
        {
            "Content": "coração",
            "Question": "Which letter(s) make the sound [ãw̃]?",
            "Answers": ["ão"],
            "Translation": "heart"
        },
        {
            "Content": "ação",
            "Question": "Which letter(s) make the sound [ãw̃]?",
            "Answers": ["ão"],
            "Translation": "action"
        }
        // Add more entries as needed
    ]




    lessonJSONData = [lesson1Json, lesson2Json, lesson3Json, lesson4Json, lesson5Json, lesson6Json, lesson7Json, lesson8Json, lesson9Json, lesson10Json, lesson11Json, lesson12Json, lesson13Json, lesson14Json, lesson15Json, lesson16Json, lesson17Json, lesson18Json, lesson19Json, lesson20Json, lesson21Json, lesson22Json, lesson23Json, lesson24Json];
}