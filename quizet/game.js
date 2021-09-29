const question = document.querySelector('#question');
const  choices =Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarfull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let wrongAnswers = false
let score = 0
let questionCounter = 0
let availableQuestions =[]

let questions = [
    
    {
        question: 'What is the name of the universe Ant-Man travels to when he goes subatomic?',
        choice1: 'Virtual Reality',
        choice2: 'Quantum Fiction',
        choice3: 'Narnia',
        choice4: 'Quantum Realm',
        answer: 4,
    },
    {
        question: 'Which of these is not a continent?',
        choice1: 'Europe',
        choice2: 'Japan',
        choice3: 'Asia',
        choice4: 'North America',
        answer: 2,
    },
    {
        question: 'Which animal is said to always land on their feet?',
        choice1: 'Dogs',
        choice2: 'Cats',
        choice3: 'Rats',
        choice4: 'Wolfs',
        answer: 2,
    },
    {
        question: 'What are the main components of steel: iron and .......?',
        choice1: 'Copper',
        choice2: 'Carbon',
        choice3: 'Broze',
        choice4: 'Silver',
        answer: 2,
    },
    {
        question: 'There are _ major types of printer?',
        choice1: '4',
        choice2: '3',
        choice3: '2',
        choice4: '1',
        answer: 2,
    },
    {
        question: 'What famous wall went up in 1961 and came down in 1989?',
        choice1: 'Great Wall Of China',
        choice2: 'Antonine Wall',
        choice3: 'Berlin Wall ',
        choice4: 'Wailing Wall',
        answer: 3,
    },
    {
        question: 'Ctrl+W is a shortcut key used to _?',
        choice1: 'Cut',
        choice2: 'Open some program files',
        choice3: 'End',
        choice4: 'Close',
        answer: 3,
    },
    {
        question: 'How many is equivalent to a dozen?',
        choice1: "14",
        choice2: '10',
        choice3: '12',
        choice4: '16',
        answer: 3,
    },
    {
        question: 'Which vegetable is associated with Halloween?',
        choice1: 'Carrot',
        choice2: 'Turnip',
        choice3: 'Grape',
        choice4: 'Pumpkin',
        answer: 4,
    },
    {
        question: 'What are termites noted for eating?',
        choice1:  'Earth',
        choice2:  'Insect',
        choice3:  'Wood',
        choice4:  'Rice',
        answer: 3,
    },
    {
        question: 'From which animal do we obtain bacon from?',
        choice1: 'Sheep',
        choice2: 'Pig',
        choice3: 'Cow',
        choice4: 'Chicken',
        answer: 2,
    },
    {
        question: 'Which flower represents love?',
        choice1: 'Dandelion',
        choice2: 'Poppy',
        choice3: 'Rose',
        choice4: 'Lily',
        answer: 3,
    },
    {
        question: 'What do you call a person who was born in or is a citizen of finland?',
        choice1: 'Fan',
        choice2: 'Finn',
        choice3: 'Fin',
        choice: 'Finlander',
        answer: 2,
    },
    {
            question: 'What color is the the planet mars said to be?',
            choice1: 'White',
            choice2: 'Blue',
            choice3: 'Red',
            choice4: 'Orange',
            answer: 3,
        },
    {
        question: 'Which birds make a HOOT sound?',
        choice1: 'Owls',
        choice2: 'Penguins',
        choice3: 'Woodpeckers',
        choice4: 'Mockingbirds',
        answer: 1,
    },
    {
        question: 'How many pockets does a pool table have?',
        choice1: '2',
        choice2: '5',
        choice3: '6',
        choice4: '8',
        answer: 3,
    },
    {
        question: 'Which has a data storage capacity equal to approximately 1,000 Gigabytes?',
        choice1: 'Megabyte',
        choice2: 'Exabyte',
        choice3: 'Petabyte',
        choice4: 'Terabyte',
        answer: 4,
    },
    {
        question: 'What nationality is Wonder Woman?',
        choice1: 'Libanese',
        choice2: 'Kryptonian',
        choice3: 'Amazonian',
        choice4: 'French',
        answer: 3,
    }, 
    {
        question: 'What city is the Eiffel Tower located in?',
        choice1: 'New York',
        choice2: 'London',
        choice3: 'Paris',
        choice4: 'Tuscany',
        answer: 3,
    },
    {
        question: 'Who was the 41st president of the USA?',
        choice1: 'George Bush',
        choice2: 'George Cactus',
        choice3: 'George Tulip',
        choice4: 'George Tree',
        answer: 1,
    },
    {
        question: 'Which of these wild forces of nature is commonly referred to as a cyclone?',
        choice1: 'Tornado',
        choice2: 'Earthquake',
        choice3: 'Courtney love',
        choice4: 'Volcanic eruption',
        answer: 1,
    },
    {
        question: 'In the early 90s? which singer was known as the king of pop',
        choice1: 'Justin Bieber',
        choice2: 'Michael Jackson',
        choice3: '50 Cent',
        choice4: 'Justin Timberlake',
        answer: 2,
    },
    {
        question: 'What is Earth natual satellite?',
        choice1: 'Venus',
        choice2: 'Moon',
        choice3: 'Sun',
        choioce: 'Viasat',
        answer: 2,
    },
    {
        question: ' Which animal is known as mans best friend?',
        choice1: 'Horse',
        choice2: 'Dog',
        choice3: 'Cat',
        choice4: 'Bird',
        answer: 2,
    },
    {
        question: 'What the hottest continent on Earth?',
        choice1: 'Europe',
        choice2: 'Africa',
        choice3: 'Asia',
        choice4: 'Antarctica',
        answer: 2,
    },
]
 const SCORE_POINTS= 2
const MAX_QUESTIONS =25

startGame = () => {
    questionCounter = 0
    score  = 0
    availableQuestions = [...questions]
    getNewQuestion()
}


getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html') 
    }


     questionCounter++
     progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
     progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
   
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
       const number = choice.dataset['number']
       choice.innerText =currentQuestion['choice' + number]
    })
    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }
        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })

     })
     incrementScore = num => {
         score +=num
         scoreText.innerText = score
     }
     startGame()


