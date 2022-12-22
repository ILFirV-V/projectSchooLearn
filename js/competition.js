const main = document.querySelector("main");

let task = {
        id: 0,
        name: "тип",
        description: "задача",
        lesson: "предмет",
        difficultyId: 0,
        answer: 0,
    }

const fetchDataTask = async (subject) => {
    try {
        const result = await
            fetch(`url`);
        return await result.json();
    } catch (error) {
        msg.textContent = "error";
    }
}

async function getTask(subject) {
    const response =
        {
            id: 2,
            name: "площадь фигуры",
            description: "найти площадь треугольника со сторонами 3,4,5",
            lesson: "математика",
            difficultyId: 1
        }
    // await fetchDataTask(subject);
    if (!response) {
        return null;
    }

    task.id = response.id;
    task.name = response.name;
    task.difficultyId = response.difficultyId;
    task.description = response.description;
    task.lesson = response.lesson;
    task.answer = 0;
    console.log(task)
    return response
}

const maths = document.getElementById("maths");
const informatics = document.getElementById("informatics");

maths.addEventListener('click', async () => {
    const response = await getTask("Maths")
    if (!response) {
        return null;
    }
    renderTask(response)
});

informatics.addEventListener('click', async () => {
    const response = await getTask("Informatics")
    if (!response) {
        return null;
    }
    renderTask(response)
});

const renderTask = (task) => {
    main.innerHTML = "";
    main.innerHTML = `<div class="container">
                        <section class="competition">
                            <p class="title">Вы участвуете в соревновании по ${task.lesson}</p>
                            <p class="text">${task.description}</p>
                            <ul class="answers-list">
                                <li class="answer">
                                    <button id="maths-1" onclick="addAnswer_1()" title="1">Вариант 1</button>
                                </li>
                                <li class="answer">
                                    <button id="maths-2" onclick="addAnswer_2()" title="2">Вариант 2</button>
                                </li>
                                <li class="answer">
                                    <button id="maths-3" onclick="addAnswer_3()" title="3">Вариант 3</button>
                                </li>
                                <li class="answer">
                                    <button id="maths-4" onclick="addAnswer_4()" title="4">Вариант 4</button>
                                </li>
                            </ul>
                        </section>
                       </div>`
}


function addAnswer_1(){
    task.answer = 1
    console.log(task)
}

function addAnswer_2(){
    task.answer = 2
    console.log(task)
}

function addAnswer_3(){
    task.answer = 3
    console.log(task)
}

function addAnswer_4(){
    task.answer = 4
    console.log(task)
}

// const requestURL = "url"
//
// function sendRequest(method, url, body=null) {
//     const headers = {
//         'Content-Type': 'application/json'
//     }
//
//     return fetch(url, {
//         method: method,
//         body: JSON.stringify(body),
//         headers: headers,
//     }).then(response => {
//         if (response.ok) {
//             return response.json()
//         }
//
//         return response.json().then(error => {
//             const e = new Error("Что-то пошло не так")
//             e.data = error
//             throw e
//         })
//     })
// }
//
// sendRequest("POST", requestURL, task)
//     .then(data => console.log(data))
//     .catch(err => console.error(err))