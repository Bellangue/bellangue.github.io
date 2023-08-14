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

if (localStorage.getItem("currentLanguage") === "pt") {
    lessonNameData = ["Welcome to the Course!"];

    lesson1Json = [
        {
            "Content": "Olá. Eu me chamo Pedro.",
            "Question": "Who is speaking?",
            "Answers": ["Pedro"],
            "Options": [
                "Pedro",
                "Carlos",
                "Maria",
                "Ana"],
            "Translation": "Hello. I am called Pedro."
        },
        {
            "Content": "Oi. Tudo bem?",
            "Question": "Select your reply.",
            "Answers": ["Sim. Tudo bem."],
            "Options": [
                "Sim. Tudo bem.",
                "Você é pequena.",
                "Maria é um bebê",
                "A gente é boa."],
            "Translation": "Hello. Is everything alright? Yes. Everything is alright."
        },
        {
            "Content": "o menino",
            "Question": "Translate into English.",
            "Answers": ["the boy"],
            "Options": ["the boy",
                "the woman",
                "the girl",
                "the man"],
            "Translation": "the boy"
        },
        {
            "Content": "Olá. Como você se chama?",
            "Question": "Select your reply.",
            "Answers": ["Eu me chamo Ana."],
            "Options": ["Eu me chamo Ana.",
                "Eu não falo português.",
                "Eu gosto de crocodilos.",
                "Eu sou pão."],
            "Translation": "Hello. What are you called? I am called Ana."
        },
        {
            "Content": "Bom dia.",
            "Question": "Translate into English.",
            "Answers": "Have a nice day.",
            "Options": ["Have a nice day.",
                "Have a good cry.",
                "Have a good death.",
                "Read a nice jorney.",],
            "Translation": "Have a nice day."
        },
        {
            "Content": "Você fala inglês?",
            "Question": "Select your reply.",
            "Answers": ["Eu não falo inglês."],
            "Options": ["Eu não falo inglês.",
                "Oi! Tudo bem?",
                "Eu te amo.",
                "Você é chato."],
            "Translation": "Do you speak English? I don't speak English."
        },
        {
            "Content": "Bem-vindo ao curso!",
            "Question": "Translate into English.",
            "Answers": ["Welcome to the course!"],
            "Options": ["Welcome to the course!",
                "Run away whilst you still can!",
                "I like chips!",
                "I am ready!"],
            "Translation": "Welcome to the course!"
        },
    ]
    
    lessonJSONData = [lesson1Json];
}