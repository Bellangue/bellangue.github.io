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
    lessonNameData = ["Welcome to the Course!", "Greetings 1", "People 1", "People 2", "Time 1", "Introductions 1", "People 3"];

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

    lessonJSONData = [lesson1Json, lesson2Json, lesson3Json, lesson4Json, lesson5Json, lesson6Json, lesson7Json, lesson8Json, lesson9Json, lesson10Json, lesson11Json, lesson12Json];
}