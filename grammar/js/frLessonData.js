if (localStorage.getItem("currentLanguage") === "fr") {

    lessonNameData = ["Welcome to the Course!"];

    lesson1Json = [
        {
            "Rule": "Before a vowel or 'h', certain words, like 'Je' get condensed. (Je + ai = J'ai)",
            "Question": "Je ___ (me + appelle) Pierre.",
            "Answers": ["m'appelle"],
            "Options": ["m'appelle",
                "me appelle",
                "m' appelle",
                "m 'appelle"],
            "Translation": "I am called Pierre."
        },
        {
            "Rule": "Before a vowel or 'h', certain words, like 'Je' get condensed. (Je + ai = J'ai)",
            "Question": "Je ___ (habite) à Paris.",
            "Answers": ["J'habite"],
            "Options": ["J'habite",
                "Je habite",
                "J 'habite",
                "Je 'habite"],
            "Translation": "I live in Paris."
        }
    ]

    lessonJSONData = [lesson1Json];
}