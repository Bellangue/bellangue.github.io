/*
    {
        "Content": "",
        "Question": "",
        "Answers": [""],
        "Options": [
            "",
            "",
            "",
            ""],
        "Translation": ""
    },

question types (mc):
translation
comprehension
follow-up
error

Translate into English.

Select your reply.
What is the error in this sentence?
*/

/*
    {
        "Content": "",
        "Question": "What is the error in this sentence?",
        "Answers": [""],
        "Options": ["The class is wrong.",
            "The spelling is wrong.",
            "It is conjugated incorrectly.",
            "There is no mistake."],
        "Translation": " > "
    },
*/

if (localStorage.getItem("currentLanguage") === "rz") {
    lessonNameData = ["Welcome to the Course!"];

    lesson1Json = [
        {
            "Content": "duk de zipum talor.",
            "Question": "Who is speaking?",
            "Answers": ["talor"],
            "Options": [
                "talor",
                "oliv",
                "haɱelore",
                "pol"],
            "Translation": "I am called Talor."
        },
        {
            "Content": "sixreg ʎi fiva vus!",
            "Question": "Translate into English.",
            "Answers": ["Welcome to the course!"],
            "Options": [
                "Welcome to the course!",
                "I like eating.",
                "What is your name?",
                "Do you hate me?"],
            "Translation": "Welcome to the course!"
        },
        {
            "Content": "ʒlot zus vus duru.",
            "Question": `Which word means "the"?`,
            "Answers": ["vus"],
            "Options": [
                "ʒlot",
                "zus",
                "vus",
                "duru"],
            "Translation": "He smells the smoke."
        },
        {
            "Content": "duk bɱuru bɱurum.",
            "Question": "What do I blow?",
            "Answers": ["wind"],
            "Options": ["wind",
                "smoke",
                "fire",
                "mist"],
            "Translation": "I blow wind."
        },        
        {
            "Content": "duk page vus pagirum.",
            "Question": "What do I do?",
            "Answers": ["I drink the water."],
            "Options": ["I drink the water.",
                "I catch the ball",
                "I slay the dragon.",
                "I find the sword."],
            "Translation": "I drink the water."
        },
        {
            "Content": "ʒlot vus zus duru.",
            "Question": "What is the error in this sentence?",
            "Answers": ["It is in the wrong order."],
            "Options": ["The class is wrong.",
                "The spelling or cojugation is wrong.",
                "It is in the wrong order.",
                "There is no mistake."],
            "Translation": "vus zus > zus vus (He smells the smoke)"
        },
        {
            "Content": "duk zus durum.",
            "Question": "Which word means smoke?",
            "Answers": ["zus"],
            "Options": ["zus",
                "duk",
                "durum",
                "none of them"],
            "Translation": "I smell smoke."
        },
    ]
    
    lessonJSONData = [lesson1Json];
}