import throttle from 'lodash.throttle';
const STORAGE_DATA_KEY = 'feedback-form-state';

const dataForm = {};
const refs = {
  formRef: document.querySelector('.feedback-form'),
  emailRef: document.querySelector('feedback-form input'),
  messageRef: document.querySelector('feedback-form textarea'),
};

refs.formRef.addEventListener('input', onInputsData);
refs.formRef.addEventListener('submit', onFormSubmit);

function onInputsData(event) {
  dataForm[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_DATA_KEY, JSON.stringify(dataForm));
}

function populateForm() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_DATA_KEY));
  console.log(savedData);
  if (savedData) {
    refs.emailRef.value = savedData.email;
    refs.messageRef.value = savedData.message;
  }
}

populateForm();

function onFormSubmit(event) {}
