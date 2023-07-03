/*
    {
        "Content": "",
        "Question": "",
        "Answers": [""],
        "Options": ["",
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
const lessonNameData = ["Welcome to the Course!", "Greetings 1", "People 1", "People 2"];

const lesson1Json = [
    {
        "Content": "Bonjour! Je m'appelle Pierre.",
        "Question": "Who is speaking?",
        "Answers": ["pierre"],
        "Options": ["Pierre",
            "Charles",
            "Fleur",
            "Camille"],
        "Translation": "Hello! I am called Pierre."
    },
    {
        "Content": "le garçon",
        "Question": "Translate into English.",
        "Answers": ["the boy"],
        "Options": ["the boy",
            "the woman",
            "the girl",
            "the man"],
        "Translation": "the boy"
    },
    {
        "Content": "Bonjour. Comment tu t'appelle?",
        "Question": "Select your reply.",
        "Answers": ["je m'appelle fleur."],
        "Options": ["Je m'appelle Fleur.",
            "Je ne parle pas français.",
            "J'aime les escargots.",
            "Je suis une baguette."],
        "Translation": "Hello. What are you called? I am called Fleur."
    },
    {
        "Content": "Bonne journée.",
        "Question": "Translate into English.",
        "Answers": "have a nice day.",
        "Options": ["Have a nice day.",
            "Have a yummy sweet.",
            "Have a good journey.",
            "Read a nice newspaper.",],
        "Translation": "Have a nice day."
    },
    {
        "Content": "Ça va?",
        "Question": "Select your reply.",
        "Answers": "oui, ça va.",
        "Options": ["Oui, ça va.",
            "Je suis une tomate.",
            "Je veux un verre de vin.",
            "J'ai un chien. Il s'appelle Marc."],
        "Translation": "Is everything alright? Yes, I'm fine."
    },
    {
        "Content": "Parlez-vous anglais?",
        "Question": "Select your reply.",
        "Answers": ["non, je ne parle pas anglais."],
        "Options": ["Non, je ne parle pas anglais.",
            "Salut! Comment ça va?",
            "Je t'aime.",
            "Tu es moche."],
        "Translation": "Do you speak English?"
    },
    {
        "Content": "Bienvenue au cours!",
        "Question": "Translate into English.",
        "Answers": ["welcome to the course!"],
        "Options": ["Welcome to the course!",
            "Run away whilst you still can!",
            "I like onions!",
            "I am ready!"],
        "Translation": "Welcome to the course!"
    },
]

const lesson2Json = [
    {
        "Content": "Bonjour. Ça va?",
        "Question": "Translate into English.",
        "Answers": ["hello. how is it going?"],
        "Options": ["Hello. How is it going?",
            "Hello. Have a nice day.",
            "Goodbye. I like you.",
            "Goodbye. I don't want to see you."],
        "Translation": "Hello. How is it going?"
    },
    {
        "Content": "Salut. À bientôt.",
        "Question": "What is happening?",
        "Answers": ["the person you are talking to is leaving."],
        "Options": ["The person you are talking to is leaving.",
            "You are meeting up with someone.",
            "You are confessing your love to a friend.",
            "You are talking to someone in the army."],
        "Translation": "Bye. See you soon."
    },
    {
        "Content": "Ça va bien, merci. Et toi?",
        "Question": "Select your reply.",
        "Answers": ["ça va mal."],
        "Options": ["Ça va mal.",
            "Il est fromage.",
            "Je regarde un film.",
            "Ils ont des stylos."],
        "Translation": "It is going well, thanks. And you? I am not doing well."
    },
    {
        "Content": "Comment allez-vous?",
        "Question": "Translate into English.",
        "Answers": ["how are you?"],
        "Options": ["How are you?",
            "Where are you going?",
            "Why do you exist?",
            "How am I sad?"],
        "Translation": "How are you?"
    },
    {
        "Content": "Bonne nuit.",
        "Question": "Translate into English.",
        "Answers": ["good night."],
        "Options": ["Good night.",
            "Good evening.",
            "Good day.",
            "Goodbye."],
        "Translation": "Good night."
    },
    {
        "Content": "Au revwar. À bientôt.",
        "Question": "What is the error in this sentence?",
        "Answers": ["the spelling is wrong."],
        "Options": ["The gender is wrong.",
            "The spelling is wrong.",
            "It is conjugated incorrectly.",
            "There is no mistake."],
        "Translation": "Au revwar > Au revoir (goodbye)"
    },
    {
        "Content": "Coucou! Je vais comme ci, comme ça.",
        "Question": "In which situation would you say this?",
        "Answers": ["you are speaking to a close friend."],
        "Options": ["You are speaking to a close friend.",
            "You are talking to a teacher.",
            "You are talking to an older person.",
            "You are talking to Napoleon."],
        "Translation": "Hi! I am doing so-so."
    },
]

const lesson3Json = [
    {
        "Content": "le garçon",
        "Question": "Translate into English.",
        "Answers": ["the boy"],
        "Options": ["the boy",
            "the woman",
            "the girl",
            "the man"],
        "Translation": "the boy"
    },
    {
        "Content": "l'homme",
        "Question": "Translate into English.",
        "Answers": ["the man"],
        "Options": ["the man",
            "the woman",
            "the girl",
            "the boy"],
        "Translation": "the man"
    },
    {
        "Content": "la fille",
        "Question": "Translate into English.",
        "Answers": ["the girl"],
        "Options": ["the girl",
            "the woman",
            "the boy",
            "the man"],
        "Translation": "the girl"
    },
    {
        "Content": "la femme",
        "Question": "Translate into English.",
        "Answers": ["the woman"],
        "Options": ["the woman",
            "the girl",
            "the boy",
            "the man"],
        "Translation": "the woman"
    },
    {
        "Content": "Je suis un garçon.",
        "Question": "Translate into English.",
        "Answers": ["i am a boy."],
        "Options": ["I am a boy.",
            "I am a woman.",
            "I am a girl.",
            "I am a man."],
        "Translation": "I am a boy."
    },
    {
        "Content": "Je suis un homme.",
        "Question": "Translate into English.",
        "Answers": ["i am a man."],
        "Options": ["I am a man.",
            "I am a woman.",
            "I am a girl.",
            "I am a boy."],
        "Translation": "I am a man."
    },
    {
        "Content": "Je suis une fille.",
        "Question": "Translate into English.",
        "Answers": ["i am a girl."],
        "Options": ["I am a girl.",
            "I am a woman.",
            "I am a man.",
            "I am a boy."],
        "Translation": "I am a girl."
    },
    {
        "Content": "Je suis une femme.",
        "Question": "Translate into English.",
        "Answers": ["i am a woman."],
        "Options": ["I am a woman.",
            "I am a man.",
            "I am a girl.",
            "I am a boy."],
        "Translation": "I am a woman."
    },

]

const lesson4Json = [

    {
        "Content": "Tu es un garçon?",
        "Question": "Translate into English.",
        "Answers": ["are you a boy?"],
        "Options": ["Are you a boy?",
            "Are you a woman?",
            "Are you a girl?",
            "Are you a man?"],
        "Translation": "Are you a boy?"
    },
    {
        "Content": "Tu es un homme?",
        "Question": "Translate into English.",
        "Answers": ["are you a man?"],
        "Options": ["Are you a man?",
            "Are you a woman?",
            "Are you a girl?",
            "Are you a boy?"],
        "Translation": "Are you a man?"
    },
    {
        "Content": "Tu es une fille?",
        "Question": "Translate into English.",
        "Answers": ["are you a girl?"],
        "Options": ["Are you a girl?",
            "Are you a woman?",
            "Are you a man?",
            "Are you a boy?"],
        "Translation": "Are you a girl?"
    },
    {
        "Content": "Tu es une femme?",
        "Question": "Translate into English.",
        "Answers": ["are you a woman?"],
        "Options": ["Are you a woman?",
            "Are you a girl?",
            "Are you a man?",
            "Are you a boy?"],
        "Translation": "Are you a woman?"
    },
    {
        "Content": "Tu es un garçon?",
        "Question": "Select your reply.",
        "Answers": ["oui, je suis un garçon."],
        "Options": ["Oui, je suis un garçon.",
            "Oui, je es un garçon.",
            "Oui, je est un garçon.",
            "Oui, je sommes un garçon.",],
        "Translation": "Are you a boy? Yes, I am a boy."
    },
    {
        "Content": "Tu es un homme?",
        "Question": "Select your reply.",
        "Answers": ["oui, je suis un homme."],
        "Options": ["Oui, je suis un homme.",
            "Oui, j'es un homme.",
            "Oui, j'est un homme.",
            "Oui, je est un homme.",],
        "Translation": "Are you a man? Yes, I am a man."
    },
    {
        "Content": "Tu es une fille?",
        "Question": "Select your reply.",
        "Answers": ["oui, je suis une fille."],
        "Options": ["Oui, je suis une fille.",
            "Oui, je êtes une fille.",
            "Oui, je es une fille.",
            "Oui, je sont une fille.",],
        "Translation": "Are you a girl? Yes, I am a girl."
    },
    {
        "Content": "Tu es une femme?",
        "Question": "Select your reply.",
        "Answers": ["oui, je suis une femme."],
        "Options": ["Oui, je suis une femme.",
            "Oui, je sommes une femme.",
            "Oui, j'es une femme.",
            "Oui, je sont une femme.",],
        "Translation": "Are you a woman? Yes, I am a woman."
    },
]

const lessonJSONData = [lesson1Json, lesson2Json, lesson3Json, lesson4Json]; 