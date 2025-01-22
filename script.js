document.addEventListener('DOMContentLoaded', function () {
  // Select the form and feedback div
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');

  // Add event listener to form for submission
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

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
    displayFeedback(isValid, messages);
  });

  /**
   * Display feedback to the user
   * @param {boolean} isValid - Whether the validation was successful
   * @param {Array} messages - Array of validation error messages
   */
  function displayFeedback(isValid, messages) {
    feedbackDiv.style.display = 'block';
    if (isValid) {
      feedbackDiv.textContent = 'Registration successful!';
      feedb
 
