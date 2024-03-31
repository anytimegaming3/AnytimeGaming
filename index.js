document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('.login');
    const signupButton = document.querySelector('.signup');
    const loginBox = document.querySelector('.login-box');
    const signupBox = document.querySelector('.signup-box');

    // Initial state
    loginBox.style.display = 'block';
    signupBox.style.display = 'none';

    loginButton.addEventListener('click', function () {
        loginBox.style.display = 'block';
        signupBox.style.display = 'none';
    });

    signupButton.addEventListener('click', function () {
        loginBox.style.display = 'none';
        signupBox.style.display = 'block';
    });
});


