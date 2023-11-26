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
    lessonNameData = ["Welcome to the Course!", "Greetings 1", "People 1", "People 2", "Time 1", "Introductions 1", "People 3", "Numbers 1", "Numbers 1", "Numbers 2", "Numbers 3", "Numbers 4", "Days of the Week 1", "Days of the Week 2", "Appearance 1", "Appearance 2", "Appearance 3", "Numbers 5", "Age 1", "Personality 1", "Countries 1", "Countries 2", "Family 1", "Hobbies 1", "Weather 1", "Time 1", "Daily Routine 1", "Questions 1", "Food 1", "Questions 2"];

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
            "Content": "Olá. Como você te chama?",
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

    lesson4Json = [

        {
            "Content": "Você é um menino?",
            "Question": "Translate into English.",
            "Answers": ["Are you a boy?"],
            "Options": ["Are you a boy?",
                "Are you a woman?",
                "Are you a girl?",
                "Are you a man?"],
            "Translation": "Are you a boy?"
        },
        {
            "Content": "Você é um homem?",
            "Question": "Translate into English.",
            "Answers": ["Are you a man?"],
            "Options": ["Are you a man?",
                "Are you a woman?",
                "Are you a girl?",
                "Are you a boy?"],
            "Translation": "Are you a man?"
        },
        {
            "Content": "Você é uma menina?",
            "Question": "Translate into English.",
            "Answers": ["Are you a girl?"],
            "Options": ["Are you a girl?",
                "Are you a woman?",
                "Are you a man?",
                "Are you a boy?"],
            "Translation": "Are you a girl?"
        },
        {
            "Content": "Você é uma mulher?",
            "Question": "Translate into English.",
            "Answers": ["Are you a woman?"],
            "Options": ["Are you a woman?",
                "Are you a girl?",
                "Are you a man?",
                "Are you a boy?"],
            "Translation": "Are you a woman?"
        },
        {
            "Content": "Você é um menino?",
            "Question": "Select your reply.",
            "Answers": ["Sim, sou um menino."],
            "Options": ["Sim, sou um menino.",
                "Sim, és um menino.",
                "Sim, eu é um menino.",
                "Sim, eu são um menino.",],
            "Translation": "Are you a boy? Yes, I am a boy."
        },
        {
            "Content": "Você é um homem?",
            "Question": "Select your reply.",
            "Answers": ["Sim, eu sou um homem."],
            "Options": ["Sim, eu sou um homem.",
                "Sim, eu és um homem.",
                "Sim, eu é um homem.",
                "Sim, eu são um homem.",],
            "Translation": "Are you a man? Yes, I am a man."
        },
        {
            "Content": "Você é uma menina?",
            "Question": "Select your reply.",
            "Answers": ["Sim, sou uma menina."],
            "Options": ["Sim, sou uma menina.",
                "Sim, és uma menina.",
                "Sim, eu é uma menina.",
                "Sim, eu são uma menina.",],
            "Translation": "Are you a girl? Yes, I am a girl."
        },
        {
            "Content": "Você é uma mulher?",
            "Question": "Select your reply.",
            "Answers": ["Sim, eu sou uma mulher."],
            "Options": ["Sim, eu sou uma mulher.",
                "Sim, eu és uma mulher.",
                "Sim, eu é uma mulher.",
                "Sim, eu são uma mulher.",],
            "Translation": "Are you a woman? Yes, I am a woman."
        },
    ]

    lesson5Json = [
        {
            "Content": "Boa dia.",
            "Question": "What is the error in this sentence?",
            "Answers": ["The gender is wrong."],
            "Options": ["The gender is wrong.",
                "The spelling is wrong.",
                "It is conjugated incorrectly.",
                "There is no mistake."],
            "Translation": "Boa dia. > Bom dia."
        },
        {
            "Content": "Hoje, eu trabalho.",
            "Question": "When do I work?",
            "Answers": ["Today"],
            "Options": ["Today",
                "Tomorrow",
                "Yesterday",
                "Never"],
            "Translation": "Today, I work."
        },
        {
            "Content": "Você lê todos dias.",
            "Question": "Translate into English.",
            "Answers": ["You read everyday."],
            "Options": ["You read everyday.",
                "You lie often.",
                "You and me",
                "You are always lying down."],
            "Translation": "You read everyday."
        },
        {
            "Content": "ontem",
            "Question": "Translate into English.",
            "Answers": ["yesterday"],
            "Options": ["yesterday",
                "have",
                "tomorrow",
                "on the table"],
            "Translation": "yesterday"
        },
        {
            "Content": "amanhã e ontem",
            "Question": "Translate into English.",
            "Answers": ["tomorrow and yesterday"],
            "Options": ["tomorrow and yesterday",
                "today and tomorrow",
                "today and yesterday",
                "it will never happen."],
            "Translation": "tomorrow and yesterday"
        },
        {
            "Content": "Ele não come.",
            "Question": "What is he doing?",
            "Answers": ["He is not eating."],
            "Options": ["He is not eating.",
                "He is eating.",
                "He is not drinking.",
                "He is drinking."],
            "Translation": "He does not eat"
        },
        {
            "Content": "Ela não bebe.",
            "Question": "What is she doing?",
            "Answers": ["She is not drinking."],
            "Options": ["She is not drinking.",
                "She is eating.",
                "She is not eating.",
                "She is drinking."],
            "Translation": "She is not drinking."
        },
        {
            "Content": "não",
            "Question": "Translate into English.",
            "Answers": ["do not"],
            "Options": ["do not",
                "nil",
                "night",
                "nice"],
            "Translation": "do not ..."
        },
    ]

    lesson6Json = [
        {
            "Content": "Olá! Eu me chamo Pedro.",
            "Question": "Who is speaking?",
            "Answers": ["Pedro"],
            "Options": ["Pedro",
                "Carlos",
                "Maria",
                "Ana"],
            "Translation": "Hello! I am called Pedro."
        },
        {
            "Content": "Eu me chamo Carlos.",
            "Question": "Translate into English",
            "Answers": ["I am called Carlos."],
            "Options": ["I am called Carlos.",
                "My friend is called Carlos.",
                "I hate people called Carlos.",
                "Carlos is a bad name."],
            "Translation": "I am called Carlos."
        },
        {
            "Content": "Você chama Maria.",
            "Question": "What is the error in this sentence?",
            "Answers": ["It is conjugated incorrectly."],
            "Options": ["The gender is wrong.",
                "The spelling is wrong.",
                "It is conjugated incorrectly.",
                "There is no mistake."],
            "Translation": "chama > se chama"
        },
        {
            "Content": "Ele me chama Luiz.",
            "Question": "What is the error in this sentence?",
            "Answers": ["It is conjugated incorrectly."],
            "Options": ["The gender is wrong.",
                "The spelling is wrong.",
                "It is conjugated incorrectly.",
                "There is no mistake."],
            "Translation": "me chama > se chama"
        },
        {
            "Content": "Como você se chama?",
            "Question": "Select your reply.",
            "Answers": ["Eu me chamo Maria. E você?"],
            "Options": ["Eu me chamo Maria. E você?",
                "Você se chama Maria.",
                "Ele se chama Maria.",
                "Nós nos chamamos Maria."],
            "Translation": "What are you called? I am called Maria. And you?"
        },
        {
            "Content": "Ela se chama Ana e ele se chama Carlos.",
            "Question": "Translate into English",
            "Answers": ["She is called Ana and he is called Carlos."],
            "Options": ["She is called Ana and he is called Carlos.",
                "He is called Ana and she is called Carlos.",
                "Ana and Carlos are apples.",
                "Ana and Carlos are not apples."],
            "Translation": "She is called Ana and he is called Carlos."
        },
        {
            "Content": "Você se chamo Ana-Maria?",
            "Question": "What is the error in this sentence?",
            "Answers": ["It is conjugated incorrectly."],
            "Options": ["The gender is wrong.",
                "The spelling is wrong.",
                "It is conjugated incorrectly.",
                "There is no mistake."],
            "Translation": "chamo > chama"
        },
    ]

    lesson7Json = [
        {
            "Content": "Ela é estudante. _____ gosto de escola",
            "Question": "Choose the correct pronoun:",
            "Answers": ["Ela"],
            "Options": ["Ela", "Ele", "Eles", "Elas"],
            "Translation": "She is a student. She likes school."
        },
        {
            "Content": "Vamos à casa do Pedro. _____ somos amigos.",
            "Question": "Choose the correct pronoun:",
            "Answers": ["Nós"],
            "Options": ["Nós", "Você", "Vocês", "Eles"],
            "Translation": "We are going to Pedro's house. We are friends."
        },
        {
            "Content": "Marco é meu amigo. _____ é muito simpático.",
            "Question": "Choose the correct pronoun:",
            "Answers": ["Ele"],
            "Options": ["Ela", "Ele", "Eles", "Elas"],
            "Translation": "Marco is my friend. He is very nice."
        },
        {
            "Content": "Paulo fala inglês. _____ fala com a mãe dele.",
            "Question": "Choose the correct pronoun:",
            "Answers": ["Ele"],
            "Options": ["Ele", "Ela", "Eles", "Elas"],
            "Translation": "Paulo speaks English. He talks with his mother."
        },
        {
            "Content": "Cheryl e eu são amigas. _____ gostamos de brincar.",
            "Question": "Choose the correct pronoun:",
            "Answers": ["Nós"],
            "Options": ["Nós", "Tu", "Você", "Eles"],
            "Translation": "Cheryl and I are friends. We like to play."
        },
        {
            "Content": "___ falam.",
            "Question": "Choose the correct pronoun:",
            "Answers": ["Eles"],
            "Options": ["Eles", "Eu", "Tu", "Ela"],
            "Translation": "They speak."
        },
        {
            "Content": "______ fala françês.",
            "Question": "Choose the correct pronoun:",
            "Answers": ["Eu"],
            "Options": ["Eu", "Nós", "Vocês", "Elas"],
            "Translation": "I speak French."
        },
    ]

    lesson8Json = [
        {
            "Content": "um/uma",
            "Question": "Translate into English",
            "Answers": ["one"],
            "Options": [
                "one",
                "two",
                "three",
                "four"
            ],
            "Translation": "one"
        },
        {
            "Content": "dois/duas",
            "Question": "Translate into English",
            "Answers": ["two"],
            "Options": [
                "two",
                "eight",
                "nine",
                "four"
            ],
            "Translation": "two"
        },
        {
            "Content": "três",
            "Question": "Translate into English",
            "Answers": ["three"],
            "Options": [
                "three",
                "seven",
                "one",
                "nine"
            ],
            "Translation": "three"
        },
        {
            "Content": "quatro",
            "Question": "Translate into English",
            "Answers": ["four"],
            "Options": [
                "four",
                "one",
                "five",
                "two"
            ],
            "Translation": "four"
        },
        {
            "Content": "cinco",
            "Question": "Translate into English",
            "Answers": ["five"],
            "Options": [
                "five",
                "six",
                "three",
                "eight"
            ],
            "Translation": "five"
        },
        {
            "Content": "seis",
            "Question": "Translate into English",
            "Answers": ["six"],
            "Options": [
                "six",
                "nine",
                "ten",
                "four"
            ],
            "Translation": "six"
        },
        {
            "Content": "sete",
            "Question": "Translate into English",
            "Answers": ["seven"],
            "Options": [
                "seven",
                "three",
                "ten",
                "two"
            ],
            "Translation": "seven"
        },
        {
            "Content": "oito",
            "Question": "Translate into English",
            "Answers": ["eight"],
            "Options": [
                "eight",
                "five",
                "one",
                "two"
            ],
            "Translation": "eight"
        },
        {
            "Content": "nove",
            "Question": "Translate into English",
            "Answers": ["nine"],
            "Options": [
                "nine",
                "five",
                "three",
                "seven"
            ],
            "Translation": "nine"
        },
        {
            "Content": "dez",
            "Question": "Translate into English",
            "Answers": ["ten"],
            "Options": [
                "ten",
                "nine",
                "seven",
                "two"
            ],
            "Translation": "ten"
        }
    ]

    lesson9Json = [
        {
            "Content": "um/uma",
            "Question": "Translate into English",
            "Answers": ["one"],
            "Options": [
                "one",
                "two",
                "three",
                "four"
            ],
            "Translation": "one"
        },
        {
            "Content": "dois/duas",
            "Question": "Translate into English",
            "Answers": ["two"],
            "Options": [
                "two",
                "eight",
                "nine",
                "four"
            ],
            "Translation": "two"
        },
        {
            "Content": "três",
            "Question": "Translate into English",
            "Answers": ["three"],
            "Options": [
                "three",
                "seven",
                "one",
                "nine"
            ],
            "Translation": "three"
        },
        {
            "Content": "quatro",
            "Question": "Translate into English",
            "Answers": ["four"],
            "Options": [
                "four",
                "one",
                "five",
                "two"
            ],
            "Translation": "four"
        },
        {
            "Content": "cinco",
            "Question": "Translate into English",
            "Answers": ["five"],
            "Options": [
                "five",
                "six",
                "three",
                "eight"
            ],
            "Translation": "five"
        },
        {
            "Content": "seis",
            "Question": "Translate into English",
            "Answers": ["six"],
            "Options": [
                "six",
                "nine",
                "ten",
                "four"
            ],
            "Translation": "six"
        },
        {
            "Content": "sete",
            "Question": "Translate into English",
            "Answers": ["seven"],
            "Options": [
                "seven",
                "three",
                "ten",
                "two"
            ],
            "Translation": "seven"
        },
        {
            "Content": "oito",
            "Question": "Translate into English",
            "Answers": ["eight"],
            "Options": [
                "eight",
                "five",
                "one",
                "two"
            ],
            "Translation": "eight"
        },
        {
            "Content": "nove",
            "Question": "Translate into English",
            "Answers": ["nine"],
            "Options": [
                "nine",
                "five",
                "three",
                "seven"
            ],
            "Translation": "nine"
        },
        {
            "Content": "dez",
            "Question": "Translate into English",
            "Answers": ["ten"],
            "Options": [
                "ten",
                "nine",
                "seven",
                "two"
            ],
            "Translation": "ten"
        }
    ]

    lesson10Json = [
        {
            "Content": "Eu tenho um gato.",
            "Question": "What is the error in this sentence?",
            "Answers": ["There is no mistake."],
            "Options": [
                "The gender is wrong.",
                "The spelling is wrong.",
                "It is conjugated incorrectly.",
                "There is no mistake."
            ],
            "Translation": "I have a cat."
        },
        {
            "Content": "Eu tenho dois cachoros.",
            "Question": "What is the error in this sentence?",
            "Answers": ["The spelling is wrong."],
            "Options": [
                "The gender is wrong.",
                "The spelling is wrong.",
                "It is conjugated incorrectly.",
                "There is no mistake."
            ],
            "Translation": "cachoros > cachorros (I have two dogs.)"
        },
        {
            "Content": "Você tem três animais.",
            "Question": "Select your reply.",
            "Answers": ["Sim, eu tenho dois gatos e um peixe."],
            "Options": [
                "Sim, eu tenho dois gatos e um peixe.",
                "Sim, eu tenho uma filha.",
                "Não, eu tenho um cachorro e um filho.",
                "Não, eu sou Pierre."
            ],
            "Translation": "Do you have three animals? Yes, I have two cats and one fish."
        },
        {
            "Content": "Ele tem quatro amigos.",
            "Question": "How many friends does he have?",
            "Answers": ["four"],
            "Options": [
                "four",
                "nine",
                "eight",
                "three"
            ],
            "Translation": "He has four friends."
        },
        {
            "Content": "Ela tem cinco jogos de vídeo.",
            "Question": "How many video games does she have?",
            "Answers": ["five"],
            "Options": [
                "five",
                "seven",
                "two",
                "eight"
            ],
            "Translation": "She has five video games."
        },
        {
            "Content": "Eles têm seis canetas.",
            "Question": "How many pens do they have?",
            "Answers": ["six"],
            "Options": [
                "six",
                "seven",
                "one",
                "nine"
            ],
            "Translation": "They have six pens."
        },
        {
            "Content": "Elas têm sete cadernos.",
            "Question": "How many notebooks do they have?",
            "Answers": ["seven"],
            "Options": [
                "seven",
                "nine",
                "one",
                "two"
            ],
            "Translation": "They have seven notebooks."
        },
        {
            "Content": "Eu tenho ___ cartão.",
            "Question": "Select the correct number:",
            "Answers": ["um"],
            "Options": [
                "um",
                "dois",
                "três",
                "quatro"
            ],
            "Translation": "I have one card."
        }
    ]

    lesson11Json = [
        {
            "Content": "onze",
            "Question": "Translate into English.",
            "Answers": ["eleven"],
            "Options": ["eleven", "four", "eighteen", "fifteen"],
            "Translation": "eleven"
        },
        {
            "Content": "doze",
            "Question": "Translate into English.",
            "Answers": ["twelve"],
            "Options": ["twelve", "seventeen", "nine", "five"],
            "Translation": "twelve"
        },
        {
            "Content": "treze",
            "Question": "Translate into English.",
            "Answers": ["thirteen"],
            "Options": ["thirteen", "ten", "sixteen", "three"],
            "Translation": "thirteen"
        },
        {
            "Content": "quatorze",
            "Question": "Translate into English.",
            "Answers": ["fourteen"],
            "Options": ["fourteen", "two", "nineteen", "seven"],
            "Translation": "fourteen"
        },
        {
            "Content": "quinze",
            "Question": "Translate into English.",
            "Answers": ["fifteen"],
            "Options": ["fifteen", "six", "eight", "one"],
            "Translation": "fifteen"
        },
        {
            "Content": "dezesseis",
            "Question": "Translate into English.",
            "Answers": ["sixteen"],
            "Options": ["sixteen", "seventeen", "thirteen", "five"],
            "Translation": "sixteen"
        },
        {
            "Content": "dezessete",
            "Question": "Translate into English.",
            "Answers": ["seventeen"],
            "Options": ["seventeen", "three", "ten", "four"],
            "Translation": "seventeen"
        },
        {
            "Content": "dezoito",
            "Question": "Translate into English.",
            "Answers": ["eighteen"],
            "Options": ["eighteen", "eight", "thirteen", "nineteen"],
            "Translation": "eighteen"
        },
        {
            "Content": "deznove",
            "Question": "Translate into English.",
            "Answers": ["nineteen"],
            "Options": ["nineteen", "sixteen", "two", "twelve"],
            "Translation": "nineteen"
        },
        {
            "Content": "vinte",
            "Question": "Translate into English.",
            "Answers": ["twenty"],
            "Options": ["twenty", "fifteen", "eight", "seven"],
            "Translation": "twenty"
        }
    ];

    lesson12Json = [
        {
            "Content": "vinte e um",
            "Question": "Translate into English.",
            "Answers": ["twenty-one"],
            "Options": ["twenty-one", "twenty-nine", "twenty-four", "twenty-five"],
            "Translation": "twenty-one"
        },
        {
            "Content": "vinte e dois",
            "Question": "Translate into English.",
            "Answers": ["twenty-two"],
            "Options": ["nine", "twenty-two", "twenty", "thirty"],
            "Translation": "twenty-two"
        },
        {
            "Content": "vinte e três",
            "Question": "Translate into English.",
            "Answers": ["twenty-three"],
            "Options": ["twenty-three", "three", "sixteen", "nineteen"],
            "Translation": "twenty-three"
        },
        {
            "Content": "vinte e quatro",
            "Question": "Translate into English.",
            "Answers": ["twenty-four"],
            "Options": ["fourteen", "twenty-four", "fourty", "four"],
            "Translation": "twenty-four"
        },
        {
            "Content": "vinte e cinco",
            "Question": "Translate into English.",
            "Answers": ["twenty-five"],
            "Options": ["fifteen", "eighteen", "twenty-five", "seven"],
            "Translation": "twenty-five"
        },
        {
            "Content": "vinte e sez",
            "Question": "Translate into English.",
            "Answers": ["twenty-six"],
            "Options": ["twenty-six", "twenty-seven", "twenty-two", "twelve"],
            "Translation": "twenty-six"
        },
        {
            "Content": "vinte e sete",
            "Question": "Translate into English.",
            "Answers": ["twenty-seven"],
            "Options": ["twenty-seven", "eleven", "ten", "fourteen"],
            "Translation": "twenty-seven"
        },
        {
            "Content": "vinte e oito",
            "Question": "Translate into English.",
            "Answers": ["twenty-eight"],
            "Options": ["eighteen", "twenty-eight", "twenty-three", "nineteen"],
            "Translation": "twenty-eight"
        },
        {
            "Content": "vinte e nove",
            "Question": "Translate into English.",
            "Answers": ["twenty-nine"],
            "Options": ["twenty-nine", "nineteen", "nine", "fourteen"],
            "Translation": "twenty-nine"
        },
        {
            "Content": "trinta",
            "Question": "Translate into English.",
            "Answers": ["thirty"],
            "Options": ["thirty", "twenty", "ten", "zero"],
            "Translation": "thirty"
        }
    ];

    lesson13Json = [
        {
            "Content": "Segunda-feira",
            "Question": "Translate into English.",
            "Answers": ["Monday"],
            "Options": ["Monday",
                "Tuesday",
                "Wednesday",
                "Thursday"],
            "Translation": "Monday"
        },
        {
            "Content": "Terça-feira",
            "Question": "Translate into English.",
            "Answers": ["Tuesday"],
            "Options": ["Tuesday",
                "Friday",
                "Wednesday",
                "Saturday"],
            "Translation": "Tuesday"
        },
        {
            "Content": "Quarta-feira",
            "Question": "Translate into English.",
            "Answers": ["Wednesday"],
            "Options": ["Wednesday",
                "Sunday",
                "Monday",
                "Saturday"],
            "Translation": "Wednesday"
        },
        {
            "Content": "Quinta-feira",
            "Question": "Translate into English.",
            "Answers": ["Thursday"],
            "Options": ["Thursday",
                "Friday",
                "Monday",
                "Sunday"],
            "Translation": "Thursday"
        },
        {
            "Content": "Sexta-feira",
            "Question": "Translate into English.",
            "Answers": ["Friday"],
            "Options": ["Friday",
                "Tuesday",
                "Wednesday",
                "Thursday"],
            "Translation": "Friday"
        },
        {
            "Content": "Sábado",
            "Question": "Translate into English.",
            "Answers": ["Saturday"],
            "Options": ["Saturday",
                "Monday",
                "Wednesday",
                "Friday"],
            "Translation": "Saturday"
        },
        {
            "Content": "Domingo",
            "Question": "Translate into English.",
            "Answers": ["Sunday"],
            "Options": ["Sunday",
                "Saturday",
                "Thursday",
                "Tuesday"],
            "Translation": "Sunday"
        },
    ];
    
    lesson14Json = [
        {
            "Content": "Aos domingos, ela assiste a filmes.",
            "Question": "When does she watch movies?",
            "Answers": ["On Sundays"],
            "Options": [
                "On Sundays",
                "On Mondays",
                "On Wednesdays",
                "On Fridays"
            ],
            "Translation": "On Sundays, she watches movies."
        },
        {
            "Content": "Às segundas-feiras, eu como pizza.",
            "Question": "When do I eat pizza?",
            "Answers": ["On Mondays"],
            "Options": [
                "On Mondays",
                "On Tuesdays",
                "On Sundays",
                "On Saturdays"],
            "Translation": "On Mondays, I eat pizza."
        },
        {
            "Content": "Às terças-feiras, você vai ao parque.",
            "Question": "When do you go to the park?",
            "Answers": ["On Tuesdays"],
            "Options": [
                "On Tuesdays",
                "On Wednesdays",
                "On Fridays",
                "On Saturdays"],
            "Translation": "On Tuesdays, you go to the park."
        },
        {
            "Content": "Às quartas-feiras, ele vai ao trabalho.",
            "Question": "When does he go to work?",
            "Answers": ["On Wednesdays"],
            "Options": [
                "On Wednesdays",
                "On Thursdays",
                "On Tuesdays",
                "On Fridays"
            ],
            "Translation": "On Wednesdays, he goes to work."
        },
        {
            "Content": "Às quintas-feiras, fazemos compras.",
            "Question": "When do we do our shopping?",
            "Answers": ["On Thursdays"],
            "Options": [
                "On Thursdays",
                "On Saturdays",
                "On Sundays",
                "On Mondays"
            ],
            "Translation": "On Thursdays, we do our shopping."
        },
        {
            "Content": "Às sextas-feiras, ela encontra seus amigos.",
            "Question": "When does she meet her friends?",
            "Answers": ["On Fridays"],
            "Options": [
                "On Fridays",
                "On Sundays",
                "On Wednesdays",
                "On Tuesdays"
            ],
            "Translation": "On Fridays, she meets her friends."
        },
        {
            "Content": "Aos sábados, eles praticam esportes.",
            "Question": "When do they do sports?",
            "Answers": ["On Saturdays"],
            "Options": [
                "On Saturdays",
                "On Wednesdays",
                "On Mondays",
                "On Thursdays"
            ],
            "Translation": "On Saturdays, they do sports."
        }
    ];
    
    lesson15Json = [
        {
            "Content": "Ela tem olhos castanhos.",
            "Question": "What color are her eyes?",
            "Answers": ["Brown"],
            "Options": ["Brown", "Blue", "Green", "Hazel"],
            "Translation": "She has brown eyes."
        },
        {
            "Content": "Ele tem olhos azuis.",
            "Question": "What color are his eyes?",
            "Answers": ["Blue"],
            "Options": ["Blue", "Brown", "Green", "Gray"],
            "Translation": "He has blue eyes."
        },
        {
            "Content": "Eu tenho olhos verdes.",
            "Question": "What color are my eyes?",
            "Answers": ["Green"],
            "Options": ["Green", "Brown", "Blue", "Hazel"],
            "Translation": "I have green eyes."
        },
        {
            "Content": "Eles têm olhos cor de avelã.",
            "Question": "What color are their eyes?",
            "Answers": ["Hazel"],
            "Options": ["Hazel", "Brown", "Blue", "Green"],
            "Translation": "They have hazel eyes."
        },
        {
            "Content": "Ela tem olhos cinza.",
            "Question": "What color are her eyes?",
            "Answers": ["Gray"],
            "Options": ["Gray", "Brown", "Blue", "Green"],
            "Translation": "She has gray eyes."
        }
    ];
    
    lesson16Json = [
        {
            "Content": "Ela tem cabelos loiros.",
            "Question": "What color is her hair?",
            "Answers": ["Blonde"],
            "Options": ["Blonde", "Brown", "Black", "Red"],
            "Translation": "She has blonde hair."
        },
        {
            "Content": "Ele tem cabelos castanhos.",
            "Question": "What color is his hair?",
            "Answers": ["Brown"],
            "Options": ["Brown", "Blonde", "Black", "Red"],
            "Translation": "He has brown hair."
        },
        {
            "Content": "Eu tenho cabelos pretos.",
            "Question": "What color is my hair?",
            "Answers": ["Black"],
            "Options": ["Black", "Blonde", "Brown", "Red"],
            "Translation": "I have black hair."
        },
        {
            "Content": "Eles têm cabelos ruivos.",
            "Question": "What color is their hair?",
            "Answers": ["Red"],
            "Options": ["Red", "Blonde", "Brown", "Black"],
            "Translation": "They have red hair."
        },
        {
            "Content": "Ela tem cabelos castanhos.",
            "Question": "What color is her hair?",
            "Answers": ["Brown"],
            "Options": ["Brown", "Blonde", "Black", "Red"],
            "Translation": "She has brown hair."
        },
        {
            "Content": "Nós temos cabelos loiros.",
            "Question": "What color is our hair?",
            "Answers": ["Blonde"],
            "Options": ["Blonde", "Brown", "Black", "Red"],
            "Translation": "We have blonde hair."
        },
        {
            "Content": "Eles têm cabelos pretos.",
            "Question": "What color is their hair?",
            "Answers": ["Black"],
            "Options": ["Black", "Blonde", "Brown", "Red"],
            "Translation": "They have black hair."
        }
    ];
    
    lesson17Json = [
        {
            "Content": "Ela tem cabelos longos e cacheados.",
            "Question": "What is her hair style?",
            "Answers": ["Long and curly"],
            "Options": ["Long and curly", "Short and straight", "Medium and wavy", "Bald"],
            "Translation": "She has long and curly hair."
        },
        {
            "Content": "Ele tem cabelos raspados.",
            "Question": "What is his hair style?",
            "Answers": ["Shaved"],
            "Options": ["Shaved", "Medium length", "Balding", "Curly"],
            "Translation": "He has shaved hair."
        },
        {
            "Content": "Ela tem cabelos médios e lisos.",
            "Question": "What is her hair style?",
            "Answers": ["Medium length and straight"],
            "Options": ["Medium length and straight", "Short and curly", "Long and wavy", "Bald"],
            "Translation": "She has medium length and straight hair."
        },
        {
            "Content": "Ele tem cabelos cacheados.",
            "Question": "What is his hair style?",
            "Answers": ["Curly"],
            "Options": ["Curly", "Straight", "Short", "Balding"],
            "Translation": "He has curly hair."
        },
        {
            "Content": "Ela tem cabelos muito curtos.",
            "Question": "What is her hair style?",
            "Answers": ["Very short"],
            "Options": ["Very short", "Long and wavy", "Curly", "Bald"],
            "Translation": "She has very short hair."
        },
        {
            "Content": "Ele tem cabelos ondulados.",
            "Question": "What is his hair style?",
            "Answers": ["Wavy"],
            "Options": ["Wavy", "Straight", "Short and curly", "Balding"],
            "Translation": "He has wavy hair."
        },
        {
            "Content": "Ela tem cabelos cacheados.",
            "Question": "What is her hair style?",
            "Answers": ["Curly"],
            "Options": ["Curly", "Straight", "Short and wavy", "Balding"],
            "Translation": "She has curly hair."
        }
    ];

    lesson18Json = [
        {
            "Content": "Ele tem trinta anos.",
            "Question": "How old is he?",
            "Answers": ["Thirty"],
            "Options": ["Thirty", "Twenty", "Fifty", "Seventy"],
            "Translation": "He is thirty years old."
        },
        {
            "Content": "Ela tem quarenta e cinco dólares.",
            "Question": "How much money does she have?",
            "Answers": ["Forty-five"],
            "Options": ["Forty-five", "Sixty", "Ninety", "Seventy-five"],
            "Translation": "She has forty-five dollars."
        },
        {
            "Content": "Há sessenta segundos em um minuto.",
            "Question": "How many seconds are there in a minute?",
            "Answers": ["Sixty"],
            "Options": ["Sixty", "Fifty", "Seventy", "Eighty"],
            "Translation": "There are sixty seconds in a minute."
        },
        {
            "Content": "Ele tem oitenta libras.",
            "Question": "How much does he weigh?",
            "Answers": ["Eighty"],
            "Options": ["Eighty", "Sixty", "Ninety", "Seventy-five"],
            "Translation": "He weighs eighty pounds."
        },
        {
            "Content": "Ela tem cinquenta e cinco maçãs.",
            "Question": "How many apples does she have?",
            "Answers": ["Fifty-five"],
            "Options": ["Fifty-five", "Sixty", "Ninety", "Seventy-five"],
            "Translation": "She has fifty-five apples."
        },
        {
            "Content": "Há trezentos e sessenta e cinco dias em um ano.",
            "Question": "How many days are there in a year?",
            "Answers": ["Three hundred sixty-five"],
            "Options": ["Three hundred sixty-five", "Sixty", "Eighty", "Seventy-five"],
            "Translation": "There are three hundred sixty-five days in a year."
        },
        {
            "Content": "Ele tem setenta funcionários.",
            "Question": "How many employees does he have?",
            "Answers": ["Seventy"],
            "Options": ["Seventy", "Sixty", "Eighty", "Ninety"],
            "Translation": "He has seventy employees."
        }
    ];
    
    lesson19Json = [
        {
            "Content": "Ela tem vinte e dois anos.",
            "Question": "How old is she?",
            "Answers": ["Twenty-two"],
            "Options": ["Twenty-two", "Fifteen", "Thirty", "Forty-five"],
            "Translation": "She is twenty-two years old."
        },
        {
            "Content": "Ele tem trinta e sete anos.",
            "Question": "How old is he?",
            "Answers": ["Thirty-seven"],
            "Options": ["Thirty-seven", "Twenty", "Fifty", "Sixty"],
            "Translation": "He is thirty-seven years old."
        },
        {
            "Content": "Ela tem dezenove anos.",
            "Question": "How old is she?",
            "Answers": ["Nineteen"],
            "Options": ["Nineteen", "Twenty-five", "Thirty", "Forty-five"],
            "Translation": "She is nineteen years old."
        },
        {
            "Content": "Ele tem cinquenta e um anos.",
            "Question": "How old is he?",
            "Answers": ["Fifty-one"],
            "Options": ["Fifty-one", "Thirty-five", "Sixty", "Seventy-five"],
            "Translation": "He is fifty-one years old."
        },
        {
            "Content": "Ela tem vinte e seis anos.",
            "Question": "How old is she?",
            "Answers": ["Twenty-six"],
            "Options": ["Twenty-six", "Eighteen", "Thirty", "Forty-five"],
            "Translation": "She is twenty-six years old."
        },
        {
            "Content": "Ele tem sessenta e três anos.",
            "Question": "How old is he?",
            "Answers": ["Sixty-three"],
            "Options": ["Sixty-three", "Thirty-five", "Fifty", "Seventy-five"],
            "Translation": "He is sixty-three years old."
        },
        {
            "Content": "Ela tem quarenta e sete anos.",
            "Question": "How old is she?",
            "Answers": ["Forty-seven"],
            "Options": ["Forty-seven", "Eighteen", "Thirty", "Twenty-six"],
            "Translation": "She is forty-seven years old."
        }
    ];
    
    lesson20Json = [
        {
            "Content": "Ela é muito gentil.",
            "Question": "What is her personality like?",
            "Answers": ["Very kind"],
            "Options": ["Very kind", "Funny", "Serious", "Shy"],
            "Translation": "She is very kind."
        },
        {
            "Content": "Ele é muito engraçado.",
            "Question": "What is his personality like?",
            "Answers": ["Very funny"],
            "Options": ["Very funny", "Kind", "Serious", "Shy"],
            "Translation": "He is very funny."
        },
        {
            "Content": "Ela é muito séria.",
            "Question": "What is her personality like?",
            "Answers": ["Very serious"],
            "Options": ["Very serious", "Kind", "Funny", "Shy"],
            "Translation": "She is very serious."
        },
        {
            "Content": "Ele é muito tímido.",
            "Question": "What is his personality like?",
            "Answers": ["Very shy"],
            "Options": ["Very shy", "Kind", "Funny", "Serious"],
            "Translation": "He is very shy."
        },
        {
            "Content": "Ela é muito sociável.",
            "Question": "What is her personality like?",
            "Answers": ["Very sociable"],
            "Options": ["Very sociable", "Kind", "Funny", "Serious"],
            "Translation": "She is very sociable."
        },
        {
            "Content": "Ele é muito calmo.",
            "Question": "What is his personality like?",
            "Answers": ["Very calm"],
            "Options": ["Very calm", "Kind", "Funny", "Serious"],
            "Translation": "He is very calm."
        },
        {
            "Content": "Ela é muito enérgica.",
            "Question": "What is her personality like?",
            "Answers": ["Very energetic"],
            "Options": ["Very energetic", "Kind", "Funny", "Serious"],
            "Translation": "She is very energetic."
        }
    ];

    lesson21Json = [
        {
            "Content": "China",
            "Question": "Translate into English.",
            "Answers": ["China"],
            "Options": ["China", "India", "Brazil", "Russia"],
            "Translation": "China"
        },
        {
            "Content": "Os Estados Unidos",
            "Question": "Translate into English.",
            "Answers": ["The United States"],
            "Options": ["The United States", "United Kingdom", "Canada", "Australia"],
            "Translation": "The United States"
        },
        {
            "Content": "Japão",
            "Question": "Translate into English.",
            "Answers": ["Japan"],
            "Options": ["Japan", "South Korea", "Germany", "France"],
            "Translation": "Japan"
        },
        {
            "Content": "Índia",
            "Question": "Translate into English.",
            "Answers": ["India"],
            "Options": ["India", "Pakistan", "Bangladesh", "Nepal"],
            "Translation": "India"
        },
        {
            "Content": "Brasil",
            "Question": "Translate into English.",
            "Answers": ["Brazil"],
            "Options": ["Brazil", "Argentina", "Mexico", "Colombia"],
            "Translation": "Brazil"
        },
        {
            "Content": "Rússia",
            "Question": "Translate into English.",
            "Answers": ["Russia"],
            "Options": ["Russia", "Germany", "Canada", "China"],
            "Translation": "Russia"
        },
        {
            "Content": "Alemanha",
            "Question": "Translate into English.",
            "Answers": ["Germany"],
            "Options": ["Germany", "France", "Italy", "Spain"],
            "Translation": "Germany"
        },
        {
            "Content": "França",
            "Question": "Translate into English.",
            "Answers": ["France"],
            "Options": ["France", "Spain", "Italy", "Germany"],
            "Translation": "France"
        },
        {
            "Content": "Inglaterra",
            "Question": "Translate into English.",
            "Answers": ["England"],
            "Options": ["England", "Scotland", "Ireland", "Wales"],
            "Translation": "England"
        }
    ];

    lesson22Json = [
        {
            "Content": "Eu sou chinês.",
            "Question": "Which nationality is 'Eu'?",
            "Answers": ["Chinese"],
            "Options": ["Chinese", "Indian", "Brazilian", "Russian"],
            "Translation": "I am Chinese."
        },
        {
            "Content": "Você é americano.",
            "Question": "Which nationality is 'Você'?",
            "Answers": ["American"],
            "Options": ["American", "British", "Canadian", "Australian"],
            "Translation": "You are American."
        },
        {
            "Content": "Ele é japonês.",
            "Question": "Which nationality is 'Ele'?",
            "Answers": ["Japanese"],
            "Options": ["Japanese", "South Korean", "German", "French"],
            "Translation": "He is Japanese."
        },
        {
            "Content": "Ela é indiana.",
            "Question": "Which nationality is 'Ela'?",
            "Answers": ["Indian"],
            "Options": ["Indian", "Pakistani", "Bangladeshi", "Nepali"],
            "Translation": "She is Indian."
        },
        {
            "Content": "Nós somos brasileiros.",
            "Question": "Which nationality is 'Nós'?",
            "Answers": ["Brazilian"],
            "Options": ["Brazilian", "Argentinian", "Mexican", "Colombian"],
            "Translation": "We are Brazilian."
        },
        {
            "Content": "Vocês são russos.",
            "Question": "Which nationality is 'Vocês'?",
            "Answers": ["Russian"],
            "Options": ["Russian", "German", "Canadian", "Chinese"],
            "Translation": "You are Russian."
        },
        {
            "Content": "Eles são alemães.",
            "Question": "Which nationality is 'Eles'?",
            "Answers": ["German"],
            "Options": ["German", "French", "Italian", "Spanish"],
            "Translation": "They are German."
        },
        {
            "Content": "Elas são francesas.",
            "Question": "Which nationality is 'Elas'?",
            "Answers": ["French"],
            "Options": ["French", "Spanish", "Italian", "German"],
            "Translation": "They are French."
        },
        {
            "Content": "A gente é ingleses.",
            "Question": "Which nationality is 'A gente'?",
            "Answers": ["English"],
            "Options": ["English", "Scottish", "Irish", "Welsh"],
            "Translation": "We are English."
        }
    ];
    
    lesson23Json = [
        {
            "Content": "Meu pai se chama Pedro.",
            "Question": "Who is 'Pedro'?",
            "Answers": ["My Father"],
            "Options": ["My Father", "My Mother", "My Brother", "My Sister"],
            "Translation": "My father's name is Pedro."
        },
        {
            "Content": "Eu tenho dois irmãos e uma irmã.",
            "Question": "How many siblings do I have?",
            "Answers": ["Three"],
            "Options": ["Three", "One", "Four", "Two"],
            "Translation": "I have two brothers and one sister."
        },
        {
            "Content": "Meu tio é muito gentil.",
            "Question": "Who is 'oncle'?",
            "Answers": ["My Uncle"],
            "Options": ["My Uncle", "My Aunt", "My Cousin", "My Brother"],
            "Translation": "My uncle is very kind."
        },
        {
            "Content": "Minha irmã tem 25 anos.",
            "Question": "Who is 'sœur'?",
            "Answers": ["My Sister"],
            "Options": ["My Sister", "My Mother", "My Aunt", "My Cousin"],
            "Translation": "My sister is 25 years old."
        },
        {
            "Content": "Meu primo adora jogar futebol.",
            "Question": "Who loves to play football?",
            "Answers": ["My Cousin"],
            "Options": ["My Cousin", "My Brother", "My Father", "My Uncle"],
            "Translation": "My cousin loves to play football."
        },
        {
            "Content": "Minha tia é uma artista talentosa.",
            "Question": "Who is 'tante'?",
            "Answers": ["My Aunt"],
            "Options": ["My Aunt", "My Mother", "My Sister", "My Grandmother"],
            "Translation": "My aunt is a talented artist."
        },
        {
            "Content": "Meu avô é o mais velho da família.",
            "Question": "Who is the oldest in the family?",
            "Answers": ["My Grandfather"],
            "Options": ["My Grandfather", "My Father", "My Uncle", "My Cousin"],
            "Translation": "My grandfather is the oldest in the family."
        }
    ];
    
    lesson24Json = [
        {
            "Content": "Eu adoro tocar violão.",
            "Question": "What do I love to do?",
            "Answers": ["Play the guitar"],
            "Options": ["Play the guitar", "Paint", "Cook", "Read books"],
            "Translation": "I love to play the guitar."
        },
        {
            "Content": "Ela gosta de fazer trilhas na montanha.",
            "Question": "What does she like to do in the mountains?",
            "Answers": ["Hike"],
            "Options": ["Hike", "Ski", "Swim", "Picnic"],
            "Translation": "She likes to hike in the mountains."
        },
        {
            "Content": "Meu irmão coleciona selos raros.",
            "Question": "What does my brother collect?",
            "Answers": ["Rare stamps"],
            "Options": ["Rare stamps", "Coins", "Action figures", "Books"],
            "Translation": "My brother collects rare stamps."
        },
        {
            "Content": "Nós gostamos de assistir filmes no fim de semana.",
            "Question": "What do we like to do on weekends?",
            "Answers": ["Watch movies"],
            "Options": ["Watch movies", "Play sports", "Go shopping", "Read newspapers"],
            "Translation": "We like to watch movies on weekends."
        },
        {
            "Content": "Ele é apaixonado por fotografia.",
            "Question": "What is he passionate about?",
            "Answers": ["Photography"],
            "Options": ["Photography", "Cooking", "Gardening", "Playing chess"],
            "Translation": "He is passionate about photography."
        },
        {
            "Content": "Ela adora dança contemporânea.",
            "Question": "What does she adore?",
            "Answers": ["Contemporary dance"],
            "Options": ["Contemporary dance", "Classical music", "Rock climbing", "Reading novels"],
            "Translation": "She adores contemporary dance."
        },
        {
            "Content": "Eles gostam de andar de bicicleta no parque.",
            "Question": "What do they like to do in the park?",
            "Answers": ["Ride bicycles"],
            "Options": ["Ride bicycles", "Play soccer", "Picnic", "Paint"],
            "Translation": "They like to ride bicycles in the park."
        }
    ];
    
    lesson25Json = [
        {
            "Content": "Está fazendo sol hoje.",
            "Question": "What is the weather like today?",
            "Answers": ["It's sunny"],
            "Options": ["It's sunny", "It's rainy", "It's snowy", "It's windy"],
            "Translation": "It's sunny today."
        },
        {
            "Content": "O tempo está muito frio no inverno.",
            "Question": "What is the weather like in winter?",
            "Answers": ["It's very cold"],
            "Options": ["It's very cold", "It's hot", "It's mild", "It's rainy"],
            "Translation": "The weather is very cold in winter."
        },
        {
            "Content": "Tem nuvens no céu.",
            "Question": "What is in the sky?",
            "Answers": ["Clouds"],
            "Options": ["Clouds", "Stars", "Sun", "Moon"],
            "Translation": "There are clouds in the sky."
        },
        {
            "Content": "O vento está soprando muito forte.",
            "Question": "What is happening with the wind?",
            "Answers": ["It's blowing very hard"],
            "Options": ["It's blowing very hard", "It's calm", "It's drizzling", "It's snowing"],
            "Translation": "The wind is blowing very hard."
        },
        {
            "Content": "Está nevando por toda parte.",
            "Question": "What is everywhere?",
            "Answers": ["Snow"],
            "Options": ["Snow", "Rain", "Sunshine", "Fog"],
            "Translation": "There is snow everywhere."
        },
        {
            "Content": "O sol está brilhando no céu azul.",
            "Question": "What is shining in the blue sky?",
            "Answers": ["The sun"],
            "Options": ["The sun", "The moon", "Stars", "Clouds"],
            "Translation": "The sun is shining in the blue sky."
        },
        {
            "Content": "O tempo está tempestuoso esta noite.",
            "Question": "What is the weather like this evening?",
            "Answers": ["It's stormy"],
            "Options": ["It's stormy", "It's clear", "It's foggy", "It's chilly"],
            "Translation": "The weather is stormy this evening."
        }
    ];
    
    lesson26Json = [
        {
            "Content": "São oito horas da manhã.",
            "Question": "What time is it in the morning?",
            "Answers": ["It's eight o'clock in the morning"],
            "Options": ["It's eight o'clock in the morning", "It's eight o'clock at night", "It's eight o'clock AM", "It's noon"],
            "Translation": "It's eight o'clock in the morning."
        },
        {
            "Content": "Ela deve chegar às quatorze horas e trinta minutos.",
            "Question": "What time does she need to arrive?",
            "Answers": ["She needs to arrive at two thirty PM", "She needs to arrive at two-thirty PM"],
            "Options": ["She needs to arrive at two thirty PM", "She needs to arrive at three thirty AM", "She needs to arrive at two thirty AM", "She needs to arrive at one thirty PM"],
            "Translation": "She needs to arrive at two thirty PM."
        },
        {
            "Content": "Temos um compromisso exatamente às cinco horas.",
            "Question": "When is our appointment?",
            "Answers": ["Our appointment is at exactly five o'clock"],
            "Options": ["Our appointment is at exactly five o'clock", "Our appointment is at six o'clock", "Our appointment is at five thirty", "Our appointment is at four o'clock"],
            "Translation": "Our appointment is at exactly five o'clock."
        },
        {
            "Content": "O filme começa às dezenove horas e quarenta e cinco minutos.",
            "Question": "When does the movie start?",
            "Answers": ["The movie starts at seven forty-five PM"],
            "Options": ["The movie starts at seven forty-five PM", "The movie starts at eight forty-five AM", "The movie starts at seven thirty PM", "The movie starts at six forty-five PM"],
            "Translation": "The movie starts at seven forty-five PM."
        },
        {
            "Content": "São meio-dia e meia.",
            "Question": "What time is it?",
            "Answers": ["It's noon and a half"],
            "Options": ["It's noon and a half", "It's midnight and a half", "It's one thirty AM", "It's three thirty PM"],
            "Translation": "It's noon and a half."
        },
        {
            "Content": "Eu me levanto às seis horas todos os dias.",
            "Question": "When do I wake up every day?",
            "Answers": ["I wake up at six o'clock every day"],
            "Options": ["I wake up at six o'clock every day", "I wake up at seven o'clock every day", "I wake up at eight o'clock every day", "I wake up at nine o'clock every day"],
            "Translation": "I wake up at six o'clock every day."
        },
        {
            "Content": "São onze horas menos quinze minutos da noite.",
            "Question": "What time is it in the evening?",
            "Answers": ["It's a quarter to eleven in the evening"],
            "Options": ["It's a quarter to eleven in the evening", "It's eleven o'clock in the morning", "It's half past ten at night", "It's noon"],
            "Translation": "It's a quarter to eleven in the evening."
        }
    ];

    lesson27Json = [
        {
            "Content": "Eu lavo as mãos.",
            "Question": "What am I doing?",
            "Answers": ["I am washing my hands"],
            "Options": ["I am washing my hands", "I am cooking dinner", "I am reading a book", "I am driving a car"],
            "Translation": "I am washing my hands."
        },
        {
            "Content": "Ela escova os cabelos todas as manhãs.",
            "Question": "What does she do every morning?",
            "Answers": ["She brushes her hair"],
            "Options": ["She brushes her hair", "She brushes her teeth", "She takes a shower", "She eats breakfast"],
            "Translation": "She brushes her hair every morning."
        },
        {
            "Content": "Eles acordam cedo nos fins de semana.",
            "Question": "When do they wake up on weekends?",
            "Answers": ["They wake up early on weekends"],
            "Options": ["They wake up early on weekends", "They wake up late on weekends", "They go to bed early on weekends", "They sleep all day on weekends"],
            "Translation": "They wake up early on weekends."
        },
        {
            "Content": "Nós nos vestimos rapidamente.",
            "Question": "How do we get dressed?",
            "Answers": ["We dress quickly"],
            "Options": ["We dress quickly", "We dress slowly", "We dress formally", "We dress up for a party"],
            "Translation": "We dress quickly."
        },
        {
            "Content": "Você se maquia para a noite.",
            "Question": "Why are you applying makeup?",
            "Answers": ["You are applying makeup for the evening"],
            "Options": ["You are applying makeup for the evening", "You are applying makeup for work", "You are applying makeup for a photo shoot", "You are applying makeup for a vacation"],
            "Translation": "You are applying makeup for the evening."
        },
        {
            "Content": "Ele se barbeia todos os dias.",
            "Question": "How often does he shave?",
            "Answers": ["He shaves every day"],
            "Options": ["He shaves every day", "He shaves once a week", "He shaves in the evening", "He shaves in the morning"],
            "Translation": "He shaves every day."
        },
        {
            "Content": "Elas se preparam para a festa esta noite.",
            "Question": "What are they doing for the party tonight?",
            "Answers": ["They are getting ready"],
            "Options": ["They are getting ready", "They are cleaning the house", "They are cooking dinner", "They are watching a movie"],
            "Translation": "They are getting ready for the party tonight."
        }
    ];
    
    lesson28Json = [
        {
            "Content": "Você escova os dentes após cada refeição?",
            "Question": "Translate into English.",
            "Answers": ["Do you brush your teeth after every meal?"],
            "Options": [
                "Do you brush your teeth after every meal?",
                "Are you going to the park?",
                "Do you eat breakfast every morning?",
                "Are you reading a book?"
            ],
            "Translation": "Do you brush your teeth after every meal?"
        },
        {
            "Content": "Ela lava as mãos antes de comer?",
            "Question": "Translate into English.",
            "Answers": ["Does she wash her hands before eating?"],
            "Options": [
                "Does she wash her hands before eating?",
                "Is she going to the store?",
                "Does she like pizza?",
                "Is she watching TV?"
            ],
            "Translation": "Does she wash her hands before eating?"
        },
        {
            "Content": "Eles acordam cedo de manhã?",
            "Question": "Translate into English.",
            "Answers": ["Do they wake up early in the morning?"],
            "Options": [
                "Do they wake up early in the morning?",
                "Are they playing soccer?",
                "Do they like ice cream?",
                "Are they going to the movies?"
            ],
            "Translation": "Do they wake up early in the morning?"
        },
        {
            "Content": "Você se veste formalmente no trabalho?",
            "Question": "Translate into English.",
            "Answers": ["Do you dress formally at work?"],
            "Options": [
                "Do you dress formally at work?",
                "Are you going to the gym?",
                "Do you speak French?",
                "Is it raining outside?"
            ],
            "Translation": "Do you dress formally at work?"
        },
        {
            "Content": "Estou me maquiando para a festa hoje à noite?",
            "Question": "Translate into English.",
            "Answers": ["Am I applying makeup for the party tonight?"],
            "Options": [
                "Am I applying makeup for the party tonight?",
                "Am I going to the beach?",
                "Am I hungry?",
                "Am I watching a movie?"
            ],
            "Translation": "Am I applying makeup for the party tonight?"
        },
        {
            "Content": "Eles estão se preparando para a viagem amanhã?",
            "Question": "Translate into English.",
            "Answers": ["Are they getting ready for the trip tomorrow?"],
            "Options": [
                "Are they getting ready for the trip tomorrow?",
                "Are they going shopping?",
                "Do they like pizza?",
                "Are they reading a book?"
            ],
            "Translation": "Are they getting ready for the trip tomorrow?"
        },
        {
            "Content": "Nós levantamos cedo nos dias de semana?",
            "Question": "Translate into English.",
            "Answers": ["Do we get up early on weekdays?"],
            "Options": [
                "Do we get up early on weekdays?",
                "Do we have a dog?",
                "Do we like chocolate?",
                "Do we watch TV?"
            ],
            "Translation": "Do we get up early on weekdays?"
        }
    ];
    
    lesson29Json = [
        {
            "Content": "Ele come pizza no jantar",
            "Question": "Translate into English.",
            "Answers": ["He eats pizza for dinner"],
            "Options": [
                "He eats pizza for dinner",
                "She cooks breakfast in the morning",
                "They drink tea in the evening",
                "I have a sandwich for lunch"
            ],
            "Translation": "He eats pizza for dinner."
        },
        {
            "Content": "Ela prepara uma salada para o almoço",
            "Question": "Translate into English.",
            "Answers": ["She prepares a salad for lunch"],
            "Options": [
                "She prepares a salad for lunch",
                "He orders a burger for breakfast",
                "They make pasta for dinner",
                "I drink coffee for lunch"
            ],
            "Translation": "She prepares a salad for lunch."
        },
        {
            "Content": "Eles bebem suco de laranja no café da manhã",
            "Question": "Translate into English.",
            "Answers": ["They drink orange juice for breakfast"],
            "Options": [
                "They drink orange juice for breakfast",
                "She eats cereal for dinner",
                "We cook spaghetti for lunch",
                "He has a sandwich for breakfast"
            ],
            "Translation": "They drink orange juice for breakfast."
        },
        {
            "Content": "Você gosta de comer frutas?",
            "Question": "Translate into English.",
            "Answers": ["Do you like to eat fruits?"],
            "Options": [
                "Do you like to eat fruits?",
                "Are you going to the bakery?",
                "Is he eating dinner?",
                "Am I drinking milk?"
            ],
            "Translation": "Do you like to eat fruits?"
        },
        {
            "Content": "Estamos pedindo sushi para o jantar hoje à noite",
            "Question": "Translate into English.",
            "Answers": ["We are ordering sushi for dinner tonight"],
            "Options": [
                "We are ordering sushi for dinner tonight",
                "She makes pancakes for breakfast every morning",
                "I drink tea in the afternoon",
                "They have pizza for lunch"
            ],
            "Translation": "We are ordering sushi for dinner tonight."
        },
        {
            "Content": "Ela cozinha frango assado para o almoço",
            "Question": "Translate into English.",
            "Answers": ["She cooks roasted chicken for lunch"],
            "Options": [
                "She cooks roasted chicken for lunch",
                "He eats ice cream for dinner",
                "They drink water for breakfast",
                "I have coffee for lunch"
            ],
            "Translation": "She cooks roasted chicken for lunch."
        },
        {
            "Content": "Eles comem vegetais no jantar",
            "Question": "Translate into English.",
            "Answers": ["They eat vegetables with their dinner"],
            "Options": [
                "They eat vegetables with their dinner",
                "She has a sandwich for breakfast",
                "We make pasta for lunch",
                "He drinks juice in the morning"
            ],
            "Translation": "They eat vegetables with their dinner."
        }
    ];
    
    lesson30Json = [
        {
            "Content": "Quando você se levanta de manhã?",
            "Question": "Translate into English.",
            "Answers": ["When do you get up in the morning?"],
            "Options": [
                "When do you get up in the morning?",
                "Are you going to the park?",
                "Do you like to read books?",
                "Is she watching TV?"
            ],
            "Translation": "When do you get up in the morning?"
        },
        {
            "Content": "Com quem você se encontra na biblioteca?",
            "Question": "Translate into English.",
            "Answers": ["Whom do you meet at the library?"],
            "Options": [
                "Whom do you meet at the library?",
                "Are you going to the store?",
                "Do you like to swim?",
                "Is he coming to the party?"
            ],
            "Translation": "Whom do you meet at the library?"
        },
        {
            "Content": "Como ela se prepara para o casamento?",
            "Question": "Translate into English.",
            "Answers": ["How does she prepare for the wedding?"],
            "Options": [
                "How does she prepare for the wedding?",
                "Is she going to school?",
                "Does she play soccer?",
                "Are you reading a book?"
            ],
            "Translation": "How does she prepare for the wedding?"
        },
        {
            "Content": "Quanto tempo eles descansam à tarde?",
            "Question": "Translate into English.",
            "Answers": ["How long do they rest in the afternoon?"],
            "Options": [
                "How long do they rest in the afternoon?",
                "Are they going to the movies?",
                "Do they like pizza?",
                "Is she going to the beach?"
            ],
            "Translation": "How long do they rest in the afternoon?"
        },
        {
            "Content": "Para o que estou me preparando para o jantar?",
            "Question": "Translate into English.",
            "Answers": ["What am I getting ready for dinner?"],
            "Options": [
                "What am I getting ready for dinner?",
                "Am I going to the gym?",
                "Do I speak French?",
                "Is it raining outside?"
            ],
            "Translation": "What am I getting ready for dinner?"
        },
        {
            "Content": "Onde você se diverte no sábado à noite?",
            "Question": "Translate into English.",
            "Answers": ["Where do you have fun on Saturday night?"],
            "Options": [
                "Where do you have fun on Saturday night?",
                "Are you going shopping?",
                "Do you like to dance?",
                "Is she playing guitar?"
            ],
            "Translation": "Where do you have fun on Saturday night?"
        },
        {
            "Content": "Por que nos vestimos formalmente?",
            "Question": "Translate into English.",
            "Answers": ["Why do we dress formally?"],
            "Options": [
                "Why do we dress formally?",
                "Are we going to the park?",
                "Do we like to travel?",
                "Is she reading a book?"
            ],
            "Translation": "Why do we dress formally?"
        }
    ];
    
    lessonJSONData = [lesson1Json, lesson2Json, lesson3Json, lesson4Json, lesson5Json, lesson6Json, lesson7Json, lesson8Json, lesson9Json, lesson10Json, lesson11Json, lesson12Json, lesson13Json, lesson14Json, lesson15Json, lesson16Json, lesson17Json, lesson18Json, lesson19Json, lesson20Json, lesson21Json, lesson22Json, lesson23Json, lesson24Json, lesson25Json, lesson26Json, lesson27Json, lesson28Json, lesson29Json, lesson30Json];
}