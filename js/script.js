// Select form fields
const form = document.querySelector('.survey-form');
const nameInput = document.getElementById('user-name');
const emailInput = document.getElementById('user-email');
const messageInput = document.getElementById('user-message');

// Listen for submit
form.addEventListener('submit', function (e) {
  e.preventDefault(); // stop form reload to showcase alert
  alert(
    `Name: ${nameInput.value}\nEmail: ${emailInput.value}\nMessage: ${messageInput.value}`
  );
  location.reload(); // reloads page after alert box exit
});