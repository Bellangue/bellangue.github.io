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
const lessonNameData = ["Welcome to the Course!", "Greetings 1", "People 1", "People 2", "Time 1", "Introductions 1", "People 3"];

const lesson1Json = [
    {
        "Content": "Bonjour! Je m'appelle Pierre.",
        "Question": "Who is speaking?",
        "Answers": ["Pierre"],
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
        "Answers": ["Je m'appelle Fleur."],
        "Options": ["Je m'appelle Fleur.",
            "Je ne parle pas français.",
            "J'aime les escargots.",
            "Je suis une baguette."],
        "Translation": "Hello. What are you called? I am called Fleur."
    },
    {
        "Content": "Bonne journée.",
        "Question": "Translate into English.",
        "Answers": "Have a nice day.",
        "Options": ["Have a nice day.",
            "Have a yummy sweet.",
            "Have a good journey.",
            "Read a nice newspaper.",],
        "Translation": "Have a nice day."
    },
    {
        "Content": "Ça va?",
        "Question": "Select your reply.",
        "Answers": "Oui, ça va.",
        "Options": ["Oui, ça va.",
            "Je suis une tomate.",
            "Je veux un verre de vin.",
            "J'ai un chien. Il s'appelle Marc."],
        "Translation": "Is everything alright? Yes, I'm fine."
    },
    {
        "Content": "Parlez-vous anglais?",
        "Question": "Select your reply.",
        "Answers": ["Non, je ne parle pas anglais."],
        "Options": ["Non, je ne parle pas anglais.",
            "Salut! Comment ça va?",
            "Je t'aime.",
            "Tu es moche."],
        "Translation": "Do you speak English?"
    },
    {
        "Content": "Bienvenue au cours!",
        "Question": "Translate into English.",
        "Answers": ["Welcome to the course!"],
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
        "Answers": ["Hello. How is it going?"],
        "Options": ["Hello. How is it going?",
            "Hello. Have a nice day.",
            "Goodbye. I like you.",
            "Goodbye. I don't want to see you."],
        "Translation": "Hello. How is it going?"
    },
    {
        "Content": "Salut. À bientôt.",
        "Question": "What is happening?",
        "Answers": ["The person you are talking to is leaving."],
        "Options": ["The person you are talking to is leaving.",
            "You are meeting up with someone.",
            "You are confessing your love to a friend.",
            "You are talking to someone in the army."],
        "Translation": "Bye. See you soon."
    },
    {
        "Content": "Ça va bien, merci. Et toi?",
        "Question": "Select your reply.",
        "Answers": ["Ça va mal."],
        "Options": ["Ça va mal.",
            "Il est fromage.",
            "Je regarde un film.",
            "Ils ont des stylos."],
        "Translation": "It is going well, thanks. And you? I am not doing well."
    },
    {
        "Content": "Comment allez-vous?",
        "Question": "Translate into English.",
        "Answers": ["How are you?"],
        "Options": ["How are you?",
            "Where are you going?",
            "Why do you exist?",
            "How am I sad?"],
        "Translation": "How are you?"
    },
    {
        "Content": "Bonne nuit.",
        "Question": "Translate into English.",
        "Answers": ["Hood night."],
        "Options": ["Good night.",
            "Good evening.",
            "Good day.",
            "Goodbye."],
        "Translation": "Good night."
    },
    {
        "Content": "Au revwar. À bientôt.",
        "Question": "What is the error in this sentence?",
        "Answers": ["The spelling is wrong."],
        "Options": ["The gender is wrong.",
            "The spelling is wrong.",
            "It is conjugated incorrectly.",
            "There is no mistake."],
        "Translation": "Au revwar > Au revoir (goodbye)"
    },
    {
        "Content": "Coucou! Je vais comme ci, comme ça.",
        "Question": "In which situation would you say this?",
        "Answers": ["You are speaking to a close friend."],
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
        "Answers": ["I am a boy."],
        "Options": ["I am a boy.",
            "I am a woman.",
            "I am a girl.",
            "I am a man."],
        "Translation": "I am a boy."
    },
    {
        "Content": "Je suis un homme.",
        "Question": "Translate into English.",
        "Answers": ["I am a man."],
        "Options": ["I am a man.",
            "I am a woman.",
            "I am a girl.",
            "I am a boy."],
        "Translation": "I am a man."
    },
    {
        "Content": "Je suis une fille.",
        "Question": "Translate into English.",
        "Answers": ["I am a girl."],
        "Options": ["I am a girl.",
            "I am a woman.",
            "I am a man.",
            "I am a boy."],
        "Translation": "I am a girl."
    },
    {
        "Content": "Je suis une femme.",
        "Question": "Translate into English.",
        "Answers": ["I am a woman."],
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
        "Answers": ["Are you a boy?"],
        "Options": ["Are you a boy?",
            "Are you a woman?",
            "Are you a girl?",
            "Are you a man?"],
        "Translation": "Are you a boy?"
    },
    {
        "Content": "Tu es un homme?",
        "Question": "Translate into English.",
        "Answers": ["Are you a man?"],
        "Options": ["Are you a man?",
            "Are you a woman?",
            "Are you a girl?",
            "Are you a boy?"],
        "Translation": "Are you a man?"
    },
    {
        "Content": "Tu es une fille?",
        "Question": "Translate into English.",
        "Answers": ["Are you a girl?"],
        "Options": ["Are you a girl?",
            "Are you a woman?",
            "Are you a man?",
            "Are you a boy?"],
        "Translation": "Are you a girl?"
    },
    {
        "Content": "Tu es une femme?",
        "Question": "Translate into English.",
        "Answers": ["Are you a woman?"],
        "Options": ["Are you a woman?",
            "Are you a girl?",
            "Are you a man?",
            "Are you a boy?"],
        "Translation": "Are you a woman?"
    },
    {
        "Content": "Tu es un garçon?",
        "Question": "Select your reply.",
        "Answers": ["Oui, je suis un garçon."],
        "Options": ["Oui, je suis un garçon.",
            "Oui, je es un garçon.",
            "Oui, je est un garçon.",
            "Oui, je sommes un garçon.",],
        "Translation": "Are you a boy? Yes, I am a boy."
    },
    {
        "Content": "Tu es un homme?",
        "Question": "Select your reply.",
        "Answers": ["Oui, je suis un homme."],
        "Options": ["Oui, je suis un homme.",
            "Oui, j'es un homme.",
            "Oui, j'est un homme.",
            "Oui, je est un homme.",],
        "Translation": "Are you a man? Yes, I am a man."
    },
    {
        "Content": "Tu es une fille?",
        "Question": "Select your reply.",
        "Answers": ["Oui, je suis une fille."],
        "Options": ["Oui, je suis une fille.",
            "Oui, je êtes une fille.",
            "Oui, je es une fille.",
            "Oui, je sont une fille.",],
        "Translation": "Are you a girl? Yes, I am a girl."
    },
    {
        "Content": "Tu es une femme?",
        "Question": "Select your reply.",
        "Answers": ["Oui, je suis une femme."],
        "Options": ["Oui, je suis une femme.",
            "Oui, je sommes une femme.",
            "Oui, j'es une femme.",
            "Oui, je sont une femme.",],
        "Translation": "Are you a woman? Yes, I am a woman."
    },
]

