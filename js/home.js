const nickname = document.getElementById("nickname");
const inputForm = document.getElementById("form");
const btnOpenInputForm = document.getElementById("inputForm");

document.addEventListener('mousedown', checkCloseForm);

// const bc = new BroadcastChannel('test_channel');
// bc.addEventListener('message', function (e) {
//     console.log(e);
// })
// bc.onmessage = (event) => {
//     console.log(event);
// };


btnOpenInputForm.addEventListener('click', async () => {
    if (!(localStorage.getItem('entered') === "true")){
        openForm()
    }
    else {
        exitStatus()
    }
});

function checkCloseForm(event) {
    if(event.target.closest('.form') === null && btnOpenInputForm.disabled){
        closeForm()
    }
}

function openForm() {
    inputForm.style.display = "flex";
    btnOpenInputForm.disabled = true;
}

function closeForm() {
    inputForm.style.display = 'none';
    btnOpenInputForm.disabled = false;
}

function exitStatus(){
    localStorage.setItem('entered', "false");
    btnOpenInputForm.innerText = "Войти"
    localStorage.setItem('nicknameText', "");
    nickname.innerText = localStorage.getItem('nicknameText');
    localStorage.clear()
}

function openStatus(){
    btnOpenInputForm.innerText = "Выйти"
    nickname.innerText = localStorage.getItem('nicknameText');
}

let name = localStorage.getItem('nicknameText');
localStorage.setItem('nicknameText', name);
let entered = localStorage.getItem('entered');
localStorage.setItem('entered', entered);
let token = localStorage.getItem('token');
localStorage.setItem('token', token);



window.onload = async function(){

    // console.log(entered)
    // let v = localStorage.getItem("1") + 1
    // localStorage.setItem("1", v)
    if (entered === "true"){
        openStatus()
    }
    else {
        exitStatus()
    }
    await getResults();
}

// console.log(localStorage.getItem("1"))
// let q = localStorage.getItem("1")
// localStorage.setItem("1", q)
// console.log(localStorage.getItem("1"))

const applicantForm = document.getElementById('form__box')
applicantForm.addEventListener('submit', handleFormSubmit)

function serializeForm(formNode) {
    const { elements } = formNode
    let data = {
        login: "",
        password: "",
    }
    Array.from(elements)
        .filter((item) => !!item.name)
        .map((element) => {
            if (element.name === "login") {
                data.login = element.value
                localStorage.setItem('nicknameText', element.value);
            }
            else{
                data.password = element.value
            }
        })
    return data;
}



async function handleFormSubmit(event) {
    event.preventDefault()
    let data = serializeForm(event.target)
    const response = await sendData(data)
    // localStorage.setItem('token', response.token);
    // token = localStorage.getItem('token');
    // console.log(response.token)
    if (response) {
        localStorage.setItem('entered', "true");
        render(response)
        console.log(response.token)
        console.log(typeof (response.token))
        localStorage.setItem('token', response.token);
        console.log(localStorage.getItem('token'))
        console.log(typeof localStorage.getItem('token'))
    }
    else{
        localStorage.setItem('nicknameText', "");
    }
}

