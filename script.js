
function displayWelcomeMessage() {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  let welcomeMessage;

  if (currentHour < 12) {
    welcomeMessage = 'Good morning! Welcome to Melvin\'s Restaurant.';
  } else if (currentHour < 18) {
    welcomeMessage = 'Good afternoon! Welcome to Melvin\'s Restaurant.';
  } else {
    welcomeMessage = 'Good evening! Welcome to Melvin\'s Restaurant.';
  }

  alert(welcomeMessage);
}
function handleFormSubmission() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
    alert('Please fill in all the required fields.');
    return;
  }

  alert('Thank you for contacting us. We will get back to you soon!');

  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
}

