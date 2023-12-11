if (localStorage.getItem("currentLanguage") === "nl") {

    lessonNameData = ["Welcome to the Course!", "Colours 1", "Music 1", "Holidays 1", "Food 1", "Culture", "Colours 2", "Music 2", "Holidays 2", "Food 2"];

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

    lesson6Json = [
        {
            "Content": "Koning",
            "Question": "Translate into English.",
            "Answers": ["King 👑"],
            "Options": [
                "Windmill 🌬️",
                "Tulip 🌷",
                "Canal 🌊",
                "King 👑"
            ],
            "Translation": "King 👑",
            "Hint": "👑"
        },
        {
            "Content": "Koning",
            "Question": "Translate into Dutch.",
            "Answers": ["Koning 👑"],
            "Options": [
                "Windmolen 🌬️",
                "Tulp 🌷",
                "Gracht 🌊",
                "Koning 👑"
            ],
            "Translation": "Koning 👑",
            "Hint": "👑"
        },
        {
            "Content": "Kaas",
            "Question": "Translate into English.",
            "Answers": ["Cheese 🧀"],
            "Options": [
                "Clogs 👞",
                "Bicycle 🚲",
                "Windmill 🌬️",
                "Cheese 🧀"
            ],
            "Translation": "Cheese 🧀",
            "Hint": "🧀"
        },
        {
            "Content": "Cheese",
            "Question": "Translate into Dutch.",
            "Answers": ["Kaas 🧀"],
            "Options": [
                "Klompen 👞",
                "Koning 👑",
                "Windmolen 🌬️",
                "Kaas 🧀"
            ],
            "Translation": "Kaas 🧀",
            "Hint": "🧀"
        },
        {
            "Content": "Windmolen",
            "Question": "Translate into English.",
            "Answers": ["Windmill 🌬️"],
            "Options": [
                "Stroopwafel 🍪",
                "Tulip 🌷",
                "Canal 🌊",
                "Windmill 🌬️"
            ],
            "Translation": "Windmill 🌬️",
            "Hint": "🌬️"
        },
        {
            "Content": "Windmill",
            "Question": "Translate into Dutch.",
            "Answers": ["Windmolen 🌬️"],
            "Options": [
                "Stroopwafel 🍪",
                "Tulp 🌷",
                "Gracht 🌊",
                "Molen 🌬️"
            ],
            "Translation": "Windmolen 🌬️",
            "Hint": "🌬️"
        }
    ];

    lesson7Json = [
        {
            "Content": "Geel",
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
            "Question": "Translate into Dutch.",
            "Answers": ["Geel 🟨"],
            "Options": [
                "Rood 🟥",
                "Blauw 🟦",
                "Groen 🟩",
                "Geel 🟨"
            ],
            "Translation": "Geel 🟨",
            "Hint": "🟨"
        },
        {
            "Content": "Roze",
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
            "Question": "Translate into Dutch.",
            "Answers": ["Roze 🌸"],
            "Options": [
                "Paars 🟪",
                "Wit ⬜",
                "Geel 🟨",
                "Roze 🌸"
            ],
            "Translation": "Roze 🌸",
            "Hint": "🌸"
        },
        {
            "Content": "Grijs",
            "Question": "Translate into English.",
            "Answers": ["Gray ⬜"],
            "Options": [
                "Black ⬛",
                "White ⬜",
                "Blue 🟦",
                "Gray ⬜"
            ],
            "Translation": "Gray ⬜",
            "Hint": "⬜"
        },
        {
            "Content": "Gray",
            "Question": "Translate into Dutch.",
            "Answers": ["Grijs ⬜"],
            "Options": [
                "Zwart ⬛",
                "Wit ⬜",
                "Blauw 🟦",
                "Grijs ⬜"
            ],
            "Translation": "Grijs ⬜",
            "Hint": "⬜"
        }
    ];

    lesson8Json = [
        {
            "Content": "Flute",
            "Question": "Translate into English.",
            "Answers": ["Flute 🎶"],
            "Options": [
                "Guitar 🎸",
                "Saxophone 🎷",
                "Accordion 🪗",
                "Flute 🎶"
            ],
            "Translation": "Flute 🎶",
            "Hint": "🎶"
        },
        {
            "Content": "Fluit",
            "Question": "Translate into Dutch.",
            "Answers": ["Flute 🎶"],
            "Options": [
                "Gitaar 🎸",
                "Saxofoon 🎷",
                "Accordeon 🪗",
                "Fluit 🎶"
            ],
            "Translation": "Fluit 🎶",
            "Hint": "🎶"
        },
        {
            "Content": "Saxophone",
            "Question": "Translate into English.",
            "Answers": ["Saxophone 🎷"],
            "Options": [
                "Piano 🎹",
                "Flute 🎶",
                "Trumpet 🎺",
                "Saxophone 🎷"
            ],
            "Translation": "Saxophone 🎷",
            "Hint": "🎷"
        },
        {
            "Content": "Saxofoon",
            "Question": "Translate into Dutch.",
            "Answers": ["Saxophone 🎷"],
            "Options": [
                "Piano 🎹",
                "Fluit 🎶",
                "Trompet 🎺",
                "Saxofoon 🎷"
            ],
            "Translation": "Saxofoon 🎷",
            "Hint": "🎷"
        },
        {
            "Content": "Accordion",
            "Question": "Translate into English.",
            "Answers": ["Accordion 🪗"],
            "Options": [
                "Guitar 🎸",
                "Flute 🎶",
                "Piano 🎹",
                "Accordion 🪗"
            ],
            "Translation": "Accordion 🪗",
            "Hint": "🪗"
        },
        {
            "Content": "Accordeon",
            "Question": "Translate into Dutch.",
            "Answers": ["Accordion 🪗"],
            "Options": [
                "Gitaar 🎸",
                "Fluit 🎶",
                "Piano 🎹",
                "Accordeon 🪗"
            ],
            "Translation": "Accordeon 🪗",
            "Hint": "🪗"
        }
    ];

    lesson9Json = [
        {
            "Content": "Oliebollen",
            "Question": "Translate into English.",
            "Answers": ["Dutch Doughnuts 🍩"],
            "Options": [
                "Chocolate 🍫",
                "Waffles 🧇",
                "Pancakes 🥞",
                "Dutch Doughnuts 🍩"
            ],
            "Translation": "Dutch Doughnuts 🍩",
            "Hint": "🍩"
        },
        {
            "Content": "Dutch Doughnuts",
            "Question": "Translate into Dutch.",
            "Answers": ["Oliebollen 🍩"],
            "Options": [
                "Chocolade 🍫",
                "Wafels 🧇",
                "Pannenkoeken 🥞",
                "Oliebollen 🍩"
            ],
            "Translation": "Oliebollen 🍩",
            "Hint": "🍩"
        },
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
            "Content": "Gift",
            "Question": "Translate into Dutch.",
            "Answers": ["Cadeau 🎁"],
            "Options": [
                "Kaart 💌",
                "Decoratie 🎀",
                "Ballon 🎈",
                "Cadeau 🎁"
            ],
            "Translation": "Cadeau 🎁",
            "Hint": "🎁"
        },
        {
            "Content": "Oud en Nieuw 🎉",
            "Question": "Translate into English.",
            "Answers": ["New Year's Eve 🎉"],
            "Options": [
                "Halloween 👻",
                "Christmas Tree 🎄",
                "New Year's Eve 🎉",
                "Valentine's Day 💘"
            ],
            "Translation": "New Year's Eve 🎉",
            "Hint": "🎉"
        },
        {
            "Content": "New Year's Eve",
            "Question": "Translate into Dutch.",
            "Answers": ["Oud en Nieuw 🎉"],
            "Options": [
                "Halloween 👻",
                "Kerstboom 🎄",
                "Oud en Nieuw 🎉",
                "Valentijnsdag 💘"
            ],
            "Translation": "Oud en Nieuw 🎉",
            "Hint": "🎉"
        }
    ];

    lesson10Json = [
        {
            "Content": "Kaasfondue",
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
            "Content": "Kaasfondue",
            "Question": "Translate into Dutch.",
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
            "Content": "Salad",
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
            "Content": "Salade",
            "Question": "Translate into Dutch.",
            "Answers": ["Salade 🥗"],
            "Options": [
                "Pasta 🍝",
                "Soep 🍲",
                "Rijst 🍚",
                "Salade 🥗"
            ],
            "Translation": "Salade 🥗",
            "Hint": "🥗"
        },
        {
            "Content": "Chocolate Cake",
            "Question": "Translate into English.",
            "Answers": ["Chocolate Cake 🍰"],
            "Options": [
                "Cake 🍰",
                "Ice Cream 🍨",
                "Cupcake 🧁",
                "Chocolate Cake 🍰"
            ],
            "Translation": "Chocolate Cake 🍰",
            "Hint": "🍰"
        },
        {
            "Content": "Chocoladetaart",
            "Question": "Translate into Dutch.",
            "Answers": ["Chocolate Cake 🍰"],
            "Options": [
                "Taart 🍰",
                "Chocolade 🍫",
                "Cupcake 🧁",
                "Chocoladetaart 🍰"
            ],
            "Translation": "Chocoladetaart 🍰",
            "Hint": "🍰"
        }
    ];
    

    lessonJSONData = [lesson1Json, lesson2Json, lesson3Json, lesson4Json, lesson5Json, lesson6Json, lesson7Json, lesson8Json, lesson9Json, lesson10Json];
}