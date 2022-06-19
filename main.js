const option1 = document.querySelector('.option1'),
    option2 = document.querySelector('.option2'),
    option3 = document.querySelector('.option3'),
    option4 = document.querySelector('.option4')

const optionElements = document.querySelectorAll('.option')

const question = document.getElementById('question'),
    numberOfquestion = document.getElementById('number-of-question'),
    numberOfAllquestion = document.getElementById('number-of-all-questions')

let indexOfQuestion,
    indexOfPage = 0

const btn = document.getElementById('btn-next')

let score = 0


const questions = [
    {
        question: 'Which month comes right before june ',
        options: [
            'may',
            'september',
            'july',
            'august'
        ],
        rightAnswer: 2
    },
    {
        question: 'What is 2  + "6"  ',
        options: [
            '26',
            8,
            4,
            12
        ],
        rightAnswer: 0
    },
    {
        question: ' 3 + 4 = 7 ',
        options: [
            'false',
            'undefiend',
            'null',
            'true'
        ],
        rightAnswer: 3
    }
];


numberOfAllquestion.innerHTML = questions.length


const load = () => {
    question.innerHTML = questions[indexOfQuestion].question
    option1.innerHTML = questions[indexOfQuestion].options[0]
    option2.innerHTML = questions[indexOfQuestion].options[1]
    option3.innerHTML = questions[indexOfQuestion].options[2]
    option4.innerHTML = questions[indexOfQuestion].options[3]

    numberOfquestion.innerHTML = indexOfPage + 1
    indexOfPage++
    if (indexOfPage > questions.length - 1) {
        indexOfPage = 0
    }

}


const randomQuestion = () => {
    let randomNumber = Math.floor(Math.random() * questions.length)


    indexOfQuestion = randomNumber
    load()
}


const checkAnswer = (el) => {

    if (el.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
        el.target.classList.add('rigth')
    } else {
        el.target.classList.add('wrong')
    }
    disabledOptions()
}

const disabledOptions = () => {
    optionElements.forEach((item) => {
        item.classList.add('disabled')
        if (item.dataset.id == questions[indexOfQuestion].rightAnswer) {
            item.classList.add('rigth')
        }
    })
}

const enableOptions = () => {
    optionElements.forEach((item) => {
        item.classList.remove("disabled", "righ", "wrong")
    })
}

optionElements.forEach((option) => {
    option.addEventListener('click', (e) => {
        checkAnswer(e)
    })
})

const validate = () => {
    randomQuestion()
    enableOptions()
}

btn.addEventListener('click', validate)


window.addEventListener('load', () => {
    randomQuestion()

})