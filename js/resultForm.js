const participateBtn = document.getElementById("resultForm");
const participateForm = document.getElementById("results_btn_box");


document.addEventListener('mousedown', participateCloseForm);

participateBtn.addEventListener('click', async () => {
    if (participateBtn.disabled === false) {
        participateForm.style.display = "block";
        participateBtn.disabled = true;
    } else {

    }
});
function participateCloseForm(event) {
    if(event.target.closest('.results_btn_box') === null){
        participateForm.style.display = 'none';
        participateBtn.disabled = false;
    }
}