const participateBtn = document.getElementById("participate");
const participateForm = document.getElementById("form-participate");


document.addEventListener('mousedown', closeForm);

participateBtn.addEventListener('click', async () => {
    if (participateBtn.disabled === false) {
        participateForm.style.display = "block";
        participateBtn.disabled = true;
    }
});
// && participateBtn.disabled
function closeForm(event) {
    if(event.target.closest('.form_competition') === null && participateBtn.disabled){
        participateForm.style.display = 'none';
        participateBtn.disabled = false;
    }
}