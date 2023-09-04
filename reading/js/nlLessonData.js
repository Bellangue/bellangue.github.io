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

    lessonNameData = ["Welkom bij de cursus!", "Begroetingen 1", "Mensen 1", "Mensen 2", "Tijd 1", "Introductie 1", "Mensen 3", "Getallen 1", "Getallen 1", "Getallen 2", "Getallen 3", "Getallen 4", "Days of the Week 1"];

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
            "Content": "Hallo! Ik heet Pieter.",
            "Question": "Who is speaking?",
            "Answers": ["Pietter"],
            "Options": ["Pietter",
                "Karel",
                "Floor",
                "Cornelia"],
            "Translation": "Hello! I am called Pieter."
        },
        {
            "Content": "Ik heet Jan.",
            "Question": "Translate into English",
            "Answers": ["I am called Jan."],
            "Options": ["I am called Jan.",
                "My friend is called Jan.",
                "I hate people called Jan.",
                "Jan is a bad name."],
            "Translation": "I am called Jan."
        },
        {
            "Content": "Hij heten Lucas.",
            "Question": "What is the error in this sentence?",
            "Answers": ["It is conjugated incorrectly."],
            "Options": ["The gender is wrong.",
                "The spelling is wrong.",
                "It is conjugated incorrectly.",
                "There is no mistake."],
            "Translation": "heten > heet"
        },
        {
            "Content": "Hij heten Karel.",
            "Question": "What is the error in this sentence?",
            "Answers": ["It is conjugated incorrectly."],
            "Options": ["The gender is wrong.",
                "The spelling is wrong.",
                "It is conjugated incorrectly.",
                "There is no mistake."],
            "Translation": "heten > heet"
        },
        {
            "Content": "Hoe heet je?",
            "Question": "Select your reply.",
            "Answers": ["Ik heet Charlotte. En jij?"],
            "Options": ["Ik heet Charlotte. En jij?",
                "Jij heet Charlotte.",
                "Zij heet Josefien.",
                "Onze naam is Gerard."],
            "Translation": "Hoe heet je? Ik heet Charlotte. En jij?"
        },
        {
            "Content": "Zij heet Floor en hij heet Gerard.",
            "Question": "Translate into English",
            "Answers": ["She is called Floor and he is called Gerard."],
            "Options": ["She is called Floor and he is called Gerard.",
                "He is called Floor and she is called Gerard.",
                "Floor and Gerard are apples.",
                "Floor and Gerard are not apples."],
            "Translation": "She is called Floor and he is called Gerard."
        },
        {
            "Content": "Hij heten Karel.",
            "Question": "What is the error in this sentence?",
            "Answers": ["It is conjugated incorrectly."],
            "Options": ["The gender is wrong.",
                "The spelling is wrong.",
                "It is conjugated incorrectly.",
                "There is no mistake."],
            "Translation": "heten > heet"
        },
    ]

    lesson7Json = [
        {
            "Content": "Zij is een studente. __ houdt van school.",
            "Question": "Choose the correct pronoun:",
            "Answers": ["Zij"],
            "Options": ["Zij", "Ik", "Jullie", "Wij"],
            "Translation": "She is a student. She likes school."
        },
        {
            "Content": "Wij gaan naar het huis van Pieter. ___ zijn vrienden.",
            "Question": "Choose the correct pronoun:",
            "Answers": ["Wij"],
            "Options": ["Wij", "Ik", "Hij", "Het"],
            "Translation": "We are going to Pieter's place. We are friends."
        },
        {
            "Content": "Mark is mijn vriend. ___ is erg aardig.",
            "Question": "Choose the correct pronoun:",
            "Answers": ["Hij"],
            "Options": ["Hij", "Jullie", "Zij", "Wij"],
            "Translation": "Mark is my friend. He is very nice."
        },
        {
            "Content": "Paul praat Engels. ___ praat met zijn moeder.",
            "Question": "Choose the correct pronoun:",
            "Answers": ["Hij"],
            "Options": ["Hij", "Zij", "Jullie", "Wij"],
            "Translation": "Paul is talking English. He is talking with his mother."
        },
        {
            "Content": "Charlotte en ik zijn vrienden. ___ houden van spelen.",
            "Question": "Choose the correct pronoun:",
            "Answers": ["Wij"],
            "Options": ["Wij", "Het", "Ik", "Hij"],
            "Translation": "Charlotte and I are friends. We love to play."
        },
        {
            "Content": "___ spreken.",
            "Question": "Choose the correct pronoun:",
            "Answers": ["Zij"],
            "Options": ["Zij", "Hij", "Ik", "Het"],
            "Translation": "They speak."
        },
        {
            "Content": "__ spreek Nederlands.",
            "Question": "Choose the correct pronoun:",
            "Answers": ["Ik"],
            "Options": ["Ik", "Het", "Hij", "Zij"],
            "Translation": "I speak French."
        },
    ]

    lesson8Json = [
        {
            "Content": "een",
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
            "Content": "twee",
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
            "Content": "drie",
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
            "Content": "vier",
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
            "Content": "vijf",
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
            "Content": "zes",
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
            "Content": "zeven",
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
            "Content": "acht",
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
            "Content": "negen",
            "Question": "Translate into English",
            "Answers": ["nine"],
            "Options": [
                "nine",
                "five",
                "three",
                "seven"],
            "Translation": "nine"
        },
    ]

    lesson9Json = [
        {
            "Content": "een",
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
            "Content": "twee",
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
            "Content": "drie",
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
            "Content": "vier",
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
            "Content": "vijf",
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
            "Content": "zes",
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
            "Content": "zeven",
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
            "Content": "acht",
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
            "Content": "negen",
            "Question": "Translate into English",
            "Answers": ["nine"],
            "Options": [
                "nine",
                "five",
                "three",
                "seven"],
            "Translation": "nine"
        },

    ]

    lesson10Json = [
        {
            "Content": "Ik heb een kat.",
            "Question": "What is the error in this sentence?",
            "Answers": ["There is no mistake."],
            "Options": ["The gender is wrong.",
                "The spelling is wrong.",
                "It is conjugated incorrectly.",
                "There is no mistake."],
            "Translation": "I have a cat."
        },
        {
            "Content": "Ik heb twee honden.",
            "Question": "What is the error in this sentence?",
            "Answers": ["There is no mistake."],
            "Options": ["The gender is wrong.",
                "The spelling is wrong.",
                "It is conjugated incorrectly.",
                "There is no mistake."],
            "Translation": "I have two dogs."
        },
        {
            "Content": "Heb jij drie dieren?",
            "Question": "Select your reply.",
            "Answers": ["Ja, ik heb twee katten en een vis."],
            "Options": [
                "Ja, ik heb twee katten en een vis.",
                "Ja, ik heb een kat en een hond.",
                "Nee, ik ben Piet.",
                "Nee, ik heb een huis."],
            "Translation": "Do you have three animals? Yes, I have two cats and one fish."
        },
        {
            "Content": "Hij heeft vier vrienden.",
            "Question": "How many friends does he have?",
            "Answers": ["vier"],
            "Options": [
                "vier",
                "negen",
                "acht",
                "drie"],
            "Translation": "He has four friends."
        },
        {
            "Content": "Zij heeft vijf computerspellen.",
            "Question": "How many video games does she have?",
            "Answers": ["vijf"],
            "Options": [
                "vijf",
                "zeven",
                "twee",
                "acht"],
            "Translation": "She has five video games."
        },
        {
            "Content": "Zij hebben zes pennen.",
            "Question": "How many pens do they have?",
            "Answers": ["zes"],
            "Options": [
                "zes",
                "zeven",
                "een",
                "negen"],
            "Translation": "They have six pens."
        },
        {
            "Content": "Zij hebben zeven schriften.",
            "Question": "How many notebooks do they have?",
            "Answers": ["zeven"],
            "Options": [
                "zeven",
                "negen",
                "een",
                "twee"],
            "Translation": "They have seven notebooks."
        },
        {
            "Content": "Ik heb ___ kaart.",
            "Question": "Select the correct number:",
            "Answers": ["een"],
            "Options": [
                "een",
                "twee",
                "drie",
                "vier"],
            "Translation": "I have one card."
        },
    ]

    lesson11Json = [
        {
            "Content": "elf",
            "Question": "Translate into English.",
            "Answers": ["eleven"],
            "Options": ["eleven", "four", "eighteen", "fifteen"],
            "Translation": "eleven"
        },
        {
            "Content": "twaalf",
            "Question": "Translate into English.",
            "Answers": ["twelve"],
            "Options": ["twelve", "seventeen", "nine", "five"],
            "Translation": "twelve"
        },
        {
            "Content": "dertien",
            "Question": "Translate into English.",
            "Answers": ["thirteen"],
            "Options": ["thirteen", "ten", "sixteen", "three"],
            "Translation": "thirteen"
        },
        {
            "Content": "veertien",
            "Question": "Translate into English.",
            "Answers": ["fourteen"],
            "Options": ["fourteen", "two", "nineteen", "seven"],
            "Translation": "fourteen"
        },
        {
            "Content": "vijftien",
            "Question": "Translate into English.",
            "Answers": ["fifteen"],
            "Options": ["fifteen", "six", "eight", "one"],
            "Translation": "fifteen"
        },
        {
            "Content": "zestien",
            "Question": "Translate into English.",
            "Answers": ["sixteen"],
            "Options": ["sixteen", "seventeen", "thirteen", "five"],
            "Translation": "sixteen"
        },
        {
            "Content": "zeventien",
            "Question": "Translate into English.",
            "Answers": ["seventeen"],
            "Options": ["seventeen", "three", "ten", "four"],
            "Translation": "seventeen"
        },
        {
            "Content": "achttien",
            "Question": "Translate into English.",
            "Answers": ["eighteen"],
            "Options": ["eighteen", "eight", "thirteen", "nineteen"],
            "Translation": "eighteen"
        },
        {
            "Content": "negentien",
            "Question": "Translate into English.",
            "Answers": ["nineteen"],
            "Options": ["nineteen", "sixteen", "two", "twelve"],
            "Translation": "nineteen"
        },
        {
            "Content": "twintig",
            "Question": "Translate into English.",
            "Answers": ["twenty"],
            "Options": ["twenty", "fifteen", "eight", "seven"],
            "Translation": "twenty"
        }
    ];

    lesson12Json = [
        {
            "Content": "eenentwintig",
            "Question": "Translate into English.",
            "Answers": ["twenty-one"],
            "Options": ["twenty-one", "twenty-nine", "twenty-four", "twenty-five"],
            "Translation": "twenty-one"
        },
        {
            "Content": "tweeëntwintig",
            "Question": "Translate into English.",
            "Answers": ["twenty-two"],
            "Options": ["nine", "twenty-two", "twenty", "thirty"],
            "Translation": "twenty-two"
        },
        {
            "Content": "drieëntwintig",
            "Question": "Translate into English.",
            "Answers": ["twenty-three"],
            "Options": ["twenty-three", "three", "sixteen", "nineteen"],
            "Translation": "twenty-three"
        },
        {
            "Content": "vierentwintig",
            "Question": "Translate into English.",
            "Answers": ["twenty-four"],
            "Options": ["fourteen", "twenty-four", "fourty", "four"],
            "Translation": "twenty-four"
        },
        {
            "Content": "vijfentwintig",
            "Question": "Translate into English.",
            "Answers": ["twenty-five"],
            "Options": ["fifteen", "eighteen", "twenty-five", "seven"],
            "Translation": "twenty-five"
        },
        {
            "Content": "zesentwintig",
            "Question": "Translate into English.",
            "Answers": ["twenty-six"],
            "Options": ["twenty-six", "twenty-seven", "twenty-two", "twelve"],
            "Translation": "twenty-six"
        },
        {
            "Content": "zevenentwintig",
            "Question": "Translate into English.",
            "Answers": ["twenty-seven"],
            "Options": ["twenty-seven", "eleven", "ten", "fourteen"],
            "Translation": "twenty-seven"
        },
        {
            "Content": "achtenentwintig",
            "Question": "Translate into English.",
            "Answers": ["twenty-eight"],
            "Options": ["eighteen", "twenty-eight", "twenty-three", "nineteen"],
            "Translation": "twenty-eight"
        },
        {
            "Content": "negenentwintig",
            "Question": "Translate into English.",
            "Answers": ["twenty-nine"],
            "Options": ["twenty-nine", "nineteen", "nine", "fourteen"],
            "Translation": "twenty-nine"
        },
        {
            "Content": "dertig",
            "Question": "Translate into English.",
            "Answers": ["thirty"],
            "Options": ["thirty", "twenty", "ten", "zero"],
            "Translation": "thirty"
        }
    ];

    lesson13Json = [
        {
            "Content": "maandag",
            "Question": "Translate into English.",
            "Answers": ["Monday"],
            "Options": ["Monday",
                "Tuesday",
                "Wednesday",
                "Thursday"],
            "Translation": "Monday"
        },
        {
            "Content": "dinsdag",
            "Question": "Translate into English.",
            "Answers": ["Tuesday"],
            "Options": ["Tuesday",
                "Friday",
                "Wednesday",
                "Saturday"],
            "Translation": "Tuesday"
        },
        {
            "Content": "woensdag",
            "Question": "Translate into English.",
            "Answers": ["Wednesday"],
            "Options": ["Wednesday",
                "Sunday",
                "Monday",
                "Saturday"],
            "Translation": "Wednesday"
        },
        {
            "Content": "donderdag",
            "Question": "Translate into English.",
            "Answers": ["Thursday"],
            "Options": ["Thursday",
                "Friday",
                "Monday",
                "Sunday"],
            "Translation": "Thursday"
        },
        {
            "Content": "vrijdag",
            "Question": "Translate into English.",
            "Answers": ["Friday"],
            "Options": ["Friday",
                "Tuesday",
                "Wednesday",
                "Thursday"],
            "Translation": "Friday"
        },
        {
            "Content": "zaterdag",
            "Question": "Translate into English.",
            "Answers": ["Saturday"],
            "Options": ["Saturday",
                "Monday",
                "Wednesday",
                "Friday"],
            "Translation": "Saturday"
        },
        {
            "Content": "zondag",
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