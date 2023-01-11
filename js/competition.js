// const main = document.querySelector("main");
//
// let task = {
//         id: 0,
//         name: "тип",
//         description: "задача",
//         subject: "",
//         difficulty: 0,
//         answer: 0,
//     }
//
// const fetchDataTask = async (subject) => {
//     try {
//         const result = await
//             fetch(`https://localhost:7238/task?subject=${subject}`, {
//                 method: 'GET',
//                 headers: {
//                     Authorization: "Bearer " + localStorage.getItem('token')
//                 }
//             });
//         return await result.json();
//     } catch (error) {
//         console.error(error);
//     }
// }
//
// async function getTask(subject) {
//     const response = await fetchDataTask(subject);
//         // {
//         //     id: 2,
//         //     name: "площадь фигуры",
//         //     description: "найти площадь треугольника со сторонами 3,4,5",
//         //     lesson: "математика",
//         //     difficultyId: 1
//         // }
//     if (!response) {
//         return null;
//     }
//
//     // {
//     //     "id": 0,
//     //     "name": "string",
//     //     "description": "string",
//     //     "diffic
//     //     ulty": "string",
//     //     "subject": "string",
//     //     "answer": "string"
//     // }
//
//     task.id = response.id;
//     task.name = response.name;
//     task.difficulty = response.difficulty;
//     task.description = response.description;
//     task.subject = response.subject;
//     task.answer = 0;
//     console.log(task)
//     return response
// }
//
// const maths = document.getElementById("maths");
// const informatics = document.getElementById("informatics");
//
//
//
// let subject = ""
//
// // answerBtn.addEventListener('click', async () => {
// //     task.answer = answerInput.value;
// //     console.log(task.answer, "task.answer")
// //     console.log(answerInput.value, "answerInput.value")
// //     sendRequest("PUT", `https://localhost:7238/task/check`, task)
// //         .then(data => console.log(data))
// //         .catch(err => console.error(err))
// // });
//
// async function sendAnswer() {
//     try {
//         const answerInput = document.getElementById("input-answer");
//         task.answer = answerInput.value;
//         const result = await sendRequest("PUT", 'https://localhost:7238/task/check', task);
//         renderAnswer(result)
//     } catch (error) {
//         console.error(error);
//     }
//     // sendRequest("PUT", 'https://localhost:7238/task/check', task)
//     //     .then(data_result => console.log(data_result))
//     //     .catch(err => console.error(err))
// }
//
// function renderAnswer(answer) {
//     let result = document.getElementById("result");
//     result.innerText = answer? "Верно" : "Неверно";
//     if (answer) {
//         result.classList.remove("false");
//         result.innerText = "Верно";
//         result.classList.add("true");
//     } else {
//         result.classList.remove("true");
//         result.innerText = "Неверно";
//         result.classList.add("false");
//     }
// }
//
// maths.addEventListener('click', async () => {
//     const response = await getTask("математика")
//     if (!response) {
//         return null;
//     }
//     subject = "математика";
//     renderTask(response)
// });
//
// informatics.addEventListener('click', async () => {
//     const response = await getTask("информатика")
//     if (!response) {
//         return null;
//     }
//     subject = "информатика";
//     renderTask(response)
// });
//
// async function getNewTask() {
//     const response = await getTask(subject)
//     if (!response) {
//         return null;
//     }
//     renderTask(response)
// }
//
// // onchange="displayname()"
// const renderTask = (task) => {
//     main.innerHTML = "";
//     main.innerHTML = `<div class="container">
//                         <section class="competition">
//                             <p class="title">Вы участвуете в соревновании по ${task.subject}</p>
//                             <p class="difficulty text"> Уровень: ${task.difficulty} </p>
//                             <p class="text">${task.description}</p>
//                             <div class="answer_box">                            <input type="text"
//                                  placeholder="Ответ:" class="input-answer" id="input-answer">
//                                  <p class="result" id="result"></p></div>
//
//                                 <div class="btn-competition">
//                                       <button class="registration" id="get-answer" onclick="sendAnswer()">
//                                             Отправить
//                                       </button>
//                                       <button class="registration next" id="getNewTask" onclick="getNewTask()">
//                                             Следующее
//                                       </button>
//                                  </div>
// <!--                                  <label for="name">Введите ответ:</label>-->
// <!--                                  <input-->
// <!--                                          type = "text"-->
// <!--                                          id = "name"-->
// <!--                                          name = "answer"-->
// <!--                                          required-->
// <!--                                          minlength = "4"-->
// <!--                                          maxlength = "8"-->
// <!--                                          size = "10"-->
// <!--                                  >-->
// <!--                                <li class="answer">-->
// <!--                                    <button id="maths-1" onclick="addAnswer_1()" title="1">Вариант 1</button>-->
// <!--                                </li>-->
// <!--                                <li class="answer">-->
// <!--                                    <button id="maths-2" onclick="addAnswer_2()" title="2">Вариант 2</button>-->
// <!--                                </li>-->
// <!--                                <li class="answer">-->
// <!--                                    <button id="maths-3" onclick="addAnswer_3()" title="3">Вариант 3</button>-->
// <!--                                </li>-->
// <!--                                <li class="answer">-->
// <!--                                    <button id="maths-4" onclick="addAnswer_4()" title="4">Вариант 4</button>-->
// <!--                                </li>-->
//                         </section>
//                        </div>`
// }
//
//
// function sendRequest(method, url, body=null) {
//     const headers = {
//         'Content-Type': 'application/json',
//         'Authorization': sessionStorage.getItem('token'),
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
