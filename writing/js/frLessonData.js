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
        { "Content": "the boy", "Translation": "le garçon" },
        { "Content": "the man", "Translation": "l'homme" },
        { "Content": "the girl", "Translation": "la fille" },
        { "Content": "the woman", "Translation": "la femme" },
        { "Content": "I am a boy.", "Translation": "Je suis un garçon." },
        { "Content": "I am a man.", "Translation": "Je suis un homme." },
        { "Content": "I am a girl.", "Translation": "Je suis une fille." },
        { "Content": "I am a woman.", "Translation": "Je suis une femme." }
    ]


    lesson4Json = [
        { "Content": "Are you a boy?", "Translation": "Tu es un garçon?" },
        { "Content": "Are you a man?", "Translation": "Tu es un homme?" },
        { "Content": "Are you a girl?", "Translation": "Tu es une fille?" },
        { "Content": "Are you a woman?", "Translation": "Tu es une femme?" },
        { "Content": "Are you a boy? Yes, I am a boy.", "Translation": "Tu es un garçon?" },
        { "Content": "Are you a man? Yes, I am a man.", "Translation": "Tu es un homme?" },
        { "Content": "Are you a girl? Yes, I am a girl.", "Translation": "Tu es une fille?" },
        { "Content": "Are you a woman? Yes, I am a woman.", "Translation": "Tu es une femme?" }
    ]

    lesson5Json = [
        { "Content": "Have a good day", "Translation": "Bonne journée." },
        { "Content": "Today, I work.", "Translation": "Aujourd'hui, je travaille." },
        { "Content": "You read every day.", "Translation": "Tu lis tous les jours." },
        { "Content": "yesterday", "Translation": "hier" },
        { "Content": "Tomorrow and yesterday", "Translation": "Demain et hier" },
        { "Content": "He does not eat.", "Translation": "Il ne mange pas." },
        { "Content": "do not ...", "Translation": "ne ... pas" }
    ]


    lesson6Json = [
        { "Content": "Hello! I am called Pierre.", "Translation": "Bonjour! Je m'appelle Pierre." },
        { "Content": "I am called Jacques.", "Translation": "Je m'appelle Jacques." },
        { "Content": "You are called Louis", "Translation": "Tu t'appelles Louis." },
        { "Content": "He is called Charles", "Translation": "Il s'appelle Charles." },
        { "Content": "What are you called?", "Translation": "Comment tu t'appelles?" },
        { "Content": "She is called Fleur and he is called George.", "Translation": "Elle s'appelle Fleur et il s'appelle George." },
        { "Content": "You are called Nathaniel", "Translation": "Tu t'appelles Nathaniel?" }
    ]

    lesson7Json = [
        { "Content": "She is a student. She likes school.", "Translation": "Elle est étudiante. Elle aime l'école." },
        { "Content": "We are going to Pierre's place. We are friends.", "Translation": "Nous allons chez Pierre. Nous sommes amis." },
        { "Content": "Marc is my friend. He is very nice.", "Translation": "Marc est mon ami. Il est très sympa." },
        { "Content": "Paul is talking English. He is talking with his mother.", "Translation": "Paul parle anglais. Il parle avec sa mère." },
        { "Content": "Cheryl and I are friends. We love to play.", "Translation": "Cheryl et moi sommes amies. Nous aimons jouer." },
        { "Content": "They speak.", "Translation": "Elles parlent." },
        { "Content": "I speak French.", "Translation": "Je parle le français." }
    ]

    lesson8Json = [
        { "Content": "one", "Translation": "un/une" },
        { "Content": "two", "Translation": "deux" },
        { "Content": "three", "Translation": "trois" },
        { "Content": "four", "Translation": "quatre" },
        { "Content": "five", "Translation": "cinq" },
        { "Content": "six", "Translation": "six" },
        { "Content": "seven", "Translation": "sept" },
        { "Content": "eight", "Translation": "huit" },
        { "Content": "nine", "Translation": "neuf" },
        { "Content": "ten", "Translation": "dix" }
    ]

    lesson9Json = [
        { "Content": "one", "Translation": "un/une" },
        { "Content": "two", "Translation": "deux" },
        { "Content": "three", "Translation": "trois" },
        { "Content": "four", "Translation": "quatre" },
        { "Content": "five", "Translation": "cinq" },
        { "Content": "six", "Translation": "six" },
        { "Content": "seven", "Translation": "sept" },
        { "Content": "eight", "Translation": "huit" },
        { "Content": "nine", "Translation": "neuf" },
        { "Content": "ten", "Translation": "dix" }
    ]

    lesson10Json = [
        { "Content": "I have a cat.", "Translation": "J'ai un chat." },
        { "Content": "I have two dogs.", "Translation": "J'ai deux chiens." },
        { "Content": "Do you have three animals?", "Translation": "Tu as trois animaux?" },
        { "Content": "He has four friends.", "Translation": "Il a quatre amis." },
        { "Content": "She has five video games.", "Translation": "Elle a cinq jeux vidéo." },
        { "Content": "They have six pens.", "Translation": "Ils ont six stylos." },
        { "Content": "They have seven notebooks.", "Translation": "Elles ont sept cahiers." },
        { "Content": "I have one card.", "Translation": "J'ai une carte." }
    ]

    lesson11Json = [
        { "Content": "eleven", "Translation": "onze" },
        { "Content": "twelve", "Translation": "douze" },
        { "Content": "thirteen", "Translation": "treize" },
        { "Content": "fourteen", "Translation": "quatorze" },
        { "Content": "fifteen", "Translation": "quinze" },
        { "Content": "sixteen", "Translation": "seize" },
        { "Content": "seventeen", "Translation": "dix-sept" },
        { "Content": "eighteen", "Translation": "dix-huit" },
        { "Content": "nineteen", "Translation": "dix-neuf" },
        { "Content": "twenty", "Translation": "vingt" }
    ]

    lesson12Json = [
        { "Content": "twenty-one", "Translation": "vingt et un" },
        { "Content": "twenty-two", "Translation": "vingt-deux" },
        { "Content": "twenty-three", "Translation": "vingt-trois" },
        { "Content": "twenty-four", "Translation": "vingt-quatre" },
        { "Content": "twenty-five", "Translation": "vingt-cinq" },
        { "Content": "twenty-six", "Translation": "vingt-six" },
        { "Content": "twenty-seven", "Translation": "vingt-sept" },
        { "Content": "twenty-eight", "Translation": "vingt-huit" },
        { "Content": "twenty-nine", "Translation": "vingt-neuf" },
        { "Content": "thirty", "Translation": "trente" }
    ]

    lesson13Json = [
        { "Content": "Monday", "Translation": "lundi" },
        { "Content": "Tuesday", "Translation": "mardi" },
        { "Content": "Wednesday", "Translation": "mercredi" },
        { "Content": "Thursday", "Translation": "jeudi" },
        { "Content": "Friday", "Translation": "vendredi" },
        { "Content": "Saturday", "Translation": "samedi" },
        { "Content": "Sunday", "Translation": "dimanche" }
    ]

    lesson14Json = [
        { "Content": "On Sundays, she watches movies.", "Translation": "Le dimanche, elle regarde des films." },
        { "Content": "On Mondays, I eat pizza.", "Translation": "Le lundi, je mange de la pizza." },
        { "Content": "On Tuesdays, you go to the park.", "Translation": "Le mardi, tu vas au parc." },
        { "Content": "On Wednesdays, he goes to work.", "Translation": "Le mercredi, il va au travail." },
        { "Content": "On Thursdays, we do our shopping.", "Translation": "Le jeudi, nous faisons nos courses." },
        { "Content": "On Fridays, she meets her friends.", "Translation": "Le vendredi, elle retrouve ses amis." },
        { "Content": "On Saturdays, they do sports.", "Translation": "Le samedi, ils font du sport." }
    ]

    lesson15Json = [
        { "Content": "She has brown eyes.", "Translation": "Elle a les yeux marron." },
        { "Content": "He has blue eyes.", "Translation": "Il a les yeux bleus." },
        { "Content": "I have green eyes.", "Translation": "J'ai les yeux verts." },
        { "Content": "They have hazel eyes.", "Translation": "Ils ont les yeux noisette." },
        { "Content": "She has gray eyes.", "Translation": "Elle a les yeux gris." }
    ]

    lesson16Json = [
        { "Content": "She has blonde hair.", "Translation": "Elle a les cheveux blonds." },
        { "Content": "He has brown hair.", "Translation": "Il a les cheveux bruns." },
        { "Content": "I have black hair.", "Translation": "J'ai les cheveux noirs." },
        { "Content": "They have red hair.", "Translation": "Ils ont les cheveux roux." },
        { "Content": "She has brown hair.", "Translation": "Elle a les cheveux châtains." },
        { "Content": "We have blonde hair.", "Translation": "Nous avons les cheveux blonds." },
        { "Content": "They have black hair.", "Translation": "Ils ont les cheveux noirs." }
    ]

    lesson17Json = [
        { "Content": "She has long and curly hair.", "Translation": "Elle a les cheveux longs et bouclés." },
        { "Content": "He has shaved hair.", "Translation": "Il a les cheveux rasés." },
        { "Content": "She has medium length and straight hair.", "Translation": "Elle a les cheveux mi-longs et raides." },
        { "Content": "He has curly hair.", "Translation": "Il a les cheveux frisés." },
        { "Content": "She has very short hair.", "Translation": "Elle a les cheveux très courts." },
        { "Content": "He has wavy hair.", "Translation": "Il a les cheveux ondulés." },
        { "Content": "She has curly hair.", "Translation": "Elle a les cheveux bouclés." }
    ]

    lesson18Json = [
        { "Content": "He is thirty years old.", "Translation": "Il a trente ans." },
        { "Content": "She has forty-five dollars.", "Translation": "Elle a quarante-cinq dollars." },
        { "Content": "There are sixty seconds in a minute.", "Translation": "Il y a soixante secondes dans une minute." },
        { "Content": "He weighs eighty pounds.", "Translation": "Il a quatre-vingts livres." },
        { "Content": "She has fifty-five apples.", "Translation": "Elle a cinquante-cinq pommes." },
        { "Content": "There are three hundred sixty-five days in a year.", "Translation": "Il y a trois cent soixante-cinq jours dans une année." },
        { "Content": "He has seventy employees.", "Translation": "Il a soixante-dix employés." }
    ]

    lesson19Json = [
        { "Content": "She is twenty-two years old.", "Translation": "Elle a vingt-deux ans." },
        { "Content": "He is thirty-seven years old.", "Translation": "Il a trente-sept ans." },
        { "Content": "She is nineteen years old.", "Translation": "Elle a dix-neuf ans." },
        { "Content": "He is fifty-one years old.", "Translation": "Il a cinquante-et-un ans." },
        { "Content": "She is twenty-six years old.", "Translation": "Elle a vingt-six ans." },
        { "Content": "He is sixty-three years old.", "Translation": "Il a soixante-trois ans." },
        { "Content": "She is forty-seven years old.", "Translation": "Elle a quarante-sept ans." }
    ]

    lesson20Json = [
        { "Content": "She is very kind.", "Translation": "Elle est très gentille." },
        { "Content": "He is very funny.", "Translation": "Il est très drôle." },
        { "Content": "She is very serious.", "Translation": "Elle est très sérieuse." },
        { "Content": "He is very shy.", "Translation": "Il est très timide." },
        { "Content": "She is very sociable.", "Translation": "Elle est très calme." },
        { "Content": "He is very calm.", "Translation": "Il est très énergique." },
        { "Content": "She is very energetic.", "Translation": "Elle est très énergique." }
    ]

    lesson21Json = [
        { "Content": "China", "Translation": "La Chine" },
        { "Content": "The United States", "Translation": "Les États-Unis" },
        { "Content": "Japan", "Translation": "Le Japon" },
        { "Content": "India", "Translation": "L'Inde" },
        { "Content": "Brazil", "Translation": "Le Brésil" },
        { "Content": "Russia", "Translation": "La Russie" },
        { "Content": "Germany", "Translation": "L'Allemagne" },
        { "Content": "France", "Translation": "La France" },
        { "Content": "England", "Translation": "L'Angleterre" }
    ]

    lesson22Json = [
        { "Content": "I am Chinese.", "Translation": "Je suis chinois." },
        { "Content": "You are American.", "Translation": "Tu es américain." },
        { "Content": "He is Japanese.", "Translation": "Il est japonais." },
        { "Content": "She is Indian.", "Translation": "Elle est indienne." },
        { "Content": "We are Brazilian.", "Translation": "Nous sommes brésiliens." },
        { "Content": "You are Russian.", "Translation": "Vous êtes russes." },
        { "Content": "They are German.", "Translation": "Ils sont allemands." },
        { "Content": "They are French.", "Translation": "Elles sont françaises." },
        { "Content": "We are English.", "Translation": "On est anglais." }
    ]

    lesson23Json = [
        {"Content": "My father's name is Pierre.", "Translation": "Mon père s'appelle Pierre."},
        {"Content": "I have two brothers and one sister.", "Translation": "J'ai deux frères et une sœur."},
        {"Content": "My uncle is very kind.", "Translation": "Mon oncle est très gentil."},
        {"Content": "My sister is 25 years old.", "Translation": "Ma sœur a 25 ans."},
        {"Content": "My cousin loves to play football.", "Translation": "Mon cousin adore jouer au football."},
        {"Content": "My aunt is a talented artist.", "Translation": "Ma tante est une artiste talentueuse."},
        {"Content": "My grandfather is the oldest in the family.", "Translation": "Mon grand-père est le plus âgé de la famille."}
    ]

    lesson24Json = [
        {"Content": "I love to play the guitar.", "Translation": "J'adore jouer de la guitare."},
        {"Content": "She likes to hike in the mountains.", "Translation": "Elle aime faire de la randonnée en montagne."},
        {"Content": "My brother collects rare stamps.", "Translation": "Mon frère collectionne des timbres rares."},
        {"Content": "We like to watch movies on weekends.", "Translation": "Nous aimons regarder des films le week-end."},
        {"Content": "He is passionate about photography.", "Translation": "Il est passionné par la photographie."},
        {"Content": "She adores contemporary dance.", "Translation": "Elle adore la danse contemporaine."},
        {"Content": "They like to ride bicycles in the park.", "Translation": "Ils aiment faire du vélo dans le parc."}
    ]

    lesson25Json = [
        {"Content": "It's sunny today.", "Translation": "Il fait beau aujourd'hui."},
        {"Content": "The weather is very cold in winter.", "Translation": "Le temps est très froid en hiver."},
        {"Content": "There are clouds in the sky.", "Translation": "Il y a des nuages dans le ciel."},
        {"Content": "The wind is blowing very hard.", "Translation": "Le vent souffle très fort."},
        {"Content": "There is snow everywhere.", "Translation": "Il y a de la neige partout."},
        {"Content": "The sun is shining in the blue sky.", "Translation": "Le soleil brille dans le ciel bleu."},
        {"Content": "The weather is stormy this evening.", "Translation": "Le temps est orageux ce soir."}
    ]

    lesson26Json = [
        {"Content": "It's eight o'clock in the morning.", "Translation": "Il est huit heures du matin."},
        {"Content": "She needs to arrive at two thirty PM.", "Translation": "Elle doit arriver à quatorze heures trente."},
        {"Content": "Our appointment is at exactly five o'clock.", "Translation": "Nous avons rendez-vous à dix-sept heures pile."},
        {"Content": "The movie starts at seven forty-five PM.", "Translation": "Le film commence à dix-neuf heures quarante-cinq."},
        {"Content": "It's noon and a half.", "Translation": "Il est midi et demi."},
        {"Content": "I wake up at six o'clock every day.", "Translation": "Je me lève à six heures tous les jours."},
        {"Content": "It's a quarter to eleven in the evening.", "Translation": "Il est onze heures moins le quart du soir."}
    ]

    lesson27Json = [
        {"Content": "I am washing my hands.", "Translation": "Je me lave les mains."},
        {"Content": "She brushes her hair every morning.", "Translation": "Elle se brosse les cheveux tous les matins."},
        {"Content": "They wake up early on weekends.", "Translation": "Ils se réveillent tôt le week-end."},
        {"Content": "We dress quickly.", "Translation": "Nous nous habillons rapidement."},
        {"Content": "You are applying makeup for the evening.", "Translation": "Tu te maquilles pour la soirée."},
        {"Content": "He shaves every day.", "Translation": "Il se rase tous les jours."},
        {"Content": "They are getting ready for the party tonight.", "Translation": "Elles se préparent pour la fête ce soir."}
    ]

    lesson28Json = [
        {"Content": "Do you brush your teeth after every meal?", "Translation": "Est-ce que tu te brosses les dents après chaque repas?"},
        {"Content": "Does she wash her hands before eating?", "Translation": "Est-ce qu'elle se lave les mains avant de manger?"},
        {"Content": "Do they wake up early in the morning?", "Translation": "Est-ce qu'ils se réveillent tôt le matin?"},
        {"Content": "Do you dress formally at work?", "Translation": "Est-ce que vous vous habillez formellement au travail?"},
        {"Content": "Am I applying makeup for the party tonight?", "Translation": "Est-ce que je me maquille pour la soirée ce soir?"},
        {"Content": "Are they getting ready for the trip tomorrow?", "Translation": "Est-ce qu'ils se préparent pour le voyage demain?"},
        {"Content": "Do we get up early on weekdays?", "Translation": "Est-ce que nous nous levons tôt les jours de semaine?"}
    ]
    
    lesson29Json = [
        {"Content": "He eats pizza for dinner", "Translation": "Il mange une pizza au dîner."},
        {"Content": "She prepares a salad for lunch", "Translation": "Elle prépare une salade pour le déjeuner."},
        {"Content": "They drink orange juice for breakfast", "Translation": "Ils boivent du jus d'orange au petit déjeuner."},
        {"Content": "Do you like to eat fruits?", "Translation": "Est-ce que vous aimez manger des fruits?"},
        {"Content": "We are ordering sushi for dinner tonight", "Translation": "Nous commandons des sushis pour le dîner ce soir."},
        {"Content": "She cooks roasted chicken for lunch", "Translation": "Elle cuisine du poulet rôti pour le déjeuner."},
        {"Content": "They eat vegetables with their dinner", "Translation": "Ils mangent des légumes avec leur dîner."}
    ]

    lesson30ContentTranslation = [
        {"Content": "When do you get up in the morning?", "Translation": "Quand est-ce que tu te lèves le matin?"},
        {"Content": "Whom do you meet at the library?", "Translation": "Qui est-ce que vous rencontrez à la bibliothèque?"},
        {"Content": "How does she prepare for the wedding?", "Translation": "Comment est-ce qu'elle se prépare pour le mariage?"},
        {"Content": "How long do they rest in the afternoon?", "Translation": "Combien de temps est-ce qu'ils se reposent l'après-midi?"},
        {"Content": "What am I getting ready for dinner?", "Translation": "Quoi est-ce que je me prépare pour le dîner?"},
        {"Content": "Where do you have fun on Saturday night?", "Translation": "Où est-ce que vous vous amusez le samedi soir?"},
        {"Content": "Why do we dress formally?", "Translation": "Pourquoi est-ce que nous nous habillons formellement?"}
    ]
    
    lessonJSONData = [lesson1Json, lesson2Json, lesson3Json, lesson4Json, lesson5Json, lesson6Json, lesson7Json];
}