if (localStorage.getItem("currentLanguage") === "nl") {

    lessonNameData = ["Welcome to the Course!", "Colours 1", "Music 1", "Holidays 1", "Food 1", ""];

    lesson1Json = [
        {
            "Content": "De Fiets",
            "Question": "Translate into English.",
            "Answers": ["The Bicycle 🚲"],
            "Options": [
                "The Car 🚗",
                "The Train 🚂",
                "The Bicycle 🚲",
                "The Boat ⛵"
            ],
            "Translation": "The Bicycle 🚲",
            "Hint": "🚲"
        },
        {
            "Content": "The Bicycle",
            "Question": "Translate into Dutch.",
            "Answers": ["De Fiets 🚲"],
            "Options": [
                "De Auto 🚗",
                "De Trein 🚂",
                "De Fiets 🚲",
                "De Boot ⛵"
            ],
            "Translation": "De Fiets 🚲",
            "Hint": "🚲"
        },
        {
            "Content": "De Zon",
            "Question": "Translate into English.",
            "Answers": ["The Sun ☀️"],
            "Options": [
                "The Moon 🌙",
                "The Stars 🌟",
                "The Cloud ☁️",
                "The Sun ☀️"
            ],
            "Translation": "The Sun ☀️",
            "Hint": "☀️"
        },
        {
            "Content": "The Sun",
            "Question": "Translate into Dutch.",
            "Answers": ["De Zon ☀️"],
            "Options": [
                "De Maan 🌙",
                "De Sterren 🌟",
                "De Wolk ☁️",
                "De Zon ☀️"
            ],
            "Translation": "De Zon ☀️",
            "Hint": "☀️"
        },
        {
            "Content": "De Boek",
            "Question": "Translate into English.",
            "Answers": ["The Book 📖"],
            "Options": [
                "The Pen ✒️",
                "The Paper 📄",
                "The Book 📖",
                "The Pencil ✏️"
            ],
            "Translation": "The Book 📖",
            "Hint": "📖"
        },
        {
            "Content": "The Book",
            "Question": "Translate into Dutch.",
            "Answers": ["Het Boek 📖"],
            "Options": [
                "De Pen ✒️",
                "Het Papier 📄",
                "Het Boek 📖",
                "Het Potlood ✏️"
            ],
            "Translation": "Het Boek 📖",
            "Hint": "📖"
        }
    ];

    lesson2Json = [
        {
            "Content": "Oranje",
            "Question": "Translate into English.",
            "Answers": ["Orange 🟧"],
            "Options": [
                "Red 🟥",
                "Yellow 🟨",
                "Green 🟩",
                "Orange 🟧"
            ],
            "Translation": "Orange 🟧",
            "Hint": "🟧"
        },
        {
            "Content": "Orange",
            "Question": "Translate into Dutch.",
            "Answers": ["Oranje 🟧"],
            "Options": [
                "Rood 🟥",
                "Geel 🟨",
                "Groen 🟩",
                "Oranje 🟧"
            ],
            "Translation": "Oranje 🟧",
            "Hint": "🟧"
        },
        {
            "Content": "Paars",
            "Question": "Translate into English.",
            "Answers": ["Purple 🟪"],
            "Options": [
                "Blue 🟦",
                "Red 🟥",
                "Yellow 🟨",
                "Purple 🟪"
            ],
            "Translation": "Purple 🟪",
            "Hint": "🟪"
        },
        {
            "Content": "Purple",
            "Question": "Translate into Dutch.",
            "Answers": ["Paars 🟪"],
            "Options": [
                "Blauw 🟦",
                "Rood 🟥",
                "Geel 🟨",
                "Paars 🟪"
            ],
            "Translation": "Paars 🟪",
            "Hint": "🟪"
        },
        {
            "Content": "Bruin",
            "Question": "Translate into English.",
            "Answers": ["Brown 🟫"],
            "Options": [
                "Black ⬛",
                "White ⬜",
                "Blue 🟦",
                "Brown 🟫"
            ],
            "Translation": "Brown 🟫",
            "Hint": "🟫"
        },
        {
            "Content": "Brown",
            "Question": "Translate into Dutch.",
            "Answers": ["Bruin 🟫"],
            "Options": [
                "Zwart ⬛",
                "Wit ⬜",
                "Blue 🟦",
                "Bruin 🟫"
            ],
            "Translation": "Bruin 🟫",
            "Hint": "🟫"
        }
    ];
    

    lesson3Json = [
        {
            "Content": "Gitaar",
            "Question": "Translate into English.",
            "Answers": ["Guitar 🎸"],
            "Options": [
                "Piano 🎹",
                "Violin 🎻",
                "Trumpet 🎺",
                "Guitar 🎸"
            ],
            "Translation": "Guitar 🎸",
            "Hint": "🎸"
        },
        {
            "Content": "Guitar",
            "Question": "Translate into Dutch.",
            "Answers": ["Gitaar 🎸"],
            "Options": [
                "Piano 🎹",
                "Viool 🎻",
                "Trompet 🎺",
                "Gitaar 🎸"
            ],
            "Translation": "Gitaar 🎸",
            "Hint": "🎸"
        },
        {
            "Content": "Drums",
            "Question": "Translate into English.",
            "Answers": ["Drums 🥁"],
            "Options": [
                "Flute 🎶",
                "Saxophone 🎷",
                "Accordion 🪗",
                "Drums 🥁"
            ],
            "Translation": "Drums 🥁",
            "Hint": "🥁"
        },
        {
            "Content": "Drums",
            "Question": "Translate into Dutch.",
            "Answers": ["Drums 🥁"],
            "Options": [
                "Fluit 🎶",
                "Saxofoon 🎷",
                "Accordeon 🪗",
                "Drums 🥁"
            ],
            "Translation": "Drums 🥁",
            "Hint": "🥁"
        },
        {
            "Content": "Piano",
            "Question": "Translate into English.",
            "Answers": ["Piano 🎹"],
            "Options": [
                "Guitar 🎸",
                "Violin 🎻",
                "Trumpet 🎺",
                "Piano 🎹"
            ],
            "Translation": "Piano 🎹",
            "Hint": "🎹"
        },
        {
            "Content": "Piano",
            "Question": "Translate into Dutch.",
            "Answers": ["Piano 🎹"],
            "Options": [
                "Gitaar 🎸",
                "Viool 🎻",
                "Trompet 🎺",
                "Piano 🎹"
            ],
            "Translation": "Piano 🎹",
            "Hint": "🎹"
        }
    ];

    lesson4Json = [
        {
            "Content": "Kerstboom",
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
            "Question": "Translate into Dutch.",
            "Answers": ["Kerstboom 🎄"],
            "Options": [
                "Paashaas 🐰",
                "Jack-o'-lantern 🎃",
                "Verjaardagstaart 🎂",
                "Kerstboom 🎄"
            ],
            "Translation": "Kerstboom 🎄",
            "Hint": "🎄"
        },
        {
            "Content": "Paashaas",
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
            "Content": "Easter Bunny",
            "Question": "Translate into Dutch.",
            "Answers": ["Paashaas 🐰"],
            "Options": [
                "Kerstboom 🎄",
                "Jack-o'-lantern 🎃",
                "Verjaardagstaart 🎂",
                "Paashaas 🐰"
            ],
            "Translation": "Paashaas 🐰",
            "Hint": "🐰"
        },
        {
            "Content": "Vuurwerk",
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
            "Content": "Fireworks",
            "Question": "Translate into Dutch.",
            "Answers": ["Vuurwerk 🎆"],
            "Options": [
                "Ballonnen 🎈",
                "Confetti 🎉",
                "Kaarsen 🕯️",
                "Vuurwerk 🎆"
            ],
            "Translation": "Vuurwerk 🎆",
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
            "Content": "Pizza",
            "Question": "Translate into Dutch.",
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
            "Content": "Pasta",
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
            "Question": "Translate into Dutch.",
            "Answers": ["Pasta 🍝"],
            "Options": [
                "Salade 🥗",
                "Soep 🍲",
                "Rijst 🍚",
                "Pasta 🍝"
            ],
            "Translation": "Pasta 🍝",
            "Hint": "🍝"
        },
        {
            "Content": "Ice Cream",
            "Question": "Translate into English.",
            "Answers": ["IJs 🍨"],
            "Options": [
                "Cake 🍰",
                "Chocolate 🍫",
                "Cupcake 🧁",
                "Ice Cream 🍨"
            ],
            "Translation": "Ice Cream 🍨",
            "Hint": "🍨"
        },
        {
            "Content": "IJs",
            "Question": "Translate into Dutch.",
            "Answers": ["Ice Cream 🍨"],
            "Options": [
                "Taart 🍰",
                "Chocolade 🍫",
                "Cupcake 🧁",
                "IJs 🍨"
            ],
            "Translation": "IJs 🍨",
            "Hint": "🍨"
        }
    ];
    
    
    

    

    lessonJSONData = [lesson1Json, lesson2Json, lesson3Json];
}