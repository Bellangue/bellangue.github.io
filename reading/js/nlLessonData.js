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
            "The spelling is wrong.",
            "It is conjugated incorrectly.",
            "There is no mistake."],
        "Translation": " > "
    },
*/

if (localStorage.getItem("currentLanguage") === "nl") {

    lessonNameData = ["Welkom bij de cursus!", "Begroetingen 1", "Mensen 1", "Mensen 2", "Tijd 1", "Introductions 1", "People 3", "Numbers 1", "Numbers 1", "Numbers 2", "Numbers 3", "Numbers 4", "Days of the Week 1"];

    lesson1Json = [
        {
            "Content": "Hallo! Ik heet Jan.",
            "Question": "Who is speaking?",
            "Answers": ["Jan"],
            "Options": ["Jan",
                "Karel",
                "Floor",
                "Carolien"],
            "Translation": "Hello! I am called Pierre."
        },
        {
            "Content": "de jongen",
            "Question": "Translate into English.",
            "Answers": ["the boy"],
            "Options": ["the boy",
                "the woman",
                "the girl",
                "the man"],
            "Translation": "the boy"
        },
        {
            "Content": "Hallo. Hoe heet jij?",
            "Question": "Select your reply.",
            "Answers": ["Ik heet Floor."],
            "Options": ["Ik heet Floor.",
                "Ik spreek geen Nederlands.",
                "Ik hou van stamppot.",
                "Ik ben een kroket."],
            "Translation": "Hello. What are you called? I am called Fleur."
        },
        {
            "Content": "Fijne dag.",
            "Question": "Translate into English.",
            "Answers": "Have a nice day.",
            "Options": ["Have a nice day.",
                "Have a yummy sweet.",
                "Have a good journey.",
                "Read a nice newspaper.",],
            "Translation": "Have a nice day."
        },
        {
            "Content": "Alles goed?",
            "Question": "Select your reply.",
            "Answers": "Ja, met jou?",
            "Options": ["Ja, met jou?",
                "Ik ben een wortel.",
                "Ik wil een glas appelsap.",
                "Ik heb een hond. Hij heet Fikkie."],
            "Translation": "Is everything alright? Yes, I'm fine."
        },
        {
            "Content": "Spreek jij Engels?",
            "Question": "Select your reply.",
            "Answers": ["Nee, ik spreek geen Engels."],
            "Options": ["Nee, ik spreek geen Engels.",
                "Hallo! Hoe gaat het?",
                "Ik hou van jou.",
                "Jij bent lelijk."],
            "Translation": "Do you speak English? No I don't speak English."
        },
        {
            "Content": "Welkom bij de cursus!",
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
            "Content": "Hallo. Alles goed?",
            "Question": "Translate into English.",
            "Answers": ["Hello. How is it going?"],
            "Options": ["Hello. How is it going?",
                "Hello. Have a nice day.",
                "Goodbye. I like you.",
                "Goodbye. I don't want to see you."],
            "Translation": "Hello. How is it going?"
        },
        {
            "Content": "Dag. Tot snel.",
            "Question": "What is happening?",
            "Answers": ["The person you are talking to is leaving."],
            "Options": ["The person you are talking to is leaving.",
                "You are meeting up with someone.",
                "You are confessing your love to a friend.",
                "You are talking to someone in the army."],
            "Translation": "Bye. See you soon."
        },
        {
            "Content": "Het gaat goed, bedankt. En met jou?",
            "Question": "Select your reply.",
            "Answers": ["Het gaat slecht."],
            "Options": ["Het gaat slecht",
                "Het is kaas.",
                "Ik kijk een film.",
                "Zij hebben pennen."],
            "Translation": "It is going well, thanks. And you? I am not doing well."
        },
        {
            "Content": "Hoe gaat het met je?",
            "Question": "Translate into English.",
            "Answers": ["How are you?"],
            "Options": ["How are you?",
                "Where are you going?",
                "Why do you exist?",
                "How am I sad?"],
            "Translation": "How are you?"
        },
        {
            "Content": "Goedenacht.",
            "Question": "Translate into English.",
            "Answers": ["Good night."],
            "Options": ["Good night.",
                "Good evening.",
                "Good day.",
                "Goodbye."],
            "Translation": "Good night."
        },
        {
            "Content": "Tot zmel.",
            "Question": "What is the error in this sentence?",
            "Answers": ["The spelling is wrong."],
            "Options": ["The gender is wrong.",
                "The spelling is wrong.",
                "It is conjugated incorrectly.",
                "There is no mistake."],
            "Translation": "Tot zmel > Tot snel (Goodbye. See you soon.)"
        },
        {
            "Content": "Hallo. Het gaat wel.",
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
            "Content": "de jongen",
            "Question": "Translate into English.",
            "Answers": ["the boy"],
            "Options": ["the boy",
                "the woman",
                "the girl",
                "the man"],
            "Translation": "the boy"
        },
        {
            "Content": "de man",
            "Question": "Translate into English.",
            "Answers": ["the man"],
            "Options": ["the man",
                "the woman",
                "the girl",
                "the boy"],
            "Translation": "the man"
        },
        {
            "Content": "het meisje",
            "Question": "Translate into English.",
            "Answers": ["the girl"],
            "Options": ["the girl",
                "the woman",
                "the boy",
                "the man"],
            "Translation": "the girl"
        },
        {
            "Content": "de vrouw",
            "Question": "Translate into English.",
            "Answers": ["the woman"],
            "Options": ["the woman",
                "the girl",
                "the boy",
                "the man"],
            "Translation": "the woman"
        },
        {
            "Content": "Ik ben een jongen.",
            "Question": "Translate into English.",
            "Answers": ["I am a boy."],
            "Options": ["I am a boy.",
                "I am a woman.",
                "I am a girl.",
                "I am a man."],
            "Translation": "I am a boy."
        },
        {
            "Content": "Ik ben een man.",
            "Question": "Translate into English.",
            "Answers": ["I am a man."],
            "Options": ["I am a man.",
                "I am a woman.",
                "I am a girl.",
                "I am a boy."],
            "Translation": "I am a man."
        },
        {
            "Content": "Ik ben een meisje.",
            "Question": "Translate into English.",
            "Answers": ["I am a girl."],
            "Options": ["I am a girl.",
                "I am a woman.",
                "I am a man.",
                "I am a boy."],
            "Translation": "I am a girl."
        },
        {
            "Content": "Ik ben een vrouw.",
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
            "Content": "Ben jij een jongen?",
            "Question": "Translate into English.",
            "Answers": ["Are you a boy?"],
            "Options": ["Are you a boy?",
                "Are you a woman?",
                "Are you a girl?",
                "Are you a man?"],
            "Translation": "Are you a boy?"
        },
        {
            "Content": "Ben jij een man?",
            "Question": "Translate into English.",
            "Answers": ["Are you a man?"],
            "Options": ["Are you a man?",
                "Are you a woman?",
                "Are you a girl?",
                "Are you a boy?"],
            "Translation": "Are you a man?"
        },
        {
            "Content": "Ben jij een meisje?",
            "Question": "Translate into English.",
            "Answers": ["Are you a girl?"],
            "Options": ["Are you a girl?",
                "Are you a woman?",
                "Are you a man?",
                "Are you a boy?"],
            "Translation": "Are you a girl?"
        },
        {
            "Content": "Ben jij een vrouw?",
            "Question": "Translate into English.",
            "Answers": ["Are you a woman?"],
            "Options": ["Are you a woman?",
                "Are you a girl?",
                "Are you a man?",
                "Are you a boy?"],
            "Translation": "Are you a woman?"
        },
        {
            "Content": "Ben jij een jongen?",
            "Question": "Select your reply.",
            "Answers": ["Ja, ik ben een jongen."],
            "Options": ["Ja, ik ben een jongen.",
                "Ja, ik ben ene jongen.",
                "Ja, ik is een jongen.",
                "Ja, ik zijn een jongen.",],
            "Translation": "Are you a boy? Yes, I am a boy."
        },
        {
            "Content": "Ben jij een man?",
            "Question": "Select your reply.",
            "Answers": ["Ja, ik ben een man."],
            "Options": ["Ja, ik ben een man.",
                "Ja, ik wees een man.",
                "Ja, ik was een man.",
                "Ja, ik zijn een man.",],
            "Translation": "Are you a man? Yes, I am a man."
        },
        {
            "Content": "Ben jij een meisje?",
            "Question": "Select your reply.",
            "Answers": ["Ja, ik ben een meisje."],
            "Options": ["Ja, ik ben een meisje.",
                "Ja, ik zijn een meisje.",
                "Ja, ik wees een meisje.",
                "Ja, ik ben ene meisje.",],
            "Translation": "Are you a girl? Yes, I am a girl."
        },
        {
            "Content": "Ben jij een vrouw?",
            "Question": "Select your reply.",
            "Answers": ["Ja, ik ben een vrouw."],
            "Options": ["Ja, ik ben een vrouw.",
                "Ja, ik was een vrouw.",
                "Ja, ik zijn een vrouw.",
                "Ja, ik wees een vrouw.",],
            "Translation": "Are you a woman? Yes, I am a woman."
        },
    ]

    lesson5Json = [
        {
            "Content": "Fijn dag.",
            "Question": "What is the error in this sentence?",
            "Answers": ["The gender is wrong."],
            "Options": ["The gender is wrong.",
                "The spelling is wrong.",
                "It is conjugated incorrectly.",
                "There is no mistake."],
            "Translation": "Fijn dag. > Fijne dag."
        },
        {
            "Content": "Vandaag werk ik.",
            "Question": "When do I work?",
            "Answers": ["Today"],
            "Options": ["Today",
                "Tomorrow",
                "Yesterday",
                "Never"],
            "Translation": "Today, I work."
        },
        {
            "Content": "Jij leest elke dag.",
            "Question": "Translate into English.",
            "Answers": ["You read everyday."],
            "Options": ["You read everyday.",
                "You lie often.",
                "You and me",
                "You are always lying down."],
            "Translation": "You read everyday."
        },
        {
            "Content": "gisteren",
            "Question": "Translate into English.",
            "Answers": ["yesterday"],
            "Options": ["yesterday",
                "here",
                "tomorrow",
                "her"],
            "Translation": "yesterday"
        },
        {
            "Content": "Morgen en gisteren.",
            "Question": "Translate into English.",
            "Answers": ["Tomorrow and yesterday"],
            "Options": ["Tomorrow and yesterday",
                "Today and tomorrow",
                "Today and yesterday",
                "It will never happen."],
            "Translation": "Tomorrow and yesterday"
        },
        {
            "Content": "Hij eet niet.",
            "Question": "What is he doing?",
            "Answers": ["He is not eating."],
            "Options": ["He is not eating.",
                "He is eating.",
                "He is not drinking.",
                "He is drinking."],
            "Translation": ""
        },
        {
            "Content": "Hij ruimt op.",
            "Question": "What is he doing?",
            "Answers": ["He is cleaning."],
            "Options": ["He is cleaning.",
                "He is eating.",
                "He is not drinking.",
                "He is drinking."],
            "Translation": "He is cleaning."
        },
        {
            "Content": "doet ... niet",
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
            "Translation": "nine"
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
                "The spelling is wrong.",
                "It is conjugated incorrectly.",
                "There is no mistake."],
            "Translation": "I have a cat."
        },
        {
            "Content": "J'ai deux chien.",
            "Question": "What is the error in this sentence?",
            "Answers": ["There is no mistake."],
            "Options": ["The gender is wrong.",
                "The spelling is wrong.",
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

    lessonJSONData = [lesson1Json, lesson2Json, lesson3Json, lesson4Json, lesson5Json, lesson6Json, lesson7Json, lesson8Json, lesson9Json, lesson10Json, lesson11Json, lesson12Json, lesson13Json];
}