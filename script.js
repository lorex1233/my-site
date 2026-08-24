// ========================================
// ДАННЫЕ ТЕСТОВ
// ========================================

const quizzes = {

    kazakhstan: {

        name: "История Казахстана",

        questions: [

            {
                question: "В каком году было образовано Казахское ханство?",

                answers: [
                    "1219 год",
                    "1465–1466 годы",
                    "1511 год",
                    "1731 год"
                ],

                correct: 1
            },

            {
                question: "Кто считается одним из основателей Казахского ханства?",

                answers: [
                    "Керей хан",
                    "Абылай хан",
                    "Касым хан",
                    "Тауке хан"
                ],

                correct: 0
            },

            {
                question: "Как назывался свод законов при Тауке хане?",

                answers: [
                    "Жеты Жаргы",
                    "Яса",
                    "Касым ханның қасқа жолы",
                    "Есім ханның ескі жолы"
                ],

                correct: 0
            },

            {
                question: "В каком году Казахстан провозгласил независимость?",

                answers: [
                    "1986",
                    "1990",
                    "1991",
                    "1995"
                ],

                correct: 2
            },

            {
                question: "Как называется столица Казахстана?",

                answers: [
                    "Алматы",
                    "Шымкент",
                    "Астана",
                    "Тараз"
                ],

                correct: 2
            }

        ]
    },


    ancient: {

        name: "Древний мир",

        questions: [

            {
                question: "Какая цивилизация построила пирамиды в Гизе?",

                answers: [
                    "Древний Египет",
                    "Древняя Греция",
                    "Римская империя",
                    "Персия"
                ],

                correct: 0
            },

            {
                question: "Кто был верховным богом в Древней Греции?",

                answers: [
                    "Арес",
                    "Зевс",
                    "Аполлон",
                    "Посейдон"
                ],

                correct: 1
            },

            {
                question: "Какой город считается родиной демократии?",

                answers: [
                    "Спарта",
                    "Рим",
                    "Афины",
                    "Троя"
                ],

                correct: 2
            },

            {
                question: "Как назывался письменный материал Древнего Египта?",

                answers: [
                    "Пергамент",
                    "Папирус",
                    "Бумага",
                    "Береста"
                ],

                correct: 1
            },

            {
                question: "Кто, согласно легенде, основал Рим?",

                answers: [
                    "Цезарь и Август",
                    "Ромул и Рем",
                    "Сократ и Платон",
                    "Филипп и Александр"
                ],

                correct: 1
            }

        ]
    },


    middle: {

        name: "Средние века",

        questions: [

            {
                question: "Как называлась система общественных отношений в Средние века?",

                answers: [
                    "Феодализм",
                    "Капитализм",
                    "Социализм",
                    "Демократия"
                ],

                correct: 0
            },

            {
                question: "В каком году произошло Крещение Руси?",

                answers: [
                    "862",
                    "988",
                    "1066",
                    "1215"
                ],

                correct: 1
            },

            {
                question: "Кто завоевал Англию в 1066 году?",

                answers: [
                    "Карл Великий",
                    "Вильгельм Завоеватель",
                    "Ричард Львиное Сердце",
                    "Генрих VIII"
                ],

                correct: 1
            },

            {
                question: "Как назывался главный город Византийской империи?",

                answers: [
                    "Рим",
                    "Афины",
                    "Константинополь",
                    "Париж"
                ],

                correct: 2
            },

            {
                question: "Как назывались военные походы европейских христиан на Восток?",

                answers: [
                    "Пунические войны",
                    "Крестовые походы",
                    "Столетняя война",
                    "Наполеоновские войны"
                ],

                correct: 1
            }

        ]
    },


    modern: {

        name: "Новейшая история",

        questions: [

            {
                question: "В каком году началась Первая мировая война?",

                answers: [
                    "1912",
                    "1914",
                    "1917",
                    "1939"
                ],

                correct: 1
            },

            {
                question: "В каком году закончилась Вторая мировая война?",

                answers: [
                    "1943",
                    "1944",
                    "1945",
                    "1947"
                ],

                correct: 2
            },

            {
                question: "Какая организация была создана в 1945 году для поддержания международного мира?",

                answers: [
                    "НАТО",
                    "ООН",
                    "ЕС",
                    "СНГ"
                ],

                correct: 1
            },

            {
                question: "Как называлось противостояние СССР и США после Второй мировой войны?",

                answers: [
                    "Холодная война",
                    "Столетняя война",
                    "Крымская война",
                    "Семилетняя война"
                ],

                correct: 0
            },

            {
                question: "В каком году человек впервые высадился на Луне?",

                answers: [
                    "1957",
                    "1961",
                    "1969",
                    "1975"
                ],

                correct: 2
            }

        ]
    }

};


// ========================================
// ПЕРЕМЕННЫЕ
// ========================================

let currentQuiz = null;

let currentQuestion = 0;

let score = 0;

let selectedAnswer = null;


// ========================================
// РЕГИСТРАЦИЯ
// ========================================

function openRegistration() {
    document.getElementById("registration").classList.add("active");
}

function closeRegistration() {
    document.getElementById("registration").classList.remove("active");
}

function createProfile() {
    const name = document.getElementById("studentName").value.trim();
    const studentClass = document.getElementById("studentClass").value;
    const goal = document.getElementById("studentGoal").value;

    if (!name || !studentClass || !goal) {
        alert("Заполните все поля");
        return;
    }

    const profile = {
        name: name,
        class: studentClass,
        goal: goal
    };

    localStorage.setItem("quizProfile", JSON.stringify(profile));

    alert(`Профиль создан, ${name}!`);
    closeRegistration();

    document.getElementById("tests").scrollIntoView({
        behavior: "smooth"
    });
}


