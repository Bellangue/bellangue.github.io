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
    lessonNameData = ["Welcome to the Course!", "Greetings 1", "People 1"];

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
                "Você é feio."],
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
    
    lesson2Json = [
        {
            "Content": "Olá. Tudo bem?",
            "Question": "Translate into English.",
            "Answers": ["Hello. How is it going?"],
            "Options": ["Hello. How is it going?",
                "Hello. Have a nice day.",
                "Goodbye. I like you.",
                "Goodbye. I don't want to see you."],
            "Translation": "Hello. How is it going?"
        },
        {
            "Content": "Tchau. Até mais.",
            "Question": "What is happening?",
            "Answers": ["The person you are talking to is leaving."],
            "Options": ["The person you are talking to is leaving.",
                "You are meeting up with someone.",
                "You are confessing your love to a friend.",
                "You are talking to someone in the army."],
            "Translation": "Bye. See you soon."
        },
        {
            "Content": "Tudo bem, obrigado. Você também?",
            "Question": "Select your reply.",
            "Answers": ["Não muito bem."],
            "Options": ["Não muito bem.",
                "Ele tem pizza.",
                "Eu não gosto da gente.",
                "Eles querem dançar."],
            "Translation": "It is going well, thanks. And you? I am not doing well."
        },
        {
            "Content": "Como vai?",
            "Question": "Translate into English.",
            "Answers": ["How are you?"],
            "Options": ["How are you?",
                "Where are you going?",
                "Why do you exist?",
                "How am I sad?"],
            "Translation": "How are you?"
        },
        {
            "Content": "Boa noite.",
            "Question": "Translate into English.",
            "Answers": ["Good night."],
            "Options": ["Good night.",
                "Good evening.",
                "Good day.",
                "Goodbye."],
            "Translation": "Good night."
        },
        {
            "Content": "Chau. Até mais.",
            "Question": "What is the error in this sentence?",
            "Answers": ["The spelling is wrong."],
            "Options": ["The gender is wrong.",
                "The spelling is wrong.",
                "It is conjugated incorrectly.",
                "There is no mistake."],
            "Translation": "Chau > Tchau (Bye. See you soon.)"
        },
        {
            "Content": "Oi! Tudo joia.",
            "Question": "In which situation would you say this?",
            "Answers": ["You are speaking to a close friend."],
            "Options": ["You are speaking to a close friend.",
                "You are talking to a teacher.",
                "You are talking to an older person.",
                "You are talking to Napoleon."],
            "Translation": "Hi! I am doing great."
        },
    ]

    lesson3Json = [
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
            "Content": "o homem",
            "Question": "Translate into English.",
            "Answers": ["the man"],
            "Options": ["the man",
                "the woman",
                "the girl",
                "the boy"],
            "Translation": "the man"
        },
        {
            "Content": "a menina",
            "Question": "Translate into English.",
            "Answers": ["the girl"],
            "Options": ["the girl",
                "the woman",
                "the boy",
                "the man"],
            "Translation": "the girl"
        },
        {
            "Content": "a mulher",
            "Question": "Translate into English.",
            "Answers": ["the woman"],
            "Options": ["the woman",
                "the girl",
                "the boy",
                "the man"],
            "Translation": "the woman"
        },
        {
            "Content": "Sou um menino.",
            "Question": "Translate into English.",
            "Answers": ["I am a boy."],
            "Options": ["I am a boy.",
                "I am a woman.",
                "I am a girl.",
                "I am a man."],
            "Translation": "I am a boy."
        },
        {
            "Content": "Eu sou um homem.",
            "Question": "Translate into English.",
            "Answers": ["I am a man."],
            "Options": ["I am a man.",
                "I am a woman.",
                "I am a girl.",
                "I am a boy."],
            "Translation": "I am a man."
        },
        {
            "Content": "Sou uma menina.",
            "Question": "Translate into English.",
            "Answers": ["I am a girl."],
            "Options": ["I am a girl.",
                "I am a woman.",
                "I am a man.",
                "I am a boy."],
            "Translation": "I am a girl."
        },
        {
            "Content": "Eu sou uma mulher.",
            "Question": "Translate into English.",
            "Answers": ["I am a woman."],
            "Options": ["I am a woman.",
                "I am a man.",
                "I am a girl.",
                "I am a boy."],
            "Translation": "I am a woman."
        },

    ]

    lessonJSONData = [lesson1Json, lesson2Json, lesson3Json];
}