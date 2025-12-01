const form = document.getElementById('signup-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  validateField(firstName, 'First Name');
  validateField(lastName, 'Last Name');
  validateEmail(email);
  validateField(password, 'Password');
});

function validateField(input, fieldName) {
  const error = input.nextElementSibling;
  if (input.value.trim() === '') {
    input.classList.add('error');
    error.textContent = `${fieldName} cannot be empty`;
  } else {
    input.classList.remove('error');
    error.textContent = '';
  }
}

function validateEmail(input) {
  const error = input.nextElementSibling;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (input.value.trim() === '') {
    input.classList.add('error');
    error.textContent = 'Email cannot be empty';
  } else if (!emailPattern.test(input.value)) {
    input.classList.add('error');
    error.textContent = 'Looks like this is not an email';
  } else {
    input.classList.remove('error');
    error.textContent = '';
  }
}