// ========================================
// ПЕРЕЙТИ К ТЕСТАМ
// ========================================

function goToTests() {

    document.getElementById("tests").scrollIntoView({
        behavior: "smooth"
    });
}


// ========================================
// ВЫБОР ТЕМЫ
// ========================================

function selectTopic(topic) {

    currentQuiz = quizzes[topic];

    currentQuestion = 0;

    score = 0;

    selectedAnswer = null;


    document.getElementById("quiz").scrollIntoView({
        behavior: "smooth"
    });


    loadQuestion();
}


// ========================================
// ЗАГРУЗКА ВОПРОСА
// ========================================

function loadQuestion() {

    const question =
        currentQuiz.questions[currentQuestion];


    document.getElementById("quiz-topic").textContent =
        currentQuiz.name;


    document.getElementById("question-number").textContent =
        `Вопрос ${currentQuestion + 1} из ${currentQuiz.questions.length}`;


    document.getElementById("score").textContent =
        `${score} баллов`;


    document.getElementById("question").textContent =
        question.question;


    // ПРОГРЕСС

    const progress =
        ((currentQuestion + 1) /
        currentQuiz.questions.length) * 100;


    document.getElementById("progress-fill").style.width =
        `${progress}%`;


    // ОЧИСТИТЬ СТАРЫЕ ОТВЕТЫ

    const answersContainer =
        document.getElementById("answers");

    answersContainer.innerHTML = "";


    selectedAnswer = null;


    // СОЗДАТЬ КНОПКИ ОТВЕТОВ

    question.answers.forEach(
        function(answer, index) {

            const button =
                document.createElement("button");


            button.className =
                "answer-button";


            button.textContent =
                answer;


            button.onclick =
                function() {

                    chooseAnswer(index, button);

                };


            answersContainer.appendChild(button);

        }
    );


    // КНОПКА ДАЛЕЕ

    const nextButton =
        document.getElementById("next-button");

    nextButton.disabled = true;

}


// ========================================
// ВЫБОР ОТВЕТА
// ========================================

function chooseAnswer(index, button) {

    // Нельзя выбрать второй ответ

    if (selectedAnswer !== null) {

        return;

    }


    selectedAnswer = index;


    const question =
        currentQuiz.questions[currentQuestion];


    const buttons =
        document.querySelectorAll(".answer-button");


    // ОТКЛЮЧАЕМ КНОПКИ

    buttons.forEach(
        function(button) {

            button.disabled = true;

        }
    );


    // ПРАВИЛЬНЫЙ ОТВЕТ

    if (index === question.correct) {

        button.classList.add("correct");

        score++;

    }

    // НЕПРАВИЛЬНЫЙ

    else {

        button.classList.add("wrong");

        buttons[question.correct]
            .classList.add("correct");

    }


    // ОБНОВЛЯЕМ БАЛЛЫ

    document.getElementById("score").textContent =
        `${score} баллов`;


    // АКТИВИРУЕМ "СЛЕДУЮЩИЙ"

    document.getElementById("next-button")
        .disabled = false;

}


// ========================================
// СЛЕДУЮЩИЙ ВОПРОС
// ========================================

function nextQuestion() {

    if (selectedAnswer === null) {

        return;

    }


    currentQuestion++;


    if (
        currentQuestion <
        currentQuiz.questions.length
    ) {

        loadQuestion();

    }

    else {

        showResult();

    }

}


// ========================================
// РЕЗУЛЬТАТ
// ========================================

function showResult() {

    const total =
        currentQuiz.questions.length;


    const percentage =
        Math.round(
            (score / total) * 100
        );


    let message;


    if (percentage === 100) {

        message =
            "🏆 Отлично! Все ответы правильные!";

    }

    else if (percentage >= 80) {

        message =
            "🎉 Очень хороший результат!";

    }

    else if (percentage >= 60) {

        message =
            "👍 Неплохой результат!";

    }

    else {

        message =
            "📚 Стоит ещё немного повторить тему.";

    }


    alert(
        `${message}\n\nРезультат: ${score} из ${total} (${percentage}%)`
    );


    // Возвращаем к выбору темы

    document.getElementById("tests")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ========================================
// ЛОГИКА ИИ-АССИСТЕНТА
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const API_KEY = "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"; // Замените на ваш реальный ключ из текстового файла на Диске
    const toggleBtn = document.getElementById('ai-chat-toggle');
    const closeBtn = document.getElementById('ai-chat-close');
    const chatContainer = document.getElementById('ai-chat-container');
    const sendBtn = document.getElementById('ai-send-btn');
    const userInput = document.getElementById('ai-user-input');
    const messagesContainer = document.getElementById('ai-chat-messages');

    if (!toggleBtn) return; // Проверка на наличие элементов на странице

    toggleBtn.addEventListener('click', () => {
        chatContainer.classList.toggle('ai-hidden');
    });

    closeBtn.addEventListener('click', () => {
    chatContainer.classList.add('ai-hidden');
});

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

async function sendMessage() {
    const text = userInput.value.trim();
    if (!text) return;

    appendMessage(text, 'ai-user');
    userInput.value = '';

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: text })
        });

        const data = await response.json();
        
        let reply = "Извините, не удалось получить ответ от сервера.";
        
        if (data.choices && data.choices[0] && data.choices[0].message) {
            reply = data.choices[0].message.content;
        } else if (data.error) {
            reply = typeof data.error === 'object' ? (data.error.message || JSON.stringify(data.error)) : data.error;
        }

        appendMessage(reply, 'ai-bot');
    } catch (error) {
        console.error(error);
        appendMessage('Ошибка соединения с сервером.', 'ai-bot');
    }
}
