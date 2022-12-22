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

