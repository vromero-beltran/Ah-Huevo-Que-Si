const scriptURL = '' // <---------- script goes here

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefuale()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank You! Your form is submitted successfully."))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
});