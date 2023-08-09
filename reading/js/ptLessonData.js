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
        
    ]
    
    lessonJSONData = [lesson1Json];
}