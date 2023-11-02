if (localStorage.getItem("currentLanguage") === "fr") {

    lessonNameData = ["Welcome to the Course!", "Greetings 1", "People 1", "People 2", "Time 1", "Introductions 1", "People 3", "Numbers 1", "Numbers 1", "Numbers 2", "Numbers 3", "Numbers 4", "Days of the Week 1", "Days of the Week 2", "Appearance 1", "Appearance 2", "Appearance 3", "Numbers 5", "Age 1", "Personality 1", "Countries 1", "Countries 2", "Family 1", "Hobbies 1", "Weather 1", "Time 1", "Daily Routine 1", "Questions 1", "Food 1", "Questions 2"];

    lesson1Json = [
        { "Content": "Hello! I am called Pierre.", "Translation": "Bonjour! Je m'appelle Pierre." },
        { "Content": "the boy", "Translation": "le garçon" },
        { "Content": "Hello. What are you called?", "Translation": "Bonjour. Comment tu t'appelle?" },
        { "Content": "Have a nice day.", "Translation": "Bonne journée." },
        { "Content": "Is everything alright?", "Translation": "Ça va?" },
        { "Content": "Do you speak English?", "Translation": "Parlez-vous anglais?" },
        { "Content": "Welcome to the course!", "Translation": "Bienvenue au cours!" }
    ];

    lesson2Json = [
        { "Content": "Hello. How is it going?", "Translation": "Bonjour. Ça va?" },
        { "Content": "Hi. See you soon.", "Translation": "Salut. À bientôt." },
        { "Content": "It's going well, thanks. And you?", "Translation": "Ça va bien, merci. Et toi?" },
        { "Content": "How are you?", "Translation": "Comment allez-vous?" },
        { "Content": "Good night.", "Translation": "Bonne nuit." },
        { "Content": "Goodbye. See you soon.", "Translation": "Au revoir. À bientôt." },
        { "Content": "Hi! I'm doing so-so.", "Translation": "Coucou! Je vais comme ci, comme ça." }
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
        {
            "Content": "Tu es un garçon?", "Translation": "Are you a boy?"
        },
        {
            "Content": "Tu es un homme?", "Translation": "Are you a man?"
        },
        {
            "Content": "Tu es une fille?", "Translation": "Are you a girl?"
        },
        {
            "Content": "Tu es une femme?", "Translation": "Are you a woman?"
        },
        {
            "Content": "Tu es un garçon?", "Translation": "Are you a boy? Yes, I am a boy."
        },
        {
            "Content": "Tu es un homme?", "Translation": "Are you a man? Yes, I am a man."
        },
        {
            "Content": "Tu es une fille?", "Translation": "Are you a girl? Yes, I am a girl."
        },
        {
            "Content": "Tu es une femme?", "Translation": "Are you a woman? Yes, I am a woman."
        }
    ]

    lesson5Json = [
        { "Content": "Bonne journée.", "Translation": "Have a good day" },
        { "Content": "Aujourd'hui, je travaille.", "Translation": "Today, I work." },
        { "Content": "Tu lis tous les jours.", "Translation": "You read every day." },
        { "Content": "hier", "Translation": "yesterday" },
        { "Content": "Demain et hier", "Translation": "Tomorrow and yesterday" },
        { "Content": "Il ne mange pas.", "Translation": "He does not eat." },
        { "Content": "ne pas ...", "Translation": "do not ..." }
    ]

    lesson6Json = [
        {"Content": "Bonjour! Je m'appelle Pierre.", "Translation": "Hello! I am called Pierre."},
        {"Content": "Je m'appelle Jacques.", "Translation": "I am called Jacques."},
        {"Content": "Tu t'appelles Louis.", "Translation": "You are called Louis"},
        {"Content": "Il s'appelle Charles.", "Translation": "He is called Charles"},
        {"Content": "Comment tu t'appelles?", "Translation": "What are you called? I am called Charlotte. And you?"},
        {"Content": "Elle s'appelle Fleur et il s'appelle George.", "Translation": "She is called Fleur and he is called George."},
        {"Content": "Tu t'appelles Nathaniel?", "Translation": "You are called Nathaniel"}
    ]
    
    lesson7Json = [
        {"Content": "Elle est étudiante. Elle aime l'école.", "Translation": "She is a student. She likes school."},
        {"Content": "Nous allons chez Pierre. _____ sommes amis.", "Translation": "We are going to Pierre's place. We are friends."},
        {"Content": "Marc est mon ami. _____ est très sympa.", "Translation": "Marc is my friend. He is very nice."},
        {"Content": "Paul parle anglais. _____ parle avec sa mère.", "Translation": "Paul is talking English. He is talking with his mother."},
        {"Content": "Cheryl et moi sommes amies. _____ aimons jouer.", "Translation": "Cheryl and I are friends. We love to play."},
        {"Content": "___ parlent.", "Translation": "They speak."},
        {"Content": "______ parle le français.", "Translation": "I speak French."}
    ]
    


    lessonJSONData = [lesson1Json, lesson2Json, lesson3Json, lesson4Json, lesson5Json, lesson6Json, lesson7Json];
}