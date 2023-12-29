if (localStorage.getItem("currentLanguage") === "nl") {

    lessonNameData = ["Welcome to the Course! (Pronouns 1)", "Conjugations 1", "Plurals 1", "Diminuatives 1", "Articles 1", "Conjugations 2"];

    lesson1Json = [
        {
            "Rule": "Dutch distinguishes between several pronouns. (I: ik, you (sg.): Jij (casual)/U (formal), he: hij, she: zij, we: wij, you (pl.): jullie, they: zij)",
            "Question": "Translate 'I' into Dutch.",
            "Answers": ["ik"],
            "Options": ["ik",
                "jij",
                "jullie",
                "zij"],
            "Translation": "I"
        },
        {
            "Rule": "Dutch distinguishes between several pronouns. (I: ik, you (sg.): Jij (casual)/U (formal), he: hij, she: zij, we: wij, you (pl.): jullie, they: zij)",
            "Question": "Translate 'you (sg.)' into Dutch.",
            "Answers": ["jullie"],
            "Options": ["ik",
                "jij",
                "jullie",
                "zij"],
            "Translation": "you (sg.)"
        },
        {
            "Rule": "Dutch distinguishes between several pronouns. (I: ik, you (sg.): Jij (casual)/U (formal), he: hij, she: zij, we: wij, you (pl.): jullie, they: zij)",
            "Question": "Translate 'she' into Dutch.",
            "Answers": ["zij"],
            "Options": ["ik",
                "jij",
                "jullie",
                "zij"],
            "Translation": "she"
        },
        {
            "Rule": "Dutch distinguishes between several pronouns. (I: ik, you (sg.): Jij (casual)/U (formal), he: hij, she: zij, we: wij, you (pl.): jullie, they: zij)",
            "Question": "Translate 'you (pl.)' into Dutch.",
            "Answers": ["jullie"],
            "Options": ["ik",
                "jij",
                "jullie",
                "zij"],
            "Translation": "you (pl.)"
        },
        {
            "Rule": "Dutch distinguishes between several pronouns. (I: ik, you (sg.): Jij (casual)/U (formal), he: hij, she: zij, we: wij, you (pl.): jullie, they: zij)",
            "Question": "Translate 'they' into Dutch.",
            "Answers": ["zij"],
            "Options": ["ik",
                "jij",
                "jullie",
                "zij"],
            "Translation": "they"
        },
    ]

    lesson2Json = [
        {
            "Rule": "The Dutch word for 'to be' is zijn. It is conjugated with different pronouns like so: (Ik ben, Jij/U bent, Hij/Zij/Het is, Wij/Jullie/Zij zijn)",
            "Question": "Ik ___ (zijn).",
            "Answers": ["ben"],
            "Options": ["ben",
                "bent",
                "is",
                "zijn"],
            "Translation": "I am."
        },
        {
            "Rule": "The Dutch word for 'to be' is zijn. It is conjugated with different pronouns like so: (Ik ben, Jij/U bent, Hij/Zij/Het is, Wij/Jullie/Zij zijn)",
            "Question": "Jij ___ (zijn).",
            "Answers": ["bent"],
            "Options": ["ben",
                "bent",
                "is",
                "zijn"],
            "Translation": "You are."
        },
        {
            "Rule": "The Dutch word for 'to be' is zijn. It is conjugated with different pronouns like so: (Ik ben, Jij/U bent, Hij/Zij/Het is, Wij/Jullie/Zij zijn)",
            "Question": "U ___ (zijn).",
            "Answers": ["bent"],
            "Options": ["ben",
                "bent",
                "is",
                "zijn"],
            "Translation": "You are."
        },
        {
            "Rule": "The Dutch word for 'to be' is zijn. It is conjugated with different pronouns like so: (Ik ben, Jij/U bent, Hij/Zij/Het is, Wij/Jullie/Zij zijn)",
            "Question": "Hij ___ (zijn).",
            "Answers": ["is"],
            "Options": ["ben",
                "bent",
                "is",
                "zijn"],
            "Translation": "He is."
        },
        {
            "Rule": "The Dutch word for 'to be' is zijn. It is conjugated with different pronouns like so: (Ik ben, Jij/U bent, Hij/Zij/Het is, Wij/Jullie/Zij zijn)",
            "Question": "Zij ___ (zijn).",
            "Answers": ["is"],
            "Options": ["ben",
                "bent",
                "is",
                "zijn"],
            "Translation": "She is."
        },
        {
            "Rule": "The Dutch word for 'to be' is zijn. It is conjugated with different pronouns like so: (Ik ben, Jij/U bent, Hij/Zij/Het is, Wij/Jullie/Zij zijn)",
            "Question": "Het ___ (zijn).",
            "Answers": ["is"],
            "Options": ["ben",
                "bent",
                "is",
                "zijn"],
            "Translation": "It is."
        },
        {
            "Rule": "The Dutch word for 'to be' is zijn. It is conjugated with different pronouns like so: (Ik ben, Jij/U bent, Hij/Zij/Het is, Wij/Jullie/Zij zijn)",
            "Question": "Wij ___ (zijn).",
            "Answers": ["zijn"],
            "Options": ["ben",
                "bent",
                "is",
                "zijn"],
            "Translation": "We are."
        },
        {
            "Rule": "The Dutch word for 'to be' is zijn. It is conjugated with different pronouns like so: (Ik ben, Jij/U bent, Hij/Zij/Het is, Wij/Jullie/Zij zijn)",
            "Question": "Jullie ___ (zijn).",
            "Answers": ["zijn"],
            "Options": ["ben",
                "bent",
                "is",
                "zijn"],
            "Translation": "You are."
        },
        {
            "Rule": "The Dutch word for 'to be' is zijn. It is conjugated with different pronouns like so: (Ik ben, Jij/U bent, Hij/Zij/Het is, Wij/Jullie/Zij zijn)",
            "Question": "Zij ___ (zijn).",
            "Answers": ["zijn"],
            "Options": ["ben",
                "bent",
                "is",
                "zijn"],
            "Translation": "They are."
        },
    ]

    lesson3Json = [
        {
            "Rule": "Most nouns add -en to form the plural. (fiets -> fietsen)",
            "Question": "Make 'fiets' plural.",
            "Answers": ["fietsen"],
            "Options": ["fietsen",
                "fietses",
                "fiets",
                "fieten"],
            "Translation": "bicycles"
        },
        {
            "Rule": "Most nouns add -en to form the plural. (fiets -> fietsen)",
            "Question": "Make 'arm' plural.",
            "Answers": ["armen"],
            "Options": ["armen",
                "arms",
                "armsen",
                "armens"],
            "Translation": "arms"
        },
        {
            "Rule": "Most nouns add -en to form the plural. (fiets -> fietsen)",
            "Question": "Make 'tand' plural.",
            "Answers": ["tanden"],
            "Options": ["tanden",
                "tands",
                "teend",
                "tandsen"],
            "Translation": "teeth"
        },
        {
            "Rule": "Most nouns add -en to form the plural. (fiets -> fietsen)",
            "Question": "Make 'been' plural.",
            "Answers": ["beenen"],
            "Options": ["beenen",
                "beens",
                "beensen",
                "beenens"],
            "Translation": "legs"
        },
        {
            "Rule": "Most nouns add -en to form the plural. (fiets -> fietsen)",
            "Question": "Make 'aap' plural.",
            "Answers": ["aapen"],
            "Options": ["aapen",
                "aaps",
                "aapsen",
                "aapens"],
            "Translation": "monkeys"
        },
    ]

    lesson4Json = [
        {
            "Rule": "Most nouns add -je to form the diminuative (small version). (plant -> plantje)",
            "Question": "Make 'plant' diminuative.",
            "Answers": ["plantje"],
            "Options": ["plantje",
                "plantwe",
                "plantne",
                "plantge"],
            "Translation": "small plant"
        },
        {
            "Rule": "Most nouns add -je to form the diminuative (small version). (plant -> plantje)",
            "Question": "Make 'bot' diminuative.",
            "Answers": ["botje"],
            "Options": ["botje",
                "botwe",
                "botne",
                "botge"],
            "Translation": "small bone"
        },
        {
            "Rule": "Most nouns add -je to form the diminuative (small version). (plant -> plantje)",
            "Question": "Make 'blik' diminuative.",
            "Answers": ["blikje"],
            "Options": ["blikje",
                "blikwe",
                "blikne",
                "blikge"],
            "Translation": "small tin"
        },
        {
            "Rule": "Most nouns add -je to form the diminuative (small version). (plant -> plantje)",
            "Question": "Make 'zakje' diminuative.",
            "Answers": ["zakje"],
            "Options": ["zakje",
                "zakwe",
                "zakne",
                "zakge"],
            "Translation": "small bag"
        },
        {
            "Rule": "Most nouns add -je to form the diminuative (small version). (plant -> plantje)",
            "Question": "Make 'mand' diminuative.",
            "Answers": ["mandje"],
            "Options": ["mandje",
                "mandwe",
                "mandne",
                "mandge"],
            "Translation": "small basket"
        },
    ]

    lesson5Json = [
        {
            "Rule": "All nouns either use the definite article 'de' or 'het'. (de stoom (the steam), het hout (the wood))",
            "Question": "___ gebouw",
            "Answers": ["het"],
            "Options": ["het",
                "de",
                "either",
                "?"],
            "Translation": "the building"
        },
        {
            "Rule": "All nouns either use the definite article 'de' or 'het'. (de stoom (the steam), het hout (the wood))",
            "Question": "___ goud",
            "Answers": ["het"],
            "Options": ["het",
                "de",
                "either",
                "?"],
            "Translation": "the gold"
        },
        {
            "Rule": "All nouns either use the definite article 'de' or 'het'. (de stoom (the steam), het hout (the wood))",
            "Question": "___ klokhuis",
            "Answers": ["het"],
            "Options": ["het",
                "de",
                "either",
                "?"],
            "Translation": "the clocktower"
        },
        {
            "Rule": "All nouns either use the definite article 'de' or 'het'. (de stoom (the steam), het hout (the wood))",
            "Question": "___ morgen",
            "Answers": ["de"],
            "Options": ["het",
                "de",
                "either",
                "?"],
            "Translation": "the morning"
        },
        {
            "Rule": "All nouns either use the definite article 'de' or 'het'. (de stoom (the steam), het hout (the wood))",
            "Question": "___ markt",
            "Answers": ["de"],
            "Options": ["het",
                "de",
                "either",
                "?"],
            "Translation": "the market"
        },
        {
            "Rule": "All nouns either use the definite article 'de' or 'het'. (de stoom (the steam), het hout (the wood))",
            "Question": "___ lucifer",
            "Answers": ["de"],
            "Options": ["het",
                "de",
                "either",
                "?"],
            "Translation": "the match"
        },
    ]

    lesson6Json = [
        {
            "Rule": "Dutch verbs (-en) are conjugated with different pronouns like so: (Ik -, Jij/U/Hij/Zij/Het -t Wij/Jullie/Zij -en)",
            "Question": "Ik ___ (werken).",
            "Answers": ["werk"],
            "Options": ["werk",
                "werkt",
                "werken",
                "?"],
            "Translation": "I work."
        },
        {
            "Rule": "Dutch verbs (-en) are conjugated with different pronouns like so: (Ik -, Jij/U/Hij/Zij/Het -t Wij/Jullie/Zij -en)",
            "Question": "Jij ___ (werken).",
            "Answers": ["werkt"],
            "Options": ["werk",
                "werkt",
                "werken",
                "?"],
            "Translation": "You work."
        },
        {
            "Rule": "Dutch verbs (-en) are conjugated with different pronouns like so: (Ik -, Jij/U/Hij/Zij/Het -t Wij/Jullie/Zij -en)",
            "Question": "U ___ (werken).",
            "Answers": ["werkt"],
            "Options": ["werk",
                "werkt",
                "werken",
                "?"],
            "Translation": "You work."
        },
        {
            "Rule": "Dutch verbs (-en) are conjugated with different pronouns like so: (Ik -, Jij/U/Hij/Zij/Het -t Wij/Jullie/Zij -en)",
            "Question": "Hij ___ (werken).",
            "Answers": ["werkt"],
            "Options": ["werk",
                "werkt",
                "werken",
                "?"],
            "Translation": "He works."
        },
        {
            "Rule": "Dutch verbs (-en) are conjugated with different pronouns like so: (Ik -, Jij/U/Hij/Zij/Het -t Wij/Jullie/Zij -en)",
            "Question": "Zij (She) ___ (werken).",
            "Answers": ["werkt"],
            "Options": ["werk",
                "werkt",
                "werken",
                "?"],
            "Translation": "She works."
        },
        {
            "Rule": "Dutch verbs (-en) are conjugated with different pronouns like so: (Ik -, Jij/U/Hij/Zij/Het -t Wij/Jullie/Zij -en)",
            "Question": "Het ___ (werken).",
            "Answers": ["werkt"],
            "Options": ["werk",
                "werkt",
                "werken",
                "?"],
            "Translation": "It works."
        },
        {
            "Rule": "Dutch verbs (-en) are conjugated with different pronouns like so: (Ik -, Jij/U/Hij/Zij/Het -t Wij/Jullie/Zij -en)",
            "Question": "Wij ___ (werken).",
            "Answers": ["werken"],
            "Options": ["werk",
                "werkt",
                "werken",
                "?"],
            "Translation": "We work."
        },
        {
            "Rule": "Dutch verbs (-en) are conjugated with different pronouns like so: (Ik -, Jij/U/Hij/Zij/Het -t Wij/Jullie/Zij -en)",
            "Question": "Jullie ___ (werken).",
            "Answers": ["werken"],
            "Options": ["werk",
                "werkt",
                "werken",
                "?"],
            "Translation": "You work."
        },
        {
            "Rule": "Dutch verbs (-en) are conjugated with different pronouns like so: (Ik -, Jij/U/Hij/Zij/Het -t Wij/Jullie/Zij -en)",
            "Question": "Zij (They) ___ (werken).",
            "Answers": ["werken"],
            "Options": ["werk",
                "werkt",
                "werken",
                "?"],
            "Translation": "They work."
        },
    ]

    lessonJSONData = [lesson1Json, lesson2Json, lesson3Json, lesson4Json, lesson5Json, lesson6Json];
}