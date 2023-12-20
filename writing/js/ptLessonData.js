if (localStorage.getItem("currentLanguage") === "pt") {

    lessonNameData = ["Welcome to the Course!", "Greetings 1", "People 1", "People 2", "Time 1", "Introductions 1", "People 3", "Numbers 1", "Numbers 1", "Numbers 2", "Numbers 3", "Numbers 4", "Days of the Week 1", "Days of the Week 2", "Appearance 1", "Appearance 2", "Appearance 3", "Numbers 5", "Age 1", "Personality 1", "Countries 1", "Countries 2", "Family 1", "Hobbies 1", "Weather 1", "Time 1", "Daily Routine 1", "Questions 1", "Food 1", "Questions 2"];
   
    lesson1Json = [
        { "Content": "Hello! I am called Pierre.", "Translation": "Olá! Eu me chamo Pierre." },
        { "Content": "the boy", "Translation": "o menino" },
        { "Content": "Hello. What are you called?", "Translation": "Olá. Como você se chama?" },
        { "Content": "Have a nice day.", "Translation": "Tenha um bom dia." },
        { "Content": "Is everything alright?", "Translation": "Está tudo bem?" },
        { "Content": "Do you speak English?", "Translation": "Você fala inglês?" },
        { "Content": "Welcome to the course!", "Translation": "Bem-vindo ao curso!" }
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
        { "Content": "Are you a boy?", "Translation": "Você é um menino?" },
        { "Content": "Are you a man?", "Translation": "Você é um homem?" },
        { "Content": "Are you a girl?", "Translation": "Você é uma menina?" },
        { "Content": "Are you a woman?", "Translation": "Você é uma mulher?" },
        { "Content": "Are you a boy? Yes, I am a boy.", "Translation": "Você é um menino? Sim, eu sou um menino." },
        { "Content": "Are you a man? Yes, I am a man.", "Translation": "Você é um homem? Sim, eu sou um homem." },
        { "Content": "Are you a girl? Yes, I am a girl.", "Translation": "Você é uma menina? Sim, eu sou uma menina." },
        { "Content": "Are you a woman? Yes, I am a woman.", "Translation": "Você é uma mulher? Sim, eu sou uma mulher." }
    ]
    
    lesson5Json = [
        { "Content": "Have a good day", "Translation": "Tenha um bom dia." },
        { "Content": "Today, I work.", "Translation": "Hoje, eu trabalho." },
        { "Content": "You read every day.", "Translation": "Você lê todos os dias." },
        { "Content": "yesterday", "Translation": "ontem" },
        { "Content": "Tomorrow and yesterday", "Translation": "Amanhã e ontem" },
        { "Content": "He does not eat.", "Translation": "Ele não come." },
        { "Content": "do not ...", "Translation": "não ..." }
    ]
    
    lesson6Json = [
        { "Content": "Hello! I am called Pierre.", "Translation": "Olá! Me chamo Pierre." },
        { "Content": "I am called Jacques.", "Translation": "Me chamo Jacques." },
        { "Content": "You are called Louis", "Translation": "Você se chama Louis." },
        { "Content": "He is called Charles", "Translation": "Ele se chama Charles." },
        { "Content": "What are you called?", "Translation": "Como você se chama?" },
        { "Content": "She is called Fleur and he is called George.", "Translation": "Ela se chama Fleur e ele se chama George." },
        { "Content": "You are called Nathaniel", "Translation": "Você se chama Nathaniel?" }
    ]
    
    lesson7Json = [
        { "Content": "She is a student. She likes school.", "Translation": "Ela é estudante. Ela gosta da escola." },
        { "Content": "We are going to Pierre's place. We are friends.", "Translation": "Vamos para o lugar do Pierre. Somos amigos." },
        { "Content": "Marc is my friend. He is very nice.", "Translation": "Marc é meu amigo. Ele é muito legal." },
        { "Content": "Paul is talking English. He is talking with his mother.", "Translation": "Paul está falando inglês. Ele está falando com sua mãe." },
        { "Content": "Cheryl and I are friends. We love to play.", "Translation": "Cheryl e eu somos amigos. Nós amamos brincar." },
        { "Content": "They speak.", "Translation": "Elas falam." },
        { "Content": "I speak French.", "Translation": "Eu falo francês." }
    ]
    
    lesson8Json = [
        { "Content": "one", "Translation": "um/uma" },
        { "Content": "two", "Translation": "dois" },
        { "Content": "three", "Translation": "três" },
        { "Content": "four", "Translation": "quatro" },
        { "Content": "five", "Translation": "cinco" },
        { "Content": "six", "Translation": "seis" },
        { "Content": "seven", "Translation": "sete" },
        { "Content": "eight", "Translation": "oito" },
        { "Content": "nine", "Translation": "nove" },
        { "Content": "ten", "Translation": "dez" }
    ]
    
    lesson9Json = [
        { "Content": "one", "Translation": "um/uma" },
        { "Content": "two", "Translation": "dois" },
        { "Content": "three", "Translation": "três" },
        { "Content": "four", "Translation": "quatro" },
        { "Content": "five", "Translation": "cinco" },
        { "Content": "six", "Translation": "seis" },
        { "Content": "seven", "Translation": "sete" },
        { "Content": "eight", "Translation": "oito" },
        { "Content": "nine", "Translation": "nove" },
        { "Content": "ten", "Translation": "dez" }
    ]
    
    lesson10Json = [
        { "Content": "I have a cat.", "Translation": "Eu tenho um gato." },
        { "Content": "I have two dogs.", "Translation": "Eu tenho dois cachorros." },
        { "Content": "Do you have three animals?", "Translation": "Você tem três animais?" },
        { "Content": "He has four friends.", "Translation": "Ele tem quatro amigos." },
        { "Content": "She has five video games.", "Translation": "Ela tem cinco jogos de vídeo." },
        { "Content": "They have six pens.", "Translation": "Eles têm seis canetas." },
        { "Content": "They have seven notebooks.", "Translation": "Elas têm sete cadernos." },
        { "Content": "I have one card.", "Translation": "Eu tenho um cartão." }
    ]
    lesson11Json = [
        { "Content": "eleven", "Translation": "onze" },
        { "Content": "twelve", "Translation": "doze" },
        { "Content": "thirteen", "Translation": "treze" },
        { "Content": "fourteen", "Translation": "catorze" },
        { "Content": "fifteen", "Translation": "quinze" },
        { "Content": "sixteen", "Translation": "dezesseis" },
        { "Content": "seventeen", "Translation": "dezessete" },
        { "Content": "eighteen", "Translation": "dezoito" },
        { "Content": "nineteen", "Translation": "dezenove" },
        { "Content": "twenty", "Translation": "vinte" }
    ]
    
    lesson12Json = [
        { "Content": "twenty-one", "Translation": "vinte e um" },
        { "Content": "twenty-two", "Translation": "vinte e dois" },
        { "Content": "twenty-three", "Translation": "vinte e três" },
        { "Content": "twenty-four", "Translation": "vinte e quatro" },
        { "Content": "twenty-five", "Translation": "vinte e cinco" },
        { "Content": "twenty-six", "Translation": "vinte e seis" },
        { "Content": "twenty-seven", "Translation": "vinte e sete" },
        { "Content": "twenty-eight", "Translation": "vinte e oito" },
        { "Content": "twenty-nine", "Translation": "vinte e nove" },
        { "Content": "thirty", "Translation": "trinta" }
    ]
    
    lesson13Json = [
        { "Content": "Monday", "Translation": "segunda-feira" },
        { "Content": "Tuesday", "Translation": "terça-feira" },
        { "Content": "Wednesday", "Translation": "quarta-feira" },
        { "Content": "Thursday", "Translation": "quinta-feira" },
        { "Content": "Friday", "Translation": "sexta-feira" },
        { "Content": "Saturday", "Translation": "sábado" },
        { "Content": "Sunday", "Translation": "domingo" }
    ]
    
    lesson14Json = [
        { "Content": "On Sundays, she watches movies.", "Translation": "Aos domingos, ela assiste a filmes." },
        { "Content": "On Mondays, I eat pizza.", "Translation": "Às segundas-feiras, eu como pizza." },
        { "Content": "On Tuesdays, you go to the park.", "Translation": "Às terças-feiras, você vai ao parque." },
        { "Content": "On Wednesdays, he goes to work.", "Translation": "Às quartas-feiras, ele vai trabalhar." },
        { "Content": "On Thursdays, we do our shopping.", "Translation": "Às quintas-feiras, fazemos nossas compras." },
        { "Content": "On Fridays, she meets her friends.", "Translation": "Às sextas-feiras, ela encontra seus amigos." },
        { "Content": "On Saturdays, they do sports.", "Translation": "Aos sábados, eles praticam esportes." }
    ]
    
    lesson15Json = [
        { "Content": "She has brown eyes.", "Translation": "Ela tem olhos castanhos." },
        { "Content": "He has blue eyes.", "Translation": "Ele tem olhos azuis." },
        { "Content": "I have green eyes.", "Translation": "Eu tenho olhos verdes." },
        { "Content": "They have hazel eyes.", "Translation": "Eles têm olhos cor de avelã." },
        { "Content": "She has gray eyes.", "Translation": "Ela tem olhos cinzas." }
    ]
    
    lesson16Json = [
        { "Content": "She has blonde hair.", "Translation": "Ela tem cabelos loiros." },
        { "Content": "He has brown hair.", "Translation": "Ele tem cabelos castanhos." },
        { "Content": "I have black hair.", "Translation": "Eu tenho cabelos pretos." },
        { "Content": "They have red hair.", "Translation": "Eles têm cabelos ruivos." },
        { "Content": "She has brown hair.", "Translation": "Ela tem cabelos castanho." },
        { "Content": "We have blonde hair.", "Translation": "Nós temos cabelos loiros." },
        { "Content": "They have black hair.", "Translation": "Eles têm cabelos pretos." }
    ]
    
    lesson17Json = [
        { "Content": "She has long and curly hair.", "Translation": "Ela tem cabelos longos e cacheados." },
        { "Content": "He has shaved hair.", "Translation": "Ele tem cabelo raspado." },
        { "Content": "She has medium length and straight hair.", "Translation": "Ela tem cabelos de comprimento médio e lisos." },
        { "Content": "He has curly hair.", "Translation": "Ele tem cabelos cacheados." },
        { "Content": "She has very short hair.", "Translation": "Ela tem cabelos muito curtos." },
        { "Content": "He has wavy hair.", "Translation": "Ele tem cabelos ondulados." },
        { "Content": "She has curly hair.", "Translation": "Ela tem cabelos cacheados." }
    ]
    
    lesson18Json = [
        { "Content": "He is thirty years old.", "Translation": "Ele tem trinta anos." },
        { "Content": "She has forty-five dollars.", "Translation": "Ela tem quarenta e cinco dólares." },
        { "Content": "There are sixty seconds in a minute.", "Translation": "Há sessenta segundos em um minuto." },
        { "Content": "He weighs eighty pounds.", "Translation": "Ele pesa oitenta libras." },
        { "Content": "She has fifty-five apples.", "Translation": "Ela tem cinquenta e cinco maçãs." },
        { "Content": "There are three hundred sixty-five days in a year.", "Translation": "Há trezentos e sessenta e cinco dias em um ano." },
        { "Content": "He has seventy employees.", "Translation": "Ele tem setenta funcionários." }
    ]
    
    lesson19Json = [
        { "Content": "She is twenty-two years old.", "Translation": "Ela tem vinte e dois anos." },
        { "Content": "He is thirty-seven years old.", "Translation": "Ele tem trinta e sete anos." },
        { "Content": "She is nineteen years old.", "Translation": "Ela tem dezenove anos." },
        { "Content": "He is fifty-one years old.", "Translation": "Ele tem cinquenta e um anos." },
        { "Content": "She is twenty-six years old.", "Translation": "Ela tem vinte e seis anos." },
        { "Content": "He is sixty-three years old.", "Translation": "Ele tem sessenta e três anos." },
        { "Content": "She is forty-seven years old.", "Translation": "Ela tem quarenta e sete anos." }
    ]
    
    lesson20Json = [
        { "Content": "She is very kind.", "Translation": "Ela é muito gentil." },
        { "Content": "He is very funny.", "Translation": "Ele é muito engraçado." },
        { "Content": "She is very serious.", "Translation": "Ela é muito séria." },
        { "Content": "He is very shy.", "Translation": "Ele é muito tímido." },
        { "Content": "She is very sociable.", "Translation": "Ela é muito sociável." },
        { "Content": "He is very calm.", "Translation": "Ele é muito calmo." },
        { "Content": "She is very energetic.", "Translation": "Ela é muito enérgica." }
    ]
    
    lesson21Json = [
        { "Content": "China", "Translation": "China" },
        { "Content": "The United States", "Translation": "Os Estados Unidos" },
        { "Content": "Japan", "Translation": "Japão" },
        { "Content": "India", "Translation": "Índia" },
        { "Content": "Brazil", "Translation": "Brasil" },
        { "Content": "Russia", "Translation": "Rússia" },
        { "Content": "Germany", "Translation": "Alemanha" },
        { "Content": "France", "Translation": "França" },
        { "Content": "England", "Translation": "Inglaterra" }
    ]
    
    lesson22Json = [
        { "Content": "I am Chinese.", "Translation": "Eu sou chinês." },
        { "Content": "You are American.", "Translation": "Você é americano." },
        { "Content": "He is Japanese.", "Translation": "Ele é japonês." },
        { "Content": "She is Indian.", "Translation": "Ela é indiana." },
        { "Content": "We are Brazilian.", "Translation": "Nós somos brasileiros." },
        { "Content": "You are Russian.", "Translation": "Vocês são russos." },
        { "Content": "They are German.", "Translation": "Eles são alemães." },
        { "Content": "They are French.", "Translation": "Elas são francesas." },
        { "Content": "We are English.", "Translation": "Nós somos ingleses." }
    ]
    
    lesson23Json = [
        {"Content": "My father's name is Pierre.", "Translation": "O nome do meu pai é Pierre."},
        {"Content": "I have two brothers and one sister.", "Translation": "Eu tenho dois irmãos e uma irmã."},
        {"Content": "My uncle is very kind.", "Translation": "Meu tio é muito gentil."},
        {"Content": "My sister is 25 years old.", "Translation": "Minha irmã tem 25 anos."},
        {"Content": "My cousin loves to play football.", "Translation": "Meu primo adora jogar futebol."},
        {"Content": "My aunt is a talented artist.", "Translation": "Minha tia é uma artista talentosa."},
        {"Content": "My grandfather is the oldest in the family.", "Translation": "Meu avô é o mais velho da família."}
    ]
    
    lesson24Json = [
        {"Content": "I love to play the guitar.", "Translation": "Eu adoro tocar violão."},
        {"Content": "She likes to hike in the mountains.", "Translation": "Ela gosta de fazer trilhas nas montanhas."},
        {"Content": "My brother collects rare stamps.", "Translation": "Meu irmão coleciona selos raros."},
        {"Content": "We like to watch movies on weekends.", "Translation": "Nós gostamos de assistir filmes nos fins de semana."},
        {"Content": "He is passionate about photography.", "Translation": "Ele é apaixonado por fotografia."},
        {"Content": "She adores contemporary dance.", "Translation": "Ela adora dança contemporânea."},
        {"Content": "They like to ride bicycles in the park.", "Translation": "Eles gostam de andar de bicicleta no parque."}
    ]
    
    lesson25Json = [
        {"Content": "It's sunny today.", "Translation": "Está ensolarado hoje."},
        {"Content": "The weather is very cold in winter.", "Translation": "O clima é muito frio no inverno."},
        {"Content": "There are clouds in the sky.", "Translation": "Há nuvens no céu."},
        {"Content": "The wind is blowing very hard.", "Translation": "O vento está soprando muito forte."},
        {"Content": "There is snow everywhere.", "Translation": "Há neve por toda parte."},
        {"Content": "The sun is shining in the blue sky.", "Translation": "O sol está brilhando no céu azul."},
        {"Content": "The weather is stormy this evening.", "Translation": "O tempo está tempestuoso esta noite."}
    ]
    
    lesson26Json = [
        {"Content": "It's eight o'clock in the morning.", "Translation": "São oito horas da manhã."},
        {"Content": "She needs to arrive at two thirty PM.", "Translation": "Ela precisa chegar às quatorze horas e trinta minutos."},
        {"Content": "Our appointment is at exactly five o'clock.", "Translation": "Nosso compromisso é exatamente às dezessete horas."},
        {"Content": "The movie starts at seven forty-five PM.", "Translation": "O filme começa às dezenove horas e quarenta e cinco minutos."},
        {"Content": "It's noon and a half.", "Translation": "É meio-dia e meio."},
        {"Content": "I wake up at six o'clock every day.", "Translation": "Eu acordo às seis horas todos os dias."},
        {"Content": "It's a quarter to eleven in the evening.", "Translation": "São onze horas menos um quarto da noite."}
    ]
    
    lesson27Json = [
        {"Content": "I am washing my hands.", "Translation": "Estou lavando as minhas mãos."},
        {"Content": "She brushes her hair every morning.", "Translation": "Ela escova o cabelo todas as manhãs."},
        {"Content": "They wake up early on weekends.", "Translation": "Eles acordam cedo nos finais de semana."},
        {"Content": "We dress quickly.", "Translation": "Nós nos vestimos rapidamente."},
        {"Content": "You are applying makeup for the evening.", "Translation": "Você está se maquiando para a noite."},
        {"Content": "He shaves every day.", "Translation": "Ele se barbeia todos os dias."},
        {"Content": "They are getting ready for the party tonight.", "Translation": "Elas estão se preparando para a festa esta noite."}
    ]
    
    lesson28Json = [
        {"Content": "Do you brush your teeth after every meal?", "Translation": "Você escova os dentes após cada refeição?"},
        {"Content": "Does she wash her hands before eating?", "Translation": "Ela lava as mãos antes de comer?"},
        {"Content": "Do they wake up early in the morning?", "Translation": "Eles acordam cedo de manhã?"},
        {"Content": "Do you dress formally at work?", "Translation": "Você se veste formalmente no trabalho?"},
        {"Content": "Am I applying makeup for the party tonight?", "Translation": "Estou me maquiando para a festa esta noite?"},
        {"Content": "Are they getting ready for the trip tomorrow?", "Translation": "Eles estão se preparando para a viagem amanhã?"},
        {"Content": "Do we get up early on weekdays?", "Translation": "Nós levantamos cedo nos dias de semana?"}
    ]
    
    lesson29Json = [
        {"Content": "He eats pizza for dinner", "Translation": "Ele come pizza no jantar."},
        {"Content": "She prepares a salad for lunch", "Translation": "Ela prepara uma salada para o almoço."},
        {"Content": "They drink orange juice for breakfast", "Translation": "Eles bebem suco de laranja no café da manhã."},
        {"Content": "Do you like to eat fruits?", "Translation": "Você gosta de comer frutas?"},
        {"Content": "We are ordering sushi for dinner tonight", "Translation": "Vamos pedir sushi para o jantar esta noite."},
        {"Content": "She cooks roasted chicken for lunch", "Translation": "Ela cozinha frango assado para o almoço."},
        {"Content": "They eat vegetables with their dinner", "Translation": "Eles comem legumes com o jantar."}
    ]
    
    lesson30ContentTranslation = [
        {"Content": "When do you get up in the morning?", "Translation": "Quando você se levanta de manhã?"},
        {"Content": "Whom do you meet at the library?", "Translation": "Quem você encontra na biblioteca?"},
        {"Content": "How does she prepare for the wedding?", "Translation": "Como ela se prepara para o casamento?"},
        {"Content": "How long do they rest in the afternoon?", "Translation": "Quanto tempo eles descansam à tarde?"},
        {"Content": "What am I getting ready for dinner?", "Translation": "Para o jantar, para o que estou me preparando?"},
        {"Content": "Where do you have fun on Saturday night?", "Translation": "Onde você se diverte no sábado à noite?"},
        {"Content": "Why do we dress formally?", "Translation": "Por que nos vestimos formalmente?"}
    ]
    
    lessonJSONData = [lesson1Json, lesson2Json, lesson3Json, lesson4Json, lesson5Json, lesson6Json, lesson7Json, lesson8Json, lesson9Json, lesson10Json, lesson11Json, lesson12Json, lesson13Json, lesson14Json, lesson15Json, lesson16Json, lesson17Json, lesson18Json, lesson19Json, lesson20Json, lesson21Json, lesson22Json, lesson23Json, lesson24Json, lesson25Json, lesson26Json, lesson27Json, lesson28Json, lesson29Json, lesson30Json];
}