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

if (localStorage.getItem("currentLanguage") === "de") {

    lessonNameData = ["Welcome to the Course!"];

    lesson1Json = [
        {
            "Content": "Hallo! Ich heiße Hans.",
            "Question": "Who is speaking?",
            "Answers": ["Hans"],
            "Options": ["Hans",
                "Ludwig",
                "Lisa",
                "Eva"],
            "Translation": "Hello! I am called Hans."
        },
        {
            "Content": "der Junge",
            "Question": "Translate into English.",
            "Answers": ["the boy"],
            "Options": ["the boy",
                "the woman",
                "the girl",
                "the man"],
            "Translation": "the boy"
        },
        {
            "Content": "Hallo. Wie heißt du?",
            "Question": "Select your reply.",
            "Answers": ["Ich heiße Eva."],
            "Options": ["Ich heiße Eva.",
                "Ich spreche kein Deutsch.",
                "Ich mag Schnitzel.",
                "Ich bin ein Brötchen."],
            "Translation": "Hello. What are you called? I am called Eva."
        },
        {
            "Content": "Einen schönen Tag.",
            "Question": "Translate into English.",
            "Answers": "Have a nice day.",
            "Options": ["Have a nice day.",
                "Have a yummy sweet.",
                "Have a good journey.",
                "Read a nice newspaper.",],
            "Translation": "Have a nice day."
        },
        {
            "Content": "Wie geht es dir?",
            "Question": "Select your reply.",
            "Answers": "Gut und dir?",
            "Options": ["Gut und dir?",
                "Ich bin ein Apfel.",
                "Ich will ein Glas Wasser.",
                "Ich habe einen Hund. Er heißt Fritz."],
            "Translation": "How are you doing? Fine, and you?"
        },
        {
            "Content": "Sprichst du Englisch?",
            "Question": "Select your reply.",
            "Answers": ["Nein, ich spreche kein Englisch."],
            "Options": ["Nein, ich spreche kein Englisch.",
                "Servus! Wie geht es dir?",
                "Ich liebe dich.",
                "Du bist hässlich."],
            "Translation": "Do you speak English?"
        },
        {
            "Content": "Willkommen im Kurs!",
            "Question": "Translate into English.",
            "Answers": ["Welcome to the course!"],
            "Options": ["Welcome to the course!",
                "Run away whilst you still can!",
                "I like onions!",
                "I am ready!"],
            "Translation": "Welcome to the course!"
        },
    ]

    lessonJSONData = [lesson1Json];
}