const lesson5Json = [
    {
        "Content": "Bon journée.",
        "Question": "What is the error in this sentence?",
        "Answers": ["The gender is wrong."],
        "Options": ["The gender is wrong.",
            "The spelling is wrong.",
            "It is conjugated incorrectly.",
            "There is no mistake."],
        "Translation": "Bon journée. > Bonne journée."
    },
    {
        "Content": "Aujourd'hui, je travaille.",
        "Question": "When do I work?",
        "Answers": ["Today"],
        "Options": ["Today",
            "Tomorrow",
            "Yesterday",
            "Never"],
        "Translation": "Today, I work."
    },
    {
        "Content": "Tu lis tous les jours.",
        "Question": "Translate into English.",
        "Answers": ["You read everyday."],
        "Options": ["You read everyday.",
            "You lie often.",
            "You and me",
            "You are always lying down."],
        "Translation": "You read everyday."
    },
    {
        "Content": "hier",
        "Question": "Translate into English.",
        "Answers": ["yesterday"],
        "Options": ["yesterday",
            "here",
            "tomorrow",
            "her"],
        "Translation": "yesterday"
    },
    {
        "Content": "Demain et hier",
        "Question": "Translate into English.",
        "Answers": ["Tomorrow and yesterday"],
        "Options": ["Tomorrow and yesterday",
            "Today and tomorrow",
            "Today and yesterday",
            "It will never happen."],
        "Translation": "Tomorrow and yesterday"
    },
    {
        "Content": "Il ne mange pas.",
        "Question": "What is he doing?",
        "Answers": ["He is not eating."],
        "Options": ["He is not eating.",
            "He is eating.",
            "He is not drinking.",
            "He is drinking."],
        "Translation": ""
    },
    {
        "Content": "Il ne mange pas.",
        "Question": "What is he doing?",
        "Answers": ["He is not eating."],
        "Options": ["He is not eating.",
            "He is eating.",
            "He is not drinking.",
            "He is drinking."],
        "Translation": "He is not eating."
    },
    {
        "Content": "ne pas",
        "Question": "Translate into English.",
        "Answers": ["do not"],
        "Options": ["do not",
            "Christmas",
            "nuts, peas",
            "Neat! You pass!"],
        "Translation": "do not ..."
    },
]

