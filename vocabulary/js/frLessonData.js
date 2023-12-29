if (localStorage.getItem("currentLanguage") === "fr") {

    lessonNameData = ["Welcome to the Course!", "Colours 1", "Music 1", "Holidays 1", "Food 1", "Culture", "Colours 2", "Music 2", "Holidays 2", "Food 2"];

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
            "Content": "The Baguette",
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

    lesson4Json = [
        {
            "Content": "Le Sapin de Noël",
            "Question": "Translate into English.",
            "Answers": ["Christmas Tree 🎄"],
            "Options": [
                "Easter Bunny 🐰",
                "Jack-o'-lantern 🎃",
                "Birthday Cake 🎂",
                "Christmas Tree 🎄"
            ],
            "Translation": "Christmas Tree 🎄",
            "Hint": "🎄"
        },
        {
            "Content": "Christmas Tree",
            "Question": "Translate into French.",
            "Answers": ["Le Sapin de Noël 🎄"],
            "Options": [
                "Le Lapin de Pâques 🐰",
                "La Citrouille d'Halloween 🎃",
                "Le Gâteau d'Anniversaire 🎂",
                "Le Sapin de Noël 🎄"
            ],
            "Translation": "Le Sapin de Noël 🎄",
            "Hint": "🎄"
        },        
        {
            "Content": "Le Lapin de Pâques",
            "Question": "Translate into English.",
            "Answers": ["Easter Bunny 🐰"],
            "Options": [
                "Christmas Tree 🎄",
                "Jack-o'-lantern 🎃",
                "Birthday Cake 🎂",
                "Easter Bunny 🐰"
            ],
            "Translation": "Easter Bunny 🐰",
            "Hint": "🐰"
        },
        {
            "Content": "The Easter Bunny",
            "Question": "Translate into French.",
            "Answers": ["Le Lapin de Pâques 🐰"],
            "Options": [
                "Le Sapin de Noël 🎄",
                "La Citrouille d'Halloween 🎃",
                "Le Gâteau d'Anniversaire 🎂",
                "Le Lapin de Pâques 🐰"
            ],
            "Translation": "Le Lapin de Pâques 🐰",
            "Hint": "🐰"
        },        
        {
            "Content": "Les feux d'artifice",
            "Question": "Translate into English.",
            "Answers": ["Fireworks 🎆"],
            "Options": [
                "Balloons 🎈",
                "Confetti 🎉",
                "Candles 🕯️",
                "Fireworks 🎆"
            ],
            "Translation": "Fireworks 🎆",
            "Hint": "🎆"
        },
        {
            "Content": "The Fireworks",
            "Question": "Translate into French.",
            "Answers": ["Les Feux d'Artifice 🎆"],
            "Options": [
                "Les Ballons 🎈",
                "Le Confetti 🎉",
                "Les Bougies 🕯️",
                "Les Feux d'Artifice 🎆"
            ],
            "Translation": "Les Feux d'Artifice 🎆",
            "Hint": "🎆"
        }        
    ];

    lesson5Json = [
        {
            "Content": "Pizza",
            "Question": "Translate into English.",
            "Answers": ["Pizza 🍕"],
            "Options": [
                "Burger 🍔",
                "Pasta 🍝",
                "Sushi 🍣",
                "Pizza 🍕"
            ],
            "Translation": "Pizza 🍕",
            "Hint": "🍕"
        },
        {
            "Content": "The Pizza",
            "Question": "Translate into French.",
            "Answers": ["La Pizza 🍕"],
            "Options": [
                "Le Hamburger 🍔",
                "La Pâte 🍝",
                "Le Sushi 🍣",
                "La Pizza 🍕"
            ],
            "Translation": "La Pizza 🍕",
            "Hint": "🍕"
        },        
        {
            "Content": "Pâtes",
            "Question": "Translate into English.",
            "Answers": ["Pasta 🍝"],
            "Options": [
                "Salad 🥗",
                "Soup 🍲",
                "Rice 🍚",
                "Pasta 🍝"
            ],
            "Translation": "Pasta 🍝",
            "Hint": "🍝"
        },
        {
            "Content": "Pasta",
            "Question": "Translate into French.",
            "Answers": ["Les Pâtes 🍝"],
            "Options": [
                "La Salade 🥗",
                "La Soupe 🍲",
                "Le Riz 🍚",
                "Les Pâtes 🍝"
            ],
            "Translation": "Les Pâtes 🍝",
            "Hint": "🍝"
        },        
        {
            "Content": "Glace",
            "Question": "Translate into English.",
            "Answers": ["Ice Cream 🍨"],
            "Options": [
                "Cake 🥖",
                "Chocolate 🍫",
                "Cupcake 🧁",
                "Ice Cream 🍨"
            ],
            "Translation": "Ice Cream 🍨",
            "Hint": "🍨"
        },
        {
            "Content": "The Ice Cream",
            "Question": "Translate into French.",
            "Answers": ["La Glace 🍨"],
            "Options": [
                "Le Gâteau 🥖",
                "Le Chocolat 🍫",
                "Le Cupcake 🧁",
                "La Glace 🍨"
            ],
            "Translation": "La Glace 🍨",
            "Hint": "🍨"
        }        
    ];

    lesson6Json = [
        {
            "Content": "Le Croissant",
            "Question": "Translate into English.",
            "Answers": ["The Croissant 🥐"],
            "Options": [
                "The Croissant 🥐",
                "French 🗣️",
                "The Baguette 🥖",
                "The Perfume 🧴"
            ],
            "Translation": "The Croissant 🥐",
            "Hint": "🥐"
        },
        {
            "Content": "The Croissant",
            "Question": "Translate into French.",
            "Answers": ["Le Croissant 🥐"],
            "Options": [
                "Le Croissant 🥐",
                "Le Français 🗣️",
                "La Baguette 🥖",
                "Le Parfum 🧴"
            ],
            "Translation": "Le Croissant 🥐",
            "Hint": "🥐"
        },
        {
            "Content": "Français",
            "Question": "Translate into English.",
            "Answers": ["French 🗣️"],
            "Options": [
                "The Croissant 🥐",
                "French 🗣️",
                "The Baguette 🥖",
                "The Perfume 🧴"
            ],
            "Translation": "French 🗣️",
            "Hint": "🗣️"
        },
        {
            "Content": "Le French",
            "Question": "Translate into French.",
            "Answers": ["Français 🗣️"],
            "Options": [
                "Le Croissant 🥐",
                "Le Français 🗣️",
                "La Baguette 🥖",
                "Le Parfum 🧴"
            ],
            "Translation": "Français 🗣️",
            "Hint": "🗣️"
        },        
        {
            "Content": "La Parfum",
            "Question": "Translate into English.",
            "Answers": ["The Perfume 🧴"],
            "Options": [
                "The Croissant 🥐",
                "French 🗣️",
                "The Baguette 🥖",
                "The Perfume 🧴"
            ],
            "Translation": "The Perfume 🧴",
            "Hint": "🧴"
        },
        {
            "Content": "The Perfume",
            "Question": "Translate into French.",
            "Answers": ["Le Parfum 🧴"],
            "Options": [
                "Le Croissant 🥐",
                "Le Français 🗣️",
                "La Baguette 🥖",
                "Le Parfum 🧴"
            ],
            "Translation": "Le Parfum 🧴",
            "Hint": "🧴"
        }
        
    ];

    lesson7Json = [
        {
            "Content": "Jaune",
            "Question": "Translate into English.",
            "Answers": ["Yellow 🟨"],
            "Options": [
                "Red 🟥",
                "Blue 🟦",
                "Green 🟩",
                "Yellow 🟨"
            ],
            "Translation": "Yellow 🟨",
            "Hint": "🟨"
        },
        {
            "Content": "Yellow",
            "Question": "Translate into French.",
            "Answers": ["Amarelo 🟨"],
            "Options": [
                "Vermelho 🟥",
                "Azul 🟦",
                "Verde 🟩",
                "Amarelo 🟨"
            ],
            "Translation": "Amarelo 🟨",
            "Hint": "🟨"
        },
        {
            "Content": "Rose",
            "Question": "Translate into English.",
            "Answers": ["Pink 🌸"],
            "Options": [
                "Purple 🟪",
                "White ⬜",
                "Yellow 🟨",
                "Pink 🌸"
            ],
            "Translation": "Pink 🌸",
            "Hint": "🌸"
        },
        {
            "Content": "Pink",
            "Question": "Translate into French.",
            "Answers": ["Rose 🌸"],
            "Options": [
                "Violet 🟪",
                "Blanc ⬜",
                "Jaune 🟨",
                "Rose 🌸"
            ],
            "Translation": "Rose 🌸",
            "Hint": "🌸"
        },        
        {
            "Content": "Gris",
            "Question": "Translate into English.",
            "Answers": ["Grey ⬜"],
            "Options": [
                "Black ⬛",
                "White ⬜",
                "Blue 🟦",
                "Gray ⬜"
            ],
            "Translation": "Grey ⬜",
            "Hint": "⬜"
        },
        {
            "Content": "Grey",
            "Question": "Translate into French.",
            "Answers": ["Gris ⬜"],
            "Options": [
                "Noir ⬛",
                "Blanc ⬜",
                "Bleu 🟦",
                "Gris ⬜"
            ],
            "Translation": "Gris ⬜",
            "Hint": "⬜"
        }        
    ];

    lesson8Json = [
        {
            "Content": "Flûte",
            "Question": "Translate into English.",
            "Answers": ["Flute 🪈"],
            "Options": [
                "Guitar 🎸",
                "Saxophone 🎷",
                "Accordion 🪗",
                "Flute 🪈"
            ],
            "Translation": "Flute 🪈",
            "Hint": "🪈"
        },
        {
            "Content": "The Flute",
            "Question": "Translate into French.",
            "Answers": ["La Flûte 🪈"],
            "Options": [
                "La Guitare 🎸",
                "Le Saxophone 🎷",
                "L'Accordéon 🪗",
                "La Flûte 🪈"
            ],
            "Translation": "La Flûte 🪈",
            "Hint": "🪈"
        },        
        {
            "Content": "Saxophone",
            "Question": "Translate into English.",
            "Answers": ["Saxophone 🎷"],
            "Options": [
                "Piano 🎹",
                "Flute 🪈",
                "Trumpet 🎺",
                "Saxophone 🎷"
            ],
            "Translation": "Saxophone 🎷",
            "Hint": "🎷"
        },
        {
            "Content": "The Saxophone",
            "Question": "Translate into French.",
            "Answers": ["Le Saxophone 🎷"],
            "Options": [
                "Le Piano 🎹",
                "La Flûte 🪈",
                "La Trompette 🎺",
                "Le Saxophone 🎷"
            ],
            "Translation": "Le Saxophone 🎷",
            "Hint": "🎷"
        },        
        {
            "Content": "Accordéon",
            "Question": "Translate into English.",
            "Answers": ["Accordion 🪗"],
            "Options": [
                "Guitar 🎸",
                "Flute 🪈",
                "Piano 🎹",
                "Accordion 🪗"
            ],
            "Translation": "Accordion 🪗",
            "Hint": "🪗"
        },
        {
            "Content": "The Accordian",
            "Question": "Translate into French.",
            "Answers": ["L'Accordéon 🪗"],
            "Options": [
                "La Guitare 🎸",
                "La Flûte 🪈",
                "Le Piano 🎹",
                "L'Accordéon 🪗"
            ],
            "Translation": "L'Accordéon 🪗",
            "Hint": "🪗"
        }        
    ];

    lesson9Json = [
        {
            "Content": "Cadeau",
            "Question": "Translate into English.",
            "Answers": ["Gift 🎁"],
            "Options": [
                "Card 💌",
                "Decoration 🎀",
                "Balloon 🎈",
                "Gift 🎁"
            ],
            "Translation": "Gift 🎁",
            "Hint": "🎁"
        },
        {
            "Content": "The Gift",
            "Question": "Translate into French.",
            "Answers": ["Le Cadeau 🎁"],
            "Options": [
                "La Carte 💌",
                "La Décoration 🎀",
                "Le Ballon 🎈",
                "Le Cadeau 🎁"
            ],
            "Translation": "Le Cadeau 🎁",
            "Hint": "🎁"
        },        
        {
            "Content": "Nouvel An 🎉",
            "Question": "Translate into English.",
            "Answers": ["New Year 🎉"],
            "Options": [
                "Halloween 👻",
                "Christmas Tree 🎄",
                "New Year's Eve 🎉",
                "Valentine's Day 💘"
            ],
            "Translation": "New Year 🎉",
            "Hint": "🎉"
        },
        {
            "Content": "The New Year",
            "Question": "Translate into French.",
            "Answers": ["Le Nouvel An 🎉"],
            "Options": [
                "Halloween 👻",
                "La Sapin de Noël 🎄",
                "Le Nouvel An 🎉",
                "La Saint-Valentin 💘"
            ],
            "Translation": "Le Nouvel An 🎉",
            "Hint": "🎉"
        }
    ];

    lesson10Json = [
        {
            "Content": "Fondue au Fromage",
            "Question": "Translate into English.",
            "Answers": ["Cheese Fondue 🧀"],
            "Options": [
                "Pizza 🍕",
                "Pasta 🍝",
                "Sushi 🍣",
                "Cheese Fondue 🧀"
            ],
            "Translation": "Cheese Fondue 🧀",
            "Hint": "🧀"
        },
        {
            "Content": "The Cheese Fondue",
            "Question": "Translate into French.",
            "Answers": ["La Fondue au Fromage 🧀"],
            "Options": [
                "La Pizza 🍕",
                "La Pâte 🍝",
                "Le Sushi 🍣",
                "La Fondue au Fromage 🧀"
            ],
            "Translation": "La Fondue au Fromage 🧀",
            "Hint": "🧀"
        },             
        {
            "Content": "Salade",
            "Question": "Translate into English.",
            "Answers": ["Salad 🥗"],
            "Options": [
                "Pasta 🍝",
                "Soup 🍲",
                "Rice 🍚",
                "Salad 🥗"
            ],
            "Translation": "Salad 🥗",
            "Hint": "🥗"
        },
        {
            "Content": "Salad",
            "Question": "Translate into French.",
            "Answers": ["Salade 🥗"],
            "Options": [
                "Pâtes 🍝",
                "Soupe 🍲",
                "Riz 🍚",
                "Salade 🥗"
            ],
            "Translation": "Salade 🥗",
            "Hint": "🥗"
        },        
        {
            "Content": "Gateau au Chocolat",
            "Question": "Translate into English.",
            "Answers": ["Chocolate Cake 🥖"],
            "Options": [
                "Cake 🥖",
                "Ice Cream 🍨",
                "Cupcake 🧁",
                "Chocolate Cake 🥖"
            ],
            "Translation": "Chocolate Cake 🥖",
            "Hint": "🥖"
        },
        {
            "Content": "The Chocolate Cake",
            "Question": "Translate into French.",
            "Answers": ["Le Gâteau au Chocolat 🍰"],
            "Options": [
                "Le Gâteau 🍰",
                "Le Chocolat 🍫",
                "Le Cupcake 🧁",
                "Le Gâteau au Chocolat 🍰"
            ],
            "Translation": "Le Gâteau au Chocolat 🍰",
            "Hint": "🍰"
        }        
    ];

    

    lessonJSONData = [lesson1Json, lesson2Json, lesson3Json, lesson4Json, lesson5Json, lesson6Json, lesson7Json, lesson8Json, lesson9Json, lesson10Json];
}