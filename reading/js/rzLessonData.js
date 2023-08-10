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
        "Options": ["The gender is wrong.",
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
                "suru"],
            "Translation": "He smells the smoke."
        },
        {
            "Content": "duk bɱuru bɱurum.",
            "Question": "What do I blow?",
            "Answers": ["wind"],
            "Options": ["wind",
                "smoke",
                "fire",
                "breath"],
            "Translation": "I blow wind."
        },
    ]
    
    lessonJSONData = [lesson1Json];
}