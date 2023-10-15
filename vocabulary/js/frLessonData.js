if (localStorage.getItem("currentLanguage") === "fr") {

    lessonNameData = ["Welcome to the Course!", "Colours 1", "Music 1"];

    lesson1Json = [
        {
            "Content": "La Baguette 🥖",
            "Question": "Translate into English.",
            "Answers": ["The Baguette 🥖"],
            "Options": [
                "The Croissant 🥐",
                "The Eiffel Tower 🗼",
                "The Louvre Museum 🏛️",
                "The Baguette 🥖"
            ],
            "Translation": "The Baguette 🥖"
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
            "Translation": "La Baguette 🥖"
        },
        {
            "Content": "The Cat 🐱",
            "Question": "Translate into French.",
            "Answers": ["Le Chat 🐱"],
            "Options": [
                "Le Chien 🐶",
                "La Souris 🐭",
                "Le Chat 🐱",
                "L'Oiseau 🐦"
            ],
            "Translation": "Le Chat 🐱"
        },
        {
            "Content": "Le Chat 🐱",
            "Question": "Translate into English.",
            "Answers": ["The Cat 🐱"],
            "Options": [
                "The Dog 🐶",
                "The Mouse 🐭",
                "The Cat 🐱",
                "The Bird 🐦"
            ],
            "Translation": "The Cat 🐱"
        },
        {
            "Content": "The Dog 🐶",
            "Question": "Translate into French.",
            "Answers": ["Le Chien 🐶"],
            "Options": [
                "Le Chat 🐱",
                "La Souris 🐭",
                "Le Chien 🐶",
                "L'Oiseau 🐦"
            ],
            "Translation": "Le Chien 🐶"
        },
        {
            "Content": "Le Chien 🐶",
            "Question": "Translate into English.",
            "Answers": ["The Dog 🐶"],
            "Options": [
                "The Cat 🐱",
                "The Mouse 🐭",
                "The Dog 🐶",
                "The Bird 🐦"
            ],
            "Translation": "The Dog 🐶"
        },
        {
            "Content": "The Apple 🍎",
            "Question": "Translate into French.",
            "Answers": ["La Pomme 🍎"],
            "Options": [
                "La Pomme 🍎",
                "La Banane 🍌",
                "L'Orange 🍊",
                "Le Poire 🍐"
            ],
            "Translation": "La Pomme 🍎"
        },
        {
            "Content": "La Pomme 🍎",
            "Question": "Translate into English.",
            "Answers": ["The Apple 🍎"],
            "Options": [
                "The Apple 🍎",
                "The Banana 🍌",
                "The Orange 🍊",
                "The Pear 🍐"
            ],
            "Translation": "The Apple 🍎"
        },
        {
            "Content": "The Tree 🌳",
            "Question": "Translate into French.",
            "Answers": ["L'Arbre 🌳"],
            "Options": [
                "L'Arbre 🌳",
                "La Fleur 🌼",
                "Le Rocher 🪨",
                "Le Nuage ☁️"
            ],
            "Translation": "L'Arbre 🌳"
        },
        {
            "Content": "L'Arbre 🌳",
            "Question": "Translate into English.",
            "Answers": ["The Tree 🌳"],
            "Options": [
                "The Tree 🌳",
                "The Flower 🌼",
                "The Rock 🪨",
                "The Cloud ☁️"
            ],
            "Translation": "The Tree 🌳"
        },
        {
            "Content": "The Hat 🎩",
            "Question": "Translate into French.",
            "Answers": ["Le Chapeau 🎩"],
            "Options": [
                "Le Chapeau 🎩",
                "La Chemise 👔",
                "La Jupe 🩲",
                "Les Chaussures 👞"
            ],
            "Translation": "Le Chapeau 🎩"
        },
        {
            "Content": "Le Chapeau 🎩",
            "Question": "Translate into English.",
            "Answers": ["The Hat 🎩"],
            "Options": [
                "The Hat 🎩",
                "The Shirt 👔",
                "The Skirt 🩲",
                "The Shoes 👞"
            ],
            "Translation": "The Hat 🎩"
        },
        {
            "Content": "The Ball 🏀",
            "Question": "Translate into French.",
            "Answers": ["Le Ballon 🏀"],
            "Options": [
                "Le Ballon 🏀",
                "Le Livre 📖",
                "Le Chat 🐱",
                "L'Étoile 🌟"
            ],
            "Translation": "Le Ballon 🏀"
        },
        {
            "Content": "Le Ballon 🏀",
            "Question": "Translate into English.",
            "Answers": ["The Ball 🏀"],
            "Options": [
                "The Ball 🏀",
                "The Book 📖",
                "The Cat 🐱",
                "The Star 🌟"
            ],
            "Translation": "The Ball 🏀"
        },
        
        
    ];

    lesson2Json = [
        {
            "Content": "The Red 🟥",
            "Question": "Translate into French.",
            "Answers": ["Le Rouge 🟥"],
            "Options": [
                "Le Rouge 🟥",
                "Le Bleu 🟦",
                "Le Jaune 🟨",
                "Le Vert 🟩"
            ],
            "Translation": "Le Rouge 🟥"
        },
        {
            "Content": "Le Rouge 🟥",
            "Question": "Translate into English.",
            "Answers": ["The Red 🟥"],
            "Options": [
                "The Red 🟥",
                "The Blue 🟦",
                "The Yellow 🟨",
                "The Green 🟩"
            ],
            "Translation": "The Red 🟥"
        },
        {
            "Content": "The Blue 🟦",
            "Question": "Translate into French.",
            "Answers": ["Le Bleu 🟦"],
            "Options": [
                "Le Rouge 🟥",
                "Le Bleu 🟦",
                "Le Jaune 🟨",
                "Le Vert 🟩"
            ],
            "Translation": "Le Bleu 🟦"
        },
        {
            "Content": "Le Bleu 🟦",
            "Question": "Translate into English.",
            "Answers": ["The Blue 🟦"],
            "Options": [
                "The Red 🟥",
                "The Blue 🟦",
                "The Yellow 🟨",
                "The Green 🟩"
            ],
            "Translation": "The Blue 🟦"
        },
        {
            "Content": "The Yellow 🟨",
            "Question": "Translate into French.",
            "Answers": ["Le Jaune 🟨"],
            "Options": [
                "Le Rouge 🟥",
                "Le Bleu 🟦",
                "Le Jaune 🟨",
                "Le Vert 🟩"
            ],
            "Translation": "Le Jaune 🟨"
        },
        {
            "Content": "Le Jaune 🟨",
            "Question": "Translate into English.",
            "Answers": ["The Yellow 🟨"],
            "Options": [
                "The Red 🟥",
                "The Blue 🟦",
                "The Yellow 🟨",
                "The Green 🟩"
            ],
            "Translation": "The Yellow 🟨"
        },
        {
            "Content": "The Green 🟩",
            "Question": "Translate into French.",
            "Answers": ["Le Vert 🟩"],
            "Options": [
                "Le Rouge 🟥",
                "Le Bleu 🟦",
                "Le Jaune 🟨",
                "Le Vert 🟩"
            ],
            "Translation": "Le Vert 🟩"
        },
        {
            "Content": "Le Vert 🟩",
            "Question": "Translate into English.",
            "Answers": ["The Green 🟩"],
            "Options": [
                "The Red 🟥",
                "The Blue 🟦",
                "The Yellow 🟨",
                "The Green 🟩"
            ],
            "Translation": "The Green 🟩"
        },
        {
            "Content": "The Orange 🟧",
            "Question": "Translate into French.",
            "Answers": ["L'Orange 🟧"],
            "Options": [
                "L'Orange 🟧",
                "Le Violet 🟪",
                "Le Marron 🟨",
                "Le Rose 🟫"
            ],
            "Translation": "L'Orange 🟧"
        },
        {
            "Content": "L'Orange 🟧",
            "Question": "Translate into English.",
            "Answers": ["The Orange 🟧"],
            "Options": [
                "The Orange 🟧",
                "The Purple 🟪",
                "The Brown 🟨",
                "The Pink 🟫"
            ],
            "Translation": "The Orange 🟧"
        },
        {
            "Content": "The Purple 🟪",
            "Question": "Translate into French.",
            "Answers": ["Le Violet 🟪"],
            "Options": [
                "Le Violet 🟪",
                "L'Orange 🟧",
                "Le Marron 🟨",
                "Le Rose 🟫"
            ],
            "Translation": "Le Violet 🟪"
        },
        {
            "Content": "Le Violet 🟪",
            "Question": "Translate into English.",
            "Answers": ["The Purple 🟪"],
            "Options": [
                "The Purple 🟪",
                "The Orange 🟧",
                "The Brown 🟨",
                "The Pink 🟫"
            ],
            "Translation": "The Purple 🟪"
        },


    ];

    lesson3Json = [
        {
            "Content": "The Piano 🎹",
            "Question": "Translate into French.",
            "Answers": ["Le Piano 🎹"],
            "Options": [
                "Le Piano 🎹",
                "La Guitare 🎸",
                "Le Violon 🎻",
                "La Batterie 🥁"
            ],
            "Translation": "Le Piano 🎹"
        },
        {
            "Content": "Le Piano 🎹",
            "Question": "Translate into English.",
            "Answers": ["The Piano 🎹"],
            "Options": [
                "The Piano 🎹",
                "The Guitar 🎸",
                "The Violin 🎻",
                "The Drums 🥁"
            ],
            "Translation": "The Piano 🎹"
        },
        {
            "Content": "The Guitar 🎸",
            "Question": "Translate into French.",
            "Answers": ["La Guitare 🎸"],
            "Options": [
                "La Guitare 🎸",
                "Le Piano 🎹",
                "Le Violon 🎻",
                "La Batterie 🥁"
            ],
            "Translation": "La Guitare 🎸"
        },
        {
            "Content": "La Guitare 🎸",
            "Question": "Translate into English.",
            "Answers": ["The Guitar 🎸"],
            "Options": [
                "The Guitar 🎸",
                "The Piano 🎹",
                "The Violin 🎻",
                "The Drums 🥁"
            ],
            "Translation": "The Guitar 🎸"
        },
        {
            "Content": "The Violin 🎻",
            "Question": "Translate into French.",
            "Answers": ["Le Violon 🎻"],
            "Options": [
                "Le Violon 🎻",
                "La Guitare 🎸",
                "Le Piano 🎹",
                "La Batterie 🥁"
            ],
            "Translation": "Le Violon 🎻"
        },
        {
            "Content": "Le Violon 🎻",
            "Question": "Translate into English.",
            "Answers": ["The Violin 🎻"],
            "Options": [
                "The Violin 🎻",
                "The Guitar 🎸",
                "The Piano 🎹",
                "The Drums 🥁"
            ],
            "Translation": "The Violin 🎻"
        },
        {
            "Content": "The Drums 🥁",
            "Question": "Translate into French.",
            "Answers": ["La Batterie 🥁"],
            "Options": [
                "La Batterie 🥁",
                "Le Piano 🎹",
                "La Guitare 🎸",
                "Le Violon 🎻"
            ],
            "Translation": "La Batterie 🥁"
        },
        {
            "Content": "La Batterie 🥁",
            "Question": "Translate into English.",
            "Answers": ["The Drums 🥁"],
            "Options": [
                "The Drums 🥁",
                "The Piano 🎹",
                "The Guitar 🎸",
                "The Violin 🎻"
            ],
            "Translation": "The Drums 🥁"
        },
        {
            "Content": "The Saxophone 🎷",
            "Question": "Translate into French.",
            "Answers": ["Le Saxophone 🎷"],
            "Options": [
                "Le Saxophone 🎷",
                "La Trompette 🎺",
                "Le Clarinette 🎶",
                "La Harpe 🎵"
            ],
            "Translation": "Le Saxophone 🎷"
        },
        {
            "Content": "Le Saxophone 🎷",
            "Question": "Translate into English.",
            "Answers": ["The Saxophone 🎷"],
            "Options": [
                "The Saxophone 🎷",
                "The Trumpet 🎺",
                "The Clarinet 🎶",
                "The Harp 🎵"
            ],
            "Translation": "The Saxophone 🎷"
        },
        {
            "Content": "The Trumpet 🎺",
            "Question": "Translate into French.",
            "Answers": ["La Trompette 🎺"],
            "Options": [
                "La Trompette 🎺",
                "Le Saxophone 🎷",
                "La Clarinette 🎶",
                "La Harpe 🎵"
            ],
            "Translation": "La Trompette 🎺"
        },
        {
            "Content": "La Trompette 🎺",
            "Question": "Translate into English.",
            "Answers": ["The Trumpet 🎺"],
            "Options": [
                "The Trumpet 🎺",
                "The Saxophone 🎷",
                "The Clarinet 🎶",
                "The Harp 🎵"
            ],
            "Translation": "The Trumpet 🎺"
        }
    ];

    lessonJSONData = [lesson1Json, lesson2Json, lesson3Json];
}