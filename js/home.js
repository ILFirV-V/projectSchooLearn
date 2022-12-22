const inputForm = document.getElementById("form");
const btnOpenInputForm = document.getElementById("inputForm");
document.addEventListener('mousedown', closeForm);


btnOpenInputForm.addEventListener('click', async () => {
    inputForm.style.display = "flex";
    btnOpenInputForm.disabled = true;
});

function closeForm(event) {
    if(event.target.closest('.form') === null && btnOpenInputForm.disabled){
        inputForm.style.display = 'none';
        btnOpenInputForm.disabled = false;
    }
}

// function openForm() {
//     inputForm.style.display = "flex";
//     btnOpenInputForm.disabled = true;
// }

const applicantForm = document.getElementById('form__box')
applicantForm.addEventListener('submit', handleFormSubmit)

function serializeForm(formNode) {
    return new FormData(formNode);
}

function handleFormSubmit(event) {
    event.preventDefault()
    const data = serializeForm(applicantForm)
    console.log(data)
    sendData(data)
}

async function sendData(data) {
    const headers = {
        'Content-Type': 'application/json'
    }
    return await fetch('https://localhost:7238/api/Token', {
        method: 'POST',
        headers: headers,
        body: data,
    })
}

