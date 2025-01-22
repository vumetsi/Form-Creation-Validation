document.addEventListener('DOMContentLoaded', function () {
  // Select the form and feedback div
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');

  // Add event listener to form for submission
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Retrieve and trim the input values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Initialize validation status and messages
    let isValid = true;
    const messages = [];

    // Validate username
    if (username.length < 3) {
      isValid = false;
      messages.push('Username must be at least 3 characters long.');
    }

    // Validate email
    if (!email.includes('@') || !email.includes('.')) {
      isValid = false;
      messages.push('Please enter a valid email address.');
    }

    // Validate password
    if (password.length < 8) {
      isValid = false;
      messages.push('Password must be at least 8 characters long.');
    }

    // Display feedback
    feedbackDiv.style.display = 'block';
    if (isValid) {
      feedbackDiv.innerHTML = 'Registration successful!';
      feedbackDiv.style.color = '#28a745'; // Success color
    } else {
      feedbackDiv.innerHTML = messages.join('<br>'); // Join messages with <br> tags
      feedbackDiv.style.color = '#dc3545'; // Error color
    }
  });
});

 
