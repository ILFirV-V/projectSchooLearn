const nickname = document.getElementById("nickname");
const inputForm = document.getElementById("form");
const btnOpenInputForm = document.getElementById("inputForm");

document.addEventListener('mousedown', checkCloseForm);

const bc = new BroadcastChannel('test_channel');
bc.addEventListener('message', function (e) {
    console.log(e);
})

btnOpenInputForm.addEventListener('click', async () => {
    if (!(localStorage.getItem('entered') === "true")){
        openForm()
    }
    else {
        exitStatus()
    }
});


bc.onmessage = (event) => {
    console.log(event);
};

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
    window.localStorage.setItem('entered', "false");
    btnOpenInputForm.innerText = "Войти"
    localStorage.setItem('nicknameText', "");
    nickname.innerText = localStorage.getItem('nicknameText');
    document.cookie = '1wertyuiopoiuytrew=2weretryuy'
    alert(document.cookie)
}

function openStatus(){

    btnOpenInputForm.innerText = "Выйти"
    nickname.innerText = localStorage.getItem('nicknameText');
}
window["entered"] = "true"
window.localStorage.setItem('nicknameText', "");
window.localStorage.setItem('entered', "true");

// let nicknameText = "default"
// let entered = true;
let data = {entered:[], nicknameText:[]};
window.localStorage.getItem('entered');

window.onload = function(){
    let v = localStorage.getItem("1") + 1
    localStorage.setItem("1", v)
    console.log(document.cookie)
    if (localStorage.getItem('entered') === "true"){
        openStatus()
    }
    else {
        exitStatus()
    }
}

console.log(localStorage.getItem("1"))
let q = localStorage.getItem("1")
localStorage.setItem("1", q)
console.log(localStorage.getItem("1"))




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
