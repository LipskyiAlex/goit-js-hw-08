
const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const formEmail = document.querySelector('.feedback-form input');
const formMessage = document.querySelector('.feedback-form textarea');
let dataStorage = JSON.parse(localStorage.getItem('feedback-form-state')) || {}

isEmpty();


formEmail.addEventListener('input', throttle(dataEntry, 500));
formMessage.addEventListener('input', throttle(dataEntry, 500));
form.addEventListener('submit', handleSubmit);


function isEmpty() {

  try {

    dataStorage = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

  } catch (error) {
    dataStorage = {};
  }

  if (dataStorage && dataStorage.email) {
    formEmail.value = dataStorage.email;
  }
  if (dataStorage && dataStorage.message) {
    formMessage.value = dataStorage.message;
  }

}

function dataEntry() {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: formEmail.value,
      message: formMessage.value,
    })
  );
  dataStorage = JSON.parse(localStorage.getItem('feedback-form-state'));

}


function handleSubmit(event) {

  event.preventDefault();

  if (!formEmail.value) {
    alert('Email is required input field');
    return;
  }

  if (!formMessage.value) {
    alert("Message filed can't be empty. Enter at least 1 character!");
    return;
  }
  
  console.log(dataStorage);
  form.reset();
}


