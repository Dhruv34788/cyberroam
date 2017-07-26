// define your username and password
var myUsername = '123';
var myPassword = '123';

// find the fiends in your login form
var loginField = document.getElementById(usernametxt);
var passwordField = document.getElementById(usernametxt);

// fill in your username and password
loginField.value = myUsername;
passwordField.value = myPassword;

// if you want, you can even automaticaly submit the login form
var loginForm = document.getElementById('logincaption');
loginForm.submit();
