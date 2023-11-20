//No, you need to provide the Content key, and a translation from French to English


if (localStorage.getItem("currentLanguage") === "nl") {

    lessonNameData = ["Welcome to the Course!", "Greetings 1", "People 1", "People 2", "Time 1", "Introductions 1", "People 3", "Numbers 1", "Numbers 1", "Numbers 2", "Numbers 3", "Numbers 4", "Days of the Week 1", "Days of the Week 2", "Appearance 1", "Appearance 2", "Appearance 3", "Numbers 5", "Age 1", "Personality 1", "Countries 1", "Countries 2", "Family 1", "Hobbies 1", "Weather 1", "Time 1", "Daily Routine 1", "Questions 1", "Food 1", "Questions 2"];

    lesson1Json = [
        { "Content": "Hallo! Ik heet Pierre.", "Translation": "Hello! I am called Pierre." },
        { "Content": "de jongen", "Translation": "the boy" },
        { "Content": "Hallo. Hoe heet jij?", "Translation": "Hello. What are you called?" },
        { "Content": "Goede dag.", "Translation": "Have a nice day." },
        { "Content": "Is alles goed?", "Translation": "Is everything alright?" },
        { "Content": "Spreek je Engels?", "Translation": "Do you speak English?" },
        { "Content": "Welkom bij de cursus!", "Translation": "Welcome to the course!" }
    ];
    
    lesson2Json = [
        { "Content": "Hallo. Hoe gaat het?", "Translation": "Hello. How is it going?" },
        { "Content": "Hoi. Tot ziens.", "Translation": "Hi. See you soon." },
        { "Content": "Het gaat goed, dank je. En met jou?", "Translation": "It's going well, thanks. And you?" },
        { "Content": "Hoe gaat het met u?", "Translation": "How are you?" },
        { "Content": "Goede nacht.", "Translation": "Good night." },
        { "Content": "Tot ziens. Tot gauw.", "Translation": "Goodbye. See you soon." },
        { "Content": "Hoi! Het gaat zo-zo.", "Translation": "Hi! I'm doing so-so." }
    ];
    
    lesson3Json = [
        { "Content": "de jongen", "Translation": "the boy" },
        { "Content": "de man", "Translation": "the man" },
        { "Content": "het meisje", "Translation": "the girl" },
        { "Content": "de vrouw", "Translation": "the woman" },
        { "Content": "Ik ben een jongen.", "Translation": "I am a boy." },
        { "Content": "Ik ben een man.", "Translation": "I am a man." },
        { "Content": "Ik ben een meisje.", "Translation": "I am a girl." },
        { "Content": "Ik ben een vrouw.", "Translation": "I am a woman." }
    ];
    
    lesson4Json = [
        { "Content": "Ben je een jongen?", "Translation": "Are you a boy?" },
        { "Content": "Ben je een man?", "Translation": "Are you a man?" },
        { "Content": "Ben je een meisje?", "Translation": "Are you a girl?" },
        { "Content": "Ben je een vrouw?", "Translation": "Are you a woman?" }
    ];
    
    lesson5Json = [
        { "Content": "Goede dag.", "Translation": "Good day." },
        { "Content": "Vandaag werk ik.", "Translation": "Today, I work." },
        { "Content": "Je leest elke dag.", "Translation": "You read every day." },
        { "Content": "gisteren", "Translation": "yesterday" },
        { "Content": "Morgen en gisteren", "Translation": "Tomorrow and yesterday" },
        { "Content": "Hij eet niet.", "Translation": "He does not eat." },
        { "Content": "niet", "Translation": "not" }
    ];
    

    lesson6Json = [
        { "Content": "Hallo! Ik heet Pierre.", "Translation": "Hello! My name is Pierre." },
        { "Content": "Ik heet Jacques.", "Translation": "I am called Jacques." },
        { "Content": "Jij roept Louis.", "Translation": "You call Louis." },
        { "Content": "Hij noemt me Charles.", "Translation": "He calls me Charles." },
        { "Content": "Hoe heet jij?", "Translation": "What is your name?" },
        { "Content": "Zij heet Fleur, en hij heet George.", "Translation": "She is called Fleur, and he is called George." },
        { "Content": "Ben jij Nathaniel?", "Translation": "Are you called Nathaniel?" }
    ];
    
    lesson7Json = [
        { "Content": "Zij is studente. Ze houdt van school.", "Translation": "She is a student. She likes school." },
        { "Content": "Wij gaan naar Pierre. Wij zijn vrienden.", "Translation": "We are going to Pierre's place. We are friends." },
        { "Content": "Marc is mijn vriend. Hij is heel aardig.", "Translation": "Marc is my friend. He is very nice." },
        { "Content": "Paul spreekt Engels. Hij praat met zijn moeder.", "Translation": "Paul is speaking English. He is speaking with his mother." },
        { "Content": "Cheryl en ik zijn vriendinnen. Wij houden van spelen.", "Translation": "Cheryl and I are friends. We love to play." },
        { "Content": "Zij praten.", "Translation": "They speak." },
        { "Content": "Ik spreek Frans.", "Translation": "I speak French." }
    ];
    
    lesson8Json = [
        { "Content": "één", "Translation": "one" },
        { "Content": "één", "Translation": "one" },
        { "Content": "twee", "Translation": "two" },
        { "Content": "drie", "Translation": "three" },
        { "Content": "vier", "Translation": "four" },
        { "Content": "vijf", "Translation": "five" },
        { "Content": "zes", "Translation": "six" },
        { "Content": "zeven", "Translation": "seven" },
        { "Content": "acht", "Translation": "eight" },
        { "Content": "negen", "Translation": "nine" },
        { "Content": "tien", "Translation": "ten" }
    ];
    
    lesson9Json = [
        { "Content": "één", "Translation": "one" },
        { "Content": "één", "Translation": "one" },
        { "Content": "twee", "Translation": "two" },
        { "Content": "drie", "Translation": "three" },
        { "Content": "vier", "Translation": "four" },
        { "Content": "vijf", "Translation": "five" },
        { "Content": "zes", "Translation": "six" },
        { "Content": "zeven", "Translation": "seven" },
        { "Content": "acht", "Translation": "eight" },
        { "Content": "negen", "Translation": "nine" },
        { "Content": "tien", "Translation": "ten" }
    ];
    
    lesson10Json = [
        { "Content": "Ik heb een kat.", "Translation": "I have a cat." },
        { "Content": "Ik heb twee honden.", "Translation": "I have two dogs." },
        { "Content": "Heb jij drie dieren?", "Translation": "Do you have three animals?" },
        { "Content": "Hij heeft vier vrienden.", "Translation": "He has four friends." },
        { "Content": "Zij heeft vijf videospellen.", "Translation": "She has five video games." },
        { "Content": "Zij hebben zes pennen.", "Translation": "They have six pens." },
        { "Content": "Zij hebben zeven schriften.", "Translation": "They have seven notebooks." },
        { "Content": "Ik heb een kaart.", "Translation": "I have a card." }
    ];
    

    lesson11Json = [
        { "Content": "elf", "Translation": "eleven" },
        { "Content": "twaalf", "Translation": "twelve" },
        { "Content": "dertien", "Translation": "thirteen" },
        { "Content": "veertien", "Translation": "fourteen" },
        { "Content": "vijftien", "Translation": "fifteen" },
        { "Content": "zestien", "Translation": "sixteen" },
        { "Content": "zeventien", "Translation": "seventeen" },
        { "Content": "achttien", "Translation": "eighteen" },
        { "Content": "negentien", "Translation": "nineteen" },
        { "Content": "twintig", "Translation": "twenty" }
    ];
    
    lesson12Json = [
        { "Content": "eenentwintig", "Translation": "twenty-one" },
        { "Content": "tweeëntwintig", "Translation": "twenty-two" },
        { "Content": "drieëntwintig", "Translation": "twenty-three" },
        { "Content": "vierentwintig", "Translation": "twenty-four" },
        { "Content": "vijfentwintig", "Translation": "twenty-five" },
        { "Content": "zesentwintig", "Translation": "twenty-six" },
        { "Content": "zevenentwintig", "Translation": "twenty-seven" },
        { "Content": "achtentwintig", "Translation": "twenty-eight" },
        { "Content": "negenentwintig", "Translation": "twenty-nine" },
        { "Content": "dertig", "Translation": "thirty" }
    ];
    
    lesson13Json = [
        { "Content": "maandag", "Translation": "Monday" },
        { "Content": "dinsdag", "Translation": "Tuesday" },
        { "Content": "woensdag", "Translation": "Wednesday" },
        { "Content": "donderdag", "Translation": "Thursday" },
        { "Content": "vrijdag", "Translation": "Friday" },
        { "Content": "zaterdag", "Translation": "Saturday" },
        { "Content": "zondag", "Translation": "Sunday" }
    ];
    
    lesson14Json = [
        { "Content": "Op zondag kijkt ze films.", "Translation": "On Sundays, she watches movies." },
        { "Content": "Op maandag eet ik pizza.", "Translation": "On Mondays, I eat pizza." },
        { "Content": "Op dinsdag ga jij naar het park.", "Translation": "On Tuesdays, you go to the park." },
        { "Content": "Op woensdag gaat hij naar het werk.", "Translation": "On Wednesdays, he goes to work." },
        { "Content": "Op donderdag doen wij onze boodschappen.", "Translation": "On Thursdays, we do our shopping." },
        { "Content": "Op vrijdag ontmoet ze haar vrienden.", "Translation": "On Fridays, she meets her friends." },
        { "Content": "Op zaterdag sporten zij.", "Translation": "On Saturdays, they do sports." }
    ];
    
    lesson15Json = [
        [
            { "Content": "Ze heeft bruine ogen.", "Translation": "She has brown eyes." },
            { "Content": "Hij heeft blauwe ogen.", "Translation": "He has blue eyes." },
            { "Content": "Ik heb groene ogen.", "Translation": "I have green eyes." },
            { "Content": "Zij hebben hazelnootkleurige ogen.", "Translation": "They have hazel eyes." },
            { "Content": "Zij heeft grijze ogen.", "Translation": "She has gray eyes." }
        ]
    ];
    

    lesson16Json = [
        { "Content": "Ze heeft blond haar.", "Translation": "She has blonde hair." },
        { "Content": "Hij heeft bruin haar.", "Translation": "He has brown hair." },
        { "Content": "Ik heb zwart haar.", "Translation": "I have black hair." },
        { "Content": "Ze hebben rood haar.", "Translation": "They have red hair." },
        { "Content": "Ze heeft kastanjebruin haar.", "Translation": "She has chestnut brown hair." },
        { "Content": "Wij hebben blond haar.", "Translation": "We have blonde hair." },
        { "Content": "Ze hebben zwart haar.", "Translation": "They have black hair." }
    ];
    
    lesson17Json = [
        { "Content": "Ze heeft lang en krullend haar.", "Translation": "She has long and curly hair." },
        { "Content": "Hij heeft geschoren haar.", "Translation": "He has shaved hair." },
        { "Content": "Ze heeft halflang en steil haar.", "Translation": "She has medium length and straight hair." },
        { "Content": "Hij heeft krullend haar.", "Translation": "He has curly hair." },
        { "Content": "Ze heeft heel kort haar.", "Translation": "She has very short hair." },
        { "Content": "Hij heeft golvend haar.", "Translation": "He has wavy hair." },
        { "Content": "Ze heeft krullend haar.", "Translation": "She has curly hair." }
    ];
    
    lesson18Json = [
        { "Content": "Hij is dertig jaar oud.", "Translation": "He is thirty years old." },
        { "Content": "Ze heeft vijfenveertig dollar.", "Translation": "She has forty-five dollars." },
        { "Content": "Er zijn zestig seconden in een minuut.", "Translation": "There are sixty seconds in a minute." },
        { "Content": "Hij weegt tachtig pond.", "Translation": "He weighs eighty pounds." },
        { "Content": "Ze heeft vijfenvijftig appels.", "Translation": "She has fifty-five apples." },
        { "Content": "Er zijn driehonderdvijfenzestig dagen in een jaar.", "Translation": "There are three hundred sixty-five days in a year." },
        { "Content": "Hij heeft zeventig werknemers.", "Translation": "He has seventy employees." }
    ];
    
    lesson19Json = [
        { "Content": "Ze is tweeëntwintig jaar oud.", "Translation": "She is twenty-two years old." },
        { "Content": "Hij is zevenendertig jaar oud.", "Translation": "He is thirty-seven years old." },
        { "Content": "Ze is negentien jaar oud.", "Translation": "She is nineteen years old." },
        { "Content": "Hij is eenenvijftig jaar oud.", "Translation": "He is fifty-one years old." },
        { "Content": "Ze is zesentwintig jaar oud.", "Translation": "She is twenty-six years old." },
        { "Content": "Hij is drieënzestig jaar oud.", "Translation": "He is sixty-three years old." },
        { "Content": "Ze is zevenenveertig jaar oud.", "Translation": "She is forty-seven years old." }
    ];
    
    lesson20Json = [
        { "Content": "Ze is heel aardig.", "Translation": "She is very kind." },
        { "Content": "Hij is heel grappig.", "Translation": "He is very funny." },
        { "Content": "Ze is heel serieus.", "Translation": "She is very serious." },
        { "Content": "Hij is heel verlegen.", "Translation": "He is very shy." },
        { "Content": "Ze is heel sociaal.", "Translation": "She is very sociable." },
        { "Content": "Hij is heel kalm.", "Translation": "He is very calm." },
        { "Content": "Ze is heel energiek.", "Translation": "She is very energetic." }
    ];    

    lesson21Json = [
        { "Content": "China", "Translation": "China" },
        { "Content": "De Verenigde Staten", "Translation": "The United States" },
        { "Content": "Japan", "Translation": "Japan" },
        { "Content": "India", "Translation": "India" },
        { "Content": "Brazilië", "Translation": "Brazil" },
        { "Content": "Rusland", "Translation": "Russia" },
        { "Content": "Duitsland", "Translation": "Germany" },
        { "Content": "Frankrijk", "Translation": "France" },
        { "Content": "Engeland", "Translation": "England" }
    ];
    
    lesson22Json = [
        { "Content": "Ik ben Chinees.", "Translation": "I am Chinese." },
        { "Content": "Jij bent Amerikaan.", "Translation": "You are American." },
        { "Content": "Hij is Japans.", "Translation": "He is Japanese." },
        { "Content": "Zij is Indiaas.", "Translation": "She is Indian." },
        { "Content": "Wij zijn Braziliaans.", "Translation": "We are Brazilian." },
        { "Content": "Jullie zijn Russisch.", "Translation": "You are Russian." },
        { "Content": "Zij zijn Duits.", "Translation": "They are German." },
        { "Content": "Zij zijn Frans.", "Translation": "They are French." },
        { "Content": "We zijn Engels.", "Translation": "We are English." }
    ];
    
    lesson23Json = [
        { "Content": "Mijn vader heet Pierre.", "Translation": "My father's name is Pierre." },
        { "Content": "Ik heb twee broers en een zus.", "Translation": "I have two brothers and one sister." },
        { "Content": "Mijn oom is heel aardig.", "Translation": "My uncle is very kind." },
        { "Content": "Mijn zus is 25 jaar oud.", "Translation": "My sister is 25 years old." },
        { "Content": "Mijn neef houdt van voetballen.", "Translation": "My cousin loves to play football." },
        { "Content": "Mijn tante is een getalenteerde kunstenaar.", "Translation": "My aunt is a talented artist." },
        { "Content": "Mijn opa is de oudste in de familie.", "Translation": "My grandfather is the oldest in the family." }
    ];
    
    lesson24Json = [
        { "Content": "Ik houd ervan om gitaar te spelen.", "Translation": "I love to play the guitar." },
        { "Content": "Zij houdt van bergwandelen.", "Translation": "She likes to hike in the mountains." },
        { "Content": "Mijn broer verzamelt zeldzame postzegels.", "Translation": "My brother collects rare stamps." },
        { "Content": "Wij kijken graag films in het weekend.", "Translation": "We like to watch movies on weekends." },
        { "Content": "Hij is gepassioneerd over fotografie.", "Translation": "He is passionate about photography." },
        { "Content": "Zij is dol op moderne dans.", "Translation": "She adores contemporary dance." },
        { "Content": "Zij houden ervan om te fietsen in het park.", "Translation": "They like to ride bicycles in the park." }
    ];
    
    lesson25Json = [
        { "Content": "Het is vandaag mooi weer.", "Translation": "It's sunny today." },
        { "Content": "Het is erg koud in de winter.", "Translation": "It's very cold in winter." },
        { "Content": "Er zijn wolken aan de hemel.", "Translation": "There are clouds in the sky." },
        { "Content": "De wind waait heel hard.", "Translation": "It's blowing very hard." },
        { "Content": "Er ligt overal sneeuw.", "Translation": "There is snow everywhere." },
        { "Content": "De zon schijnt in de blauwe lucht.", "Translation": "The sun is shining in the blue sky." },
        { "Content": "Het weer is stormachtig vanavond.", "Translation": "It's stormy this evening." }
    ];
    

    lesson26Json = [
        { "Content": "Het is acht uur 's ochtends.", "Translation": "It's eight o'clock in the morning" },
        { "Content": "Ze moet om twee uur dertig aankomen.", "Translation": "She needs to arrive at two thirty PM" },
        { "Content": "We hebben een afspraak om precies vijf uur.", "Translation": "Our appointment is at exactly five o'clock" },
        { "Content": "De film begint om zeven uur vijfenveertig.", "Translation": "The movie starts at seven forty-five PM" },
        { "Content": "Het is twaalf uur en een half.", "Translation": "It's noon and a half" },
        { "Content": "Ik sta om zes uur 's ochtends op, elke dag.", "Translation": "I wake up at six o'clock every day" },
        { "Content": "Het is kwart voor elf 's avonds.", "Translation": "It's a quarter to eleven in the evening" }
    ];
    
    lesson27Json = [
        { "Content": "Ik was mijn handen.", "Translation": "I am washing my hands." },
        { "Content": "Ze borstelt haar haar elke ochtend.", "Translation": "She brushes her hair every morning." },
        { "Content": "Ze staan vroeg op in het weekend.", "Translation": "They wake up early on weekends." },
        { "Content": "We kleden ons snel aan.", "Translation": "We dress quickly." },
        { "Content": "Je maakt je op voor de avond.", "Translation": "You are applying makeup for the evening." },
        { "Content": "Hij scheert zich elke dag.", "Translation": "He shaves every day." },
        { "Content": "Ze maken zich klaar voor het feest vanavond.", "Translation": "They are getting ready for the party tonight." }
    ];
    
    lesson28Json = [
        { "Content": "Poets je je tanden na elke maaltijd?", "Translation": "Do you brush your teeth after every meal?" },
        { "Content": "Wast ze haar handen voor het eten?", "Translation": "Does she wash her hands before eating?" },
        { "Content": "Worden ze 's ochtends vroeg wakker?", "Translation": "Do they wake up early in the morning?" },
        { "Content": "Kleden jullie je formeel op het werk?", "Translation": "Do you dress formally at work?" },
        { "Content": "Maak ik me op voor het feest vanavond?", "Translation": "Am I applying makeup for the party tonight?" },
        { "Content": "Maken ze zich klaar voor de reis morgen?", "Translation": "Are they getting ready for the trip tomorrow?" },
        { "Content": "Staan we 's ochtends vroeg op doordeweekse dagen?", "Translation": "Do we get up early on weekdays?" }
    ];
    
    lesson29Json = [
        { "Content": "Hij eet pizza als avondeten.", "Translation": "He eats pizza for dinner." },
        { "Content": "Ze maakt een salade voor de lunch.", "Translation": "She prepares a salad for lunch." },
        { "Content": "Ze drinken sinaasappelsap als ontbijt.", "Translation": "They drink orange juice for breakfast." },
        { "Content": "Houd je van fruit eten?", "Translation": "Do you like to eat fruits?" },
        { "Content": "We bestellen sushi als avondeten vanavond.", "Translation": "We are ordering sushi for dinner tonight." },
        { "Content": "Ze kookt geroosterde kip voor de lunch.", "Translation": "She cooks roasted chicken for lunch." },
        { "Content": "Ze eten groenten bij hun avondeten.", "Translation": "They eat vegetables with their dinner." }
    ];
    
    lesson30Json = [
        { "Content": "Wanneer sta je 's ochtends op?", "Translation": "When do you get up in the morning?" },
        { "Content": "Met wie ontmoet je in de bibliotheek?", "Translation": "Whom do you meet at the library?" },
        { "Content": "Hoe bereidt ze zich voor op de bruiloft?", "Translation": "How does she prepare for the wedding?" },
        { "Content": "Hoe lang rusten ze uit in de middag?", "Translation": "How long do they rest in the afternoon?" },
        { "Content": "Waar maak ik me klaar voor het avondeten?", "Translation": "What am I getting ready for dinner?" },
        { "Content": "Waar hebben jullie plezier op zaterdagavond?", "Translation": "Where do you have fun on Saturday night?" },
        { "Content": "Waarom kleden we ons formeel?", "Translation": "Why do we dress formally?" }
    ];
    



    lessonJSONData = [lesson1Json, lesson2Json, lesson3Json, lesson4Json, lesson5Json, lesson6Json, lesson7Json, lesson8Json, lesson9Json, lesson10Json, lesson11Json, lesson12Json, lesson13Json, lesson14Json, lesson15Json, lesson16Json, lesson17Json, lesson18Json, lesson19Json, lesson20Json, lesson21Json, lesson22Json, lesson23Json, lesson24Json, lesson25Json, lesson26Json, lesson27Json, lesson28Json, lesson29Json, lesson30Json];
}