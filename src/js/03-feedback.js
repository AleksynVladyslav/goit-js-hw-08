// import throttle from 'lodash.throttle';
const STORAGE_DATA_KEY = 'feedback-form-state';

const formRef = document.querySelector('.feedback-form');

const { email, message } = formRef.elements;

let dataForm = {};
formRef.addEventListener('input', onInputsData);
formRef.addEventListener('submit', onFormSubmit);

function onInputsData(event) {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(STORAGE_DATA_KEY, JSON.stringify(dataForm));
}

function populateForm() {
  dataForm = JSON.parse(localStorage.getItem(STORAGE_DATA_KEY));
  if (dataForm) {
    email.value = dataForm.email || ' ';
    message.value = dataForm.message || ' ';
  }
}
populateForm();

function onFormSubmit(event) {
  event.preventDefault();
  console.log({ email: email.value, message: message.value });

  localStorage.removeItem(STORAGE_DATA_KEY);
  event.currentTarget.reset();
}
