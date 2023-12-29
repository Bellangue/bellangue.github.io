if (localStorage.getItem("currentLanguage") === "nl") {

    lessonNameData = ["Welcome to the Course!", "Colours 1", "Music 1", "Holidays 1", "Food 1", "Culture", "Colours 2", "Music 2", "Holidays 2", "Food 2"];

    lesson1Json = [
        {
            "Content": "A Bicicleta",
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
            "Question": "Translate into Portuguese.",
            "Answers": ["A Bicicleta 🚲"],
            "Options": [
                "O Carro 🚗",
                "O Trêm 🚂",
                "A Bicicleta 🚲",
                "O Barco ⛵"
            ],
            "Translation": "A Bicicleta 🚲",
            "Hint": "🚲"
        },
        {
            "Content": "O Sol",
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
            "Question": "Translate into Portuguese.",
            "Answers": ["O Sol ☀️"],
            "Options": [
                "A Lua 🌙",
                "A Estrelha 🌟",
                "A Nuvem ☁️",
                "O Sol ☀️"
            ],
            "Translation": "O Sol ☀️",
            "Hint": "☀️"
        },
        {
            "Content": "O Livro",
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
            "Question": "Translate into Portuguese.",
            "Answers": ["O Livro 📖"],
            "Options": [
                "A Caneta ✒️",
                "O Papel 📄",
                "O Livro 📖",
                "O Lápis ✏️"
            ],
            "Translation": ["O Livro 📖"],
            "Hint": "📖"
        }

    ];

    lesson2Json = [
        {
            "Content": "Orange",
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
            "Question": "Translate into Portuguese.",
            "Answers": ["Laranja 🟧"],
            "Options": [
                "Vermelho 🟥",
                "Amarelo 🟨",
                "Verde 🟩",
                "Laranja 🟧"
            ],
            "Translation": "Laranja 🟧",
            "Hint": "🟧"
        },
        {
            "Content": "Purple",
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
            "Question": "Translate into Portuguese.",
            "Answers": ["Roxo 🟪"],
            "Options": [
                "Azul 🟦",
                "Vermelho 🟥",
                "Amarelo 🟨",
                "Roxo 🟪"
            ],
            "Translation": "Roxo 🟪",
            "Hint": "🟪"
        },
        {
            "Content": "Marrom",
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
            "Question": "Translate into Portuguese.",
            "Answers": ["Marrom 🟫"],
            "Options": [
                "Preto ⬛",
                "Branco ⬜",
                "Azul 🟦",
                "Marrom 🟫"
            ],
            "Translation": "Marrom 🟫",
            "Hint": "🟫"
        }
    ];

    lesson3Json = [
        {
            "Content": "Guitarra",
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
            "Content": "The Guitar",
            "Question": "Translate into Portuguese.",
            "Answers": ["A Guitarra 🎸"],
            "Options": [
                "O Piano 🎹",
                "O Violino 🎻",
                "A Trombeta 🎺",
                "A Guitarra 🎸"
            ],
            "Translation": "A Guitarra 🎸",
            "Hint": "🎸"
        },
        {
            "Content": "Bateria",
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
            "Content": "The Drums",
            "Question": "Translate into Portuguese.",
            "Answers": ["A Bateria 🥁"],
            "Options": [
                "A Flauta 🎶",
                "O Saxofone 🎷",
                "O Acordeão 🪗",
                "A Bateria 🥁"
            ],
            "Translation": "A Bateria 🥁",
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
            "Content": "The Piano",
            "Question": "Translate into Portuguese.",
            "Answers": ["O Piano 🎹"],
            "Options": [
                "A Guitarra 🎸",
                "O Violino 🎻",
                "A Trombeta 🎺",
                "O Piano 🎹"
            ],
            "Translation": "O Piano 🎹",
            "Hint": "🎹"
        }
    ];

    lesson4Json = [
        {
            "Content": "A Árvore de Natal",
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
            "Question": "Translate into Portuguese.",
            "Answers": ["A Árvore de Natal 🎄"],
            "Options": [
                "O Coelho da Páscoa 🐰",
                "Jack-o'-lantern 🎃",
                "O Bolo de Aniversário 🎂",
                "A Árvore de Natal 🎄"
            ],
            "Translation": "A Árvore de Natal 🎄",
            "Hint": "🎄"
        },
        {
            "Content": "O Coelho da Páscoa",
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
            "Question": "Translate into Portuguese.",
            "Answers": ["O Coelho da Páscoa 🐰"],
            "Options": [
                "A Árvore de Natal 🎄",
                "Jack-o'-lantern 🎃",
                "O Bolo de Aniversário 🎂",
                "O Coelho da Páscoa 🐰"
            ],
            "Translation": "O Coelho da Páscoa 🐰",
            "Hint": "🐰"
        },
        {
            "Content": "Os Fogos de Artifício",
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
            "Question": "Translate into Portuguese.",
            "Answers": ["Os Fogos de Artifício 🎆"],
            "Options": [
                "Os Balões 🎈",
                "O Confete 🎉",
                "As Velas 🕯️",
                "Os Fogos de Artifício 🎆"
            ],
            "Translation": "Os Fogos de Artifício 🎆",
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
            "Question": "Translate into Portuguese.",
            "Answers": ["A Pizza 🍕"],
            "Options": [
                "O Hambúrguer 🍔",
                "A Massa 🍝",
                "O Sushi 🍣",
                "A Pizza 🍕"
            ],
            "Translation": "A Pizza 🍕",
            "Hint": "🍕"
        },
        {
            "Content": "Massa",
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
            "Question": "Translate into Portuguese.",
            "Answers": ["A Massa 🍝"],
            "Options": [
                "A Salada 🥗",
                "A Sopa 🍲",
                "O Arroz 🍚",
                "A Massa 🍝"
            ],
            "Translation": "A Massa 🍝",
            "Hint": "🍝"
        },
        {
            "Content": "Sorvete",
            "Question": "Translate into English.",
            "Answers": ["Ice Cream 🍨"],
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
            "Content": "The Ice Cream",
            "Question": "Translate into Portuguese.",
            "Answers": ["O Gelado 🍨"],
            "Options": [
                "O Bolo 🍰",
                "O Chocolate 🍫",
                "O Cupcake 🧁",
                "O Sorvete 🍨"
            ],
            "Translation": "O Sorvete 🍨",
            "Hint": "🍨"
        }
    ];

    lesson6Json = [
        {
            "Content": "O Carvival",
            "Question": "Translate into English.",
            "Answers": ["The Carnival 🎭"],
            "Options": [
                "The Carnival 🎭",
                "Portuguese 🗣️",
                "The Cheesecake 🍰",
                "The Jaguar 🐆"
            ],
            "Translation": "The Carnival 🎭",
            "Hint": "🎭"
        },
        {
            "Content": "The Carvival",
            "Question": "Translate into Portuguese.",
            "Answers": ["O Carnival 🎭"],
            "Options": [
                "O Carnival 🎭",
                "O Português 🗣️",
                "O Cheesecake 🍰",
                "A Onça 🐆"
            ],
            "Translation": "O Carnival 🎭",
            "Hint": "🎭"
        },
        {
            "Content": "O Portugês",
            "Question": "Translate into English.",
            "Answers": ["Portuguese 🗣️"],
            "Options": [
                "The Carnival 🎭",
                "Portuguese 🗣️",
                "The Cheesecake 🍰",
                "The Jaguar 🐆"
            ],
            "Translation": "Portuguese 🗣️",
            "Hint": "🗣️"
        },
        {
            "Content": "Portuguese",
            "Question": "Translate into Portuguese.",
            "Answers": ["O Português 🗣️"],
            "Options": [
                "O Carnival 🎭",
                "O Português 🗣️",
                "O Cheesecake 🍰",
                "A Onça 🐆"
            ],
            "Translation": "O Português 🗣️",
            "Hint": "🗣️"
        },
        {
            "Content": "A Onça",
            "Question": "Translate into English.",
            "Answers": ["The Jaguar 🐆"],
            "Options": [
                "The Carnival 🎭",
                "Portuguese 🗣️",
                "The Cheesecake 🍰",
                "The Jaguar 🐆"
            ],
            "Translation": "The Jaguar 🐆",
            "Hint": "🐆"
        },
        {
            "Content": "The Jaguar",
            "Question": "Translate into Portuguese.",
            "Answers": ["A Onça 🐆"],
            "Options": [
                "O Carnival 🎭",
                "O Português 🗣️",
                "O Cheesecake 🍰",
                "A Onça 🐆"
            ],
            "Translation": "A Onça 🐆",
            "Hint": "🐆"
        },
    ];

    lesson7Json = [
        {
            "Content": "Amarelo",
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
            "Question": "Translate into Portuguese.",
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
            "Content": "Rosa",
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
            "Question": "Translate into Portuguese.",
            "Answers": ["Rosa 🌸"],
            "Options": [
                "Roxo 🟪",
                "Branco ⬜",
                "Amarelo 🟨",
                "Rosa 🌸"
            ],
            "Translation": "Rosa 🌸",
            "Hint": "🌸"
        },
        {
            "Content": "Cinza",
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
            "Question": "Translate into Portuguese.",
            "Answers": ["Cinza ⬜"],
            "Options": [
                "Preto ⬛",
                "Branco ⬜",
                "Azul 🟦",
                "Cinza ⬜"
            ],
            "Translation": "Cinza ⬜",
            "Hint": "⬜"
        }
    ];

    lesson8Json = [
        {
            "Content": "Flauta",
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
            "Question": "Translate into Portuguese.",
            "Answers": ["A Flauta 🪈"],
            "Options": [
                "A Guitarra 🎸",
                "O Saxofone 🎷",
                "O Acordeão 🪗",
                "A Flauta 🪈"
            ],
            "Translation": "A Flauta 🪈",
            "Hint": "🪈"
        },
        {
            "Content": "Saxofone",
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
            "Question": "Translate into Portuguese.",
            "Answers": ["Saxophone 🎷"],
            "Options": [
                "Piano 🎹",
                "Fluit 🪈",
                "Trompet 🎺",
                "Saxofoon 🎷"
            ],
            "Translation": "Saxofoon 🎷",
            "Hint": "🎷"
        },
        {
            "Content": "Acordeão",
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
            "Question": "Translate into Portuguese.",
            "Answers": ["O Acordeão 🪗"],
            "Options": [
                "A Guitarra 🎸",
                "A Flauta 🪈",
                "O Piano 🎹",
                "O Acordeão 🪗"
            ],
            "Translation": "O Acordeão 🪗",
            "Hint": "🪗"
        }

    ];

    lesson9Json = [
        {
            "Content": "Presente",
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
            "Question": "Translate into Portuguese.",
            "Answers": ["O Presente 🎁"],
            "Options": [
                "O Cartão 💌",
                "A Decoração 🎀",
                "O Balão 🎈",
                "O Presente 🎁"
            ],
            "Translation": "O Presente 🎁",
            "Hint": "🎁"
        },
        {
            "Content": "Ano Novo 🎉",
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
            "Content": "The New Year's Eve",
            "Question": "Translate into Portuguese.",
            "Answers": ["A Passagem de Ano 🎉"],
            "Options": [
                "Halloween 👻",
                "A Árvore de Natal 🎄",
                "A Passagem de Ano 🎉",
                "Dia dos Namorados 💘"
            ],
            "Translation": "A Passagem de Ano 🎉",
            "Hint": "🎉"
        }

    ];

    lesson10Json = [
        {
            "Content": "Fondue de Queijo",
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
            "Question": "Translate into Portuguese.",
            "Answers": ["O Fondue de Queijo 🧀"],
            "Options": [
                "A Pizza 🍕",
                "A Massa 🍝",
                "O Sushi 🍣",
                "O Fondue de Queijo 🧀"
            ],
            "Translation": "OFondue de Queijo 🧀",
            "Hint": "🧀"
        },        
        {
            "Content": "Salada",
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
            "Question": "Translate into Portuguese.",
            "Answers": ["Salada 🥗"],
            "Options": [
                "Pasta 🍝",
                "Sopa 🍲",
                "Arroz 🍚",
                "Salada 🥗"
            ],
            "Translation": "Salada 🥗",
            "Hint": "🥗"
        },
        {
            "Content": "Bolo de Chocolate",
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
            "Content": "The Chocolate Cake",
            "Question": "Translate into Portuguese.",
            "Answers": ["O Bolo de Chocolate 🍰"],
            "Options": [
                "O Bolo 🍰",
                "O Chocolate 🍫",
                "O Cupcake 🧁",
                "O Bolo de Chocolate 🍰"
            ],
            "Translation": "O Bolo de Chocolate 🍰",
            "Hint": "🍰"
        }
    ];


    lessonJSONData = [lesson1Json, lesson2Json, lesson3Json, lesson4Json, lesson5Json, lesson6Json, lesson7Json, lesson8Json, lesson9Json, lesson10Json];
}