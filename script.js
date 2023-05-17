const questions = [
    {
        question: 'Как Гарри впервые проявил магические способности?',
        answers: [
            'Превратил соседскую кошку в сову',
            'Наколдовал кузену поросячий хвостик',
            'Заставил исчезнуть стекло в вольере со змеей',
            'Сделать хотел грозу, а получил козу',
        ],
        correct: 3,
    },
    {
        question: 'Сколько братьев было у Рона Уизли?',
        answers: [
            '7',
            '5',
            '3',
            '2, зато близнецы',
        ],
        correct: 2,
    },
    {
        question: 'Что видел Гарри в зеркале Еиналеж?',
        answers: [
            'Как он побеждает Волан-де-Морта',
            'Как он становится министром магии',
            'Как он выигрывает Кубок по квиддичу',
            'Своих родителей',
        ],
        correct: 4,
    },
    {
        question: 'Кстати, про квиддич. На какой позиции играл Гарри?',
        answers: [
            'Загонщик',
            'Ловец',
            'Охотник',
            'Вратарь',
        ],
        correct: 2,
    },
    {
        question: 'Как назывался дом, в котором жили Уизли?',
        answers: [
            'Нора',
            'Дыра',
            'Визжащая хижина',
            'Годрикова впадина',
        ],
        correct: 1,
    },
    {
        question: 'Что вытащил Гарри из Распределяющей шляпы перед боем с василиском?',
        answers: [
            'Бузинную палочку – самую сильную в мире',
            'Феникса',
            'Меч Годрика Гриффиндора',
            'Мужество',
        ],
        correct: 3,
    },
    {
        question: 'Кто был на карточке от шоколадной лягушки в коробке Гарри?',
        answers: [
            'Северус Снегг',
            'Альбус Дамблдор',
            'Минерва Макгонагалл',
            'Златопуст Локонс',
        ],
        correct: 2,
    },
    {
        question: 'Лунатик, Бродяга, … и Хвост – кого мы пропустили?',
        answers: [
            'Рогатый',
            'Сохатый',
            'Бывалый',
            'Клыкастый', 
        ],
        correct: 2,
    },
    {
        question: 'Какие существа охраняли крестраж-медальон Волан-де-Морта?',
        answers: [
            'Драконы',
            'Гоблины',
            'Инферналы',
            'Дементоры', 
        ],
        correct: 3,
    },
    {
        question: 'Кем прикинулся Барти Крауч младший, чтобы попасть в Хогвартс?',
        answers: [
            'Аластором Грюмом',
            'Сириусом Блэком',
            'Виктором Крамом',
            'Роном Уизли ',
        ],
        correct: 1,
    },
]

let questionIndex = 0;
let score = 0;

const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#quiz-list');
const button = document.querySelector('#quiz-btn');


// clearPage();
showQuestions();

button.onclick = checkAnswer;

function clearPage () {
    headerContainer.innerHTML = '';
    listContainer.innerHTML = '';
}

function showQuestions() {
    headerContainer.innerHTML = `<h2 class="title">${questions[questionIndex]['question']}</h2>`;

    let indexOfAnswer = 1;
    for(answers of questions[questionIndex]['answers']) {
        const questionTemplate = `
                <li>
                    <label>
                        <input type="radio" class="answer" value="${indexOfAnswer}" name="answer">
                        <span>${answers}</span>
                    </label>
                </li>
        `;
        listContainer.innerHTML += questionTemplate;
        indexOfAnswer++;
    }
}

function checkAnswer() {   
    const correctAnswer = questions[questionIndex]['correct'];
    
    const checkedInput = listContainer.querySelector('input[type="radio"]:checked');
    const valueOfCheckedInput = Number(checkedInput.value);
    // console.log(questionIndex, questions[questionIndex]['question'], correctAnswer, valueOfCheckedInput)

    if(correctAnswer === valueOfCheckedInput) {
        score++;
    }
    
    if(questions.length -1 !== questionIndex) {
        questionIndex++;
        clearPage();
        showQuestions();
    } else {
        clearPage();
        showResults();
    }
}

function showResults() {
    let message, result;  
    if(questions.length === score) {
        message = 'Поздравляем!!!';        
    } else if ((questions.length / 100) * score >= 50) {
        message = 'Вы ответили правильно на больше половины вопросов';
    } else {
        message = 'Вы ответили правильно на меньше половины вопросов';
    }
    
    result = `${score} из ${questions.length}`;

    headerContainer.innerHTML = `
                <h2 class="title">${result}</h2>
                <p class="title">${message}</p>
    `;

    button.blur()
    button.innerText = 'Играть снова';
    button.onclick = () => history.go()
}

