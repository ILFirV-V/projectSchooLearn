const participateBtn = document.getElementById("participate");
const participateForm = document.getElementById("form-participate");


document.addEventListener('mousedown', participateCloseForm);

participateBtn.addEventListener('click', async () => {
    if (participateBtn.disabled === false) {
        participateForm.style.display = "block";
        participateBtn.disabled = true;
    }
});
function participateCloseForm(event) {
    if(event.target.closest('.form-competition') === null && participateBtn.disabled){
        participateForm.style.display = 'none';
        participateBtn.disabled = false;
    }
}