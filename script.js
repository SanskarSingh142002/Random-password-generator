// Function to generate random password
function generatePassword() {
    const length = document.getElementById('length').value;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSpecial = document.getElementById('special').checked;
  
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbersChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
  
    let characters = '';
    if (includeLowercase) characters += lowercaseChars;
    if (includeUppercase) characters += uppercaseChars;
    if (includeNumbers) characters += numbersChars;
    if (includeSpecial) characters += specialChars;
  
    if (characters === '') {
      alert('Please select at least one character type.');
      return;
    }
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
  
    document.getElementById('password').value = password;
  }
  
  // Function to copy password to clipboard
  function copyPassword() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    alert('Password copied to clipboard!');
  }
  
  // Add event listeners to buttons
  document.getElementById('generate-btn').addEventListener('click', generatePassword);
  document.getElementById('copy-btn').addEventListener('click', copyPassword);
  
  // Generate password on load with default settings
  window.onload = generatePassword;
  