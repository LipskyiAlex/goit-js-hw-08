
const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');

let dataStorage = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

isEmpty();

form.addEventListener("input", throttle(dataEntry,500));
form.addEventListener('submit', handleSubmit);


function isEmpty(e) {

  try {

    dataStorage = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

  } catch (error) {
    dataStorage = {};
  }

  if (dataStorage && dataStorage.email) {
    form.email = dataStorage.email;
  }
  if (dataStorage && dataStorage.message) {
    form.message = dataStorage.message;
  }

}

function dataEntry() {

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: form.email.value,
      message: form.message.value,
    })
  );
  dataStorage = JSON.parse(localStorage.getItem('feedback-form-state'));

}


function handleSubmit(event) {

  event.preventDefault();

  if (!form.email) {
    alert('Email is required input field');
    return;
  }

  if (!form.message) {
    alert("Message filed can't be empty. Enter at least 1 character!");
    return;
  }
  
  console.log(dataStorage);

  form.reset();
}


