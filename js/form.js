// const applicantForm = document.getElementById('form__box')
// applicantForm.addEventListener('submit', handleFormSubmit)
//
// function serializeForm(formNode) {
//     return new FormData(formNode);
// }
//
// function handleFormSubmit(event) {
//     event.preventDefault()
//     const data = serializeForm(applicantForm)
//     console.log(data)
//     sendData(data)
// }
//
// async function sendData(data) {
//     const headers = {
//         'Content-Type': 'application/json'
//     }
//     return await fetch('https://localhost:7238/api/Token', {
//         method: 'POST',
//         headers: headers,
//         body: JSON.stringify(data),
//     })
// }