async function sendData(data) {
    const result = await fetch('http://mnyouone-001-site1.ctempurl.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
    console.log(result)
    if (result.ok) {
        return await result.json();
    } else {
        return false
    }
}

const render = (data) => {
    closeForm()
    openStatus()
}

// async function sendData(data) {
//     const headers = {
//         'Content-Type': 'application/json'
//     }
//     return await fetch('https://localhost:7238/api/Token', {
//         method: 'POST',
//         headers: headers,
//         body: data,
//     })
// }
//
// function handleFormSubmit(event) {
//     event.preventDefault()
//     const data = serializeForm(applicantForm)
//     sendRequest("POST", 'https://localhost:7238/api/Token/', data)
//         .then(data => console.log(data, "все хорошо"))
//         .catch(err => console.error(err, "не все хорошо"))
// }



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
//
// const resultScors = document.getElementById("result");
//
//
// const fetchDataResults = async () => {
//     try {
//         const result = await
//             fetch(`https://localhost:7238/rating/global?count=10`, {
//                 method: 'GET',
//                 headers: {
//                     Authorization: "Bearer " + token
//                 }
//             });
//         return await result.json();
//     } catch (error) {
//         console.error(error);
//     }
// }

// async function getResults() {
//     const results = await fetchDataResults();
//     for (let i in results){
//         renderUl(i, results[i])
//     }
// }

// function renderUl(number, result){
//     console.log(result)
//     let ul = document.createElement('ul');
//     let li1 = document.createElement('li');
//     li1.innerHTML = parseInt(number) + 1;
//     ul.append(li1);
//     let li2 = document.createElement('li');
//     li2.innerHTML = result.login[0].toUpperCase() + result.login.slice(1);
//     ul.append(li2);
//     let li3 = document.createElement('li');
//     li3.innerHTML = result.scores;
//     ul.append(li3);
//     resultScors.append(ul);
// }


const main = document.querySelector("main");

let task = {
    id: 0,
    name: "тип",
    description: "задача",
    subject: "",
    difficulty: 0,
    answer: 0,
}

const fetchDataTask = async (subject) => {
    try {
        const result = await
            fetch(`http://mnyouone-001-site1.ctempurl.com/task/${subject}`, {
                method: 'GET',
                headers: {
                    Authorization: "Bearer " + token
                }
            });
        return await result.json();
    } catch (error) {
        console.error(error);
    }
}

async function getTask(subject) {
    const response = await fetchDataTask(subject);
    // {
    //     id: 2,
    //     name: "площадь фигуры",
    //     description: "найти площадь треугольника со сторонами 3,4,5",
    //     lesson: "математика",
    //     difficultyId: 1
    // }
    if (!response || response === "false") {
        alert("Задания закончены")
        return null;
    }

    // {
    //     "id": 0,
    //     "name": "string",
    //     "description": "string",
    //     "diffic
    //     ulty": "string",
    //     "subject": "string",
    //     "answer": "string"
    // }

    task.id = response.id;
    task.name = response.name;
    task.difficulty = response.difficulty;
    task.description = response.description;
    task.subject = response.subject;
    task.answer = 0;
    console.log(task)
    return response
}

const maths = document.getElementById("maths");
const informatics = document.getElementById("informatics");



let subject = ""

// answerBtn.addEventListener('click', async () => {
//     task.answer = answerInput.value;
//     console.log(task.answer, "task.answer")
//     console.log(answerInput.value, "answerInput.value")
//     sendRequest("PUT", `https://localhost:7238/task/check`, task)
//         .then(data => console.log(data))
//         .catch(err => console.error(err))
// });

async function sendAnswer() {
    try {
        const answerInput = document.getElementById("input-answer");
        task.answer = answerInput.value;
        const result = await sendRequest("PUT", 'http://mnyouone-001-site1.ctempurl.com/task/check', task);
        renderAnswer(result)
    } catch (error) {
        console.error(error);
    }
    // sendRequest("PUT", 'https://localhost:7238/task/check', task)
    //     .then(data_result => console.log(data_result))
    //     .catch(err => console.error(err))
}

function renderAnswer(answer) {
    let result = document.getElementById("result");
    result.innerText = answer? "Верно" : "Неверно";
    if (answer) {
        result.classList.remove("false");
        result.innerText = "Верно";
        result.classList.add("true");
    } else {
        result.classList.remove("true");
        result.innerText = "Неверно";
        result.classList.add("false");
    }
}

maths.addEventListener('click', async () => {
    const response = await getTask("математика")
    if (!response) {
        return null;
    }
    subject = "математика";
    renderTask(response)
});

informatics.addEventListener('click', async () => {
    const response = await getTask("информатика")
    if (!response) {
        return null;
    }
    subject = "информатика";
    renderTask(response)
});

async function getNewTask() {
    const response = await getTask(subject)
    if (!response) {
        return null;
    }
    renderTask(response)
}

// onchange="displayname()"
const renderTask = (task) => {
    main.innerHTML = "";
    main.innerHTML = `<div class="container">
                        <section class="competition">
                            <p class="title">Вы участвуете в соревновании по ${task.subject}</p>
                            <p class="difficulty text-1"> Уровень: ${task.difficulty} </p>
                            <p class="text-2">${task.description}</p>
                            <div class="answer_box">                            <input type="text" 
                                 placeholder="Ответ:" class="input-answer" id="input-answer">
                                 <p class="result" id="result"></p></div>

                                <div class="btn-competition">
                                      <button class="registration" id="get-answer" onclick="sendAnswer()">
                                            Отправить
                                      </button>
                                      <button class="registration next" id="getNewTask" onclick="getNewTask()">
                                            Следующее
                                      </button>
                                 </div>
<!--                                  <label for="name">Введите ответ:</label>-->
<!--                                  <input-->
<!--                                          type = "text"-->
<!--                                          id = "name"-->
<!--                                          name = "answer"-->
<!--                                          required-->
<!--                                          minlength = "4"-->
<!--                                          maxlength = "8"-->
<!--                                          size = "10"-->
<!--                                  >-->
<!--                                <li class="answer">-->
<!--                                    <button id="maths-1" onclick="addAnswer_1()" title="1">Вариант 1</button>-->
<!--                                </li>-->
<!--                                <li class="answer">-->
<!--                                    <button id="maths-2" onclick="addAnswer_2()" title="2">Вариант 2</button>-->
<!--                                </li>-->
<!--                                <li class="answer">-->
<!--                                    <button id="maths-3" onclick="addAnswer_3()" title="3">Вариант 3</button>-->
<!--                                </li>-->
<!--                                <li class="answer">-->
<!--                                    <button id="maths-4" onclick="addAnswer_4()" title="4">Вариант 4</button>-->
<!--                                </li>-->
                        </section>
                       </div>`
}


function sendRequest(method, url, body=null) {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem('token'),
    }
    console.log(typeof localStorage.getItem('token'))

    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers,
    }).then(response => {
        if (response.ok) {
            return response.json()
        }

        return response.json().then(error => {
            const e = new Error("Что-то пошло не так")
            e.data = error
            throw e
        })
    })
}


