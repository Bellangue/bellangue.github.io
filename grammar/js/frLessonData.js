if (localStorage.getItem("currentLanguage") === "fr") {

    lessonNameData = ["Welcome to the Course! (Contractions 1)", "Gender 1", "Adjectives 1", "Conjugations 1", "Conjugations 2", "Conjugations 3"];

    lesson1Json = [
        {
            "Rule": "Before a vowel or unaspirated <h>, certain words, like 'Je' get condensed. (je + ai = j'ai)",
            "Question": "Je ___ (me + appelle) Pierre.",
            "Answers": ["m'appelle"],
            "Options": ["m'appelle",
                "me appelle",
                "m' appelle",
                "m 'appelle"],
            "Translation": "I am called Pierre."
        },
        {
            "Rule": "Before a vowel or unaspirated <h>, certain words, like 'je' get condensed. (je + ai = j'ai)",
            "Question": "___ (Je + habite) à Paris.",
            "Answers": ["J'habite"],
            "Options": ["J'habite",
                "Je habite",
                "J 'habite",
                "Je 'habite"],
            "Translation": "I live in Paris."
        },
        {
            "Rule": "Before a vowel or unaspirated <h>, certain words, like 'je' get condensed. (je + ai = j'ai)",
            "Question": "___ (Je + aime) le chocolat.",
            "Answers": ["J'aime"],
            "Options": ["J'aime",
                "Je aime",
                "J 'aime",
                "Je 'aime"],
            "Translation": "I like chocolate."
        },
        {
            "Rule": "Before a vowel or unaspirated <h>, certain words, like 'je' get condensed. (je + ai = j'ai)",
            "Question": "Je ___ (te + aime).",
            "Answers": ["t'aime"],
            "Options": ["t'aime",
                "te aime",
                "te 'aime",
                "te'aime"],
            "Translation": "I like you."
        },
        {
            "Rule": "Before a vowel or unaspirated <h>, certain words, like 'je' get condensed. (je + ai = j'ai)",
            "Question": "(le + homme)",
            "Answers": ["l'homme"],
            "Options": ["l'homme",
                "le homme",
                "la homme",
                "le'homme"],
            "Translation": "the man"
        },
    ]

    lesson2Json = [
        {
            "Rule": "Every noun has a gender that is reflected in its articles. (le croissant ♂, la baguette ♀️)",
            "Question": "___ an",
            "Answers": ["un"],
            "Options": ["un",
                "une",
                "des",
                "?"],
            "Translation": "a year"
        },
        {
            "Rule": "Every noun has a gender that is reflected in its articles. (le croissant ♂, la baguette ♀️)",
            "Question": "___ femme",
            "Answers": ["une"],
            "Options": ["un",
                "une",
                "des",
                "?"],
            "Translation": "a wife"
        },
        {
            "Rule": "Every noun has a gender that is reflected in its articles. (le croissant ♂, la baguette ♀️)",
            "Question": "___ pommes",
            "Answers": ["des"],
            "Options": ["un",
                "une",
                "des",
                "?"],
            "Translation": "some apples"
        },
        {
            "Rule": "Every noun has a gender that is reflected in its articles. (le croissant ♂, la baguette ♀️)",
            "Question": "___ garçon",
            "Answers": ["le"],
            "Options": ["le",
                "la",
                "les",
                "?"],
            "Translation": "the boy"
        },
        {
            "Rule": "Every noun has a gender that is reflected in its articles. (le croissant ♂, la baguette ♀️)",
            "Question": "___ fille",
            "Answers": ["la"],
            "Options": ["le",
                "la",
                "les",
                "?"],
            "Translation": "the girl"
        },
        {
            "Rule": "Every noun has a gender that is reflected in its articles. (le croissant ♂, la baguette ♀️)",
            "Question": "___ hommes",
            "Answers": ["les"],
            "Options": ["le",
                "la",
                "les",
                "?"],
            "Translation": "the men"
        },
    ]

    lesson3Json = [
        {
            "Rule": "Adjectives adjust to fit the gender & plurality of the noun they describe. (le grand homme, la grande femme)",
            "Question": "le glaçon froid_",
            "Answers": [" "],
            "Options": [" ",
                "e",
                "s",
                "es"],
            "Translation": "the cold ice cube"
        },
        {
            "Rule": "Adjectives adjust to fit the gender & plurality of the noun they describe. (le grand homme, la grande femme)",
            "Question": "la veste court_",
            "Answers": ["e"],
            "Options": [" ",
                "e",
                "s",
                "es"],
            "Translation": "the short jacket"
        },
        {
            "Rule": "Adjectives adjust to fit the gender & plurality of the noun they describe. (le grand homme, la grande femme)",
            "Question": "les gross_ jambes",
            "Answers": ["es"],
            "Options": [" ",
                "e",
                "s",
                "es"],
            "Translation": "the fat legs"
        },
        {
            "Rule": "Adjectives adjust to fit the gender & plurality of the noun they describe. (le grand homme, la grande femme)",
            "Question": "les pères content_",
            "Answers": ["s"],
            "Options": [" ",
                "e",
                "s",
                "es"],
            "Translation": "the happy dads"
        },
        {
            "Rule": "Adjectives adjust to fit the gender & plurality of the noun they describe. (le grand homme, la grande femme)",
            "Question": "l'assiette joli_",
            "Answers": ["e"],
            "Options": [" ",
                "e",
                "s",
                "es"],
            "Translation": "the pretty plate"
        },


    ]

    lesson4Json = [
        {
            "Rule": "Regular verbs ending in -er are conjugated like so: (je: -e, tu: -es, il/elle/on: -e, nous: -ons, vous: -ez, ils/elles: -ent)",
            "Question": "Je ___ (parler).",
            "Answers": ["parle"],
            "Options": ["parle",
                "parlez",
                "parlent",
                "parlons"],
            "Translation": "I speak."
        },
        {
            "Rule": "Regular verbs ending in -er are conjugated like so: (je: -e, tu: -es, il/elle/on: -e, nous: -ons, vous: -ez, ils/elles: -ent)",
            "Question": "Il ___ (parler).",
            "Answers": ["parle"],
            "Options": ["parle",
                "parlez",
                "parlent",
                "parlons"],
            "Translation": "He speaks"
        },
        {
            "Rule": "Regular verbs ending in -er are conjugated like so: (je: -e, tu: -es, il/elle/on: -e, nous: -ons, vous: -ez, ils/elles: -ent)",
            "Question": "Nous ___ (parler).",
            "Answers": ["parlons"],
            "Options": ["parle",
                "parlez",
                "parlent",
                "parlons"],
            "Translation": "We speak"
        },
        {
            "Rule": "Regular verbs ending in -er are conjugated like so: (je: -e, tu: -es, il/elle/on: -e, nous: -ons, vous: -ez, ils/elles: -ent)",
            "Question": "Vous ___ (parler).",
            "Answers": ["parlez"],
            "Options": ["parle",
                "parlez",
                "parlent",
                "parlons"],
            "Translation": "You speak"
        },
        {
            "Rule": "Regular verbs ending in -er are conjugated like so: (je: -e, tu: -es, il/elle/on: -e, nous: -ons, vous: -ez, ils/elles: -ent)",
            "Question": "Ils ___ (parler).",
            "Answers": ["parlent"],
            "Options": ["parle",
                "parlez",
                "parlent",
                "parlons"],
            "Translation": "They speak"
        },
        {
            "Rule": "Regular verbs ending in -er are conjugated like so: (je: -e, tu: -es, il/elle/on: -e, nous: -ons, vous: -ez, ils/elles: -ent)",
            "Question": "Elles ___ (parler).",
            "Answers": ["parlent"],
            "Options": ["parle",
                "parlez",
                "parlent",
                "parlons"],
            "Translation": "They speak"
        },
        {
            "Rule": "Regular verbs ending in -er are conjugated like so: (je: -e, tu: -es, il/elle/on: -e, nous: -ons, vous: -ez, ils/elles: -ent)",
            "Question": "Elle ___ (parler).",
            "Answers": ["parle"],
            "Options": ["parle",
                "parlez",
                "parlent",
                "parlons"],
            "Translation": "She speaks"
        },

    ]

    lesson5Json = [
        {
            "Rule": "Regular verbs ending in -ir are conjugated like so: (je: -is, tu: -is, il/elle/on: -it, nous: -issons, vous: -issez, ils/elles: -issent)",
            "Question": "Je ___ (finir).",
            "Answers": ["finis"],
            "Options": ["finis",
                "finit",
                "finissons",
                "finissent"],
            "Translation": "I finish."
        },
        {
            "Rule": "Regular verbs ending in -ir are conjugated like so: (je: -is, tu: -is, il/elle/on: -it, nous: -issons, vous: -issez, ils/elles: -issent)",
            "Question": "Tu ___ (finir).",
            "Answers": ["finis"],
            "Options": ["finis",
                "finit",
                "finissons",
                "finissent"],
            "Translation": "You finish."
        },
        {
            "Rule": "Regular verbs ending in -ir are conjugated like so: (je: -is, tu: -is, il/elle/on: -it, nous: -issons, vous: -issez, ils/elles: -issent)",
            "Question": "Il ___ (finir).",
            "Answers": ["finit"],
            "Options": ["finis",
                "finit",
                "finissons",
                "finissent"],
            "Translation": "He finishes."
        },
        {
            "Rule": "Regular verbs ending in -ir are conjugated like so: (je: -is, tu: -is, il/elle/on: -it, nous: -issons, vous: -issez, ils/elles: -issent)",
            "Question": "Elle ___ (finir).",
            "Answers": ["finit"],
            "Options": ["finis",
                "finit",
                "finissons",
                "finissent"],
            "Translation": "She finishes."
        },
        {
            "Rule": "Regular verbs ending in -ir are conjugated like so: (je: -is, tu: -is, il/elle/on: -it, nous: -issons, vous: -issez, ils/elles: -issent)",
            "Question": "Nous ___ (finir).",
            "Answers": ["finissons"],
            "Options": ["finis",
                "finit",
                "finissons",
                "finissent"],
            "Translation": "We finish."
        },
        {
            "Rule": "Regular verbs ending in -ir are conjugated like so: (je: -is, tu: -is, il/elle/on: -it, nous: -issons, vous: -issez, ils/elles: -issent)",
            "Question": "Ils ___ (finir).",
            "Answers": ["finissent"],
            "Options": ["finis",
                "finit",
                "finissons",
                "finissent"],
            "Translation": "They finish."
        },
        {
            "Rule": "Regular verbs ending in -ir are conjugated like so: (je: -is, tu: -is, il/elle/on: -it, nous: -issons, vous: -issez, ils/elles: -issent)",
            "Question": "Elles ___ (finir).",
            "Answers": ["finissent"],
            "Options": ["finis",
                "finit",
                "finissons",
                "finissent"],
            "Translation": "They finish."
        },
    ]

    lesson6Json = [
        {
            "Rule": "Regular verbs ending in -re are conjugated like so: (je: -s, tu: -s, il/elle/on: -, nous: -ons, vous: -ez, ils/elles: -ent)",
            "Question": "Je ___ (vendre).",
            "Answers": ["vends"],
            "Options": ["vends",
                "vend",
                "vendons",
                "vendent"],
            "Translation": "I sell."
        },
        {
            "Rule": "Regular verbs ending in -re are conjugated like so: (je: -s, tu: -s, il/elle/on: -, nous: -ons, vous: -ez, ils/elles: -ent)",
            "Question": "Tu ___ (vendre).",
            "Answers": ["vends"],
            "Options": ["vends",
                "vend",
                "vendons",
                "vendent"],
            "Translation": "You sell."
        },
        {
            "Rule": "Regular verbs ending in -re are conjugated like so: (je: -s, tu: -s, il/elle/on: -, nous: -ons, vous: -ez, ils/elles: -ent)",
            "Question": "Il ___ (vendre).",
            "Answers": ["vend"],
            "Options": ["vends",
                "vend",
                "vendons",
                "vendent"],
            "Translation": "He sells."
        },
        {
            "Rule": "Regular verbs ending in -re are conjugated like so: (je: -s, tu: -s, il/elle/on: -, nous: -ons, vous: -ez, ils/elles: -ent)",
            "Question": "Elle ___ (vendre).",
            "Answers": ["vend"],
            "Options": ["vends",
                "vend",
                "vendons",
                "vendent"],
            "Translation": "She sells."
        },
        {
            "Rule": "Regular verbs ending in -re are conjugated like so: (je: -s, tu: -s, il/elle/on: -, nous: -ons, vous: -ez, ils/elles: -ent)",
            "Question": "Nous ___ (vendre).",
            "Answers": ["vendons"],
            "Options": ["vends",
                "vend",
                "vendons",
                "vendent"],
            "Translation": "We sell."
        },
        {
            "Rule": "Regular verbs ending in -re are conjugated like so: (je: -s, tu: -s, il/elle/on: -, nous: -ons, vous: -ez, ils/elles: -ent)",
            "Question": "Ils ___ (vendre).",
            "Answers": ["vendent"],
            "Options": ["vends",
                "vend",
                "vendons",
                "vendent"],
            "Translation": "They sell."
        },
        {
            "Rule": "Regular verbs ending in -re are conjugated like so: (je: -s, tu: -s, il/elle/on: -, nous: -ons, vous: -ez, ils/elles: -ent)",
            "Question": "Elles ___ (vendre).",
            "Answers": ["vendent"],
            "Options": ["vends",
                "vend",
                "vendons",
                "vendent"],
            "Translation": "They sell."
        },
    ]

    lessonJSONData = [lesson1Json, lesson2Json, lesson3Json, lesson4Json, lesson5Json];
}