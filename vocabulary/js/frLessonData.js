if (localStorage.getItem("currentLanguage") === "fr") {

    lessonNameData = ["Welcome to the Course!", "Colours 1", "Music 1"];

    lesson1Json = [
        {
            "Content": "La Baguette",
            "Question": "Translate into English.",
            "Answers": ["The Baguette 🥖"],
            "Options": [
                "The Croissant 🥐",
                "The Eiffel Tower 🗼",
                "The Louvre Museum 🏛️",
                "The Baguette 🥖"
            ],
            "Translation": "The Baguette 🥖",
            "Hint": "🥖"
        },
        {
            "Content": "The Baguette 🥖",
            "Question": "Translate into French.",
            "Answers": ["La Baguette 🥖"],
            "Options": [
                "La Baguette 🥖",
                "Le Croissant 🥐",
                "La Tour Eiffel 🗼",
                "Le Musée du Louvre 🏛️"
            ],
            "Translation": "La Baguette 🥖",
            "Hint": "🥖"
        },
        {
            "Content": "Le Chat",
            "Question": "Translate into English.",
            "Answers": ["The Cat 🐱"],
            "Options": [
                "The Dog 🐶",
                "The Mouse 🐭",
                "The Cat 🐱",
                "The Bird 🐦"
            ],
            "Translation": "The Cat 🐱",
            "Hint": "🐱"
        },
        {
            "Content": "The Cat",
            "Question": "Translate into French.",
            "Answers": ["Le Chat 🐱"],
            "Options": [
                "Le Chien 🐶",
                "La Souris 🐭",
                "Le Chat 🐱",
                "L'Oiseau 🐦"
            ],
            "Translation": "Le Chat 🐱",
            "Hint": "🐱"
        },
        {
            "Content": "Le Chien",
            "Question": "Translate into English.",
            "Answers": ["The Dog 🐶"],
            "Options": [
                "The Cat 🐱",
                "The Mouse 🐭",
                "The Dog 🐶",
                "The Bird 🐦"
            ],
            "Translation": "The Dog 🐶",
            "Hint": "🐶"
        },
        {
            "Content": "The Dog",
            "Question": "Translate into French.",
            "Answers": ["Le Chien 🐶"],
            "Options": [
                "Le Chat 🐱",
                "La Souris 🐭",
                "Le Chien 🐶",
                "L'Oiseau 🐦"
            ],
            "Translation": "Le Chien 🐶",
            "Hint": "🐶"
        },
        {
            "Content": "La Pomme",
            "Question": "Translate into English.",
            "Answers": ["The Apple 🍎"],
            "Options": [
                "The Apple 🍎",
                "The Banana 🍌",
                "The Orange 🍊",
                "The Pear 🍐"
            ],
            "Translation": "The Apple 🍎",
            "Hint": "🍎"
        },
        {
            "Content": "The Apple",
            "Question": "Translate into French.",
            "Answers": ["La Pomme 🍎"],
            "Options": [
                "La Pomme 🍎",
                "La Banane 🍌",
                "L'Orange 🍊",
                "Le Poire 🍐"
            ],
            "Translation": "La Pomme 🍎",
            "Hint": "🍎"
        },
        {
            "Content": "The Tree",
            "Question": "Translate into French.",
            "Answers": ["L'Arbre 🌳"],
            "Options": [
                "L'Arbre 🌳",
                "La Fleur 🌼",
                "Le Rocher 🪨",
                "Le Nuage ☁️"
            ],
            "Translation": "L'Arbre 🌳",
            "Hint": "🌳"
        },
        {
            "Content": "L'Arbre",
            "Question": "Translate into English.",
            "Answers": ["The Tree 🌳"],
            "Options": [
                "The Tree 🌳",
                "The Flower 🌼",
                "The Rock 🪨",
                "The Cloud ☁️"
            ],
            "Translation": "The Tree 🌳",
            "Hint": "🌳"
        },
        {
            "Content": "The Hat",
            "Question": "Translate into French.",
            "Answers": ["Le Chapeau 🎩"],
            "Options": [
                "Le Chapeau 🎩",
                "La Chemise 👔",
                "La Jupe 🩲",
                "Les Chaussures 👞"
            ],
            "Translation": "Le Chapeau 🎩",
            "Hint": "🎩"
        },
        {
            "Content": "Le Chapeau",
            "Question": "Translate into English.",
            "Answers": ["The Hat 🎩"],
            "Options": [
                "The Hat 🎩",
                "The Shirt 👔",
                "The Skirt 🩲",
                "The Shoes 👞"
            ],
            "Translation": "The Hat 🎩",
            "Hint": "🎩"
        },
        {
            "Content": "The Ball",
            "Question": "Translate into French.",
            "Answers": ["Le Ballon 🏀"],
            "Options": [
                "Le Ballon 🏀",
                "Le Livre 📖",
                "Le Chat 🐱",
                "L'Étoile 🌟"
            ],
            "Translation": "Le Ballon 🏀",
            "Hint": "🏀"
        },
        {
            "Content": "Le Ballon ",
            "Question": "Translate into English.",
            "Answers": ["The Ball 🏀"],
            "Options": [
                "The Ball 🏀",
                "The Book 📖",
                "The Cat 🐱",
                "The Star 🌟"
            ],
            "Translation": "The Ball 🏀",
            "Hint": "🏀"
        }
    ];

    lesson2Json = [
        {
            "Content": "The Red",
            "Question": "Translate into French.",
            "Answers": ["Le Rouge 🟥"],
            "Options": [
                "Le Rouge 🟥",
                "Le Bleu 🟦",
                "Le Jaune 🟨",
                "Le Vert 🟩"
            ],
            "Translation": "Le Rouge 🟥",
            "Hint": "🟥"
        },
        {
            "Content": "Le Rouge",
            "Question": "Translate into English.",
            "Answers": ["The Red 🟥"],
            "Options": [
                "The Red 🟥",
                "The Blue 🟦",
                "The Yellow 🟨",
                "The Green 🟩"
            ],
            "Translation": "The Red 🟥",
            "Hint": "🟥"
        },
        {
            "Content": "The Blue",
            "Question": "Translate into French.",
            "Answers": ["Le Bleu 🟦"],
            "Options": [
                "Le Rouge 🟥",
                "Le Bleu 🟦",
                "Le Jaune 🟨",
                "Le Vert 🟩"
            ],
            "Translation": "Le Bleu 🟦",
            "Hint": "🟦"
        },
        {
            "Content": "Le Bleu",
            "Question": "Translate into English.",
            "Answers": ["The Blue 🟦"],
            "Options": [
                "The Red 🟥",
                "The Blue 🟦",
                "The Yellow 🟨",
                "The Green 🟩"
            ],
            "Translation": "The Blue 🟦",
            "Hint": "🟦"
        },
        {
            "Content": "The Yellow",
            "Question": "Translate into French.",
            "Answers": ["Le Jaune 🟨"],
            "Options": [
                "Le Rouge 🟥",
                "Le Bleu 🟦",
                "Le Jaune 🟨",
                "Le Vert 🟩"
            ],
            "Translation": "Le Jaune 🟨",
            "Hint": "🟨"
        },
        {
            "Content": "Le Jaune",
            "Question": "Translate into English.",
            "Answers": ["The Yellow 🟨"],
            "Options": [
                "The Red 🟥",
                "The Blue 🟦",
                "The Yellow 🟨",
                "The Green 🟩"
            ],
            "Translation": "The Yellow 🟨",
            "Hint": "🟨"
        },
        {
            "Content": "The Green",
            "Question": "Translate into French.",
            "Answers": ["Le Vert 🟩"],
            "Options": [
                "Le Rouge 🟥",
                "Le Bleu 🟦",
                "Le Jaune 🟨",
                "Le Vert 🟩"
            ],
            "Translation": "Le Vert 🟩",
            "Hint": "🟩"
        },
        {
            "Content": "Le Vert",
            "Question": "Translate into French.",
            "Answers": ["The Green 🟩"],
            "Options": [
                "The Red 🟥",
                "The Blue 🟦",
                "The Yellow 🟨",
                "The Green 🟩"
            ],
            "Translation": "The Green 🟩",
            "Hint": "🟩"
        },
        {
            "Content": "The Orange",
            "Question": "Translate into French.",
            "Answers": ["L'Orange 🟧"],
            "Options": [
                "L'Orange 🟧",
                "Le Violet 🟪",
                "Le Marron 🟨",
                "Le Rose 🟫"
            ],
            "Translation": "L'Orange 🟧",
            "Hint": "🟧"
        },
        {
            "Content": "L'Orange",
            "Question": "Translate into English.",
            "Answers": ["The Orange 🟧"],
            "Options": [
                "The Orange 🟧",
                "The Purple 🟪",
                "The Brown 🟨",
                "The Pink 🟫"
            ],
            "Translation": "The Orange 🟧",
            "Hint": "🟧"
        },
        {
            "Content": "The Purple",
            "Question": "Translate into French.",
            "Answers": ["Le Violet 🟪"],
            "Options": [
                "Le Violet 🟪",
                "L'Orange 🟧",
                "Le Marron 🟨",
                "Le Rose 🟫"
            ],
            "Translation": "Le Violet 🟪",
            "Hint": "🟪"
        },
        {
            "Content": "Le Violet",
            "Question": "Translate into English.",
            "Answers": ["The Purple 🟪"],
            "Options": [
                "The Purple 🟪",
                "The Orange 🟧",
                "The Brown 🟨",
                "The Pink 🟫"
            ],
            "Translation": "The Purple 🟪",
            "Hint": "🟪"
        }
    ];

    lesson3Json = [
        {
            "Content": "The Piano",
            "Question": "Translate into French.",
            "Answers": ["Le Piano 🎹"],
            "Options": [
                "Le Piano 🎹",
                "La Guitare 🎸",
                "Le Violon 🎻",
                "La Batterie 🥁"
            ],
            "Translation": "Le Piano 🎹",
            "Hint": "🎹"
        },
        {
            "Content": "Le Piano",
            "Question": "Translate into English.",
            "Answers": ["The Piano 🎹"],
            "Options": [
                "The Piano 🎹",
                "The Guitar 🎸",
                "The Violin 🎻",
                "The Drums 🥁"
            ],
            "Translation": "The Piano 🎹",
            "Hint": "🎹"
        },
        {
            "Content": "The Guitar",
            "Question": "Translate into French.",
            "Answers": ["La Guitare 🎸"],
            "Options": [
                "La Guitare 🎸",
                "Le Piano 🎹",
                "Le Violon 🎻",
                "La Batterie 🥁"
            ],
            "Translation": "La Guitare 🎸",
            "Hint": "🎸"
        },
        {
            "Content": "La Guitare",
            "Question": "Translate into English.",
            "Answers": ["The Guitar 🎸"],
            "Options": [
                "The Guitar 🎸",
                "The Piano 🎹",
                "The Violin 🎻",
                "The Drums 🥁"
            ],
            "Translation": "The Guitar 🎸",
            "Hint": "🎸"
        },
        {
            "Content": "The Violin",
            "Question": "Translate into French.",
            "Answers": ["Le Violon 🎻"],
            "Options": [
                "Le Violon 🎻",
                "La Guitare 🎸",
                "Le Piano 🎹",
                "La Batterie 🥁"
            ],
            "Translation": "Le Violon 🎻",
            "Hint": "🎻"
        },
        {
            "Content": "Le Violon",
            "Question": "Translate into English.",
            "Answers": ["The Violin 🎻"],
            "Options": [
                "The Violin 🎻",
                "The Guitar 🎸",
                "The Piano 🎹",
                "The Drums 🥁"
            ],
            "Translation": "The Violin 🎻",
            "Hint": "🎻"
        },
        {
            "Content": "The Drums",
            "Question": "Translate into French.",
            "Answers": ["La Batterie 🥁"],
            "Options": [
                "La Batterie 🥁",
                "Le Piano 🎹",
                "La Guitare 🎸",
                "Le Violon 🎻"
            ],
            "Translation": "La Batterie 🥁",
            "Hint": "🥁"
        },
        {
            "Content": "La Batterie",
            "Question": "Translate into English.",
            "Answers": ["The Drums 🥁"],
            "Options": [
                "The Drums 🥁",
                "The Piano 🎹",
                "The Guitar 🎸",
                "The Violin 🎻"
            ],
            "Translation": "The Drums 🥁",
            "Hint": "🥁"
        },
        {
            "Content": "The Saxophone",
            "Question": "Translate into French.",
            "Answers": ["Le Saxophone 🎷"],
            "Options": [
                "Le Saxophone 🎷",
                "La Trompette 🎺",
                "Le Clarinette 🎶",
                "La Harpe 🎵"
            ],
            "Translation": "Le Saxophone 🎷",
            "Hint": "🎷"
        },
        {
            "Content": "Le Saxophone",
            "Question": "Translate into English.",
            "Answers": ["The Saxophone 🎷"],
            "Options": [
                "The Saxophone 🎷",
                "The Trumpet 🎺",
                "The Clarinet 🎶",
                "The Harp 🎵"
            ],
            "Translation": "The Saxophone 🎷",
            "Hint": "🎷"
        },
        {
            "Content": "The Trumpet",
            "Question": "Translate into French.",
            "Answers": ["La Trompette 🎺"],
            "Options": [
                "La Trompette 🎺",
                "Le Saxophone 🎷",
                "La Clarinette 🎶",
                "La Harpe 🎵"
            ],
            "Translation": "La Trompette 🎺",
            "Hint": "🎺"
        },
        {
            "Content": "La Trompette",
            "Question": "Translate into English.",
            "Answers": ["The Trumpet 🎺"],
            "Options": [
                "The Trumpet 🎺",
                "The Saxophone 🎷",
                "The Clarinet 🎶",
                "The Harp 🎵"
            ],
            "Translation": "The Trumpet 🎺",
            "Hint": "🎺"
        }
    ];

    

    lessonJSONData = [lesson1Json, lesson2Json, lesson3Json];
}