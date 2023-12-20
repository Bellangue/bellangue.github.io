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
            "The pronunciation is wrong.",
            "It is conjugated incorrectly.",
            "There is no mistake."],
        "Translation": " > "
    },
*/

if (localStorage.getItem("currentLanguage") === "fr") {

    lessonNameData = ["Welcome to the Course!", "Greetings 1", "People 1", "People 2", "Time 1", "Introductions 1", "People 3", "Numbers 1", "Numbers 1", "Numbers 2", "Numbers 3", "Numbers 4", "Days of the Week 1", "Days of the Week 2", "Appearance 1", "Appearance 2", "Appearance 3", "Numbers 5", "Age 1", "Personality 1", "Countries 1", "Countries 2", "Family 1", "Hobbies 1", "Weather 1", "Time 1", "Daily Routine 1", "Questions 1", "Food 1", "Questions 2"];

    lesson1Json = [
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
            "Translation": "Do you speak English? No I don't speak English."
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

    lesson2Json = [
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
            "Answers": ["Good night."],
            "Options": ["Good night.",
                "Good evening.",
                "Good day.",
                "Goodbye."],
            "Translation": "Good night."
        },
        {
            "Content": "Au revwar. À bientôt.",
            "Question": "What is the error in this sentence?",
            "Answers": ["The pronunciation is wrong."],
            "Options": ["The gender is wrong.",
                "The pronunciation is wrong.",
                "It is conjugated incorrectly.",
                "There is no mistake."],
            "Translation": "Au revwar > Au revoir (Goodbye. See you soon.)"
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

    lesson3Json = [
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

    lesson4Json = [

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

    lesson5Json = [
        {
            "Content": "Bon journée.",
            "Question": "What is the error in this sentence?",
            "Answers": ["The gender is wrong."],
            "Options": ["The gender is wrong.",
                "The pronunciation is wrong.",
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
            "Translation": "He does not eat."
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

    lesson6Json = [
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
                "The pronunciation is wrong.",
                "It is conjugated incorrectly.",
                "There is no mistake."],
            "Translation": "appelles > t'appelles"
        },
        {
            "Content": "Il m'appelle Charles.",
            "Question": "What is the error in this sentence?",
            "Answers": ["It is conjugated incorrectly."],
            "Options": ["The gender is wrong.",
                "The pronunciation is wrong.",
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
            "Content": "Tu t'appelle Nathaniel?",
            "Question": "What is the error in this sentence?",
            "Answers": ["It is conjugated incorrectly."],
            "Options": ["The gender is wrong.",
                "The pronunciation is wrong.",
                "It is conjugated incorrectly.",
                "There is no mistake."],
            "Translation": "appelle > appelles"
        },
    ]

    lesson7Json = [
        {
            "Content": "Elle est étudiante. _____ aime l'école.",
            "Question": "Choose the correct pronoun:",
            "Answers": ["Elle"],
            "Options": ["Elle", "Il", "Ils", "Elles"],
            "Translation": "She is a student. She likes school."
        },
        {
            "Content": "Nous allons chez Pierre. _____ sommes amis.",
            "Question": "Choose the correct pronoun:",
            "Answers": ["Nous"],
            "Options": ["Nous", "Tu", "Vous", "Ils"],
            "Translation": "We are going to Pierre's place. We are friends."
        },
        {
            "Content": "Marc est mon ami. _____ est très sympa.",
            "Question": "Choose the correct pronoun:",
            "Answers": ["Il"],
            "Options": ["Elle", "Il", "Ils", "Elles"],
            "Translation": "Marc is my friend. He is very nice."
        },
        {
            "Content": "Paul parle anglais. _____ parle avec sa mère.",
            "Question": "Choose the correct pronoun:",
            "Answers": ["Il"],
            "Options": ["Il", "Elle", "Ils", "Elles"],
            "Translation": "Paul is talking English. He is talking with his mother."
        },
        {
            "Content": "Cheryl et moi sommes amies. _____ aimons jouer.",
            "Question": "Choose the correct pronoun:",
            "Answers": ["Nous"],
            "Options": ["Nous", "Tu", "Vous", "Ils"],
            "Translation": "Cheryl and I are friends. We love to play."
        },
        {
            "Content": "___ parlent.",
            "Question": "Choose the correct pronoun:",
            "Answers": ["Ils"],
            "Options": ["Ils", "Elle", "Je", "Nous"],
            "Translation": "They speak."
        },
        {
            "Content": "______ parle le français.",
            "Question": "Choose the correct pronoun:",
            "Answers": ["Je"],
            "Options": ["Je", "Nous", "Vous", "Elles"],
            "Translation": "I speak French."
        },
    ]

    lesson8Json = [
        {
            "Content": "un/une",
            "Question": "Translate into English",
            "Answers": ["one"],
            "Options": [
                "one",
                "two",
                "three",
                "four"],
            "Translation": "one"
        },
        {
            "Content": "deux",
            "Question": "Translate into English",
            "Answers": ["two"],
            "Options": [
                "two",
                "eight",
                "nine",
                "four"],
            "Translation": "two"
        },
        {
            "Content": "trois",
            "Question": "Translate into English",
            "Answers": ["three"],
            "Options": [
                "three",
                "seven",
                "one",
                "nine"],
            "Translation": "three"
        },
        {
            "Content": "quatre",
            "Question": "Translate into English",
            "Answers": ["four"],
            "Options": [
                "four",
                "one",
                "five",
                "two"],
            "Translation": "four"
        },
        {
            "Content": "cinq",
            "Question": "Translate into English",
            "Answers": ["five"],
            "Options": [
                "five",
                "six",
                "three",
                "eight"],
            "Translation": "five"
        },
        {
            "Content": "six",
            "Question": "Translate into English",
            "Answers": ["six"],
            "Options": [
                "six",
                "nine",
                "ten",
                "four"],
            "Translation": "six"
        },
        {
            "Content": "sept",
            "Question": "Translate into English",
            "Answers": ["seven"],
            "Options": [
                "seven",
                "three",
                "ten",
                "two"],
            "Translation": "seven"
        },
        {
            "Content": "huit",
            "Question": "Translate into English",
            "Answers": ["eight"],
            "Options": [
                "eight",
                "five",
                "one",
                "two"],
            "Translation": "eight"
        },
        {
            "Content": "neuf",
            "Question": "Translate into English",
            "Answers": ["nine"],
            "Options": [
                "nine",
                "five",
                "three",
                "seven"],
            "Translation": "nine"
        },
        {
            "Content": "dix",
            "Question": "Translate into English",
            "Answers": ["ten"],
            "Options": [
                "ten",
                "nine",
                "seven",
                "two"],
            "Translation": "ten"
        },

    ]

    lesson9Json = [
        {
            "Content": "un/une",
            "Question": "Translate into English",
            "Answers": ["one"],
            "Options": [
                "one",
                "two",
                "three",
                "four"],
            "Translation": "one"
        },
        {
            "Content": "deux",
            "Question": "Translate into English",
            "Answers": ["two"],
            "Options": [
                "two",
                "eight",
                "nine",
                "four"],
            "Translation": "two"
        },
        {
            "Content": "trois",
            "Question": "Translate into English",
            "Answers": ["three"],
            "Options": [
                "three",
                "seven",
                "one",
                "nine"],
            "Translation": "three"
        },
        {
            "Content": "quatre",
            "Question": "Translate into English",
            "Answers": ["four"],
            "Options": [
                "four",
                "one",
                "five",
                "two"],
            "Translation": "four"
        },
        {
            "Content": "cinq",
            "Question": "Translate into English",
            "Answers": ["five"],
            "Options": [
                "five",
                "six",
                "three",
                "eight"],
            "Translation": "five"
        },
        {
            "Content": "six",
            "Question": "Translate into English",
            "Answers": ["six"],
            "Options": [
                "six",
                "nine",
                "ten",
                "four"],
            "Translation": "six"
        },
        {
            "Content": "sept",
            "Question": "Translate into English",
            "Answers": ["seven"],
            "Options": [
                "seven",
                "three",
                "ten",
                "two"],
            "Translation": "seven"
        },
        {
            "Content": "huit",
            "Question": "Translate into English",
            "Answers": ["eight"],
            "Options": [
                "eight",
                "five",
                "one",
                "two"],
            "Translation": "eight"
        },
        {
            "Content": "neuf",
            "Question": "Translate into English",
            "Answers": ["nine"],
            "Options": [
                "nine",
                "five",
                "three",
                "seven"],
            "Translation": "nine"
        },
        {
            "Content": "dix",
            "Question": "Translate into English",
            "Answers": ["ten"],
            "Options": [
                "ten",
                "nine",
                "seven",
                "two"],
            "Translation": "nine"
        },

    ]

    lesson10Json = [
        {
            "Content": "J'ai un chat.",
            "Question": "What is the error in this sentence?",
            "Answers": ["There is no mistake."],
            "Options": ["The gender is wrong.",
                "The pronunciation is wrong.",
                "It is conjugated incorrectly.",
                "There is no mistake."],
            "Translation": "I have a cat."
        },
        {
            "Content": "J'ai deux chien.",
            "Question": "What is the error in this sentence?",
            "Answers": ["The pronunciation is wrong."],
            "Options": ["The gender is wrong.",
                "The pronunciation is wrong.",
                "It is conjugated incorrectly.",
                "There is no mistake."],
            "Translation": "chien > chiens (I have two dogs.)"
        },
        {
            "Content": "Tu as trois animaux?",
            "Question": "Select your reply.",
            "Answers": ["Oui, j'ai deux chats et un poisson."],
            "Options": [
                "Oui, j'ai deux chats et un poisson.",
                "Oui, j'ai une fille.",
                "Non, j'ai une chien et un garçon.",
                "Non, je suis Pierre."],
            "Translation": "Do you have three animals? Yes, I have two cats and one fish."
        },
        {
            "Content": "Il a quatre amis.",
            "Question": "How many friends does he have?",
            "Answers": ["four"],
            "Options": [
                "four",
                "nine",
                "eight",
                "three"],
            "Translation": "He has four friends."
        },
        {
            "Content": "Elle a cinq jeux vidéo.",
            "Question": "How many video games does she have?",
            "Answers": ["five"],
            "Options": [
                "five",
                "seven",
                "two",
                "eight"],
            "Translation": "She has five video games."
        },
        {
            "Content": "Ils ont six stylos.",
            "Question": "How many pens do they have?",
            "Answers": ["six"],
            "Options": [
                "six",
                "seven",
                "one",
                "nine"],
            "Translation": "They have six pens."
        },
        {
            "Content": "Elles ont sept cahiers.",
            "Question": "How many notebooks do they have?",
            "Answers": ["seven"],
            "Options": [
                "seven",
                "nine",
                "one",
                "two"],
            "Translation": "They have seven notebooks."
        },
        {
            "Content": "J'ai ___ carte.",
            "Question": "Select the correct number:",
            "Answers": ["une"],
            "Options": [
                "une",
                "deux",
                "trois",
                "quatre"],
            "Translation": "I have one card."
        },
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
            "Content": "douze",
            "Question": "Translate into English.",
            "Answers": ["twelve"],
            "Options": ["twelve", "seventeen", "nine", "five"],
            "Translation": "twelve"
        },
        {
            "Content": "treize",
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
            "Content": "seize",
            "Question": "Translate into English.",
            "Answers": ["sixteen"],
            "Options": ["sixteen", "seventeen", "thirteen", "five"],
            "Translation": "sixteen"
        },
        {
            "Content": "dix-sept",
            "Question": "Translate into English.",
            "Answers": ["seventeen"],
            "Options": ["seventeen", "three", "ten", "four"],
            "Translation": "seventeen"
        },
        {
            "Content": "dix-huit",
            "Question": "Translate into English.",
            "Answers": ["eighteen"],
            "Options": ["eighteen", "eight", "thirteen", "nineteen"],
            "Translation": "eighteen"
        },
        {
            "Content": "dix-neuf",
            "Question": "Translate into English.",
            "Answers": ["nineteen"],
            "Options": ["nineteen", "sixteen", "two", "twelve"],
            "Translation": "nineteen"
        },
        {
            "Content": "vingt",
            "Question": "Translate into English.",
            "Answers": ["twenty"],
            "Options": ["twenty", "fifteen", "eight", "seven"],
            "Translation": "twenty"
        }
    ];

    lesson12Json = [
        {
            "Content": "vingt et un",
            "Question": "Translate into English.",
            "Answers": ["twenty-one"],
            "Options": ["twenty-one", "twenty-nine", "twenty-four", "twenty-five"],
            "Translation": "twenty-one"
        },
        {
            "Content": "vingt-deux",
            "Question": "Translate into English.",
            "Answers": ["twenty-two"],
            "Options": ["nine", "twenty-two", "twenty", "thirty"],
            "Translation": "twenty-two"
        },
        {
            "Content": "vingt-trois",
            "Question": "Translate into English.",
            "Answers": ["twenty-three"],
            "Options": ["twenty-three", "three", "sixteen", "nineteen"],
            "Translation": "twenty-three"
        },
        {
            "Content": "vingt-quatre",
            "Question": "Translate into English.",
            "Answers": ["twenty-four"],
            "Options": ["fourteen", "twenty-four", "fourty", "four"],
            "Translation": "twenty-four"
        },
        {
            "Content": "vingt-cinq",
            "Question": "Translate into English.",
            "Answers": ["twenty-five"],
            "Options": ["fifteen", "eighteen", "twenty-five", "seven"],
            "Translation": "twenty-five"
        },
        {
            "Content": "vingt-six",
            "Question": "Translate into English.",
            "Answers": ["twenty-six"],
            "Options": ["twenty-six", "twenty-seven", "twenty-two", "twelve"],
            "Translation": "twenty-six"
        },
        {
            "Content": "vingt-sept",
            "Question": "Translate into English.",
            "Answers": ["twenty-seven"],
            "Options": ["twenty-seven", "eleven", "ten", "fourteen"],
            "Translation": "twenty-seven"
        },
        {
            "Content": "vingt-huit",
            "Question": "Translate into English.",
            "Answers": ["twenty-eight"],
            "Options": ["eighteen", "twenty-eight", "twenty-three", "nineteen"],
            "Translation": "twenty-eight"
        },
        {
            "Content": "vingt-neuf",
            "Question": "Translate into English.",
            "Answers": ["twenty-nine"],
            "Options": ["twenty-nine", "nineteen", "nine", "fourteen"],
            "Translation": "twenty-nine"
        },
        {
            "Content": "trente",
            "Question": "Translate into English.",
            "Answers": ["thirty"],
            "Options": ["thirty", "twenty", "ten", "zero"],
            "Translation": "thirty"
        }
    ];

    lesson13Json = [
        {
            "Content": "lundi",
            "Question": "Translate into English.",
            "Answers": ["Monday"],
            "Options": ["Monday",
                "Tuesday",
                "Wednesday",
                "Thursday"],
            "Translation": "Monday"
        },
        {
            "Content": "mardi",
            "Question": "Translate into English.",
            "Answers": ["Tuesday"],
            "Options": ["Tuesday",
                "Friday",
                "Wednesday",
                "Saturday"],
            "Translation": "Tuesday"
        },
        {
            "Content": "mercredi",
            "Question": "Translate into English.",
            "Answers": ["Wednesday"],
            "Options": ["Wednesday",
                "Sunday",
                "Monday",
                "Saturday"],
            "Translation": "Wednesday"
        },
        {
            "Content": "jeudi",
            "Question": "Translate into English.",
            "Answers": ["Thursday"],
            "Options": ["Thursday",
                "Friday",
                "Monday",
                "Sunday"],
            "Translation": "Thursday"
        },
        {
            "Content": "vendredi",
            "Question": "Translate into English.",
            "Answers": ["Friday"],
            "Options": ["Friday",
                "Tuesday",
                "Wednesday",
                "Thursday"],
            "Translation": "Friday"
        },
        {
            "Content": "samedi",
            "Question": "Translate into English.",
            "Answers": ["Saturday"],
            "Options": ["Saturday",
                "Monday",
                "Wednesday",
                "Friday"],
            "Translation": "Saturday"
        },
        {
            "Content": "dimache",
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
            "Content": "Le dimanche, elle regarde des films.",
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
            "Content": "Le lundi, je mange de la pizza.",
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
            "Content": "Le mardi, tu vas au parc.",
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
            "Content": "Le mercredi, il va au travail.",
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
            "Content": "Le jeudi, nous faisons nos courses.",
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
            "Content": "Le vendredi, elle retrouve ses amis.",
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
            "Content": "Le samedi, ils font du sport.",
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
            "Content": "Elle a les yeux marron.",
            "Question": "What color are her eyes?",
            "Answers": ["Brown"],
            "Options": ["Brown", "Blue", "Green", "Hazel"],
            "Translation": "She has brown eyes."
        },
        {
            "Content": "Il a les yeux bleus.",
            "Question": "What color are his eyes?",
            "Answers": ["Blue"],
            "Options": ["Blue", "Brown", "Green", "Gray"],
            "Translation": "He has blue eyes."
        },
        {
            "Content": "J'ai les yeux verts.",
            "Question": "What color are my eyes?",
            "Answers": ["Green"],
            "Options": ["Green", "Brown", "Blue", "Hazel"],
            "Translation": "I have green eyes."
        },
        {
            "Content": "Ils ont les yeux noisette.",
            "Question": "What color are their eyes?",
            "Answers": ["Hazel"],
            "Options": ["Hazel", "Brown", "Blue", "Green"],
            "Translation": "They have hazel eyes."
        },
        {
            "Content": "Elle a les yeux gris.",
            "Question": "What color are her eyes?",
            "Answers": ["Gray"],
            "Options": ["Gray", "Brown", "Blue", "Green"],
            "Translation": "She has gray eyes."
        }
    ];

    lesson16Json = [
        {
            "Content": "Elle a les cheveux blonds.",
            "Question": "What color is her hair?",
            "Answers": ["Blonde"],
            "Options": ["Blonde", "Brown", "Black", "Red"],
            "Translation": "She has blonde hair."
        },
        {
            "Content": "Il a les cheveux bruns.",
            "Question": "What color is his hair?",
            "Answers": ["Brown"],
            "Options": ["Brown", "Blonde", "Black", "Red"],
            "Translation": "He has brown hair."
        },
        {
            "Content": "J'ai les cheveux noirs.",
            "Question": "What color is my hair?",
            "Answers": ["Black"],
            "Options": ["Black", "Blonde", "Brown", "Red"],
            "Translation": "I have black hair."
        },
        {
            "Content": "Ils ont les cheveux roux.",
            "Question": "What color is their hair?",
            "Answers": ["Red"],
            "Options": ["Red", "Blonde", "Brown", "Black"],
            "Translation": "They have red hair."
        },
        {
            "Content": "Elle a les cheveux châtains.",
            "Question": "What color is her hair?",
            "Answers": ["Brown"],
            "Options": ["Brown", "Blonde", "Black", "Red"],
            "Translation": "She has brown hair."
        },
        {
            "Content": "Nous avons les cheveux blonds.",
            "Question": "What color is our hair?",
            "Answers": ["Blonde"],
            "Options": ["Blonde", "Brown", "Black", "Red"],
            "Translation": "We have blonde hair."
        },
        {
            "Content": "Ils ont les cheveux noirs.",
            "Question": "What color is their hair?",
            "Answers": ["Black"],
            "Options": ["Black", "Blonde", "Brown", "Red"],
            "Translation": "They have black hair."
        }
    ];

    lesson17Json = [
        {
            "Content": "Elle a les cheveux longs et bouclés.",
            "Question": "What is her hair style?",
            "Answers": ["Long and curly"],
            "Options": ["Long and curly", "Short and straight", "Medium and wavy", "Bald"],
            "Translation": "She has long and curly hair."
        },
        {
            "Content": "Il a les cheveux rasés.",
            "Question": "What is his hair style?",
            "Answers": ["Shaved"],
            "Options": ["Shaved", "Medium length", "Balding", "Curly"],
            "Translation": "He has shaved hair."
        },
        {
            "Content": "Elle a les cheveux mi-longs et raides.",
            "Question": "What is her hair style?",
            "Answers": ["Medium length and straight"],
            "Options": ["Medium length and straight", "Short and curly", "Long and wavy", "Bald"],
            "Translation": "She has medium length and straight hair."
        },
        {
            "Content": "Il a les cheveux frisés.",
            "Question": "What is his hair style?",
            "Answers": ["Curly"],
            "Options": ["Curly", "Straight", "Short", "Balding"],
            "Translation": "He has curly hair."
        },
        {
            "Content": "Elle a les cheveux très courts.",
            "Question": "What is her hair style?",
            "Answers": ["Very short"],
            "Options": ["Very short", "Long and wavy", "Curly", "Bald"],
            "Translation": "She has very short hair."
        },
        {
            "Content": "Il a les cheveux ondulés.",
            "Question": "What is his hair style?",
            "Answers": ["Wavy"],
            "Options": ["Wavy", "Straight", "Short and curly", "Balding"],
            "Translation": "He has wavy hair."
        },
        {
            "Content": "Elle a les cheveux bouclés.",
            "Question": "What is her hair style?",
            "Answers": ["Curly"],
            "Options": ["Curly", "Straight", "Short and wavy", "Balding"],
            "Translation": "She has curly hair."
        }
    ];

    lesson18Json = [
        {
            "Content": "Il a trente ans.",
            "Question": "How old is he?",
            "Answers": ["Thirty"],
            "Options": ["Thirty", "Twenty", "Fifty", "Seventy"],
            "Translation": "He is thirty years old."
        },
        {
            "Content": "Elle a quarante-cinq dollars.",
            "Question": "How much money does she have?",
            "Answers": ["Forty-five"],
            "Options": ["Forty-five", "Sixty", "Ninety", "Seventy-five"],
            "Translation": "She has forty-five dollars."
        },
        {
            "Content": "Il y a soixante secondes dans une minute.",
            "Question": "How many seconds are there in a minute?",
            "Answers": ["Sixty"],
            "Options": ["Sixty", "Fifty", "Seventy", "Eighty"],
            "Translation": "There are sixty seconds in a minute."
        },
        {
            "Content": "Il a quatre-vingts livres.",
            "Question": "How much does he weigh?",
            "Answers": ["Eighty"],
            "Options": ["Eighty", "Sixty", "Ninety", "Seventy-five"],
            "Translation": "He weighs eighty pounds."
        },
        {
            "Content": "Elle a cinquante-cinq pommes.",
            "Question": "How many apples does she have?",
            "Answers": ["Fifty-five"],
            "Options": ["Fifty-five", "Sixty", "Ninety", "Seventy-five"],
            "Translation": "She has fifty-five apples."
        },
        {
            "Content": "Il y a trois cent soixante-cinq jours dans une année.",
            "Question": "How many days are there in a year?",
            "Answers": ["Three hundred sixty-five"],
            "Options": ["Three hundred sixty-five", "Sixty", "Eighty", "Seventy-five"],
            "Translation": "There are three hundred sixty-five days in a year."
        },
        {
            "Content": "Il a soixante-dix employés.",
            "Question": "How many employees does he have?",
            "Answers": ["Seventy"],
            "Options": ["Seventy", "Sixty", "Eighty", "Ninety"],
            "Translation": "He has seventy employees."
        }
    ];

    lesson19Json = [
        {
            "Content": "Elle a vingt-deux ans.",
            "Question": "How old is she?",
            "Answers": ["Twenty-two"],
            "Options": ["Twenty-two", "Fifteen", "Thirty", "Forty-five"],
            "Translation": "She is twenty-two years old."
        },
        {
            "Content": "Il a trente-sept ans.",
            "Question": "How old is he?",
            "Answers": ["Thirty-seven"],
            "Options": ["Thirty-seven", "Twenty", "Fifty", "Sixty"],
            "Translation": "He is thirty-seven years old."
        },
        {
            "Content": "Elle a dix-neuf ans.",
            "Question": "How old is she?",
            "Answers": ["Nineteen"],
            "Options": ["Nineteen", "Twenty-five", "Thirty", "Forty-five"],
            "Translation": "She is nineteen years old."
        },
        {
            "Content": "Il a cinquante-et-un ans.",
            "Question": "How old is he?",
            "Answers": ["Fifty-one"],
            "Options": ["Fifty-one", "Thirty-five", "Sixty", "Seventy-five"],
            "Translation": "He is fifty-one years old."
        },
        {
            "Content": "Elle a vingt-six ans.",
            "Question": "How old is she?",
            "Answers": ["Twenty-six"],
            "Options": ["Twenty-six", "Eighteen", "Thirty", "Forty-five"],
            "Translation": "She is twenty-six years old."
        },
        {
            "Content": "Il a soixante-trois ans.",
            "Question": "How old is he?",
            "Answers": ["Sixty-three"],
            "Options": ["Sixty-three", "Thirty-five", "Fifty", "Seventy-five"],
            "Translation": "He is sixty-three years old."
        },
        {
            "Content": "Elle a quarante-sept ans.",
            "Question": "How old is she?",
            "Answers": ["Forty-seven"],
            "Options": ["Forty-seven", "Eighteen", "Thirty", "Twenty-six"],
            "Translation": "She is forty-seven years old."
        }
    ];

    lesson20Json = [
        {
            "Content": "Elle est très gentille.",
            "Question": "What is her personality like?",
            "Answers": ["Very kind"],
            "Options": ["Very kind", "Funny", "Serious", "Shy"],
            "Translation": "She is very kind."
        },
        {
            "Content": "Il est très drôle.",
            "Question": "What is his personality like?",
            "Answers": ["Very funny"],
            "Options": ["Very funny", "Kind", "Serious", "Shy"],
            "Translation": "He is very funny."
        },
        {
            "Content": "Elle est très sérieuse.",
            "Question": "What is her personality like?",
            "Answers": ["Very serious"],
            "Options": ["Very serious", "Kind", "Funny", "Shy"],
            "Translation": "She is very serious."
        },
        {
            "Content": "Il est très timide.",
            "Question": "What is his personality like?",
            "Answers": ["Very shy"],
            "Options": ["Very shy", "Kind", "Funny", "Serious"],
            "Translation": "He is very shy."
        },
        {
            "Content": "Elle est très sociable.",
            "Question": "What is her personality like?",
            "Answers": ["Very sociable"],
            "Options": ["Very sociable", "Kind", "Funny", "Serious"],
            "Translation": "She is very sociable."
        },
        {
            "Content": "Il est très calme.",
            "Question": "What is his personality like?",
            "Answers": ["Very calm"],
            "Options": ["Very calm", "Kind", "Funny", "Serious"],
            "Translation": "He is very calm."
        },
        {
            "Content": "Elle est très énergique.",
            "Question": "What is her personality like?",
            "Answers": ["Very energetic"],
            "Options": ["Very energetic", "Kind", "Funny", "Serious"],
            "Translation": "She is very energetic."
        }
    ];

    lesson21Json = [
        {
            "Content": "La Chine",
            "Question": "Translate into English.",
            "Answers": ["China"],
            "Options": ["China", "India", "Brazil", "Russia"],
            "Translation": "China"
        },
        {
            "Content": "Les États-Unis",
            "Question": "Translate into English.",
            "Answers": ["The United States"],
            "Options": ["The United States", "United Kingdom", "Canada", "Australia"],
            "Translation": "The United States"
        },
        {
            "Content": "Le Japon",
            "Question": "Translate into English.",
            "Answers": ["Japan"],
            "Options": ["Japan", "South Korea", "Germany", "France"],
            "Translation": "Japan"
        },
        {
            "Content": "L'Inde",
            "Question": "Translate into English.",
            "Answers": ["India"],
            "Options": ["India", "Pakistan", "Bangladesh", "Nepal"],
            "Translation": "India"
        },
        {
            "Content": "Le Brésil",
            "Question": "Translate into English.",
            "Answers": ["Brazil"],
            "Options": ["Brazil", "Argentina", "Mexico", "Colombia"],
            "Translation": "Brazil"
        },
        {
            "Content": "La Russie",
            "Question": "Translate into English.",
            "Answers": ["Russia"],
            "Options": ["Russia", "Germany", "Canada", "China"],
            "Translation": "Russia"
        },
        {
            "Content": "L'Allemagne",
            "Question": "Translate into English.",
            "Answers": ["Germany"],
            "Options": ["Germany", "France", "Italy", "Spain"],
            "Translation": "Germany"
        },
        {
            "Content": "La France",
            "Question": "Translate into English.",
            "Answers": ["France"],
            "Options": ["France", "Spain", "Italy", "Germany"],
            "Translation": "France"
        },
        {
            "Content": "L'Angleterre",
            "Question": "Translate into English.",
            "Answers": ["England"],
            "Options": ["England", "Scotland", "Ireland", "Wales"],
            "Translation": "England"
        }
    ];

    lesson22Json = [
        {
            "Content": "Je suis chinois.",
            "Question": "Which nationality is 'Je'?",
            "Answers": ["Chinese"],
            "Options": ["Chinese", "Indian", "Brazilian", "Russian"],
            "Translation": "I am Chinese."
        },
        {
            "Content": "Tu es américain.",
            "Question": "Which nationality is 'Tu'?",
            "Answers": ["American"],
            "Options": ["American", "British", "Canadian", "Australian"],
            "Translation": "You are American."
        },
        {
            "Content": "Il est japonais.",
            "Question": "Which nationality is 'Il'?",
            "Answers": ["Japanese"],
            "Options": ["Japanese", "South Korean", "German", "French"],
            "Translation": "He is Japanese."
        },
        {
            "Content": "Elle est indienne.",
            "Question": "Which nationality is 'Elle'?",
            "Answers": ["Indian"],
            "Options": ["Indian", "Pakistani", "Bangladeshi", "Nepali"],
            "Translation": "She is Indian."
        },
        {
            "Content": "Nous sommes brésiliens.",
            "Question": "Which nationality is 'Nous'?",
            "Answers": ["Brazilian"],
            "Options": ["Brazilian", "Argentinian", "Mexican", "Colombian"],
            "Translation": "We are Brazilian."
        },
        {
            "Content": "Vous êtes russes.",
            "Question": "Which nationality is 'Vous'?",
            "Answers": ["Russian"],
            "Options": ["Russian", "German", "Canadian", "Chinese"],
            "Translation": "You are Russian."
        },
        {
            "Content": "Ils sont allemands.",
            "Question": "Which nationality is 'Ils'?",
            "Answers": ["German"],
            "Options": ["German", "French", "Italian", "Spanish"],
            "Translation": "They are German."
        },
        {
            "Content": "Elles sont françaises.",
            "Question": "Which nationality is 'Elles'?",
            "Answers": ["French"],
            "Options": ["French", "Spanish", "Italian", "German"],
            "Translation": "They are French."
        },
        {
            "Content": "On est anglais.",
            "Question": "Which nationality is 'On'?",
            "Answers": ["English"],
            "Options": ["English", "Scottish", "Irish", "Welsh"],
            "Translation": "We are English."
        }
    ];

    lesson23Json = [
        {
            "Content": "Mon père s'appelle Pierre.",
            "Question": "Who is 'Pierre'?",
            "Answers": ["Father"],
            "Options": ["Father", "Mother", "Brother", "Sister"],
            "Translation": "My father's name is Pierre."
        },
        {
            "Content": "J'ai deux frères et une sœur.",
            "Question": "How many siblings do I have?",
            "Answers": ["Three"],
            "Options": ["Three", "One", "Four", "Two"],
            "Translation": "I have two brothers and one sister."
        },
        {
            "Content": "Mon oncle est très gentil.",
            "Question": "Who is 'oncle'?",
            "Answers": ["My Uncle"],
            "Options": ["My Uncle", "My Aunt", "My Cousin", "My Brother"],
            "Translation": "My uncle is very kind."
        },
        {
            "Content": "Ma sœur a 25 ans.",
            "Question": "Who is 'sœur'?",
            "Answers": ["My Sister"],
            "Options": ["My Sister", "My Mother", "My Aunt", "My Cousin"],
            "Translation": "My sister is 25 years old."
        },
        {
            "Content": "Mon cousin adore jouer au football.",
            "Question": "Who loves to play football?",
            "Answers": ["My Cousin"],
            "Options": ["My Cousin", "My Brother", "My Father", "My Uncle"],
            "Translation": "My cousin loves to play football."
        },
        {
            "Content": "Ma tante est une artiste talentueuse.",
            "Question": "Who is 'tante'?",
            "Answers": ["My Aunt"],
            "Options": ["My Aunt", "My Mother", "My Sister", "My Grandmother"],
            "Translation": "My aunt is a talented artist."
        },
        {
            "Content": "Mon grand-père est le plus âgé de la famille.",
            "Question": "Who is the oldest in the family?",
            "Answers": ["My Grandfather"],
            "Options": ["My Grandfather", "My Father", "My Uncle", "My Cousin"],
            "Translation": "My grandfather is the oldest in the family."
        }
    ];

    lesson24Json = [
        {
            "Content": "J'adore jouer de la guitare.",
            "Question": "What do I love to do?",
            "Answers": ["Play the guitar"],
            "Options": ["Play the guitar", "Paint", "Cook", "Read books"],
            "Translation": "I love to play the guitar."
        },
        {
            "Content": "Elle aime faire de la randonnée en montagne.",
            "Question": "What does she like to do in the mountains?",
            "Answers": ["Hike"],
            "Options": ["Hike", "Ski", "Swim", "Picnic"],
            "Translation": "She likes to hike in the mountains."
        },
        {
            "Content": "Mon frère collectionne des timbres rares.",
            "Question": "What does my brother collect?",
            "Answers": ["Rare stamps"],
            "Options": ["Rare stamps", "Coins", "Action figures", "Books"],
            "Translation": "My brother collects rare stamps."
        },
        {
            "Content": "Nous aimons regarder des films le week-end.",
            "Question": "What do we like to do on weekends?",
            "Answers": ["Watch movies"],
            "Options": ["Watch movies", "Play sports", "Go shopping", "Read newspapers"],
            "Translation": "We like to watch movies on weekends."
        },
        {
            "Content": "Il est passionné par la photographie.",
            "Question": "What is he passionate about?",
            "Answers": ["Photography"],
            "Options": ["Photography", "Cooking", "Gardening", "Playing chess"],
            "Translation": "He is passionate about photography."
        },
        {
            "Content": "Elle adore la danse contemporaine.",
            "Question": "What does she adore?",
            "Answers": ["Contemporary dance"],
            "Options": ["Contemporary dance", "Classical music", "Rock climbing", "Reading novels"],
            "Translation": "She adores contemporary dance."
        },
        {
            "Content": "Ils aiment faire du vélo dans le parc.",
            "Question": "What do they like to do in the park?",
            "Answers": ["Ride bicycles"],
            "Options": ["Ride bicycles", "Play soccer", "Picnic", "Paint"],
            "Translation": "They like to ride bicycles in the park."
        }
    ];

    lesson25Json = [
        {
            "Content": "Il fait beau aujourd'hui.",
            "Question": "What is the weather like today?",
            "Answers": ["It's sunny"],
            "Options": ["It's sunny", "It's rainy", "It's snowy", "It's windy"],
            "Translation": "It's sunny today."
        },
        {
            "Content": "Le temps est très froid en hiver.",
            "Question": "What is the weather like in winter?",
            "Answers": ["It's very cold"],
            "Options": ["It's very cold", "It's hot", "It's mild", "It's rainy"],
            "Translation": "The weather is very cold in winter."
        },
        {
            "Content": "Il y a des nuages dans le ciel.",
            "Question": "What is in the sky?",
            "Answers": ["Clouds"],
            "Options": ["Clouds", "Stars", "Sun", "Moon"],
            "Translation": "There are clouds in the sky."
        },
        {
            "Content": "Le vent souffle très fort.",
            "Question": "What is happening with the wind?",
            "Answers": ["It's blowing very hard"],
            "Options": ["It's blowing very hard", "It's calm", "It's drizzling", "It's snowing"],
            "Translation": "The wind is blowing very hard."
        },
        {
            "Content": "Il y a de la neige partout.",
            "Question": "What is everywhere?",
            "Answers": ["Snow"],
            "Options": ["Snow", "Rain", "Sunshine", "Fog"],
            "Translation": "There is snow everywhere."
        },
        {
            "Content": "Le soleil brille dans le ciel bleu.",
            "Question": "What is shining in the blue sky?",
            "Answers": ["The sun"],
            "Options": ["The sun", "The moon", "Stars", "Clouds"],
            "Translation": "The sun is shining in the blue sky."
        },
        {
            "Content": "Le temps est orageux ce soir.",
            "Question": "What is the weather like this evening?",
            "Answers": ["It's stormy"],
            "Options": ["It's stormy", "It's clear", "It's foggy", "It's chilly"],
            "Translation": "The weather is stormy this evening."
        }
    ];

    lesson26Json = [
        {
            "Content": "Il est huit heures du matin.",
            "Question": "What time is it in the morning?",
            "Answers": ["It's eight o'clock in the morning"],
            "Options": ["It's eight o'clock in the morning", "It's eight o'clock at night", "It's eight o'clock AM", "It's noon"],
            "Translation": "It's eight o'clock in the morning."
        },
        {
            "Content": "Elle doit arriver à quatorze heures trente.",
            "Question": "What time does she need to arrive?",
            "Answers": ["She needs to arrive at two thirty PM", "She needs to arrive at two-thirty PM"],
            "Options": ["She needs to arrive at two thirty PM", "She needs to arrive at three thirty AM", "She needs to arrive at two thirty AM", "She needs to arrive at one thirty PM"],
            "Translation": "She needs to arrive at two thirty PM."
        },
        {
            "Content": "Nous avons rendez-vous à dix-sept heures pile.",
            "Question": "When is our appointment?",
            "Answers": ["Our appointment is at exactly five o'clock"],
            "Options": ["Our appointment is at exactly five o'clock", "Our appointment is at six o'clock", "Our appointment is at five thirty", "Our appointment is at four o'clock"],
            "Translation": "Our appointment is at exactly five o'clock."
        },
        {
            "Content": "Le film commence à dix-neuf heures quarante-cinq.",
            "Question": "When does the movie start?",
            "Answers": ["The movie starts at seven forty-five PM"],
            "Options": ["The movie starts at seven forty-five PM", "The movie starts at eight forty-five AM", "The movie starts at seven thirty PM", "The movie starts at six forty-five PM"],
            "Translation": "The movie starts at seven forty-five PM."
        },
        {
            "Content": "Il est midi et demi.",
            "Question": "What time is it?",
            "Answers": ["It's noon and a half"],
            "Options": ["It's noon and a half", "It's midnight and a half", "It's one thirty AM", "It's three thirty PM"],
            "Translation": "It's noon and a half."
        },
        {
            "Content": "Je me lève à six heures tous les jours.",
            "Question": "When do I wake up every day?",
            "Answers": ["I wake up at six o'clock every day"],
            "Options": ["I wake up at six o'clock every day", "I wake up at seven o'clock every day", "I wake up at eight o'clock every day", "I wake up at nine o'clock every day"],
            "Translation": "I wake up at six o'clock every day."
        },
        {
            "Content": "Il est onze heures moins le quart du soir.",
            "Question": "What time is it in the evening?",
            "Answers": ["It's a quarter to eleven in the evening"],
            "Options": ["It's a quarter to eleven in the evening", "It's eleven o'clock in the morning", "It's half past ten at night", "It's noon"],
            "Translation": "It's a quarter to eleven in the evening."
        }
    ];

    lesson27Json = [
        {
            "Content": "Je me lave les mains.",
            "Question": "What am I doing?",
            "Answers": ["I am washing my hands"],
            "Options": ["I am washing my hands", "I am cooking dinner", "I am reading a book", "I am driving a car"],
            "Translation": "I am washing my hands."
        },
        {
            "Content": "Elle se brosse les cheveux tous les matins.",
            "Question": "What does she do every morning?",
            "Answers": ["She brushes her hair"],
            "Options": ["She brushes her hair", "She brushes her teeth", "She takes a shower", "She eats breakfast"],
            "Translation": "She brushes her hair every morning."
        },
        {
            "Content": "Ils se réveillent tôt le week-end.",
            "Question": "When do they wake up on weekends?",
            "Answers": ["They wake up early on weekends"],
            "Options": ["They wake up early on weekends", "They wake up late on weekends", "They go to bed early on weekends", "They sleep all day on weekends"],
            "Translation": "They wake up early on weekends."
        },
        {
            "Content": "Nous nous habillons rapidement.",
            "Question": "How do we get dressed?",
            "Answers": ["We dress quickly"],
            "Options": ["We dress quickly", "We dress slowly", "We dress formally", "We dress up for a party"],
            "Translation": "We dress quickly."
        },
        {
            "Content": "Tu te maquilles pour la soirée.",
            "Question": "Why are you applying makeup?",
            "Answers": ["You are applying makeup for the evening"],
            "Options": ["You are applying makeup for the evening", "You are applying makeup for work", "You are applying makeup for a photo shoot", "You are applying makeup for a vacation"],
            "Translation": "You are applying makeup for the evening."
        },
        {
            "Content": "Il se rase tous les jours.",
            "Question": "How often does he shave?",
            "Answers": ["He shaves every day"],
            "Options": ["He shaves every day", "He shaves once a week", "He shaves in the evening", "He shaves in the morning"],
            "Translation": "He shaves every day."
        },
        {
            "Content": "Elles se préparent pour la fête ce soir.",
            "Question": "What are they doing for the party tonight?",
            "Answers": ["They are getting ready"],
            "Options": ["They are getting ready", "They are cleaning the house", "They are cooking dinner", "They are watching a movie"],
            "Translation": "They are getting ready for the party tonight."
        }
    ];

    lesson28Json = [
        {
            "Content": "Est-ce que tu te brosses les dents après chaque repas?",
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
            "Content": "Est-ce qu'elle se lave les mains avant de manger?",
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
            "Content": "Est-ce qu'ils se réveillent tôt le matin?",
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
            "Content": "Est-ce que vous vous habillez formellement au travail?",
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
            "Content": "Est-ce que je me maquille pour la soirée ce soir?",
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
            "Content": "Est-ce qu'ils se préparent pour le voyage demain?",
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
            "Content": "Est-ce que nous nous levons tôt les jours de semaine?",
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
            "Content": "Il mange une pizza au dîner.",
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
            "Content": "Elle prépare une salade pour le déjeuner.",
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
            "Content": "Ils boivent du jus d'orange au petit déjeuner.",
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
            "Content": "Est-ce que vous aimez manger des fruits?",
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
            "Content": "Nous commandons des sushis pour le dîner ce soir.",
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
            "Content": "Elle cuisine du poulet rôti pour le déjeuner.",
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
            "Content": "Ils mangent des légumes avec leur dîner.",
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
            "Content": "Quand est-ce que tu te lèves le matin?",
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
            "Content": "Qui est-ce que vous rencontrez à la bibliothèque?",
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
            "Content": "Comment est-ce qu'elle se prépare pour le mariage?",
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
            "Content": "Combien de temps est-ce qu'ils se reposent l'après-midi?",
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
            "Content": "Quoi est-ce que je me prépare pour le dîner?",
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
            "Content": "Où est-ce que vous vous amusez le samedi soir?",
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
            "Content": "Pourquoi est-ce que nous nous habillons formellement?",
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