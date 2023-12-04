if (localStorage.getItem("currentLanguage") === "pt") {
    lessonNameData = ["Welcome to the Course!", "Greetings 1", "People 1", "People 2", "Time 1", "Introductions 1", "People 3", "Numbers 1", "Numbers 1", "Numbers 2", "Numbers 3", "Numbers 4", "Days of the Week 1", "Days of the Week 2", "Appearance 1", "Appearance 2", "Appearance 3", "Numbers 5", "Age 1", "Personality 1", "Countries 1", "Countries 2", "Family 1", "Hobbies 1", "Weather 1", "Time 1", "Daily Routine 1", "Questions 1", "Food 1", "Questions 2"];

    lesson1Json = [
        { "Content": "Olá. Eu me chamo Pedro.", "Translation": "Hello. I am called Pedro." },
        { "Content": "Oi. Tudo bem?", "Translation": "Hello. Is everything alright?" },
        { "Content": "o menino", "Translation": "the boy" },
        { "Content": "Olá. Como você te chama?", "Translation": "Hello. What are you called?" },
        { "Content": "Bom dia.", "Translation": "Have a nice day." },
        { "Content": "Você fala inglês?", "Translation": "Do you speak English?" },
        { "Content": "Bem-vindo ao curso!", "Translation": "Welcome to the course!" }
    ]

    lesson2Json = [
        { "Content": "Olá. Tudo bem?", "Translation": "Hello. How is it going?" },
        { "Content": "Tchau. Até mais.", "Translation": "Bye. See you soon." },
        { "Content": "Tudo bem, obrigado. Você também?", "Translation": "It is going well, thanks. And you?" },
        { "Content": "Como vai?", "Translation": "How are you?" },
        { "Content": "Boa noite.", "Translation": "Good night." },
        { "Content": "Tchau. Até mais.", "Translation": "Bye. See you soon." },
        { "Content": "Oi! Tudo joia.", "Translation": "Hi! I am doing great." },
    ]

    lesson3Json = [
        { "Content": "o menino", "Translation": "the boy" },
        { "Content": "o homem", "Translation": "the man" },
        { "Content": "a menina", "Translation": "the girl" },
        { "Content": "a mulher", "Translation": "the woman" },
        { "Content": "Sou um menino.", "Translation": "I am a boy." },
        { "Content": "Eu sou um homem.", "Translation": "I am a man." },
        { "Content": "Sou uma menina.", "Translation": "I am a girl." },
        { "Content": "Eu sou uma mulher.", "Translation": "I am a woman." },
    ]

    lesson4Json = [
        { "Content": "Você é um menino?", "Translation": "Are you a boy?" },
        { "Content": "Você é um homem?", "Translation": "Are you a man?" },
        { "Content": "Você é uma menina?", "Translation": "Are you a girl?" },
        { "Content": "Você é uma mulher?", "Translation": "Are you a woman?" },
        { "Content": "Você é um menino?", "Translation": "Are you a boy?" },
        { "Content": "Você é um homem?", "Translation": "Are you a man?" },
        { "Content": "Você é uma menina?", "Translation": "Are you a girl?" },
        { "Content": "Você é uma mulher?", "Translation": "Are you a woman?" },
    ]

    lesson5Json = [
        { "Content": "Bom dia.", "Translation": "Good Morning" },
        { "Content": "Hoje, eu trabalho.", "Translation": "Today, I work." },
        { "Content": "Você lê todos dias.", "Translation": "You read everyday." },
        { "Content": "ontem", "Translation": "yesterday" },
        { "Content": "amanhã e ontem", "Translation": "tomorrow and yesterday" },
        { "Content": "Ele não come.", "Translation": "He does not eat" },
        { "Content": "Ela não bebe.", "Translation": "She is not drinking." },
        { "Content": "não", "Translation": "do not ..." },
    ]

    lesson6Json = [
        { "Content": "Olá! Eu me chamo Pedro.", "Translation": "Hello! I am called Pedro." },
        { "Content": "Eu me chamo Carlos.", "Translation": "I am called Carlos." },
        { "Content": "Você se chama Maria.", "Translation": "You are called Maria" },
        { "Content": "Ele se chama Luiz.", "Translation": "Ele is called Luiz" },
        { "Content": "Como você se chama?", "Translation": "What are you called?" },
        { "Content": "Ela se chama Ana e ele se chama Carlos.", "Translation": "She is called Ana and he is called Carlos." },
        { "Content": "Você se chama Ana-Maria?", "Translation": "Are you called Ana-Maria?" },
    ]

    lesson7Json = [
        { "Content": "Ela é estudante. Ela gosto de escola", "Translation": "She is a student. She likes school." },
        { "Content": "Vamos à casa do Pedro. Nós somos amigos.", "Translation": "We are going to Pedro's house. We are friends." },
        { "Content": "Marco é meu amigo. Ele é muito simpático.", "Translation": "Marco is my friend. He is very nice." },
        { "Content": "Paulo fala inglês. Ele fala com a mãe dele.", "Translation": "Paulo speaks English. He talks with his mother." },
        { "Content": "Cheryl e eu são amigas. Nós gostamos de brincar.", "Translation": "Cheryl and I are friends. We like to play." },
        { "Content": "Eles falam.", "Translation": "They speak." },
        { "Content": "Eu falo françês.", "Translation": "I speak French." },
    ]

    lesson8Json = [
        { "Content": "um/uma", "Translation": "one" },
        { "Content": "dois/duas", "Translation": "two" },
        { "Content": "três", "Translation": "three" },
        { "Content": "quatro", "Translation": "four" },
        { "Content": "cinco", "Translation": "five" },
        { "Content": "seis", "Translation": "six" },
        { "Content": "sete", "Translation": "seven" },
        { "Content": "oito", "Translation": "eight" },
        { "Content": "nove", "Translation": "nine" },
        { "Content": "dez", "Translation": "ten" },
    ]

    lesson9Json = [
        { "Content": "um/uma", "Translation": "one" },
        { "Content": "dois/duas", "Translation": "two" },
        { "Content": "três", "Translation": "three" },
        { "Content": "quatro", "Translation": "four" },
        { "Content": "cinco", "Translation": "five" },
        { "Content": "seis", "Translation": "six" },
        { "Content": "sete", "Translation": "seven" },
        { "Content": "oito", "Translation": "eight" },
        { "Content": "nove", "Translation": "nine" },
        { "Content": "dez", "Translation": "ten" },
    ]

    lesson10Json = [
        { "Content": "Eu tenho um gato.", "Translation": "I have a cat." },
        { "Content": "Eu tenho dois cachorros.", "Translation": "I have two dogs." },
        { "Content": "Você tem três animais.", "Translation": "Do you have three animals?" },
        { "Content": "Ele tem quatro amigos.", "Translation": "He has four friends." },
        { "Content": "Ela tem cinco jogos de vídeo.", "Translation": "She has five video games." },
        { "Content": "Eles têm seis canetas.", "Translation": "They have six pens." },
        { "Content": "Elas têm sete cadernos.", "Translation": "They have seven notebooks." },
        { "Content": "Eu tenho uma cartão.", "Translation": "I have one card." }
    ]

    lesson11Json = [
        {"Content": "onze", "Translation": "eleven"},
        {"Content": "doze", "Translation": "twelve"},
        {"Content": "treze", "Translation": "thirteen"},
        {"Content": "quatorze", "Translation": "fourteen"},
        {"Content": "quinze", "Translation": "fifteen"},
        {"Content": "dezesseis", "Translation": "sixteen"},
        {"Content": "dezessete", "Translation": "seventeen"},
        {"Content": "dezoito", "Translation": "eighteen"},
        {"Content": "deznove", "Translation": "nineteen"},
        {"Content": "vinte", "Translation": "twenty"}
    ]
    
    lesson12Json = [
        {"Content": "vinte e um", "Translation": "twenty-one"},
        {"Content": "vinte e dois", "Translation": "twenty-two"},
        {"Content": "vinte e três", "Translation": "twenty-three"},
        {"Content": "vinte e quatro", "Translation": "twenty-four"},
        {"Content": "vinte e cinco", "Translation": "twenty-five"},
        {"Content": "vinte e sez", "Translation": "twenty-six"},
        {"Content": "vinte e sete", "Translation": "twenty-seven"},
        {"Content": "vinte e oito", "Translation": "twenty-eight"},
        {"Content": "vinte e nove", "Translation": "twenty-nine"},
        {"Content": "trinta", "Translation": "thirty"}
    ]
    
    lesson13Json = [
        {"Content": "Segunda-feira", "Translation": "Monday"},
        {"Content": "Terça-feira", "Translation": "Tuesday"},
        {"Content": "Quarta-feira", "Translation": "Wednesday"},
        {"Content": "Quinta-feira", "Translation": "Thursday"},
        {"Content": "Sexta-feira", "Translation": "Friday"},
        {"Content": "Sábado", "Translation": "Saturday"},
        {"Content": "Domingo", "Translation": "Sunday"}
    ]

    lesson14Json = [
        {"Content": "Aos domingos, ela assiste a filmes.", "Translation": "On Sundays, she watches movies."},
        {"Content": "Às segundas-feiras, eu como pizza.", "Translation": "On Mondays, I eat pizza."},
        {"Content": "Às terças-feiras, você vai ao parque.", "Translation": "On Tuesdays, you go to the park."},
        {"Content": "Às quartas-feiras, ele vai ao trabalho.", "Translation": "On Wednesdays, he goes to work."},
        {"Content": "Às quintas-feiras, fazemos compras.", "Translation": "On Thursdays, we do our shopping."},
        {"Content": "Às sextas-feiras, ela encontra seus amigos.", "Translation": "On Fridays, she meets her friends."},
        {"Content": "Aos sábados, eles praticam esportes.", "Translation": "On Saturdays, they do sports."}
    ]
    
    lesson15Json = [
        {"Content": "Ela tem olhos castanhos.", "Translation": "She has brown eyes."},
        {"Content": "Ele tem olhos azuis.", "Translation": "He has blue eyes."},
        {"Content": "Eu tenho olhos verdes.", "Translation": "I have green eyes."},
        {"Content": "Eles têm olhos cor de avelã.", "Translation": "They have hazel eyes."},
        {"Content": "Ela tem olhos cinza.", "Translation": "She has gray eyes."}
    ]
    
    lesson16Json = [
        {"Content": "Ela tem cabelos loiros.", "Translation": "She has blonde hair."},
        {"Content": "Ele tem cabelos castanhos.", "Translation": "He has brown hair."},
        {"Content": "Eu tenho cabelos pretos.", "Translation": "I have black hair."},
        {"Content": "Eles têm cabelos ruivos.", "Translation": "They have red hair."},
        {"Content": "Ela tem cabelos castanhos.", "Translation": "She has brown hair."},
        {"Content": "Nós temos cabelos loiros.", "Translation": "We have blonde hair."},
        {"Content": "Eles têm cabelos pretos.", "Translation": "They have black hair."}
    ]
    
    lesson17Json = [
        {"Content": "Ela tem cabelos longos e cacheados.", "Translation": "She has long and curly hair."},
        {"Content": "Ele tem cabelos raspados.", "Translation": "He has shaved hair."},
        {"Content": "Ela tem cabelos médios e lisos.", "Translation": "She has medium length and straight hair."},
        {"Content": "Ele tem cabelos cacheados.", "Translation": "He has curly hair."},
        {"Content": "Ela tem cabelos muito curtos.", "Translation": "She has very short hair."},
        {"Content": "Ele tem cabelos ondulados.", "Translation": "He has wavy hair."},
        {"Content": "Ela tem cabelos cacheados.", "Translation": "She has curly hair."}
    ]
    
    lesson18Json = [
        {"Content": "Ele tem trinta anos.", "Translation": "He is thirty years old."},
        {"Content": "Ela tem quarenta e cinco dólares.", "Translation": "She has forty-five dollars."},
        {"Content": "Há sessenta segundos em um minuto.", "Translation": "There are sixty seconds in a minute."},
        {"Content": "Ele tem oitenta libras.", "Translation": "He weighs eighty pounds."},
        {"Content": "Ela tem cinquenta e cinco maçãs.", "Translation": "She has fifty-five apples."},
        {"Content": "Há trezentos e sessenta e cinco dias em um ano.", "Translation": "There are three hundred sixty-five days in a year."},
        {"Content": "Ele tem setenta funcionários.", "Translation": "He has seventy employees."}
    ]
    
    lesson19Json = [
        {"Content": "Ela tem vinte e dois anos.", "Translation": "She is twenty-two years old."},
        {"Content": "Ele tem trinta e sete anos.", "Translation": "He is thirty-seven years old."},
        {"Content": "Ela tem dezenove anos.", "Translation": "She is nineteen years old."},
        {"Content": "Ele tem cinquenta e um anos.", "Translation": "He is fifty-one years old."},
        {"Content": "Ela tem vinte e seis anos.", "Translation": "She is twenty-six years old."},
        {"Content": "Ele tem sessenta e três anos.", "Translation": "He is sixty-three years old."},
        {"Content": "Ela tem quarenta e sete anos.", "Translation": "She is forty-seven years old."}
    ]
    
    lesson20Json = [
        {"Content": "Ela é muito gentil.", "Translation": "She is very kind."},
        {"Content": "Ele é muito engraçado.", "Translation": "He is very funny."},
        {"Content": "Ela é muito séria.", "Translation": "She is very serious."},
        {"Content": "Ele é muito tímido.", "Translation": "He is very shy."},
        {"Content": "Ela é muito sociável.", "Translation": "She is very sociable."},
        {"Content": "Ele é muito calmo.", "Translation": "He is very calm."},
        {"Content": "Ela é muito enérgica.", "Translation": "She is very energetic."}
    ]
    
    lesson21Json = [
        {"Content": "China", "Translation": "China"},
        {"Content": "Os Estados Unidos", "Translation": "The United States"},
        {"Content": "Japão", "Translation": "Japan"},
        {"Content": "Índia", "Translation": "India"},
        {"Content": "Brasil", "Translation": "Brazil"},
        {"Content": "Rússia", "Translation": "Russia"},
        {"Content": "Alemanha", "Translation": "Germany"},
        {"Content": "França", "Translation": "France"},
        {"Content": "Inglaterra", "Translation": "England"}
    ]

    lesson22Json = [
        {"Content": "Eu sou chinês.", "Question": "Which nationality is 'Eu'?", "Answers": ["Chinese"], "Options": ["Chinese", "Indian", "Brazilian", "Russian"], "Translation": "I am Chinese."},
        {"Content": "Você é americano.", "Question": "Which nationality is 'Você'?", "Answers": ["American"], "Options": ["American", "British", "Canadian", "Australian"], "Translation": "You are American."},
        {"Content": "Ele é japonês.", "Question": "Which nationality is 'Ele'?", "Answers": ["Japanese"], "Options": ["Japanese", "South Korean", "German", "French"], "Translation": "He is Japanese."},
        {"Content": "Ela é indiana.", "Question": "Which nationality is 'Ela'?", "Answers": ["Indian"], "Options": ["Indian", "Pakistani", "Bangladeshi", "Nepali"], "Translation": "She is Indian."},
        {"Content": "Nós somos brasileiros.", "Question": "Which nationality is 'Nós'?", "Answers": ["Brazilian"], "Options": ["Brazilian", "Argentinian", "Mexican", "Colombian"], "Translation": "We are Brazilian."},
        {"Content": "Vocês são russos.", "Question": "Which nationality is 'Vocês'?", "Answers": ["Russian"], "Options": ["Russian", "German", "Canadian", "Chinese"], "Translation": "You are Russian."},
        {"Content": "Eles são alemães.", "Question": "Which nationality is 'Eles'?", "Answers": ["German"], "Options": ["German", "French", "Italian", "Spanish"], "Translation": "They are German."},
        {"Content": "Elas são francesas.", "Question": "Which nationality is 'Elas'?", "Answers": ["French"], "Options": ["French", "Spanish", "Italian", "German"], "Translation": "They are French."},
        {"Content": "A gente é ingleses.", "Question": "Which nationality is 'A gente'?", "Answers": ["English"], "Options": ["English", "Scottish", "Irish", "Welsh"], "Translation": "We are English."}
    ]
    
    lesson23Json = [
        {"Content": "Meu pai se chama Pedro.", "Question": "Who is 'Pedro'?", "Answers": ["My Father"], "Options": ["My Father", "My Mother", "My Brother", "My Sister"], "Translation": "My father's name is Pedro."},
        {"Content": "Eu tenho dois irmãos e uma irmã.", "Question": "How many siblings do I have?", "Answers": ["Three"], "Options": ["Three", "One", "Four", "Two"], "Translation": "I have two brothers and one sister."},
        {"Content": "Meu tio é muito gentil.", "Question": "Who is 'oncle'?", "Answers": ["My Uncle"], "Options": ["My Uncle", "My Aunt", "My Cousin", "My Brother"], "Translation": "My uncle is very kind."},
        {"Content": "Minha irmã tem 25 anos.", "Question": "Who is 'sœur'?", "Answers": ["My Sister"], "Options": ["My Sister", "My Mother", "My Aunt", "My Cousin"], "Translation": "My sister is 25 years old."},
        {"Content": "Meu primo adora jogar futebol.", "Question": "Who loves to play football?", "Answers": ["My Cousin"], "Options": ["My Cousin", "My Brother", "My Father", "My Uncle"], "Translation": "My cousin loves to play football."},
        {"Content": "Minha tia é uma artista talentosa.", "Question": "Who is 'tante'?", "Answers": ["My Aunt"], "Options": ["My Aunt", "My Mother", "My Sister", "My Grandmother"], "Translation": "My aunt is a talented artist."},
        {"Content": "Meu avô é o mais velho da família.", "Question": "Who is the oldest in the family?", "Answers": ["My Grandfather"], "Options": ["My Grandfather", "My Father", "My Uncle", "My Cousin"], "Translation": "My grandfather is the oldest in the family."}
    ]
    
    lesson24Json = [
        {"Content": "Eu adoro tocar violão.", "Question": "What do I love to do?", "Answers": ["Play the guitar"], "Options": ["Play the guitar", "Paint", "Cook", "Read books"], "Translation": "I love to play the guitar."},
        {"Content": "Ela gosta de fazer trilhas na montanha.", "Question": "What does she like to do in the mountains?", "Answers": ["Hike"], "Options": ["Hike", "Ski", "Swim", "Picnic"], "Translation": "She likes to hike in the mountains."},
        {"Content": "Meu irmão coleciona selos raros.", "Question": "What does my brother collect?", "Answers": ["Rare stamps"], "Options": ["Rare stamps", "Coins", "Action figures", "Books"], "Translation": "My brother collects rare stamps."},
        {"Content": "Nós gostamos de assistir filmes no fim de semana.", "Question": "What do we like to do on weekends?", "Answers": ["Watch movies"], "Options": ["Watch movies", "Play sports", "Go shopping", "Read newspapers"], "Translation": "We like to watch movies on weekends."},
        {"Content": "Ele é apaixonado por fotografia.", "Question": "What is he passionate about?", "Answers": ["Photography"], "Options": ["Photography", "Cooking", "Gardening", "Playing chess"], "Translation": "He is passionate about photography."},
        {"Content": "Ela adora dança contemporânea.", "Question": "What does she adore?", "Answers": ["Contemporary dance"], "Options": ["Contemporary dance", "Classical music", "Rock climbing", "Reading novels"], "Translation": "She adores contemporary dance."},
        {"Content": "Eles gostam de andar de bicicleta no parque.", "Question": "What do they like to do in the park?", "Answers": ["Ride bicycles"], "Options": ["Ride bicycles", "Play soccer", "Picnic", "Paint"], "Translation": "They like to ride bicycles in the park."}
    ]
    
    lesson25Json = [
        {"Content": "Está fazendo sol hoje.", "Question": "What is the weather like today?", "Answers": ["It's sunny"], "Options": ["It's sunny", "It's rainy", "It's snowy", "It's windy"], "Translation": "It's sunny today."},
        {"Content": "O tempo está muito frio no inverno.", "Question": "What is the weather like in winter?", "Answers": ["It's very cold"], "Options": ["It's very cold", "It's hot", "It's mild", "It's rainy"], "Translation": "The weather is very cold in winter."},
        {"Content": "Tem nuvens no céu.", "Question": "What is in the sky?", "Answers": ["Clouds"], "Options": ["Clouds", "Stars", "Sun", "Moon"], "Translation": "There are clouds in the sky."},
        {"Content": "O vento está soprando muito forte.", "Question": "What is happening with the wind?", "Answers": ["It's blowing very hard"], "Options": ["It's blowing very hard", "It's calm", "It's drizzling", "It's snowing"], "Translation": "The wind is blowing very hard."},
        {"Content": "Está nevando por toda parte.", "Question": "What is everywhere?", "Answers": ["Snow"], "Options": ["Snow", "Rain", "Sunshine", "Fog"], "Translation": "There is snow everywhere."},
        {"Content": "O sol está brilhando no céu azul.", "Question": "What is shining in the blue sky?", "Answers": ["The sun"], "Options": ["The sun", "The moon", "Stars", "Clouds"], "Translation": "The sun is shining in the blue sky."},
        {"Content": "O tempo está tempestuoso esta noite.", "Question": "What is the weather like this evening?", "Answers": ["It's stormy"], "Options": ["It's stormy", "It's clear", "It's foggy", "It's chilly"], "Translation": "The weather is stormy this evening."}
    ]
    
    lesson26Json = [
        {
            "Content": "São oito horas da manhã.",
            "Translation": "It's eight o'clock in the morning."
        },
        {
            "Content": "Ela deve chegar às quatorze horas e trinta minutos.",
            "Translation": "She needs to arrive at two thirty PM."
        },
        {
            "Content": "Temos um compromisso exatamente às cinco horas.",
            "Translation": "Our appointment is at exactly five o'clock."
        },
        {
            "Content": "O filme começa às dezenove horas e quarenta e cinco minutos.",
            "Translation": "The movie starts at seven forty-five PM."
        },
        {
            "Content": "São meio-dia e meia.",
            "Translation": "It's noon and a half."
        },
        {
            "Content": "Eu me levanto às seis horas todos os dias.",
            "Translation": "I wake up at six o'clock every day."
        },
        {
            "Content": "São onze horas menos quinze minutos da noite.",
            "Translation": "It's a quarter to eleven in the evening."
        }
    ];

    lesson27Json = [
        {
            "Content": "Eu lavo as mãos.",
            "Translation": "I am washing my hands."
        },
        {
            "Content": "Ela escova os cabelos todas as manhãs.",
            "Translation": "She brushes her hair every morning."
        },
        {
            "Content": "Eles acordam cedo nos fins de semana.",
            "Translation": "They wake up early on weekends."
        },
        {
            "Content": "Nós nos vestimos rapidamente.",
            "Translation": "We dress quickly."
        },
        {
            "Content": "Você se maquia para a noite.",
            "Translation": "You are applying makeup for the evening."
        },
        {
            "Content": "Ele se barbeia todos os dias.",
            "Translation": "He shaves every day."
        },
        {
            "Content": "Elas se preparam para a festa esta noite.",
            "Translation": "They are getting ready for the party tonight."
        }
    ];
    
    lesson28Json = [
        {
            "Content": "Você escova os dentes após cada refeição?",
            "Translation": "Do you brush your teeth after every meal?"
        },
        {
            "Content": "Ela lava as mãos antes de comer?",
            "Translation": "Does she wash her hands before eating?"
        },
        {
            "Content": "Eles acordam cedo de manhã?",
            "Translation": "Do they wake up early in the morning?"
        },
        {
            "Content": "Você se veste formalmente no trabalho?",
            "Translation": "Do you dress formally at work?"
        },
        {
            "Content": "Estou me maquiando para a festa hoje à noite?",
            "Translation": "Am I applying makeup for the party tonight?"
        },
        {
            "Content": "Eles estão se preparando para a viagem amanhã?",
            "Translation": "Are they getting ready for the trip tomorrow?"
        },
        {
            "Content": "Nós levantamos cedo nos dias de semana?",
            "Translation": "Do we get up early on weekdays?"
        }
    ];
    
    lesson29Json = [
        {
            "Content": "Ele come pizza no jantar",
            "Translation": "He eats pizza for dinner."
        },
        {
            "Content": "Ela prepara uma salada para o almoço",
            "Translation": "She prepares a salad for lunch."
        },
        {
            "Content": "Eles bebem suco de laranja no café da manhã",
            "Translation": "They drink orange juice for breakfast."
        },
        {
            "Content": "Você gosta de comer frutas?",
            "Translation": "Do you like to eat fruits?"
        },
        {
            "Content": "Estamos pedindo sushi para o jantar hoje à noite",
            "Translation": "We are ordering sushi for dinner tonight."
        },
        {
            "Content": "Ela cozinha frango assado para o almoço",
            "Translation": "She cooks roasted chicken for lunch."
        },
        {
            "Content": "Eles comem vegetais no jantar",
            "Translation": "They eat vegetables with their dinner."
        }
    ];
    
    lesson30Json = [
        {
            "Content": "Quando você se levanta de manhã?",
            "Translation": "When do you get up in the morning?"
        },
        {
            "Content": "Com quem você se encontra na biblioteca?",
            "Translation": "Whom do you meet at the library?"
        },
        {
            "Content": "Como ela se prepara para o casamento?",
            "Translation": "How does she prepare for the wedding?"
        },
        {
            "Content": "Quanto tempo eles descansam à tarde?",
            "Translation": "How long do they rest in the afternoon?"
        },
        {
            "Content": "Para o que estou me preparando para o jantar?",
            "Translation": "What am I getting ready for dinner?"
        },
        {
            "Content": "Onde você se diverte no sábado à noite?",
            "Translation": "Where do you have fun on Saturday night?"
        },
        {
            "Content": "Por que nos vestimos formalmente?",
            "Translation": "Why do we dress formally?"
        }
    ];

    lessonJSONData = [lesson1Json, lesson2Json, lesson3Json, lesson4Json, lesson5Json, lesson6Json, lesson7Json, lesson8Json, lesson9Json, lesson10Json, lesson11Json, lesson12Json, lesson13Json, lesson14Json, lesson15Json, lesson16Json, lesson17Json, lesson18Json, lesson19Json, lesson20Json, lesson21Json, lesson22Json, lesson23Json, lesson24Json, lesson25Json, lesson26Json, lesson27Json, lesson28Json, lesson29Json, lesson30Json];
}