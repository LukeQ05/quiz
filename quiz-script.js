const questions = [
    { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], correct: "Paris" },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Venus", "Jupiter"], correct: "Mars" },
    { question: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], correct: "Pacific" },
    { question: "Who wrote 'Romeo and Juliet'?", options: ["Shakespeare", "Dickens", "Hemingway", "Austen"], correct: "Shakespeare" },
    { question: "What is the tallest mountain in the world?", options: ["K2", "Everest", "Kangchenjunga", "Makalu"], correct: "Everest" },
    { question: "Who painted the Mona Lisa?", options: ["Van Gogh", "Leonardo da Vinci", "Picasso", "Michelangelo"], correct: "Leonardo da Vinci" },
    { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "India", "South Korea"], correct: "Japan" },
    { question: "What is the smallest country in the world?", options: ["Monaco", "Vatican City", "Nauru", "Malta"], correct: "Vatican City" },
    { question: "What is the square root of 64?", options: ["6", "7", "8", "9"], correct: "8" },
    { question: "Which animal is known as the king of the jungle?", options: ["Lion", "Tiger", "Elephant", "Bear"], correct: "Lion" },
    { question: "What is the largest country by land area?", options: ["Canada", "USA", "Russia", "China"], correct: "Russia" },
    { question: "What is the chemical symbol for water?", options: ["O2", "H2O", "CO2", "NaCl"], correct: "H2O" },
    { question: "What currency is used in Japan?", options: ["Yuan", "Won", "Yen", "Ringgit"], correct: "Yen" },
    { question: "Who is known as the father of modern physics?", options: ["Isaac Newton", "Albert Einstein", "Galileo", "Niels Bohr"], correct: "Albert Einstein" },
    { question: "Which continent is the Sahara Desert located on?", options: ["Africa", "Asia", "Australia", "North America"], correct: "Africa" },
    { question: "Who discovered penicillin?", options: ["Marie Curie", "Louis Pasteur", "Alexander Fleming", "Edward Jenner"], correct: "Alexander Fleming" },
    { question: "In which country would you find the Great Barrier Reef?", options: ["Australia", "USA", "Mexico", "South Africa"], correct: "Australia" },
    { question: "What is the largest planet in our solar system?", options: ["Earth", "Jupiter", "Saturn", "Neptune"], correct: "Jupiter" },
    { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Platinum"], correct: "Diamond" },
    { question: "What year did World War II end?", options: ["1940", "1945", "1950", "1939"], correct: "1945" },
    { question: "Which country is known for inventing pizza?", options: ["Greece", "Italy", "France", "Spain"], correct: "Italy" },
    { question: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], correct: "Nile" },
    { question: "What is the national sport of Canada?", options: ["Baseball", "Ice Hockey", "Football", "Soccer"], correct: "Ice Hockey" },
    { question: "What is the smallest bone in the human body?", options: ["Femur", "Stapes", "Tibia", "Radius"], correct: "Stapes" },
    { question: "Who is the author of '1984'?", options: ["George Orwell", "Aldous Huxley", "J.K. Rowling", "Mark Twain"], correct: "George Orwell" },
    { question: "Which planet is closest to the Sun?", options: ["Mercury", "Venus", "Earth", "Mars"], correct: "Mercury" },
    { question: "What year did the Titanic sink?", options: ["1912", "1905", "1920", "1898"], correct: "1912" },
    { question: "Which animal is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe", "Shark"], correct: "Blue Whale" },
    { question: "What does the acronym NASA stand for?", options: ["National Aeronautics and Space Agency", "National Air and Space Agency", "National Aerospace and Space Agency", "None of the above"], correct: "National Aeronautics and Space Agency" },
    { question: "Which element has the chemical symbol 'O'?", options: ["Oxygen", "Osmium", "Ozone", "Oxygenium"], correct: "Oxygen" },
    { question: "Who was the first man on the moon?", options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"], correct: "Neil Armstrong" },
    { question: "What does a thermometer measure?", options: ["Temperature", "Pressure", "Speed", "Time"], correct: "Temperature" },
    { question: "Who painted 'The Starry Night'?", options: ["Van Gogh", "Picasso", "Monet", "Da Vinci"], correct: "Van Gogh" },
    { question: "What is the largest desert on Earth?", options: ["Gobi", "Sahara", "Kalahari", "Antarctic"], correct: "Antarctic" },
    { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], correct: "Canberra" },
    { question: "Which country invented paper?", options: ["China", "Egypt", "Greece", "India"], correct: "China" },
    { question: "What is the currency used in the United Kingdom?", options: ["Pound", "Euro", "Dollar", "Franc"], correct: "Pound" }
];

let currentQuestionIndex = 0;
let score = 0;

function nextQuestion() {
    if (currentQuestionIndex >= questions.length) {
        document.getElementById("result").innerHTML = `Your Score: ${score}/${questions.length}`;
        return;
    }

    const question = questions[currentQuestionIndex];
    let questionHTML = `<div class="question">${question.question}</div>`;
    let optionsHTML = question.options.map(option => 
        `<button onclick="checkAnswer('${option}')">${option}</button>`
    ).join('');

    document.getElementById("question-container").innerHTML = questionHTML + optionsHTML;
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].correct;
    if (selectedAnswer === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    nextQuestion();
}

// Initialize the quiz
nextQuestion();
