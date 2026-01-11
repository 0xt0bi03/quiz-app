const questions = [
  "What is the capital of India?",
  "Which planet is known as the Red Planet?",
  "Who is known as the Father of the Nation in India?",
  "How many days are there in a week?",
  "Which is the largest ocean in the world?"
];

const options = [
  ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
  ["Earth", "Venus", "Mars", "Jupiter"],
  ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "Subhash Chandra Bose"],
  ["5", "6", "7", "8"],
  ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"]
];

const answers = [
  "New Delhi",
  "Mars",
  "Mahatma Gandhi",
  "7",
  "Pacific Ocean"
];


let question = document.querySelector('#question');
let opt1 = document.querySelector('#opt1');
let opt2 = document.querySelector('#opt2');
let opt3 = document.querySelector('#opt3');
let opt4 = document.querySelector('#opt4');

let buttons = document.querySelectorAll('.options');

function ask(number)
{
    question.textContent = questions[number];
    opt1.textContent = options[number][0];
    opt2.textContent = options[number][1];
    opt3.textContent = options[number][2];
    opt4.textContent = options[number][3];

    buttons.forEach(button => {
        button.addEventListener('click', () =>
        {
            if (button.textContent == answers[number])
            {
                console.log('correct');
            }
            else
            {
                console.log('wrong');
            }
            setTimeout(() => 
            {
                return;
            }, 3000);
        });
    });

}


// console.log(question.textContent);

for (let i = 0; i < questions.length(); i++)
{
    ask(number);
}

// ask(0);