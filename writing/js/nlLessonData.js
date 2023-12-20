if (localStorage.getItem("currentLanguage") === "nl") {

    lessonNameData = ["Welcome to the Course!", "Greetings 1", "People 1", "People 2", "Time 1", "Introductions 1", "People 3", "Numbers 1", "Numbers 1", "Numbers 2", "Numbers 3", "Numbers 4", "Days of the Week 1", "Days of the Week 2", "Appearance 1", "Appearance 2", "Appearance 3", "Numbers 5", "Age 1", "Personality 1", "Countries 1", "Countries 2", "Family 1", "Hobbies 1", "Weather 1", "Time 1", "Daily Routine 1", "Questions 1", "Food 1", "Questions 2"];

    lesson1Json = [
        { "Content": "Hello! I am called Pierre.", "Translation": "Hallo! Ik heet Pierre." },
        { "Content": "the boy", "Translation": "de jongen" },
        { "Content": "Hello. What are you called?", "Translation": "Hallo. Hoe heet je?" },
        { "Content": "Have a nice day.", "Translation": "Fijne dag." },
        { "Content": "Is everything alright?", "Translation": "Alles goed?" },
        { "Content": "Do you speak English?", "Translation": "Spreek je Engels?" },
        { "Content": "Welcome to the course!", "Translation": "Welkom bij de cursus!" }
    ];
    
    lesson2Json = [
        { "Content": "Hello. How is it going?", "Translation": "Hallo. Hoe gaat het?" },
        { "Content": "Hi. See you soon.", "Translation": "Hoi. Tot snel." },
        { "Content": "It's going well, thanks. And you?", "Translation": "Het gaat goed, bedankt. En met jou?" },
        { "Content": "How are you?", "Translation": "Hoe gaat het met u?" },
        { "Content": "Good night.", "Translation": "Goede nacht." },
        { "Content": "Goodbye. See you soon.", "Translation": "Tot ziens. Tot snel." },
        { "Content": "Hi! I'm doing so-so.", "Translation": "Hoi! Het gaat zo-zo." }
    ];
    
    lesson3Json = [
        { "Content": "the boy", "Translation": "de jongen" },
        { "Content": "the man", "Translation": "de man" },
        { "Content": "the girl", "Translation": "het meisje" },
        { "Content": "the woman", "Translation": "de vrouw" },
        { "Content": "I am a boy.", "Translation": "Ik ben een jongen." },
        { "Content": "I am a man.", "Translation": "Ik ben een man." },
        { "Content": "I am a girl.", "Translation": "Ik ben een meisje." },
        { "Content": "I am a woman.", "Translation": "Ik ben een vrouw." }
    ]
    
    lesson4Json = [
        { "Content": "Are you a boy?", "Translation": "Ben jij een jongen?" },
        { "Content": "Are you a man?", "Translation": "Ben jij een man?" },
        { "Content": "Are you a girl?", "Translation": "Ben jij een meisje?" },
        { "Content": "Are you a woman?", "Translation": "Ben jij een vrouw?" },
        { "Content": "Are you a boy? Yes, I am a boy.", "Translation": "Ben jij een jongen?" },
        { "Content": "Are you a man? Yes, I am a man.", "Translation": "Ben jij een man?" },
        { "Content": "Are you a girl? Yes, I am a girl.", "Translation": "Ben jij een meisje?" },
        { "Content": "Are you a woman? Yes, I am a woman.", "Translation": "Ben jij een vrouw?" }
    ];
    
    lesson5Json = [
        { "Content": "Have a good day", "Translation": "Fijne dag." },
        { "Content": "Today, I work.", "Translation": "Vandaag werk ik." },
        { "Content": "You read every day.", "Translation": "Jij leest elke dag." },
        { "Content": "yesterday", "Translation": "gisteren" },
        { "Content": "Tomorrow and yesterday", "Translation": "Morgen en gisteren" },
        { "Content": "He does not eat.", "Translation": "Hij eet niet." },
        { "Content": "do not ...", "Translation": "niet ..." }
    ];
  

    lesson6Json = [
        { "Content": "Hello! I am called Pierre.", "Translation": "Hallo! Ik heet Pierre." },
        { "Content": "I am called Jacques.", "Translation": "Ik heet Jacques." },
        { "Content": "You are called Louis", "Translation": "Jij heet Louis." },
        { "Content": "He is called Charles", "Translation": "Hij heet Charles." },
        { "Content": "What are you called?", "Translation": "Hoe heet jij?" },
        { "Content": "She is called Fleur and he is called George.", "Translation": "Zij heet Fleur en hij heet George." },
        { "Content": "You are called Nathaniel", "Translation": "Heet jij Nathaniel?" }
    ]
    
    lesson7Json = [
        { "Content": "She is a student. She likes school.", "Translation": "Zij is studente. Ze houdt van school." },
        { "Content": "We are going to Pierre's place. We are friends.", "Translation": "We gaan naar het huis van Pierre. We zijn vrienden." },
        { "Content": "Marc is my friend. He is very nice.", "Translation": "Marc is mijn vriend. Hij is heel aardig." },
        { "Content": "Paul is talking English. He is talking with his mother.", "Translation": "Paul spreekt Engels. Hij praat met zijn moeder." },
        { "Content": "Cheryl and I are friends. We love to play.", "Translation": "Cheryl en ik zijn vriendinnen. We houden van spelen." },
        { "Content": "They speak.", "Translation": "Zij praten." },
        { "Content": "I speak French.", "Translation": "Ik spreek Frans." }
    ]
    
    lesson8Json = [
        { "Content": "one", "Translation": "één" },
        { "Content": "two", "Translation": "twee" },
        { "Content": "three", "Translation": "drie" },
        { "Content": "four", "Translation": "vier" },
        { "Content": "five", "Translation": "vijf" },
        { "Content": "six", "Translation": "zes" },
        { "Content": "seven", "Translation": "zeven" },
        { "Content": "eight", "Translation": "acht" },
        { "Content": "nine", "Translation": "negen" },
        { "Content": "ten", "Translation": "tien" }
    ]
    
    lesson9Json = [
        { "Content": "one", "Translation": "één" },
        { "Content": "two", "Translation": "twee" },
        { "Content": "three", "Translation": "drie" },
        { "Content": "four", "Translation": "vier" },
        { "Content": "five", "Translation": "vijf" },
        { "Content": "six", "Translation": "zes" },
        { "Content": "seven", "Translation": "zeven" },
        { "Content": "eight", "Translation": "acht" },
        { "Content": "nine", "Translation": "negen" },
        { "Content": "ten", "Translation": "tien" }
    ]
    
    lesson10Json = [
        { "Content": "I have a cat.", "Translation": "Ik heb een kat." },
        { "Content": "I have two dogs.", "Translation": "Ik heb twee honden." },
        { "Content": "Do you have three animals?", "Translation": "Heb jij drie dieren?" },
        { "Content": "He has four friends.", "Translation": "Hij heeft vier vrienden." },
        { "Content": "She has five video games.", "Translation": "Zij heeft vijf videospellen." },
        { "Content": "They have six pens.", "Translation": "Zij hebben zes pennen." },
        { "Content": "They have seven notebooks.", "Translation": "Zij hebben zeven notitieboekjes." },
        { "Content": "I have one card.", "Translation": "Ik heb een kaart." }
    ]
    

    lesson11Json = [
        { "Content": "eleven", "Translation": "elf" },
        { "Content": "twelve", "Translation": "twaalf" },
        { "Content": "thirteen", "Translation": "dertien" },
        { "Content": "fourteen", "Translation": "veertien" },
        { "Content": "fifteen", "Translation": "vijftien" },
        { "Content": "sixteen", "Translation": "zestien" },
        { "Content": "seventeen", "Translation": "zeventien" },
        { "Content": "eighteen", "Translation": "achttien" },
        { "Content": "nineteen", "Translation": "negentien" },
        { "Content": "twenty", "Translation": "twintig" }
    ]
    
    lesson12Json = [
        { "Content": "twenty-one", "Translation": "eenentwintig" },
        { "Content": "twenty-two", "Translation": "tweeëntwintig" },
        { "Content": "twenty-three", "Translation": "drieëntwintig" },
        { "Content": "twenty-four", "Translation": "vierentwintig" },
        { "Content": "twenty-five", "Translation": "vijfentwintig" },
        { "Content": "twenty-six", "Translation": "zesentwintig" },
        { "Content": "twenty-seven", "Translation": "zevenentwintig" },
        { "Content": "twenty-eight", "Translation": "achtentwintig" },
        { "Content": "twenty-nine", "Translation": "negenentwintig" },
        { "Content": "thirty", "Translation": "dertig" }
    ]
    
    lesson13Json = [
        { "Content": "Monday", "Translation": "maandag" },
        { "Content": "Tuesday", "Translation": "dinsdag" },
        { "Content": "Wednesday", "Translation": "woensdag" },
        { "Content": "Thursday", "Translation": "donderdag" },
        { "Content": "Friday", "Translation": "vrijdag" },
        { "Content": "Saturday", "Translation": "zaterdag" },
        { "Content": "Sunday", "Translation": "zondag" }
    ]
    
    lesson14Json = [
        { "Content": "On Sundays, she watches movies.", "Translation": "Op zondag kijkt ze films." },
        { "Content": "On Mondays, I eat pizza.", "Translation": "Op maandag eet ik pizza." },
        { "Content": "On Tuesdays, you go to the park.", "Translation": "Op dinsdag ga jij naar het park." },
        { "Content": "On Wednesdays, he goes to work.", "Translation": "Op woensdag gaat hij naar het werk." },
        { "Content": "On Thursdays, we do our shopping.", "Translation": "Op donderdag doen we onze boodschappen." },
        { "Content": "On Fridays, she meets her friends.", "Translation": "Op vrijdag ontmoet ze haar vrienden." },
        { "Content": "On Saturdays, they do sports.", "Translation": "Op zaterdag doen ze aan sport." }
    ]
    
    lesson15Json = [
        { "Content": "She has brown eyes.", "Translation": "Zij heeft bruine ogen." },
        { "Content": "He has blue eyes.", "Translation": "Hij heeft blauwe ogen." },
        { "Content": "I have green eyes.", "Translation": "Ik heb groene ogen." },
        { "Content": "They have hazel eyes.", "Translation": "Zij hebben hazelkleurige ogen." },
        { "Content": "She has gray eyes.", "Translation": "Zij heeft grijze ogen." }
    ]    

    lesson16Json = [
        { "Content": "She has blonde hair.", "Translation": "Zij heeft blond haar." },
        { "Content": "He has brown hair.", "Translation": "Hij heeft bruin haar." },
        { "Content": "I have black hair.", "Translation": "Ik heb zwart haar." },
        { "Content": "They have red hair.", "Translation": "Zij hebben rood haar." },
        { "Content": "She has brown hair.", "Translation": "Zij heeft bruin haar." },
        { "Content": "We have blonde hair.", "Translation": "Wij hebben blond haar." },
        { "Content": "They have black hair.", "Translation": "Zij hebben zwart haar." }
    ]
    
    lesson17Json = [
        { "Content": "She has long and curly hair.", "Translation": "Zij heeft lang en krullend haar." },
        { "Content": "He has shaved hair.", "Translation": "Hij heeft geschoren haar." },
        { "Content": "She has medium length and straight hair.", "Translation": "Zij heeft halflang en steil haar." },
        { "Content": "He has curly hair.", "Translation": "Hij heeft krullend haar." },
        { "Content": "She has very short hair.", "Translation": "Zij heeft zeer kort haar." },
        { "Content": "He has wavy hair.", "Translation": "Hij heeft golvend haar." },
        { "Content": "She has curly hair.", "Translation": "Zij heeft krullend haar." }
    ]
    
    lesson18Json = [
        { "Content": "He is thirty years old.", "Translation": "Hij is dertig jaar oud." },
        { "Content": "She has forty-five dollars.", "Translation": "Zij heeft vijfenveertig dollar." },
        { "Content": "There are sixty seconds in a minute.", "Translation": "Er zijn zestig seconden in een minuut." },
        { "Content": "He weighs eighty pounds.", "Translation": "Hij weegt tachtig pond." },
        { "Content": "She has fifty-five apples.", "Translation": "Zij heeft vijfenvijftig appels." },
        { "Content": "There are three hundred sixty-five days in a year.", "Translation": "Er zijn driehonderdvijfenzestig dagen in een jaar." },
        { "Content": "He has seventy employees.", "Translation": "Hij heeft zeventig werknemers." }
    ]
    
    lesson19Json = [
        { "Content": "She is twenty-two years old.", "Translation": "Zij is tweeëntwintig jaar oud." },
        { "Content": "He is thirty-seven years old.", "Translation": "Hij is zevenendertig jaar oud." },
        { "Content": "She is nineteen years old.", "Translation": "Zij is negentien jaar oud." },
        { "Content": "He is fifty-one years old.", "Translation": "Hij is eenenvijftig jaar oud." },
        { "Content": "She is twenty-six years old.", "Translation": "Zij is zesentwintig jaar oud." },
        { "Content": "He is sixty-three years old.", "Translation": "Hij is drieënzestig jaar oud." },
        { "Content": "She is forty-seven years old.", "Translation": "Zij is zevenenveertig jaar oud." }
    ]
    
    lesson20Json = [
        { "Content": "She is very kind.", "Translation": "Zij is heel vriendelijk." },
        { "Content": "He is very funny.", "Translation": "Hij is heel grappig." },
        { "Content": "She is very serious.", "Translation": "Zij is heel serieus." },
        { "Content": "He is very shy.", "Translation": "Hij is heel verlegen." },
        { "Content": "She is very sociable.", "Translation": "Zij is heel sociaal." },
        { "Content": "He is very calm.", "Translation": "Hij is heel kalm." },
        { "Content": "She is very energetic.", "Translation": "Zij is heel energiek." }
    ]    

    lesson21Json = [
        { "Content": "China", "Translation": "China" },
        { "Content": "The United States", "Translation": "De Verenigde Staten" },
        { "Content": "Japan", "Translation": "Japan" },
        { "Content": "India", "Translation": "India" },
        { "Content": "Brazil", "Translation": "Brazilië" },
        { "Content": "Russia", "Translation": "Rusland" },
        { "Content": "Germany", "Translation": "Duitsland" },
        { "Content": "France", "Translation": "Frankrijk" },
        { "Content": "England", "Translation": "Engeland" }
    ]
    
    lesson22Json = [
        { "Content": "I am Chinese.", "Translation": "Ik ben Chinees." },
        { "Content": "You are American.", "Translation": "Jij bent Amerikaans." },
        { "Content": "He is Japanese.", "Translation": "Hij is Japans." },
        { "Content": "She is Indian.", "Translation": "Zij is Indiaas." },
        { "Content": "We are Brazilian.", "Translation": "Wij zijn Braziliaans." },
        { "Content": "You are Russian.", "Translation": "Jullie zijn Russisch." },
        { "Content": "They are German.", "Translation": "Zij zijn Duits." },
        { "Content": "They are French.", "Translation": "Zij zijn Frans." },
        { "Content": "We are English.", "Translation": "Wij zijn Engels." }
    ]
    
    lesson23Json = [
        {"Content": "My father's name is Pierre.", "Translation": "Mijn vaders naam is Pierre."},
        {"Content": "I have two brothers and one sister.", "Translation": "Ik heb twee broers en één zus."},
        {"Content": "My uncle is very kind.", "Translation": "Mijn oom is erg aardig."},
        {"Content": "My sister is 25 years old.", "Translation": "Mijn zus is 25 jaar oud."},
        {"Content": "My cousin loves to play football.", "Translation": "Mijn neef houdt van voetballen."},
        {"Content": "My aunt is a talented artist.", "Translation": "Mijn tante is een getalenteerde kunstenaar."},
        {"Content": "My grandfather is the oldest in the family.", "Translation": "Mijn opa is de oudste in de familie."}
    ]
    
    lesson24Json = [
        {"Content": "I love to play the guitar.", "Translation": "Ik hou van gitaar spelen."},
        {"Content": "She likes to hike in the mountains.", "Translation": "Zij houdt van wandelen in de bergen."},
        {"Content": "My brother collects rare stamps.", "Translation": "Mijn broer verzamelt zeldzame postzegels."},
        {"Content": "We like to watch movies on weekends.", "Translation": "Wij kijken graag films in het weekend."},
        {"Content": "He is passionate about photography.", "Translation": "Hij is gepassioneerd over fotografie."},
        {"Content": "She adores contemporary dance.", "Translation": "Zij is dol op moderne dans."},
        {"Content": "They like to ride bicycles in the park.", "Translation": "Zij fietsen graag in het park."}
    ]
    
    lesson25Json = [
        {"Content": "It's sunny today.", "Translation": "Het is vandaag zonnig."},
        {"Content": "The weather is very cold in winter.", "Translation": "Het weer is erg koud in de winter."},
        {"Content": "There are clouds in the sky.", "Translation": "Er zijn wolken in de lucht."},
        {"Content": "The wind is blowing very hard.", "Translation": "Het waait erg hard."},
        {"Content": "There is snow everywhere.", "Translation": "Er ligt overal sneeuw."},
        {"Content": "The sun is shining in the blue sky.", "Translation": "De zon schijnt in de blauwe lucht."},
        {"Content": "The weather is stormy this evening.", "Translation": "Het weer is stormachtig vanavond."}
    ]
    

    lesson26Json = [
        {"Content": "It's eight o'clock in the morning.", "Translation": "Het is acht uur 's ochtends."},
        {"Content": "She needs to arrive at two thirty PM.", "Translation": "Ze moet om twee uur dertig aankomen."},
        {"Content": "Our appointment is at exactly five o'clock.", "Translation": "Onze afspraak is precies om vijf uur."},
        {"Content": "The movie starts at seven forty-five PM.", "Translation": "De film begint om zeven uur vijfenveertig."},
        {"Content": "It's noon and a half.", "Translation": "Het is half één 's middags."},
        {"Content": "I wake up at six o'clock every day.", "Translation": "Ik sta elke dag om zes uur op."},
        {"Content": "It's a quarter to eleven in the evening.", "Translation": "Het is kwart voor elf 's avonds."}
    ]
    
    lesson27Json = [
        {"Content": "I am washing my hands.", "Translation": "Ik was mijn handen."},
        {"Content": "She brushes her hair every morning.", "Translation": "Ze borstelt haar haar elke ochtend."},
        {"Content": "They wake up early on weekends.", "Translation": "Ze staan vroeg op in het weekend."},
        {"Content": "We dress quickly.", "Translation": "Wij kleden ons snel aan."},
        {"Content": "You are applying makeup for the evening.", "Translation": "Jij brengt make-up aan voor de avond."},
        {"Content": "He shaves every day.", "Translation": "Hij scheert zich elke dag."},
        {"Content": "They are getting ready for the party tonight.", "Translation": "Ze maken zich klaar voor het feest vanavond."}
    ]
    
    lesson28Json = [
        {"Content": "Do you brush your teeth after every meal?", "Translation": "Poets je je tanden na elke maaltijd?"},
        {"Content": "Does she wash her hands before eating?", "Translation": "Wast zij haar handen voor het eten?"},
        {"Content": "Do they wake up early in the morning?", "Translation": "Staan ze 's ochtends vroeg op?"},
        {"Content": "Do you dress formally at work?", "Translation": "Kleed je je formeel op het werk?"},
        {"Content": "Am I applying makeup for the party tonight?", "Translation": "Breng ik make-up aan voor het feest vanavond?"},
        {"Content": "Are they getting ready for the trip tomorrow?", "Translation": "Maken ze zich klaar voor de reis morgen?"},
        {"Content": "Do we get up early on weekdays?", "Translation": "Staan we vroeg op op doordeweekse dagen?"}
    ]
    
    lesson29Json = [
        {"Content": "He eats pizza for dinner", "Translation": "Hij eet pizza voor het avondeten."},
        {"Content": "She prepares a salad for lunch", "Translation": "Zij maakt een salade klaar voor de lunch."},
        {"Content": "They drink orange juice for breakfast", "Translation": "Ze drinken sinaasappelsap bij het ontbijt."},
        {"Content": "Do you like to eat fruits?", "Translation": "Hou je van het eten van fruit?"},
        {"Content": "We are ordering sushi for dinner tonight", "Translation": "Wij bestellen sushi voor het avondeten vanavond."},
        {"Content": "She cooks roasted chicken for lunch", "Translation": "Zij kookt geroosterde kip voor de lunch."},
        {"Content": "They eat vegetables with their dinner", "Translation": "Ze eten groenten bij hun avondeten."}
    ]
    
    lesson30Json = [
        {"Content": "When do you get up in the morning?", "Translation": "Wanneer sta jij 's ochtends op?"},
        {"Content": "Whom do you meet at the library?", "Translation": "Met wie ontmoet je in de bibliotheek?"},
        {"Content": "How does she prepare for the wedding?", "Translation": "Hoe bereidt zij zich voor op de bruiloft?"},
        {"Content": "How long do they rest in the afternoon?", "Translation": "Hoe lang rusten ze in de middag?"},
        {"Content": "What am I getting ready for dinner?", "Translation": "Waar maak ik me klaar voor het avondeten?"},
        {"Content": "Where do you have fun on Saturday night?", "Translation": "Waar heb je plezier op zaterdagavond?"},
        {"Content": "Why do we dress formally?", "Translation": "Waarom kleden we ons formeel?"}
    ]
    
    lessonJSONData = [lesson1Json, lesson2Json, lesson3Json, lesson4Json, lesson5Json, lesson6Json, lesson7Json, lesson8Json, lesson9Json, lesson10Json, lesson11Json, lesson12Json, lesson13Json, lesson14Json, lesson15Json, lesson16Json, lesson17Json, lesson18Json, lesson19Json, lesson20Json, lesson21Json, lesson22Json, lesson23Json, lesson24Json, lesson25Json, lesson26Json, lesson27Json, lesson28Json, lesson29Json, lesson30Json];
}