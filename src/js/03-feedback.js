
const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const formEmail = document.querySelector('.feedback-form input');
const formMessage = document.querySelector('.feedback-form textarea');
const dataStorage = JSON.parse(localStorage.getItem('feedback-form-state'));



// Вызов слушателей
formEmail.addEventListener('input', throttle(dataEntry, 500));
formMessage.addEventListener('input', throttle(dataEntry, 500));
form.addEventListener('submit', handleSubmit);

isEmpty();

// Проверка на наличие данных в localeStoarge
function isEmpty() {

  if (dataStorage.email) {
    formEmail.value = dataStorage.email;
  } else {

    formEmail.email = "";
  }

  if (dataStorage.message) {
    formMessage.value = dataStorage.message;
  } else {
    formMessage.value = ""; 
  }

}

// Сохранение в localeStorage

function dataEntry() {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: formEmail.value,
      message: formMessage.value,
    })
  );

}

// Submit

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



