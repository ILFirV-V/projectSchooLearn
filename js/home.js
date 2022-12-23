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


window.onload = async function(){
    await getResults();
    // console.log(entered)
    // let v = localStorage.getItem("1") + 1
    // localStorage.setItem("1", v)
    if (entered === "true"){
        openStatus()
    }
    else {
        exitStatus()
    }
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
    if (response) {
        localStorage.setItem('entered', "true");
        render(response)
        localStorage.setItem('token', response);
    }
    else{
        localStorage.setItem('nicknameText', "");
    }
}

async function sendData(data) {
    const result = await fetch('https://localhost:7238/api/Token/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
    console.log(result)
    return await result.json();
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
const resultScors = document.getElementById("result");
//
//
// const fetchDataResults = async () => {
//     try {
//         const result = await
//             fetch(`https://localhost:7238/rating/global`);
//         return await result.json();
//     } catch (error) {
//         console.error(error);
//     }
// }
//
async function getResults() {
    const results = [
        {
            "id": 3,
            "name": "arman",
            "scores": 19
        },
        {
            "id": 5,
            "name": "anny",
            "scores": 17
        },
        {
            "id": 13,
            "name": "dmitriy",
            "scores": 17
        },
        {
            "id": 4,
            "name": "nikita",
            "scores": 16
        },
        {
            "id": 8,
            "name": "lana",
            "scores": 13
        },
        {
            "id": 7,
            "name": "igor",
            "scores": 11
        },
        {
            "id": 11,
            "name": "igor",
            "scores": 11
        },
        {
            "id": 9,
            "name": "lauren",
            "scores": 6
        },
        {
            "id": 6,
            "name": "masha",
            "scores": 4
        },
        {
            "id": 10,
            "name": "gocha",
            "scores": 4
        },
        {
            "id": 12,
            "name": "marina",
            "scores": 4
        },
        {
            "id": 14,
            "name": "vladimir",
            "scores": 2
        }
    ];
    console.log(results)
    // await fetchDataResults();
    for (let i in results){
        renderUl(i, results[i])
    }
}

function renderUl(number, result){
    console.log(result)
    let ul = document.createElement('ul');
    let li1 = document.createElement('li');
    li1.innerHTML = parseInt(number) + 1;
    ul.append(li1);
    let li2 = document.createElement('li');
    li2.innerHTML = result.name[0].toUpperCase() + result.name.slice(1);
    ul.append(li2);
    let li3 = document.createElement('li');
    li3.innerHTML = result.scores;
    ul.append(li3);

    resultScors.append(ul);
}

