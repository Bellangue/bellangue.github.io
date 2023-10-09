//No, you need to provide the Content key, and a translation from french to English


if (localStorage.getItem("currentLanguage") === "fr") {

    lessonNameData = ["Welcome to the Course!", "Greetings 1", "People 1", "People 2", "Time 1", "Introductions 1", "People 3", "Numbers 1", "Numbers 1", "Numbers 2", "Numbers 3", "Numbers 4", "Days of the Week 1", "Days of the Week 2", "Appearance 1", "Appearance 2", "Appearance 3", "Numbers 5", "Age 1", "Personality 1", "Countries 1", "Countries 2", "Family 1", "Hobbies 1", "Weather 1", "Time 1", "Daily Routine 1", "Questions 1", "Food 1", "Questions 2"];

    lesson1Json = [
        { "Content": "Bonjour! Je m'appelle Pierre.", "Translation": "Hello! I am called Pierre." },
        { "Content": "le garçon", "Translation": "the boy" },
        { "Content": "Bonjour. Comment tu t'appelle?", "Translation": "Hello. What are you called?" },
        { "Content": "Bonne journée.", "Translation": "Have a nice day." },
        { "Content": "Ça va?", "Translation": "Is everything alright?" },
        { "Content": "Parlez-vous anglais?", "Translation": "Do you speak English?" },
        { "Content": "Bienvenue au cours!", "Translation": "Welcome to the course!" }
    ];

    lesson2Json = [
        { "Content": "Bonjour. Ça va?", "Translation": "Hello. How is it going?" },
        { "Content": "Salut. À bientôt.", "Translation": "Hi. See you soon." },
        { "Content": "Ça va bien, merci. Et toi?", "Translation": "It's going well, thanks. And you?" },
        { "Content": "Comment allez-vous?", "Translation": "How are you?" },
        { "Content": "Bonne nuit.", "Translation": "Good night." },
        { "Content": "Au revoir. À bientôt.", "Translation": "Goodbye. See you soon." },
        { "Content": "Coucou! Je vais comme ci, comme ça.", "Translation": "Hi! I'm doing so-so." }
    ];

    lesson3Json = [
        { "Content": "le garçon", "Translation": "the boy" },
        { "Content": "l'homme", "Translation": "the man" },
        { "Content": "la fille", "Translation": "the girl" },
        { "Content": "la femme", "Translation": "the woman" },
        { "Content": "Je suis un garçon.", "Translation": "I am a boy." },
        { "Content": "Je suis un homme.", "Translation": "I am a man." },
        { "Content": "Je suis une fille.", "Translation": "I am a girl." },
        { "Content": "Je suis une femme.", "Translation": "I am a woman." }
    ]

    lesson4Json = [
        { "Content": "Tu es un garçon?", "Translation": "Are you a boy?" },
        { "Content": "Tu es un homme?", "Translation": "Are you a man?" },
        { "Content": "Tu es une fille?", "Translation": "Are you a girl?" },
        { "Content": "Tu es une femme?", "Translation": "Are you a woman?" }
    ]

    lesson5Json = [
        { "Content": "Bon journée.", "Translation": "Good day." },
        { "Content": "Aujourd'hui, je travaille.", "Translation": "Today, I work." },
        { "Content": "Tu lis tous les jours.", "Translation": "You read every day." },
        { "Content": "hier", "Translation": "yesterday" },
        { "Content": "Demain et hier", "Translation": "Tomorrow and yesterday" },
        { "Content": "Il ne mange pas.", "Translation": "He does not eat." },
        { "Content": "ne pas", "Translation": "do not" }
    ]

    lesson6Json = [
        { "Content": "Bonjour! Je m'appelle Pierre.", "Translation": "Hello! My name is Pierre." },
        { "Content": "Je m'appelle Jacques.", "Translation": "I am called Jacques." },
        { "Content": "Tu appelles Louis.", "Translation": "You call Louis." },
        { "Content": "Il m'appelle Charles.", "Translation": "He calls me Charles." },
        { "Content": "Comment tu t'appelles?", "Translation": "What is your name?" },
        { "Content": "Elle s'appelle Fleur et il s'appelle George.", "Translation": "She is called Fleur, and he is called George." },
        { "Content": "Tu t'appelle Nathaniel?", "Translation": "You are called Nathaniel?" }
    ]

    lesson7Json = [
        { "Content": "Elle est étudiante. Elle aime l'école.", "Translation": "She is a student. She likes school." },
        { "Content": "Nous allons chez Pierre. Nous sommes amis.", "Translation": "We are going to Pierre's place. We are friends." },
        { "Content": "Marc est mon ami. Il est très sympa.", "Translation": "Marc is my friend. He is very nice." },
        { "Content": "Paul parle anglais. Il parle avec sa mère.", "Translation": "Paul is speaking English. He is speaking with his mother." },
        { "Content": "Cheryl et moi sommes amies. Nous aimons jouer.", "Translation": "Cheryl and I are friends. We love to play." },
        { "Content": "Ils parlent.", "Translation": "They speak." },
        { "Content": "Je parle le français.", "Translation": "I speak French." }
    ]

    lesson8Json = [
        { "Content": "un", "Translation": "one" },
        { "Content": "une", "Translation": "one" },
        { "Content": "deux", "Translation": "two" },
        { "Content": "trois", "Translation": "three" },
        { "Content": "quatre", "Translation": "four" },
        { "Content": "cinq", "Translation": "five" },
        { "Content": "six", "Translation": "six" },
        { "Content": "sept", "Translation": "seven" },
        { "Content": "huit", "Translation": "eight" },
        { "Content": "neuf", "Translation": "nine" },
        { "Content": "dix", "Translation": "ten" }
    ]

    lesson9Json = [
        { "Content": "un", "Translation": "one" },
        { "Content": "une", "Translation": "one" },
        { "Content": "deux", "Translation": "two" },
        { "Content": "trois", "Translation": "three" },
        { "Content": "quatre", "Translation": "four" },
        { "Content": "cinq", "Translation": "five" },
        { "Content": "six", "Translation": "six" },
        { "Content": "sept", "Translation": "seven" },
        { "Content": "huit", "Translation": "eight" },
        { "Content": "neuf", "Translation": "nine" },
        { "Content": "dix", "Translation": "ten" }
    ]

    lesson10Json = [
        { "Content": "J'ai un chat.", "Translation": "I have a cat." },
        { "Content": "J'ai deux chiens.", "Translation": "I have two dogs." },
        { "Content": "Tu as trois animaux?", "Translation": "Do you have three animals?" },
        { "Content": "Il a quatre amis.", "Translation": "He has four friends." },
        { "Content": "Elle a cinq jeux vidéo.", "Translation": "She has five video games." },
        { "Content": "Ils ont six stylos.", "Translation": "They have six pens." },
        { "Content": "Elles ont sept cahiers.", "Translation": "They have seven notebooks." },
        { "Content": "J'ai une carte.", "Translation": "I have a card." }
    ]

    lesson11Json = [
        { "Content": "onze", "Translation": "eleven" },
        { "Content": "douze", "Translation": "twelve" },
        { "Content": "treize", "Translation": "thirteen" },
        { "Content": "quatorze", "Translation": "fourteen" },
        { "Content": "quinze", "Translation": "fifteen" },
        { "Content": "seize", "Translation": "sixteen" },
        { "Content": "dix-sept", "Translation": "seventeen" },
        { "Content": "dix-huit", "Translation": "eighteen" },
        { "Content": "dix-neuf", "Translation": "nineteen" },
        { "Content": "vingt", "Translation": "twenty" }
    ];

    lesson12Json = [
        { "Content": "vingt et un", "Translation": "twenty-one" },
        { "Content": "vingt-deux", "Translation": "twenty-two" },
        { "Content": "vingt-trois", "Translation": "twenty-three" },
        { "Content": "vingt-quatre", "Translation": "twenty-four" },
        { "Content": "vingt-cinq", "Translation": "twenty-five" },
        { "Content": "vingt-six", "Translation": "twenty-six" },
        { "Content": "vingt-sept", "Translation": "twenty-seven" },
        { "Content": "vingt-huit", "Translation": "twenty-eight" },
        { "Content": "vingt-neuf", "Translation": "twenty-nine" },
        { "Content": "trente", "Translation": "thirty" }
    ];

    lesson13Json = [
        { "Content": "lundi", "Translation": "Monday" },
        { "Content": "mardi", "Translation": "Tuesday" },
        { "Content": "mercredi", "Translation": "Wednesday" },
        { "Content": "jeudi", "Translation": "Thursday" },
        { "Content": "vendredi", "Translation": "Friday" },
        { "Content": "samedi", "Translation": "Saturday" },
        { "Content": "dimache", "Translation": "Sunday" }
    ];

    lessonJSONData = [lesson1Json, lesson2Json, lesson3Json, lesson4Json, lesson5Json, lesson6Json, lesson7Json, lesson8Json, lesson9Json, lesson10Json, lesson11Json, lesson12Json, lesson13Json];
}