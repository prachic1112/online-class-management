// script.js
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');

// Toggle button text based on current view
function toggleButtonText() {
    if (loginBtn.style.display === 'none') {
        loginBtn.style.display = 'inline-block';
        signupBtn.style.display = 'none';
        loginBtn.textContent = 'Login';
    } else {
        loginBtn.style.display = 'none';
        signupBtn.style.display = 'inline-block';
        signupBtn.textContent = 'Signup';
    }
}

// Initial button state (default to Login)
toggleButtonText();

// Handle button clicks
loginBtn.addEventListener('click', toggleButtonText);
signupBtn.addEventListener('click', toggleButtonText);