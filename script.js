const questions = [
  "What is the capital of India?",
  "Which planet is known as the Red Planet?",
  "Who is known as the Father of the Nation in India?",
  "How many days are there in a week?",
  "Which is the largest ocean in the world?"
];

const options = [
  ["A. Mumbai", "B. New Delhi", "C. Kolkata", "D. Chennai"],
  ["A. Earth", "B. Venus", "C. Mars", "D. Jupiter"],
  ["A. Jawaharlal Nehru", "B. Mahatma Gandhi", "C. Sardar Patel", "D. Subhash Chandra Bose"],
  ["A. 5", "B. 6", "C. 7", "D. 8"],
  ["A. Atlantic Ocean", "B. Indian Ocean", "C. Arctic Ocean", "D. Pacific Ocean"]
];

const answers = [
  "B. New Delhi",
  "C. Mars",
  "B. Mahatma Gandhi",
  "C. 7",
  "D. Pacific Ocean"
];

let question = document.querySelector('#question');
let opt1 = document.querySelector('#opt1');
let opt2 = document.querySelector('#opt2');
let opt3 = document.querySelector('#opt3');
let opt4 = document.querySelector('#opt4');

let buttons = document.querySelectorAll('.options');
let currentQuestion = 0;
let score = 0;

function ask(number) {
    question.textContent = questions[number];
    opt1.textContent = options[number][0];
    opt2.textContent = options[number][1];
    opt3.textContent = options[number][2];
    opt4.textContent = options[number][3];
    
    // Reset button colors
    buttons.forEach(btn => {
        btn.style.backgroundColor = 'slateblue';
    });
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Check if answer is correct
        if (button.textContent === answers[currentQuestion]) {
            console.log('correct');
            button.style.backgroundColor = 'green';
            score++;
        } else {
            console.log('wrong');
            button.style.backgroundColor = 'red';
        }
        
        // Disable all buttons temporarily
        buttons.forEach(btn => btn.style.pointerEvents = 'none');
        
        // Move to next question after delay
        setTimeout(() => {
            buttons.forEach(btn => btn.style.pointerEvents = 'auto');
            currentQuestion++;
            
            if (currentQuestion < questions.length) {
                ask(currentQuestion);
            } else {
                question.textContent = `Quiz finished! Your score: ${score}/${questions.length}`;
                buttons.forEach(btn => btn.style.display = 'none');
            }
        }, 1500);
    });
});

// Start the quiz
ask(currentQuestion);