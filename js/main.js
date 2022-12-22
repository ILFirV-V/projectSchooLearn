// const maths_1 = document.getElementById("maths-1");
// const maths_2 = document.getElementById("maths-2");
// const maths_3 = document.getElementById("maths-3");
// const maths_4 = document.getElementById("maths-4");
//
// let answer = 0
//
// maths_1.addEventListener('click', async () => {
//     answer = 1
// });
//
// maths_2.addEventListener('click', async () => {
//     answer = 2
// });
//
// maths_3.addEventListener('click', async () => {
//     answer = 3
// });
//
// maths_4.addEventListener('click', async () => {
//     answer = 4
// });
//
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
// const body = {
//
// }
//
// sendRequest("POST", requestURL, body)
//     .then(data => console.log(data))
//     .catch(err => console.error(err))