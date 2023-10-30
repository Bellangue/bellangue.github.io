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

    lessonNameData = ["Welcome to the Course!", "Greetings 1", "People 1", "People 2", "Time 1", "Introductions 1", "People 3", "Numbers 1", "Numbers 1", "Numbers 2", "Numbers 3", "Numbers 4", "Days of the Week 1", "Days of the Week 2", "Appearance 1", "Appearance 2", "Appearance 3", "Numbers 5", "Age 1", "Personality 1", "Countries 1", "Countries 2", "Family 1", "Hobbies 1", "Weather 1", "Time 1", "Daily Routine 1", "Questions 1"];

    lesson1Json = [
        {
            "Content": "Hallo! Ik heet Jan.",
            "Question": "Who is speaking?",
            "Answers": ["Jan"],
            "Options": ["Jan",
                "Karel",
                "Floor",
                "Carolien"],
            "Translation": "Hello! I am called Jan."
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
            "Translation": "Hello. What are you called? I am called Floor."
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

    lesson14Json = [
        {
            "Content": "Op zondag kijkt ze naar films.",
            "Question": "When does she watch movies?",
            "Answers": ["On Sundays"],
            "Options": [
                "On Sundays",
                "On Mondays",
                "On Wednesdays",
                "On Fridays"
            ],
            "Translation": "On Sundays, she watches movies."
        },
        {
            "Content": "Op maandag eet ik pizza.",
            "Question": "When do I eat pizza?",
            "Answers": ["On Mondays"],
            "Options": [
                "On Mondays",
                "On Tuesdays",
                "On Sundays",
                "On Saturdays"],
            "Translation": "On Mondays, I eat pizza."
        },
        {
            "Content": "Op dinsdag ga jij naar het park.",
            "Question": "When do you go to the park?",
            "Answers": ["On Tuesdays"],
            "Options": [
                "On Tuesdays",
                "On Wednesdays",
                "On Fridays",
                "On Saturdays"],
            "Translation": "On Tuesdays, you go to the park."
        },
        {
            "Content": "Op woensdag gaat hij naar zijn werk.",
            "Question": "When does he go to work?",
            "Answers": ["On Wednesdays"],
            "Options": [
                "On Wednesdays",
                "On Thursdays",
                "On Tuesdays",
                "On Fridays"
            ],
            "Translation": "On Wednesdays, he goes to work."
        },
        {
            "Content": "Op donderdag doen we boodschappen.",
            "Question": "When do we do our shopping?",
            "Answers": ["On Thursdays"],
            "Options": [
                "On Thursdays",
                "On Saturdays",
                "On Sundays",
                "On Mondays"
            ],
            "Translation": "On Thursdays, we do our shopping."
        },
        {
            "Content": "Op vrijdag ziet ze haar vrienden.",
            "Question": "When does she see her friends?",
            "Answers": ["On Fridays"],
            "Options": [
                "On Fridays",
                "On Sundays",
                "On Wednesdays",
                "On Tuesdays"
            ],
            "Translation": "On Fridays, she meets her friends."
        },
        {
            "Content": "Op zaterdag doen ze aan sport.",
            "Question": "When do they do sports?",
            "Answers": ["On Saturdays"],
            "Options": [
                "On Saturdays",
                "On Wednesdays",
                "On Mondays",
                "On Thursdays"
            ],
            "Translation": "On Saturdays, they do sports."
        }
    ];

    lesson15Json = [
        {
            "Content": "Wat voor kleur hebben haar ogen?",
            "Question": "What color are her eyes?",
            "Answers": ["Brown"],
            "Options": ["Brown", "Blue", "Green", "Hazel"],
            "Translation": "She has brown eyes."
        },
        {
            "Content": "Hij heeft blauwe ogen.",
            "Question": "What color are his eyes?",
            "Answers": ["Blue"],
            "Options": ["Blue", "Brown", "Green", "Gray"],
            "Translation": "He has blue eyes."
        },
        {
            "Content": "Ik heb groene ogen.",
            "Question": "What color are my eyes?",
            "Answers": ["Green"],
            "Options": ["Green", "Brown", "Blue", "Hazel"],
            "Translation": "I have green eyes."
        },
        {
            "Content": "Zij hebben hazelnootkleurige ogen.",
            "Question": "What color are their eyes?",
            "Answers": ["Hazel"],
            "Options": ["Hazel", "Brown", "Blue", "Green"],
            "Translation": "They have hazel eyes."
        },
        {
            "Content": "Zij heeft grijze ogen.",
            "Question": "What color are her eyes?",
            "Answers": ["Gray"],
            "Options": ["Gray", "Brown", "Blue", "Green"],
            "Translation": "She has gray eyes."
        }
    ];

    lesson16Json = [
        {
            "Content": "Zij heeft blond haar.",
            "Question": "What color is her hair?",
            "Answers": ["Blonde"],
            "Options": ["Blonde", "Brown", "Black", "Red"],
            "Translation": "She has blonde hair."
        },
        {
            "Content": "Hij heeft bruin haar.",
            "Question": "What color is his hair?",
            "Answers": ["Brown"],
            "Options": ["Brown", "Blonde", "Black", "Red"],
            "Translation": "He has brown hair."
        },
        {
            "Content": "Ik heb zwart haar.",
            "Question": "What color is my hair?",
            "Answers": ["Black"],
            "Options": ["Black", "Blonde", "Brown", "Red"],
            "Translation": "I have black hair."
        },
        {
            "Content": "Zij hebbben rood haar.",
            "Question": "What color is their hair?",
            "Answers": ["Red"],
            "Options": ["Red", "Blonde", "Brown", "Black"],
            "Translation": "They have red hair."
        },
        {
            "Content": "Zij heeft bruin haar.",
            "Question": "What color is her hair?",
            "Answers": ["Brown"],
            "Options": ["Brown", "Blonde", "Black", "Red"],
            "Translation": "She has brown hair."
        },
        {
            "Content": "Wij hebben blond haar.",
            "Question": "What color is our hair?",
            "Answers": ["Blonde"],
            "Options": ["Blonde", "Brown", "Black", "Red"],
            "Translation": "We have blonde hair."
        },
        {
            "Content": "Ze hebben zwart haar.",
            "Question": "What color is their hair?",
            "Answers": ["Black"],
            "Options": ["Black", "Blonde", "Brown", "Red"],
            "Translation": "They have black hair."
        }
    ];

    lesson17Json = [
        {
            "Content": "Ze heeft lang en krullend haar.",
            "Question": "What is her hair style?",
            "Answers": ["Long and curly"],
            "Options": ["Long and curly", "Short and straight", "Medium and wavy", "Bald"],
            "Translation": "She has long and curly hair."
        },
        {
            "Content": "Hij heeft geschoren haar.",
            "Question": "What is his hair style?",
            "Answers": ["Shaved"],
            "Options": ["Shaved", "Medium length", "Balding", "Curly"],
            "Translation": "He has shaved hair."
        },
        {
            "Content": "Zij heeft middellang en stijl haar.",
            "Question": "What is her hair style?",
            "Answers": ["Medium length and straight"],
            "Options": ["Medium length and straight", "Short and curly", "Long and wavy", "Bald"],
            "Translation": "She has medium length and straight hair."
        },
        {
            "Content": "Hij heeft krullen.",
            "Question": "What is his hair style?",
            "Answers": ["Curly"],
            "Options": ["Curly", "Straight", "Short", "Balding"],
            "Translation": "He has curly hair."
        },
        {
            "Content": "Zij heeft zeer kort haar.",
            "Question": "What is her hair style?",
            "Answers": ["Very short"],
            "Options": ["Very short", "Long and wavy", "Curly", "Bald"],
            "Translation": "She has very short hair."
        },
        {
            "Content": "Hij heeft golvend haar.",
            "Question": "What is his hair style?",
            "Answers": ["Wavy"],
            "Options": ["Wavy", "Straight", "Short and curly", "Balding"],
            "Translation": "He has wavy hair."
        },
        {
            "Content": "Zij heeft krullend haar.",
            "Question": "What is her hair style?",
            "Answers": ["Curly"],
            "Options": ["Curly", "Straight", "Short and wavy", "Balding"],
            "Translation": "She has curly hair."
        }
    ];

    lesson18Json = [
        {
            "Content": "Hij is dertig jaar oud.",
            "Question": "How old is he?",
            "Answers": ["Thirty"],
            "Options": ["Thirty", "Twenty", "Fifty", "Seventy"],
            "Translation": "He is thirty years old."
        },
        {
            "Content": "Zij heeft vijfenveertig euro.",
            "Question": "How much money does she have?",
            "Answers": ["Forty-five"],
            "Options": ["Forty-five", "Sixty", "Ninety", "Seventy-five"],
            "Translation": "She has forty-five euros."
        },
        {
            "Content": "Een minuut is zestig seconden.",
            "Question": "How many seconds are there in a minute?",
            "Answers": ["Sixty"],
            "Options": ["Sixty", "Fifty", "Seventy", "Eighty"],
            "Translation": "There are sixty seconds in a minute."
        },
        {
            "Content": "Hij weegt 80 kilo.",
            "Question": "How much does he weigh?",
            "Answers": ["Eighty"],
            "Options": ["Eighty", "Sixty", "Ninety", "Seventy-five"],
            "Translation": "He weighs eighty kilos."
        },
        {
            "Content": "Zij heeft vijenvijftig appels.",
            "Question": "How many apples does she have?",
            "Answers": ["Fifty-five"],
            "Options": ["Fifty-five", "Sixty", "Ninety", "Seventy-five"],
            "Translation": "She has fifty-five apples."
        },
        {
            "Content": "Er zitten driehondervijfenzestig dagen in een jaar.",
            "Question": "How many days are there in a year?",
            "Answers": ["Three hundred sixty-five"],
            "Options": ["Three hundred sixty-five", "Sixty", "Eighty", "Seventy-five"],
            "Translation": "There are three hundred sixty-five days in a year."
        },
        {
            "Content": "Er werken zeventig mensen.",
            "Question": "How many employees does he have?",
            "Answers": ["Seventy"],
            "Options": ["Seventy", "Sixty", "Eighty", "Ninety"],
            "Translation": "He has seventy employees."
        }
    ];

    lesson19Json = [
        {
            "Content": "Ze is tweeëntwintig jaar oud.",
            "Question": "How old is she?",
            "Answers": ["Twenty-two"],
            "Options": ["Twenty-two", "Fifteen", "Thirty", "Forty-five"],
            "Translation": "She is twenty-two years old."
        },
        {
            "Content": "Hij is zevenendertig jaar oud.",
            "Question": "How old is he?",
            "Answers": ["Thirty-seven"],
            "Options": ["Thirty-seven", "Twenty", "Fifty", "Sixty"],
            "Translation": "He is thirty-seven years old."
        },
        {
            "Content": "Ze is negentien jaar oud.",
            "Question": "How old is she?",
            "Answers": ["Nineteen"],
            "Options": ["Nineteen", "Twenty-five", "Thirty", "Forty-five"],
            "Translation": "She is nineteen years old."
        },
        {
            "Content": "Hij is eenenvijftig jaar oud.",
            "Question": "How old is he?",
            "Answers": ["Fifty-one"],
            "Options": ["Fifty-one", "Thirty-five", "Sixty", "Seventy-five"],
            "Translation": "He is fifty-one years old."
        },
        {
            "Content": "Ze is zesentwintig jaar oud.",
            "Question": "How old is she?",
            "Answers": ["Twenty-six"],
            "Options": ["Twenty-six", "Eighteen", "Thirty", "Forty-five"],
            "Translation": "She is twenty-six years old."
        },
        {
            "Content": "Hij is drieënzestig jaar oud.",
            "Question": "How old is he?",
            "Answers": ["Sixty-three"],
            "Options": ["Sixty-three", "Thirty-five", "Fifty", "Seventy-five"],
            "Translation": "He is sixty-three years old."
        },
        {
            "Content": "Hoe oud is zij?",
            "Question": "How old is she?",
            "Answers": ["Forty-seven"],
            "Options": ["Forty-seven", "Eighteen", "Thirty", "Twenty-six"],
            "Translation": "She is forty-seven years old."
        }
    ];

    lesson20Json = [
        {
            "Content": "Ze is erg aardig.",
            "Question": "What is her personality like?",
            "Answers": ["Very kind"],
            "Options": ["Very kind", "Funny", "Serious", "Shy"],
            "Translation": "She is very kind."
        },
        {
            "Content": "Hij is erg grappig.",
            "Question": "What is his personality like?",
            "Answers": ["Very funny"],
            "Options": ["Very funny", "Kind", "Serious", "Shy"],
            "Translation": "He is very funny."
        },
        {
            "Content": "Zij is erg serieus.",
            "Question": "What is her personality like?",
            "Answers": ["Very serious"],
            "Options": ["Very serious", "Kind", "Funny", "Shy"],
            "Translation": "She is very serious."
        },
        {
            "Content": "Hij is erg verlegen.",
            "Question": "What is his personality like?",
            "Answers": ["Very shy"],
            "Options": ["Very shy", "Kind", "Funny", "Serious"],
            "Translation": "He is very shy."
        },
        {
            "Content": "Zij is erg sociaal.",
            "Question": "What is her personality like?",
            "Answers": ["Very sociable"],
            "Options": ["Very sociable", "Kind", "Funny", "Serious"],
            "Translation": "She is very sociable."
        },
        {
            "Content": "Hij is erg rustig.",
            "Question": "What is his personality like?",
            "Answers": ["Very calm"],
            "Options": ["Very calm", "Kind", "Funny", "Serious"],
            "Translation": "He is very calm."
        },
        {
            "Content": "Zij is erg energiek.",
            "Question": "What is her personality like?",
            "Answers": ["Very energetic"],
            "Options": ["Very energetic", "Kind", "Funny", "Serious"],
            "Translation": "She is very energetic."
        }
    ];

    lesson21Json = [
        {
            "Content": "La Chine",
            "Question": "Translate into English.",
            "Answers": ["China"],
            "Options": ["China", "India", "Brazil", "Russia"],
            "Translation": "China"
        },
        {
            "Content": "Les États-Unis",
            "Question": "Translate into English.",
            "Answers": ["The United States"],
            "Options": ["The United States", "United Kingdom", "Canada", "Australia"],
            "Translation": "The United States"
        },
        {
            "Content": "Le Japon",
            "Question": "Translate into English.",
            "Answers": ["Japan"],
            "Options": ["Japan", "South Korea", "Germany", "France"],
            "Translation": "Japan"
        },
        {
            "Content": "L'Inde",
            "Question": "Translate into English.",
            "Answers": ["India"],
            "Options": ["India", "Pakistan", "Bangladesh", "Nepal"],
            "Translation": "India"
        },
        {
            "Content": "Le Brésil",
            "Question": "Translate into English.",
            "Answers": ["Brazil"],
            "Options": ["Brazil", "Argentina", "Mexico", "Colombia"],
            "Translation": "Brazil"
        },
        {
            "Content": "La Russie",
            "Question": "Translate into English.",
            "Answers": ["Russia"],
            "Options": ["Russia", "Germany", "Canada", "China"],
            "Translation": "Russia"
        },
        {
            "Content": "L'Allemagne",
            "Question": "Translate into English.",
            "Answers": ["Germany"],
            "Options": ["Germany", "France", "Italy", "Spain"],
            "Translation": "Germany"
        },
        {
            "Content": "La France",
            "Question": "Translate into English.",
            "Answers": ["France"],
            "Options": ["France", "Spain", "Italy", "Germany"],
            "Translation": "France"
        },
        {
            "Content": "L'Angleterre",
            "Question": "Translate into English.",
            "Answers": ["England"],
            "Options": ["England", "Scotland", "Ireland", "Wales"],
            "Translation": "England"
        }
    ];

    lesson22Json = [
        {
            "Content": "Je suis chinois.",
            "Question": "Which nationality is 'Je'?",
            "Answers": ["Chinese"],
            "Options": ["Chinese", "Indian", "Brazilian", "Russian"],
            "Translation": "I am Chinese."
        },
        {
            "Content": "Tu es américain.",
            "Question": "Which nationality is 'Tu'?",
            "Answers": ["American"],
            "Options": ["American", "British", "Canadian", "Australian"],
            "Translation": "You are American."
        },
        {
            "Content": "Il est japonais.",
            "Question": "Which nationality is 'Il'?",
            "Answers": ["Japanese"],
            "Options": ["Japanese", "South Korean", "German", "French"],
            "Translation": "He is Japanese."
        },
        {
            "Content": "Elle est indienne.",
            "Question": "Which nationality is 'Elle'?",
            "Answers": ["Indian"],
            "Options": ["Indian", "Pakistani", "Bangladeshi", "Nepali"],
            "Translation": "She is Indian."
        },
        {
            "Content": "Nous sommes brésiliens.",
            "Question": "Which nationality is 'Nous'?",
            "Answers": ["Brazilian"],
            "Options": ["Brazilian", "Argentinian", "Mexican", "Colombian"],
            "Translation": "We are Brazilian."
        },
        {
            "Content": "Vous êtes russes.",
            "Question": "Which nationality is 'Vous'?",
            "Answers": ["Russian"],
            "Options": ["Russian", "German", "Canadian", "Chinese"],
            "Translation": "You are Russian."
        },
        {
            "Content": "Ils sont allemands.",
            "Question": "Which nationality is 'Ils'?",
            "Answers": ["German"],
            "Options": ["German", "French", "Italian", "Spanish"],
            "Translation": "They are German."
        },
        {
            "Content": "Elles sont françaises.",
            "Question": "Which nationality is 'Elles'?",
            "Answers": ["French"],
            "Options": ["French", "Spanish", "Italian", "German"],
            "Translation": "They are French."
        },
        {
            "Content": "On est anglais.",
            "Question": "Which nationality is 'On'?",
            "Answers": ["English"],
            "Options": ["English", "Scottish", "Irish", "Welsh"],
            "Translation": "We are English."
        }
    ];

    lesson23Json = [
        {
            "Content": "Mon père s'appelle Pierre.",
            "Question": "Who is 'Pierre'?",
            "Answers": ["Father"],
            "Options": ["Father", "Mother", "Brother", "Sister"],
            "Translation": "My father's name is Pierre."
        },
        {
            "Content": "J'ai deux frères et une sœur.",
            "Question": "How many siblings do I have?",
            "Answers": ["Three"],
            "Options": ["Three", "One", "Four", "Two"],
            "Translation": "I have two brothers and one sister."
        },
        {
            "Content": "Mon oncle est très gentil.",
            "Question": "Who is 'oncle'?",
            "Answers": ["My Uncle"],
            "Options": ["My Uncle", "My Aunt", "My Cousin", "My Brother"],
            "Translation": "My uncle is very kind."
        },
        {
            "Content": "Ma sœur a 25 ans.",
            "Question": "Who is 'sœur'?",
            "Answers": ["My Sister"],
            "Options": ["My Sister", "My Mother", "My Aunt", "My Cousin"],
            "Translation": "My sister is 25 years old."
        },
        {
            "Content": "Mon cousin adore jouer au football.",
            "Question": "Who loves to play football?",
            "Answers": ["My Cousin"],
            "Options": ["My Cousin", "My Brother", "My Father", "My Uncle"],
            "Translation": "My cousin loves to play football."
        },
        {
            "Content": "Ma tante est une artiste talentueuse.",
            "Question": "Who is 'tante'?",
            "Answers": ["My Aunt"],
            "Options": ["My Aunt", "My Mother", "My Sister", "My Grandmother"],
            "Translation": "My aunt is a talented artist."
        },
        {
            "Content": "Mon grand-père est le plus âgé de la famille.",
            "Question": "Who is the oldest in the family?",
            "Answers": ["My Grandfather"],
            "Options": ["My Grandfather", "My Father", "My Uncle", "My Cousin"],
            "Translation": "My grandfather is the oldest in the family."
        }
    ];

    lesson24Json = [
        {
            "Content": "J'adore jouer de la guitare.",
            "Question": "What do I love to do?",
            "Answers": ["Play the guitar"],
            "Options": ["Play the guitar", "Paint", "Cook", "Read books"],
            "Translation": "I love to play the guitar."
        },
        {
            "Content": "Elle aime faire de la randonnée en montagne.",
            "Question": "What does she like to do in the mountains?",
            "Answers": ["Hike"],
            "Options": ["Hike", "Ski", "Swim", "Picnic"],
            "Translation": "She likes to hike in the mountains."
        },
        {
            "Content": "Mon frère collectionne des timbres rares.",
            "Question": "What does my brother collect?",
            "Answers": ["Rare stamps"],
            "Options": ["Rare stamps", "Coins", "Action figures", "Books"],
            "Translation": "My brother collects rare stamps."
        },
        {
            "Content": "Nous aimons regarder des films le week-end.",
            "Question": "What do we like to do on weekends?",
            "Answers": ["Watch movies"],
            "Options": ["Watch movies", "Play sports", "Go shopping", "Read newspapers"],
            "Translation": "We like to watch movies on weekends."
        },
        {
            "Content": "Il est passionné par la photographie.",
            "Question": "What is he passionate about?",
            "Answers": ["Photography"],
            "Options": ["Photography", "Cooking", "Gardening", "Playing chess"],
            "Translation": "He is passionate about photography."
        },
        {
            "Content": "Elle adore la danse contemporaine.",
            "Question": "What does she adore?",
            "Answers": ["Contemporary dance"],
            "Options": ["Contemporary dance", "Classical music", "Rock climbing", "Reading novels"],
            "Translation": "She adores contemporary dance."
        },
        {
            "Content": "Ils aiment faire du vélo dans le parc.",
            "Question": "What do they like to do in the park?",
            "Answers": ["Ride bicycles"],
            "Options": ["Ride bicycles", "Play soccer", "Picnic", "Paint"],
            "Translation": "They like to ride bicycles in the park."
        }
    ];

    lesson25Json = [
        {
            "Content": "Il fait beau aujourd'hui.",
            "Question": "What is the weather like today?",
            "Answers": ["It's sunny"],
            "Options": ["It's sunny", "It's rainy", "It's snowy", "It's windy"],
            "Translation": "It's sunny today."
        },
        {
            "Content": "Le temps est très froid en hiver.",
            "Question": "What is the weather like in winter?",
            "Answers": ["It's very cold"],
            "Options": ["It's very cold", "It's hot", "It's mild", "It's rainy"],
            "Translation": "The weather is very cold in winter."
        },
        {
            "Content": "Il y a des nuages dans le ciel.",
            "Question": "What is in the sky?",
            "Answers": ["Clouds"],
            "Options": ["Clouds", "Stars", "Sun", "Moon"],
            "Translation": "There are clouds in the sky."
        },
        {
            "Content": "Le vent souffle très fort.",
            "Question": "What is happening with the wind?",
            "Answers": ["It's blowing very hard"],
            "Options": ["It's blowing very hard", "It's calm", "It's drizzling", "It's snowing"],
            "Translation": "The wind is blowing very hard."
        },
        {
            "Content": "Il y a de la neige partout.",
            "Question": "What is everywhere?",
            "Answers": ["Snow"],
            "Options": ["Snow", "Rain", "Sunshine", "Fog"],
            "Translation": "There is snow everywhere."
        },
        {
            "Content": "Le soleil brille dans le ciel bleu.",
            "Question": "What is shining in the blue sky?",
            "Answers": ["The sun"],
            "Options": ["The sun", "The moon", "Stars", "Clouds"],
            "Translation": "The sun is shining in the blue sky."
        },
        {
            "Content": "Le temps est orageux ce soir.",
            "Question": "What is the weather like this evening?",
            "Answers": ["It's stormy"],
            "Options": ["It's stormy", "It's clear", "It's foggy", "It's chilly"],
            "Translation": "The weather is stormy this evening."
        }
    ];

    lesson26Json = [
        {
            "Content": "Il est huit heures du matin.",
            "Question": "What time is it in the morning?",
            "Answers": ["It's eight o'clock in the morning"],
            "Options": ["It's eight o'clock in the morning", "It's eight o'clock at night", "It's eight o'clock AM", "It's noon"],
            "Translation": "It's eight o'clock in the morning."
        },
        {
            "Content": "Elle doit arriver à quatorze heures trente.",
            "Question": "What time does she need to arrive?",
            "Answers": ["She needs to arrive at two thirty PM", "She needs to arrive at two-thirty PM"],
            "Options": ["She needs to arrive at two thirty PM", "She needs to arrive at three thirty AM", "She needs to arrive at two thirty AM", "She needs to arrive at one thirty PM"],
            "Translation": "She needs to arrive at two thirty PM."
        },
        {
            "Content": "Nous avons rendez-vous à dix-sept heures pile.",
            "Question": "When is our appointment?",
            "Answers": ["Our appointment is at exactly five o'clock"],
            "Options": ["Our appointment is at exactly five o'clock", "Our appointment is at six o'clock", "Our appointment is at five thirty", "Our appointment is at four o'clock"],
            "Translation": "Our appointment is at exactly five o'clock."
        },
        {
            "Content": "Le film commence à dix-neuf heures quarante-cinq.",
            "Question": "When does the movie start?",
            "Answers": ["The movie starts at seven forty-five PM"],
            "Options": ["The movie starts at seven forty-five PM", "The movie starts at eight forty-five AM", "The movie starts at seven thirty PM", "The movie starts at six forty-five PM"],
            "Translation": "The movie starts at seven forty-five PM."
        },
        {
            "Content": "Il est midi et demi.",
            "Question": "What time is it?",
            "Answers": ["It's noon and a half"],
            "Options": ["It's noon and a half", "It's midnight and a half", "It's one thirty AM", "It's three thirty PM"],
            "Translation": "It's noon and a half."
        },
        {
            "Content": "Je me lève à six heures tous les jours.",
            "Question": "When do I wake up every day?",
            "Answers": ["I wake up at six o'clock every day"],
            "Options": ["I wake up at six o'clock every day", "I wake up at seven o'clock every day", "I wake up at eight o'clock every day", "I wake up at nine o'clock every day"],
            "Translation": "I wake up at six o'clock every day."
        },
        {
            "Content": "Il est onze heures moins le quart du soir.",
            "Question": "What time is it in the evening?",
            "Answers": ["It's a quarter to eleven in the evening"],
            "Options": ["It's a quarter to eleven in the evening", "It's eleven o'clock in the morning", "It's half past ten at night", "It's noon"],
            "Translation": "It's a quarter to eleven in the evening."
        }
    ];

    lesson27Json = [
        {
            "Content": "Je me lave les mains.",
            "Question": "What am I doing?",
            "Answers": ["I am washing my hands"],
            "Options": ["I am washing my hands", "I am cooking dinner", "I am reading a book", "I am driving a car"],
            "Translation": "I am washing my hands."
        },
        {
            "Content": "Elle se brosse les cheveux tous les matins.",
            "Question": "What does she do every morning?",
            "Answers": ["She brushes her hair"],
            "Options": ["She brushes her hair", "She brushes her teeth", "She takes a shower", "She eats breakfast"],
            "Translation": "She brushes her hair every morning."
        },
        {
            "Content": "Ils se réveillent tôt le week-end.",
            "Question": "When do they wake up on weekends?",
            "Answers": ["They wake up early on weekends"],
            "Options": ["They wake up early on weekends", "They wake up late on weekends", "They go to bed early on weekends", "They sleep all day on weekends"],
            "Translation": "They wake up early on weekends."
        },
        {
            "Content": "Nous nous habillons rapidement.",
            "Question": "How do we get dressed?",
            "Answers": ["We dress quickly"],
            "Options": ["We dress quickly", "We dress slowly", "We dress formally", "We dress up for a party"],
            "Translation": "We dress quickly."
        },
        {
            "Content": "Tu te maquilles pour la soirée.",
            "Question": "Why are you applying makeup?",
            "Answers": ["You are applying makeup for the evening"],
            "Options": ["You are applying makeup for the evening", "You are applying makeup for work", "You are applying makeup for a photo shoot", "You are applying makeup for a vacation"],
            "Translation": "You are applying makeup for the evening."
        },
        {
            "Content": "Il se rase tous les jours.",
            "Question": "How often does he shave?",
            "Answers": ["He shaves every day"],
            "Options": ["He shaves every day", "He shaves once a week", "He shaves in the evening", "He shaves in the morning"],
            "Translation": "He shaves every day."
        },
        {
            "Content": "Elles se préparent pour la fête ce soir.",
            "Question": "What are they doing for the party tonight?",
            "Answers": ["They are getting ready"],
            "Options": ["They are getting ready", "They are cleaning the house", "They are cooking dinner", "They are watching a movie"],
            "Translation": "They are getting ready for the party tonight."
        }
    ];

    lesson28Json = [

    ];

    lessonJSONData = [lesson1Json, lesson2Json, lesson3Json, lesson4Json, lesson5Json, lesson6Json, lesson7Json, lesson8Json, lesson9Json, lesson10Json, lesson11Json, lesson12Json, lesson13Json, lesson14Json, lesson15Json, lesson16Json, lesson17Json, lesson18Json, lesson19Json, lesson20Json, lesson21Json, lesson22Json, lesson23Json, lesson24Json, lesson25Json, lesson26Json, lesson27Json, lesson28Json];
}