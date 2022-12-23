const nickname = document.getElementById("nickname");
const inputForm = document.getElementById("form");
const btnOpenInputForm = document.getElementById("inputForm");

document.addEventListener('mousedown', checkCloseForm);


btnOpenInputForm.addEventListener('click', async () => {
    if (!entered){
        inputForm.style.display = "flex";
        btnOpenInputForm.disabled = true;
    }
});

function checkCloseForm(event) {
    if(event.target.closest('.form') === null && btnOpenInputForm.disabled){
        closeForm()
    }
}

function closeForm() {
    inputForm.style.display = 'none';
    btnOpenInputForm.disabled = false;
}

function exitStatus(){
    btnOpenInputForm.innerText = "Войти"
    nickname.innerText = "";
}

function openStatus(){
    btnOpenInputForm.innerText = "Выйти"
    nickname.innerText = nicknameText;
}

let nicknameText = "default"
let entered = false;

window.onload = function(){
    if (entered){
        openStatus()
    }
    else {
        exitStatus()
    }
}


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
                nicknameText = element.value
            }
            else{
                data.password = element.value
            }
        })
    console.log(data)
    return data;
}


async function handleFormSubmit(event) {
    event.preventDefault()
    let data = serializeForm(event.target)
    const response = await sendData(data)
    if (response.ok) {
        entered = true;
        render(response)
    }
    else{
        nicknameText = ""
    }
}

async function sendData(data) {
    const result = await fetch('https://localhost:7238/api/Token/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
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