const lesson6Json = [
    {
        "Content": "Bonjour! Je m'appelle Pierre.",
        "Question": "Who is speaking?",
        "Answers": ["Pierre"],
        "Options": ["Pierre",
            "Charles",
            "Fleur",
            "Camille"],
        "Translation": "Hello! I am called Pierre."
    },
    {
        "Content": "Je m'appelle Jacques.",
        "Question": "Translate into English",
        "Answers": ["I am called Jacques."],
        "Options": ["I am called Jacques.",
            "My friend is called Jacques.",
            "I hate people called Jacques.",
            "Jacques is a bad name."],
        "Translation": "I am called Jacques."
    },
    {
        "Content": "Tu appelles Louis.",
        "Question": "What is the error in this sentence?",
        "Answers": ["It is conjugated incorrectly."],
        "Options": ["The gender is wrong.",
            "The spelling is wrong.",
            "It is conjugated incorrectly.",
            "There is no mistake."],
        "Translation": "appelles > t'appelles"
    },
    {
        "Content": "Il m'appelle Charles.",
        "Question": "What is the error in this sentence?",
        "Answers": ["It is conjugated incorrectly."],
        "Options": ["The gender is wrong.",
            "The spelling is wrong.",
            "It is conjugated incorrectly.",
            "There is no mistake."],
        "Translation": "m'appelle > s'appelle"
    },
    {
        "Content": "Comment tu t'appelles?",
        "Question": "Select your reply.",
        "Answers": ["Je m'appelle Charlotte. Et toi?"],
        "Options": ["Je m'appelle Charlotte. Et toi?",
            "Tu t'appelles Chloé.",
            "Il s'appelle Josephine.",
            "Nous nous appelons Gabriel."],
        "Translation": "What are you called? I am called Charlotte. And you?"
    },
    {
        "Content": "Elle s'appelle Fleur et il s'appelle George.",
        "Question": "Translate into English",
        "Answers": ["She is called Fleur and he is called George."],
        "Options": ["She is called Fleur and he is called George.",
            "He is called Fleur and she is called George.",
            "Fleur and George are apples.",
            "Fleur and George are not apples."],
        "Translation": "She is called Fleur and he is called George."
    },
    {
        "Content": "Tu t'appelle Nathaniel.",
        "Question": "What is the error in this sentence?",
        "Answers": ["It is conjugated incorrectly."],
        "Options": ["The gender is wrong.",
            "The spelling is wrong.",
            "It is conjugated incorrectly.",
            "There is no mistake."],
        "Translation": "appelle > appelles"
    },
]

const lesson7Json = [
    {
        "Content": "Elle étudie l'histoire. _____ aime lire.",
        "Question": "Choose the correct pronoun:",
        "Answers": ["Elle"],
        "Options": ["Elle", "Il", "Ils", "Elles"],
        "Translation": "She studies history. She likes to read."
    },
    {
        "Content": "Nous allons au cinéma. _____ allons regarder un film.",
        "Question": "Choose the correct pronoun:",
        "Answers": ["Nous"],
        "Options": ["Nous", "Tu", "Vous", "Ils"],
        "Translation": "We are going to the cinema. We are going to watch a film."
    },
    {
        "Content": "Marc est mon ami. _____ est très sympa.",
        "Question": "Choose the correct pronoun:",
        "Answers": ["Il"],
        "Options": ["Elle", "Il", "Ils", "Elles"],
        "Translation": "Marc is my friend. He is very nice."
    },
    {
        "Content": "Paul parle au téléphone. _____ parle avec sa mère.",
        "Question": "Choose the correct pronoun:",
        "Answers": ["Il"],
        "Options": ["Il", "Elle", "Ils", "Elles"],
        "Translation": "Paul is talking on the phone. He is talking with his mother."
    },
    {
        "Content": "Cheryl et moi aimons lire. _____ aimons les romans.",
        "Question": "Choose the correct pronoun:",
        "Answers": ["Nous"],
        "Options": ["Nous", "Tu", "Vous", "Ils"],
        "Translation": "We love to read. We love novels."
    },
    {
        "Content": "Le chat dort. _____ dort paisiblement.",
        "Question": "Choose the correct pronoun:",
        "Answers": ["Il"],
        "Options": ["Il", "Elle", "Ils", "Elles"],
        "Translation": "The cat is sleeping. He is sleeping peacefully."
    },
    {
        "Content": "______ parle couramment le français.",
        "Question": "Choose the correct pronoun:",
        "Answers": ["Je"],
        "Options": ["Je", "Nous", "Vous", "Elles"],
        "Translation": "I speak French fluently."
    },
]

const lessonJSONData = [lesson1Json, lesson2Json, lesson3Json, lesson4Json, lesson5Json, lesson6Json, lesson7Json];
