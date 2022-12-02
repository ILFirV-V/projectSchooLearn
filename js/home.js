const applicantForm = document.getElementById('form__box');
const inputForm = document.getElementById("form");
const btnOpenInputForm = document.getElementById("inputForm");
document.addEventListener('mousedown', closeForm);


function closeForm(event) {
    if(event.target.closest('.form') === null && btnOpenInputForm.disabled){
        inputForm.style.display = 'none';
        btnOpenInputForm.disabled = false;
    }
}

function openForm() {
    inputForm.style.display = "flex";
    btnOpenInputForm.disabled = true;
}