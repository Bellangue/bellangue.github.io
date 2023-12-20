if (localStorage.getItem("currentLanguage") === "pt") {

    lessonNameData = ["Welcome to the Course! (Ser 1)", "Gender 1", "Adjectives 1", "Conjugations 1", "Conjugations 2", "Conjugations 3"];

    lesson1Json = [
        {
            "Rule": "'ser' is an irregular verb meaning 'to be' in a permanent way. It is conjugated like so: (eu sou, tu és, ele/ela/você/a gente é, nós somos, vós sois, eles/elas são)",
            "Question": "Eu (ser) João.",
            "Answers": ["sou"],
            "Options": ["sou",
                "é",
                "são",
                "somos"],
            "Translation": "I am João."
        },
        {
            "Rule": "'ser' is an irregular verb meaning 'to be' in a permanent way. It is conjugated like so: (eu sou, tu és, ele/ela/você/a gente é, nós somos, vós sois, eles/elas são)",
            "Question": "Você (ser) João.",
            "Answers": ["é"],
            "Options": ["sou",
                "é",
                "são",
                "somos"],
            "Translation": "You are João."
        },
        {
            "Rule": "'ser' is an irregular verb meaning 'to be' in a permanent way. It is conjugated like so: (eu sou, tu és, ele/ela/você/a gente é, nós somos, vós sois, eles/elas são)",
            "Question": "Ele (ser) João.",
            "Answers": ["é"],
            "Options": ["sou",
                "é",
                "são",
                "somos"],
            "Translation": "He is João."
        },
        {
            "Rule": "'ser' is an irregular verb meaning 'to be' in a permanent way. It is conjugated like so: (eu sou, tu és, ele/ela/você/a gente é, nós somos, vós sois, eles/elas são)",
            "Question": "A gente (ser) João.",
            "Answers": ["é"],
            "Options": ["sou",
                "é",
                "são",
                "somos"],
            "Translation": "We are João."
        },
        {
            "Rule": "'ser' is an irregular verb meaning 'to be' in a permanent way. It is conjugated like so: (eu sou, tu és, ele/ela/você/a gente é, nós somos, vós sois, eles/elas são)",
            "Question": "Ela (ser) Maria.",
            "Answers": ["é"],
            "Options": ["sou",
                "é",
                "são",
                "somos"],
            "Translation": "She is Maria."
        },
        {
            "Rule": "'ser' is an irregular verb meaning 'to be' in a permanent way. It is conjugated like so: (eu sou, tu és, ele/ela/você/a gente é, nós somos, vós sois, eles/elas são)",
            "Question": "Elas (ser) Maria.",
            "Answers": ["são"],
            "Options": ["sou",
                "é",
                "são",
                "somos"],
            "Translation": "They are Maria."
        },
        {
            "Rule": "'ser' is an irregular verb meaning 'to be' in a permanent way. It is conjugated like so: (eu sou, tu és, ele/ela/você/a gente é, nós somos, vós sois, eles/elas são)",
            "Question": "Nós (ser) João.",
            "Answers": ["somos"],
            "Options": ["sou",
                "é",
                "são",
                "somos"],
            "Translation": "We are João."
        },
        {
            "Rule": "'ser' is an irregular verb meaning 'to be' in a permanent way. It is conjugated like so: (eu sou, tu és, ele/ela/você/a gente é, nós somos, vós sois, eles/elas são)",
            "Question": "Eles (ser) João.",
            "Answers": ["são"],
            "Options": ["sou",
                "é",
                "são",
                "somos"],
            "Translation": "They are João."
        },
        {
            "Rule": "'ser' is an irregular verb meaning 'to be' in a permanent way. It is conjugated like so: (eu sou, tu és, ele/ela/você/a gente é, nós somos, vós sois, eles/elas são)",
            "Question": "Vocês (ser) João.",
            "Answers": ["são"],
            "Options": ["sou",
                "é",
                "são",
                "somos"],
            "Translation": "You are João."
        },
    ]
    lesson2Json = [
        {
            "Rule": "Every noun has a gender that is reflected in its articles. (o menino ♂, a menina ♀️)",
            "Question": "___ ano",
            "Answers": ["o"],
            "Options": ["o",
                "a",
                "os",
                "as"],
            "Translation": "the year"
        },
        {
            "Rule": "Every noun has a gender that is reflected in its articles. (o menino ♂, a menina ♀️)",
            "Question": "___ esposa",
            "Answers": ["a"],
            "Options": ["o",
                "a",
                "os",
                "as"],
            "Translation": "the wife"
        },
        {
            "Rule": "Every noun has a gender that is reflected in its articles. (o menino ♂, a menina ♀️)",
            "Question": "___ batatas",
            "Answers": ["as"],
            "Options": ["o",
                "a",
                "os",
                "as"],
            "Translation": "the apples"
        },
        {
            "Rule": "Every noun has a gender that is reflected in its articles. (o menino ♂, a menina ♀️)",
            "Question": "___ livros",
            "Answers": ["os"],
            "Options": ["o",
                "a",
                "os",
                "as"],
            "Translation": "the books"
        },
        {
            "Rule": "Every noun has a gender that is reflected in its articles. (o menino ♂, a menina ♀️)",
            "Question": "___ menino",
            "Answers": ["um"],
            "Options": ["um",
                "uma",
                "uns",
                "umas"],
            "Translation": "a boy"
        },
        {
            "Rule": "Every noun has a gender that is reflected in its articles. (o menino ♂, a menina ♀️)",
            "Question": "___ menina",
            "Answers": ["uma"],
            "Options": ["um",
                "uma",
                "uns",
                "umas"],
            "Translation": "the girl"
        },
        {
            "Rule": "Every noun has a gender that is reflected in its articles. (o menino ♂, a menina ♀️)",
            "Question": "___ pessoas",
            "Answers": ["umas"],
            "Options": ["um",
                "uma",
                "uns",
                "umas"],
            "Translation": "the people"
        },
        {
            "Rule": "Every noun has a gender that is reflected in its articles. (o menino ♂, a menina ♀️)",
            "Question": "___ oculus",
            "Answers": ["umas"],
            "Options": ["um",
                "uma",
                "uns",
                "umas"],
            "Translation": "the glasses"
        },
    ]

    lesson3Json = [
        {
            "Rule": "Adjectives adjust to fit the gender & plurality of the noun they describe. (o homem bonito, a mulher bonita)",
            "Question": "o gelo fri_",
            "Answers": ["o"],
            "Options": ["o",
                "a",
                "os",
                "as"],
            "Translation": "the cold ice cube"
        },
        {
            "Rule": "Adjectives adjust to fit the gender & plurality of the noun they describe. (o homem bonito, a mulher bonita)",
            "Question": "a camisa curt_",
            "Answers": ["a"],
            "Options": ["o",
                "a",
                "os",
                "as"],
            "Translation": "the short shirt"
        },
        {
            "Rule": "Adjectives adjust to fit the gender & plurality of the noun they describe. (o homem bonito, a mulher bonita)",
            "Question": "os fei_ meninos",
            "Answers": ["os"],
            "Options": ["o",
                "a",
                "os",
                "as"],
            "Translation": "the ugly boys"
        },
        {
            "Rule": "Adjectives adjust to fit the gender & plurality of the noun they describe. (o homem bonito, a mulher bonita)",
            "Question": "as mães trabalhadoras",
            "Answers": ["as"],
            "Options": ["o",
                "a",
                "os",
                "as"],
            "Translation": "the hard-working mums"
        },
    ]

    lesson4Json = [
        {
            "Rule": "Regular verbs ending in -ar are conjugated like so: (eu: -o, tu: as, ele/ela/você/a gente: -a, nós: -amos, vós: -ais, eles/elas -am)",
            "Question": "Eu ___ (falar).",
            "Answers": ["falo"],
            "Options": ["falo",
                "fala",
                "falamos",
                "falam"],
            "Translation": "I speak."
        },
        {
            "Rule": "Regular verbs ending in -ar are conjugated like so: (eu: -o, tu: as, ele/ela/você/a gente: -a, nós: -amos, vós: -ais, eles/elas -am)",
            "Question": "Você ___ (falar).",
            "Answers": ["fala"],
            "Options": ["falo",
                "fala",
                "falamos",
                "falam"],
            "Translation": "You speak."
        },
        {
            "Rule": "Regular verbs ending in -ar are conjugated like so: (eu: -o, tu: as, ele/ela/você/a gente: -a, nós: -amos, vós: -ais, eles/elas -am)",
            "Question": "Ele ___ (falar).",
            "Answers": ["fala"],
            "Options": ["falo",
                "fala",
                "falamos",
                "falam"],
            "Translation": "He speaks."
        },
        {
            "Rule": "Regular verbs ending in -ar are conjugated like so: (eu: -o, tu: as, ele/ela/você/a gente: -a, nós: -amos, vós: -ais, eles/elas -am)",
            "Question": "Ela ___ (falar).",
            "Answers": ["fala"],
            "Options": ["falo",
                "fala",
                "falamos",
                "falam"],
            "Translation": "She speaks."
        },
        {
            "Rule": "Regular verbs ending in -ar are conjugated like so: (eu: -o, tu: as, ele/ela/você/a gente: -a, nós: -amos, vós: -ais, eles/elas -am)",
            "Question": "A gente ___ (falar).",
            "Answers": ["fala"],
            "Options": ["falo",
                "fala",
                "falamos",
                "falam"],
            "Translation": "We speak."          
        },
        {
            "Rule": "Regular verbs ending in -ar are conjugated like so: (eu: -o, tu: as, ele/ela/você/a gente: -a, nós: -amos, vós: -ais, eles/elas -am)",
            "Question": "Nós ___ (falar).",
            "Answers": ["falamos"],
            "Options": ["falo",
                "fala",
                "falamos",
                "falam"],
            "Translation": "We speak."
        },
        {
            "Rule": "Regular verbs ending in -ar are conjugated like so: (eu: -o, tu: as, ele/ela/você/a gente: -a, nós: -amos, vós: -ais, eles/elas -am)",
            "Question": "Eles ___ (falar).",
            "Answers": ["falam"],
            "Options": ["falo",
                "fala",
                "falamos",
                "falam"],
            "Translation": "They speak."
        },
        {
            "Rule": "Regular verbs ending in -ar are conjugated like so: (eu: -o, tu: as, ele/ela/você/a gente: -a, nós: -amos, vós: -ais, eles/elas -am)",
            "Question": "Elas ___ (falar).",
            "Answers": ["falam"],
            "Options": ["falo",
                "fala",
                "falamos",
                "falam"],
            "Translation": "They speak."
        },
        {
            "Rule": "Regular verbs ending in -ar are conjugated like so: (eu: -o, tu: as, ele/ela/você/a gente: -a, nós: -amos, vós: -ais, eles/elas -am)",
            "Question": "Vocês ___ (falar).",
            "Answers": ["falam"],
            "Options": ["falo",
                "fala",
                "falamos",
                "falam"],
            "Translation": "You speak."
        },
    ]

    lesson5Json = [
        {
            "Rule": "Regular verbs ending in -er are conjugated like so: (eu: -o, tu: es, ele/ela/você/a gente: -e, nós: -emos, vós: -eis, eles/elas -em)",
            "Question": "Eu ___ (beber).",
            "Answers": ["bebo"],
            "Options": ["bebo",
                "bebe",
                "bebemos",
                "bebem"],
            "Translation": "I drink."
        },
        {
            "Rule": "Regular verbs ending in -er are conjugated like so: (eu: -o, tu: es, ele/ela/você/a gente: -e, nós: -emos, vós: -eis, eles/elas -em)",
            "Question": "Você ___ (beber).",
            "Answers": ["bebe"],
            "Options": ["bebo",
                "bebe",
                "bebemos",
                "bebem"],
            "Translation": "You drink."
        },
        {
            "Rule": "Regular verbs ending in -er are conjugated like so: (eu: -o, tu: es, ele/ela/você/a gente: -e, nós: -emos, vós: -eis, eles/elas -em)",
            "Question": "Ele ___ (beber).",
            "Answers": ["bebe"],
            "Options": ["bebo",
                "bebe",
                "bebemos",
                "bebem"],
            "Translation": "He drinks."
        },
        {
            "Rule": "Regular verbs ending in -er are conjugated like so: (eu: -o, tu: es, ele/ela/você/a gente: -e, nós: -emos, vós: -eis, eles/elas -em)",
            "Question": "Ela ___ (beber).",
            "Answers": ["bebe"],
            "Options": ["bebo",
                "bebe",
                "bebemos",
                "bebem"],
            "Translation": "She drinks."
        },
        {
            "Rule": "Regular verbs ending in -er are conjugated like so: (eu: -o, tu: es, ele/ela/você/a gente: -e, nós: -emos, vós: -eis, eles/elas -em)",
            "Question": "A gente ___ (beber).",
            "Answers": ["bebe"],
            "Options": ["bebo",
                "bebe",
                "bebemos",
                "bebem"],
            "Translation": "We drink."
        },
        {
            "Rule": "Regular verbs ending in -er are conjugated like so: (eu: -o, tu: es, ele/ela/você/a gente: -e, nós: -emos, vós: -eis, eles/elas -em)",
            "Question": "Nós ___ (beber).",
            "Answers": ["bebemos"],
            "Options": ["bebo",
                "bebe",
                "bebemos",
                "bebem"],
            "Translation": "We drink."
        },
        {
            "Rule": "Regular verbs ending in -er are conjugated like so: (eu: -o, tu: es, ele/ela/você/a gente: -e, nós: -emos, vós: -eis, eles/elas -em)",
            "Question": "Eles ___ (beber).",
            "Answers": ["bebem"],
            "Options": ["bebo",
                "bebe",
                "bebemos",
                "bebem"],
            "Translation": "They drink."
        },
        {
            "Rule": "Regular verbs ending in -er are conjugated like so: (eu: -o, tu: es, ele/ela/você/a gente: -e, nós: -emos, vós: -eis, eles/elas -em)",
            "Question": "Elas ___ (beber).",
            "Answers": ["bebem"],
            "Options": ["bebo",
                "bebe",
                "bebemos",
                "bebem"],
            "Translation": "They drink."
        },
        {
            "Rule": "Regular verbs ending in -er are conjugated like so: (eu: -o, tu: es, ele/ela/você/a gente: -e, nós: -emos, vós: -eis, eles/elas -em)",
            "Question": "Vocês ___ (beber).",
            "Answers": ["bebem"],
            "Options": ["bebo",
                "bebe",
                "bebemos",
                "bebem"],
            "Translation": "You drink."
        },
    ]


    lesson6Json = [
        {
            "Rule": "Regular verbs ending in -ir are conjugated like so: (eu: -o, tu: es, ele/ela/você/a gente: -e, nós: -imos, vós: -is, eles/elas -em)",
            "Question": "Eu ___ (dividir).",
            "Answers": ["divido"],
            "Options": ["divido",
                "divide",
                "dividemos",
                "dividem"],
            "Translation": "I share."
        },
        {
            "Rule": "Regular verbs ending in -ir are conjugated like so: (eu: -o, tu: es, ele/ela/você/a gente: -e, nós: -imos, vós: -is, eles/elas -em)",
            "Question": "Você ___ (dividir).",
            "Answers": ["divide"],
            "Options": ["divido",
                "divide",
                "dividemos",
                "dividem"],
            "Translation": "You share."
        },
        {
            "Rule": "Regular verbs ending in -ir are conjugated like so: (eu: -o, tu: es, ele/ela/você/a gente: -e, nós: -imos, vós: -is, eles/elas -em)",
            "Question": "Ele ___ (dividir).",
            "Answers": ["divide"],
            "Options": ["divido",
                "divide",
                "dividemos",
                "dividem"],
            "Translation": "He shares."
        },
        {
            "Rule": "Regular verbs ending in -ir are conjugated like so: (eu: -o, tu: es, ele/ela/você/a gente: -e, nós: -imos, vós: -is, eles/elas -em)",
            "Question": "Ela ___ (dividir).",
            "Answers": ["divide"],
            "Options": ["divido",
                "divide",
                "dividemos",
                "dividem"],
            "Translation": "She shares."
        },
        {
            "Rule": "Regular verbs ending in -ir are conjugated like so: (eu: -o, tu: es, ele/ela/você/a gente: -e, nós: -imos, vós: -is, eles/elas -em)",
            "Question": "A gente ___ (dividir).",
            "Answers": ["divide"],
            "Options": ["divido",
                "divide",
                "dividemos",
                "dividem"],
            "Translation": "We share."
        },        
        {
            "Rule": "Regular verbs ending in -ir are conjugated like so: (eu: -o, tu: es, ele/ela/você/a gente: -e, nós: -imos, vós: -is, eles/elas -em)",
            "Question": "Nós ___ (dividir).",
            "Answers": ["dividemos"],
            "Options": ["divido",
                "divide",
                "dividemos",
                "dividem"],
            "Translation": "We share."
        },
        {
            "Rule": "Regular verbs ending in -ir are conjugated like so: (eu: -o, tu: es, ele/ela/você/a gente: -e, nós: -imos, vós: -is, eles/elas -em)",
            "Question": "Vocês ___ (dividir).",
            "Answers": ["dividem"],
            "Options": ["divido",
                "divide",
                "dividemos",
                "dividem"],
            "Translation": "You share."
        },
        {
            "Rule": "Regular verbs ending in -ir are conjugated like so: (eu: -o, tu: es, ele/ela/você/a gente: -e, nós: -imos, vós: -is, eles/elas -em)",
            "Question": "Eles ___ (dividir).",
            "Answers": ["dividem"],
            "Options": ["divido",
                "divide",
                "dividemos",
                "dividem"],
            "Translation": "They share."
        },
        {
            "Rule": "Regular verbs ending in -ir are conjugated like so: (eu: -o, tu: es, ele/ela/você/a gente: -e, nós: -imos, vós: -is, eles/elas -em)",
            "Question": "Elas ___ (dividir).",
            "Answers": ["dividem"],
            "Options": ["divido",
                "divide",
                "dividemos",
                "dividem"],
            "Translation": "They share."
        },
    ]

    lessonJSONData = [lesson1Json, lesson2Json, lesson3Json, lesson4Json, lesson5Json];
}
