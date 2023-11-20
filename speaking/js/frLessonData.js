//No, you need to provide the Content key, and a translation from French to English


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

    lesson14Json = [
        { "Content": "Le dimanche, elle regarde des films.", "Translation": "On Sundays, she watches movies." },
        { "Content": "Le lundi, je mange de la pizza.", "Translation": "On Mondays, I eat pizza." },
        { "Content": "Le mardi, tu vas au parc.", "Translation": "On Tuesdays, you go to the park." },
        { "Content": "Le mercredi, il va au travail.", "Translation": "On Wednesdays, he goes to work." },
        { "Content": "Le jeudi, nous faisons nos courses.", "Translation": "On Thursdays, we do our shopping." },
        { "Content": "Le vendredi, elle retrouve ses amis.", "Translation": "On Fridays, she meets her friends." },
        { "Content": "Le samedi, ils font du sport.", "Translation": "On Saturdays, they do sports." }
    ];

    lesson15Json = [
        [
            { "Content": "Elle a les yeux marron.", "Question": "What color are her eyes?", "Translation": "She has brown eyes." },
            { "Content": "Il a les yeux bleus.", "Question": "What color are his eyes?", "Translation": "He has blue eyes." },
            { "Content": "J'ai les yeux verts.", "Question": "What color are my eyes?", "Translation": "I have green eyes." },
            { "Content": "Ils ont les yeux noisette.", "Question": "What color are their eyes?", "Translation": "They have hazel eyes." },
            { "Content": "Elle a les yeux gris.", "Question": "What color are her eyes?", "Translation": "She has grey eyes." }
        ]
    ];

    lesson16Json = [
        { "Content": "Elle a les cheveux blonds.", "Translation": "She has blonde hair." },
        { "Content": "Il a les cheveux bruns.", "Translation": "He has brown hair." },
        { "Content": "J'ai les cheveux noirs.", "Translation": "I have black hair." },
        { "Content": "Ils ont les cheveux roux.", "Translation": "They have red hair." },
        { "Content": "Elle a les cheveux châtains.", "Translation": "She has chestnut brown hair." },
        { "Content": "Nous avons les cheveux blonds.", "Translation": "We have blonde hair." },
        { "Content": "Ils ont les cheveux noirs.", "Translation": "They have black hair." }
    ];

    lesson17Json = [
        { "Content": "Elle a les cheveux longs et bouclés.", "Translation": "She has long and curly hair." },
        { "Content": "Il a les cheveux rasés.", "Translation": "He has shaved hair." },
        { "Content": "Elle a les cheveux mi-longs et raides.", "Translation": "She has medium length and straight hair." },
        { "Content": "Il a les cheveux frisés.", "Translation": "He has curly hair." },
        { "Content": "Elle a les cheveux très courts.", "Translation": "She has very short hair." },
        { "Content": "Il a les cheveux ondulés.", "Translation": "He has wavy hair." },
        { "Content": "Elle a les cheveux bouclés.", "Translation": "She has curly hair." }
    ];

    lesson18Json = [
        { "Content": "Il a trente ans.", "Translation": "He is thirty years old." },
        { "Content": "Elle a quarante-cinq dollars.", "Translation": "She has forty-five dollars." },
        { "Content": "Il y a soixante secondes dans une minute.", "Translation": "There are sixty seconds in a minute." },
        { "Content": "Il a quatre-vingts livres.", "Translation": "He weighs eighty pounds." },
        { "Content": "Elle a cinquante-cinq pommes.", "Translation": "She has fifty-five apples." },
        { "Content": "Il y a trois cent soixante-cinq jours dans une année.", "Translation": "There are three hundred sixty-five days in a year." },
        { "Content": "Il a soixante-dix employés.", "Translation": "He has seventy employees." }
    ];

    lesson19Json = [
        { "Content": "Elle a vingt-deux ans.", "Translation": "She is twenty-two years old." },
        { "Content": "Il a trente-sept ans.", "Translation": "He is thirty-seven years old." },
        { "Content": "Elle a dix-neuf ans.", "Translation": "She is nineteen years old." },
        { "Content": "Il a cinquante-et-un ans.", "Translation": "He is fifty-one years old." },
        { "Content": "Elle a vingt-six ans.", "Translation": "She is twenty-six years old." },
        { "Content": "Il a soixante-trois ans.", "Translation": "He is sixty-three years old." },
        { "Content": "Elle a quarante-sept ans.", "Translation": "She is forty-seven years old." }
    ];

    lesson20Json = [
        { "Content": "Elle est très gentille.", "Translation": "She is very kind." },
        { "Content": "Il est très drôle.", "Translation": "He is very funny." },
        { "Content": "Elle est très sérieuse.", "Translation": "She is very serious." },
        { "Content": "Il est très timide.", "Translation": "He is very shy." },
        { "Content": "Elle est très sociable.", "Translation": "She is very sociable." },
        { "Content": "Il est très calme.", "Translation": "He is very calm." },
        { "Content": "Elle est très énergique.", "Translation": "She is very energetic." }
    ];

    lesson21Json = [
        { "Content": "La Chine", "Translation": "China" },
        { "Content": "Les États-Unis", "Translation": "The United States" },
        { "Content": "Le Japon", "Translation": "Japan" },
        { "Content": "L'Inde", "Translation": "India" },
        { "Content": "Le Brésil", "Translation": "Brazil" },
        { "Content": "La Russie", "Translation": "Russia" },
        { "Content": "L'Allemagne", "Translation": "Germany" },
        { "Content": "La France", "Translation": "France" },
        { "Content": "L'Angleterre", "Translation": "England" }
    ];

    lesson22Json = [
        { "Content": "Je suis chinois.", "Translation": "I am Chinese." },
        { "Content": "Tu es américain.", "Translation": "You are American." },
        { "Content": "Il est japonais.", "Translation": "He is Japanese." },
        { "Content": "Elle est indienne.", "Translation": "She is Indian." },
        { "Content": "Nous sommes brésiliens.", "Translation": "We are Brazilian." },
        { "Content": "Vous êtes russes.", "Translation": "You are Russian." },
        { "Content": "Ils sont allemands.", "Translation": "They are German." },
        { "Content": "Elles sont françaises.", "Translation": "They are French." },
        { "Content": "On est anglais.", "Translation": "We are English." }
    ];

    lesson23Json = [
        { "Content": "Mon père s'appelle Pierre.", "Translation": "My father's name is Pierre." },
        { "Content": "J'ai deux frères et une sœur.", "Translation": "I have two brothers and one sister." },
        { "Content": "Mon oncle est très gentil.", "Translation": "My uncle is very kind." },
        { "Content": "Ma sœur a 25 ans.", "Translation": "My sister is 25 years old." },
        { "Content": "Mon cousin adore jouer au football.", "Translation": "My cousin loves to play football." },
        { "Content": "Ma tante est une artiste talentueuse.", "Translation": "My aunt is a talented artist." },
        { "Content": "Mon grand-père est le plus âgé de la famille.", "Translation": "My grandfather is the oldest in the family." }
    ];

    lesson24Json = [
        { "Content": "J'adore jouer de la guitare.", "Translation": "I love to play the guitar." },
        { "Content": "Elle aime faire de la randonnée en montagne.", "Translation": "She likes to hike in the mountains." },
        { "Content": "Mon frère collectionne des timbres rares.", "Translation": "My brother collects rare stamps." },
        { "Content": "Nous aimons regarder des films le week-end.", "Translation": "We like to watch movies on weekends." },
        { "Content": "Il est passionné par la photographie.", "Translation": "He is passionate about photography." },
        { "Content": "Elle adore la danse contemporaine.", "Translation": "She adores contemporary dance." },
        { "Content": "Ils aiment faire du vélo dans le parc.", "Translation": "They like to ride bicycles in the park." }
    ];

    lesson25Json = [
        { "Content": "Il fait beau aujourd'hui.", "Translation": "It's sunny today." },
        { "Content": "Le temps est très froid en hiver.", "Translation": "It's very cold in winter." },
        { "Content": "Il y a des nuages dans le ciel.", "Translation": "There are clouds in the sky." },
        { "Content": "Le vent souffle très fort.", "Translation": "It's blowing very hard." },
        { "Content": "Il y a de la neige partout.", "Translation": "There is snow everywhere." },
        { "Content": "Le soleil brille dans le ciel bleu.", "Translation": "The sun is shining in the blue sky." },
        { "Content": "Le temps est orageux ce soir.", "Translation": "It's stormy this evening." }
    ];

    lesson26Json = [
        { "Content": "Il est huit heures du matin.", "Translation": "It's eight o'clock in the morning" },
        { "Content": "Elle doit arriver à quatorze heures trente.", "Translation": "She needs to arrive at two thirty PM" },
        { "Content": "Nous avons rendez-vous à dix-sept heures pile.", "Translation": "Our appointment is at exactly five o'clock" },
        { "Content": "Le film commence à dix-neuf heures quarante-cinq.", "Translation": "The movie starts at seven forty-five PM" },
        { "Content": "Il est midi et demi.", "Translation": "It's noon and a half" },
        { "Content": "Je me lève à six heures tous les jours.", "Translation": "I wake up at six o'clock every day" },
        { "Content": "Il est onze heures moins le quart du soir.", "Translation": "It's a quarter to eleven in the evening" }
    ];

    lesson27Json = [
        { "Content": "Je me lave les mains.", "Translation": "I am washing my hands." },
        { "Content": "Elle se brosse les cheveux tous les matins.", "Translation": "She brushes her hair every morning." },
        { "Content": "Ils se réveillent tôt le week-end.", "Translation": "They wake up early on weekends." },
        { "Content": "Nous nous habillons rapidement.", "Translation": "We dress quickly." },
        { "Content": "Tu te maquilles pour la soirée.", "Translation": "You are applying makeup for the evening." },
        { "Content": "Il se rase tous les jours.", "Translation": "He shaves every day." },
        { "Content": "Elles se préparent pour la fête ce soir.", "Translation": "They are getting ready for the party tonight." }
    ];

    lesson28Json = [
        { "Content": "Est-ce que tu te brosses les dents après chaque repas?", "Translation": "Do you brush your teeth after every meal?" },
        { "Content": "Est-ce qu'elle se lave les mains avant de manger?", "Translation": "Does she wash her hands before eating?" },
        { "Content": "Est-ce qu'ils se réveillent tôt le matin?", "Translation": "Do they wake up early in the morning?" },
        { "Content": "Est-ce que vous vous habillez formellement au travail?", "Translation": "Do you dress formally at work?" },
        { "Content": "Est-ce que je me maquille pour la soirée ce soir?", "Translation": "Am I applying makeup for the party tonight?" },
        { "Content": "Est-ce qu'ils se préparent pour le voyage demain?", "Translation": "Are they getting ready for the trip tomorrow?" },
        { "Content": "Est-ce que nous nous levons tôt les jours de semaine?", "Translation": "Do we get up early on weekdays?" }
    ];

    lesson29Json = [
        { "Content": "Il mange une pizza au dîner.", "Translation": "He eats pizza for dinner." },
        { "Content": "Elle prépare une salade pour le déjeuner.", "Translation": "She prepares a salad for lunch." },
        { "Content": "Ils boivent du jus d'orange au petit déjeuner.", "Translation": "They drink orange juice for breakfast." },
        { "Content": "Est-ce que vous aimez manger des fruits?", "Translation": "Do you like to eat fruits?" },
        { "Content": "Nous commandons des sushis pour le dîner ce soir.", "Translation": "We are ordering sushi for dinner tonight." },
        { "Content": "Elle cuisine du poulet rôti pour le déjeuner.", "Translation": "She cooks roasted chicken for lunch." },
        { "Content": "Ils mangent des légumes avec leur dîner.", "Translation": "They eat vegetables with their dinner." }
    ];

    lesson30Json = [
        { "Content": "Quand est-ce que tu te lèves le matin?", "Translation": "When do you get up in the morning?" },
        { "Content": "Qui est-ce que vous rencontrez à la bibliothèque?", "Translation": "Whom do you meet at the library?" },
        { "Content": "Comment est-ce qu'elle se prépare pour le mariage?", "Translation": "How does she prepare for the wedding?" },
        { "Content": "Combien de temps est-ce qu'ils se reposent l'après-midi?", "Translation": "How long do they rest in the afternoon?" },
        { "Content": "Quoi est-ce que je me prépare pour le dîner?", "Translation": "What am I getting ready for dinner?" },
        { "Content": "Où est-ce que vous vous amusez le samedi soir?", "Translation": "Where do you have fun on Saturday night?" },
        { "Content": "Pourquoi est-ce que nous nous habillons formellement?", "Translation": "Why do we dress formally?" }
    ];



    lessonJSONData = [lesson1Json, lesson2Json, lesson3Json, lesson4Json, lesson5Json, lesson6Json, lesson7Json, lesson8Json, lesson9Json, lesson10Json, lesson11Json, lesson12Json, lesson13Json, lesson14Json, lesson15Json, lesson16Json, lesson17Json, lesson18Json, lesson19Json, lesson20Json, lesson21Json, lesson22Json, lesson23Json, lesson24Json, lesson25Json, lesson26Json, lesson27Json, lesson28Json, lesson29Json, lesson30Json];
}