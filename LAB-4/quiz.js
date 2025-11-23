/**
 * Prompt Quizzer - A Quiz Game
 * This script runs entirely within the browser console.
 */

// 1. Quiz Questions Array
// Create an array of objects to store questions and their correct answers.
const quizQuestions = [
    {
        question: "what will be the sum of first five natural numbers?",
        answer: "15"
    },
    {
        question: "Who is the main character of the anime dragon ball ?",
        answer: "Son Goku"
    },
    {
        question: "Which planet is second closest to the Sun ?",
        answer: "Venus"
    },
    {
        question: "What is the second hardest natural substance on Earth?",
        answer: "Graphite"
    },
    {
        question: "How many bones are in the human body",
        answer: "206"
    },
    {
        question: "Which is the largest ocean in the world",
        answer: "Pacific Ocean"
    }
];

// 2. Function to Run the Quiz
function runQuiz() {
    // 3. Score Initialization
    let score = 0;

    // Optional: Inform the user the quiz is starting
    alert("Welcome to the Prompt Quizzer! Click OK to start.");

    // 4. Loop Through Questions
    for (let i = 0; i < quizQuestions.length; i++) {
        const currentQuestion = quizQuestions[i];

        // 5. Prompt for User Input
        const userAnswer = prompt(currentQuestion.question);

        // Check if the user cancelled the prompt (userAnswer will be null)
        if (userAnswer === null) {
            alert("Quiz cancelled. Your current score is " + score + " out of " + quizQuestions.length + ".");
            return; // Exit the function if cancelled
        }

        // 6. Normalize the Input
        const normalizedUserAnswer = userAnswer.toLowerCase().trim();

        // 7. Check the Answer & Normalize the Correct Answer
        const normalizedCorrectAnswer = currentQuestion.answer.toLowerCase().trim();

        if (normalizedUserAnswer === normalizedCorrectAnswer) {
            score++;
            // 8. Provide Immediate Feedback (Correct)
            alert("Correct!");
        } else {
            // 8. Provide Immediate Feedback (Incorrect)
            alert("Wrong! The correct answer was: " + currentQuestion.answer);
        }
    }

    // 9. Display the Final Score
    alert("Quiz Over! Your final score is " + score + " out of " + quizQuestions.length + ".");
}

// 10. Run the Quiz
runQuiz();
