// JavaScript Document
(function(){
	"use strict"	
	var loginScreen = {
		
		initiateLogin: function(){
			// buttons
			var nextLoginButton = document.getElementById('nextLoginPassword');
			var backLoginButton = document.getElementById('backLoginButton');
			var signIn = document.getElementById('signIn');
			// Email preview
			var emailPreview = document.getElementById('loginEmailPreview');
			emailPreview.style.opacity = 0;
			// Next Button
			nextLoginButton.addEventListener('click', function(e) { 
				// input
				var emailInput = document.getElementById('emailInput');	
				var passwordInput = document.getElementById('passwordInput');		
				// input values
				var emailError = document.getElementById('emailError');
				// steps
				var firstLoginSteps = document.getElementById('firstLoginSteps');
				var secondLoginSteps = document.getElementById('secondLoginSteps');
				// Validate Email Function
				function validateEmail(email) {
					var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					return re.test(email);
				}
				var emailValue = emailInput.value;
				// if email is valid
				if (validateEmail(emailValue)) {
					emailError.style.opacity = 0;
					var emailTopPreview = document.getElementById('emailPreviewHTML');
					emailTopPreview.innerText = emailValue;
					e.preventDefault();
					// Email is valid
					firstLoginSteps.style.display = "none";
					secondLoginSteps.style.display = "block";
					emailPreview.style.opacity = 1;
	
					// Back button
					backLoginButton.addEventListener('click', function(c) { 
						firstLoginSteps.style.display = "block";
						secondLoginSteps.style.display = "none";
						emailPreview.style.opacity = 0;
						emailError.innerText = "";
						emailError.style.opacity = 0;
						c.preventDefault();
					}, false);

					// Sign in input
					signIn.addEventListener('click', function(c) {
						c.preventDefault();
						var passwordValue = passwordInput.value;
						if(passwordValue) {
							if(emailValue === "cosmefulanito@gmail.com" && passwordValue === "Patatafrita1" ) {
								var successLogin = document.getElementById('successLogin');
								successLogin.style.display = "block";
								firstLoginSteps.style.display = "none";
								secondLoginSteps.style.display = "none";
								emailPreview.style.display = "none";
								emailError.innerText = "";
								emailError.style.opacity = 0;
							} else if(emailValue === "ivanperez@granportonazo6.com" && passwordValue === "Patatafrita1") {
								// Redireccionar a la página deseada
								window.location.href = "indexAdmin.html";
							} else {
								emailError.innerText = "Correo/Contraseña incorrecta, proporciona una correcta";
								emailError.style.opacity = 1;
							}
						} else {
							emailError.innerText = "Debes proporcionar una contraseña";
							emailError.style.opacity = 1;
						}
					}, false);
					
					
				// no valid email supplied
				} else {
					e.preventDefault();
					emailError.innerText = "Proporciona un correo electrónico correcto";
					emailError.style.opacity = 1;
				}			
			}, false);

		}
	}
	// Initiate login functions
	loginScreen.initiateLogin();	
})();
