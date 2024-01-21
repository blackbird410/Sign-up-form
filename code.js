// Validate the form
// I will add an event listener for every form input element and update a boolean variable everytime that the input is changed.
// When all the input boolean variables are true, then the form can be allowed to be submitted.
const regExp = {
	'name': /^[A-Za-z]+([-']?[A-Za-z]+)*$/,
	'email': /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
	'password': /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z0-9]{8,20}$/,
	'phone': /[0-9]{3}[0-9]{3}[0-9]{4}/
}

createLayout();

const myForm = document.querySelector('form');
myForm.noValidate = true;

let validInput = {
	'first-name': false,
	'last-name': false,
	'email': false,
	'phone': false,
	'password': false,
	'confirm-password': false,
}
addEvents();
myForm.addEventListener('submit', validateForm);

function validateForm(e) {
	if (!(validInput['first-name'] && validInput['last-name'] 
		&& validInput.email && validInput.phone 
		&& validInput.password && validInput['confirm-password']))
		e.preventDefault();
}

function addEvents() {
	const inputs = document.querySelectorAll('input');
	let exp;

	Array.from(inputs).forEach(input => {
		input.addEventListener('input', () => {
			switch(input.id)
			{
				case 'first-name':
					if (input.value.match(regExp.name))
                                	{
						input.parentElement.classList.remove('invalid');
                                       	 	input.parentElement.classList.add('valid');
                                        	validInput['first-name'] = true;
                                	}
                               	 	else
                                	{
                                        	input.parentElement.classList.remove('valid');
                                        	input.parentElement.classList.add('invalid');
                                        	validInput['first-name'] = false;
                               	 	}
                                	break;
				case 'last-name':
					if (input.value.match(regExp.name))
                                	{
                                        	input.parentElement.classList.remove('invalid');
                                        	input.parentElement.classList.add('valid');
                                        	validInput['last-name'] = true;
                                	}
                                	else
                                	{
                                        	input.parentElement.classList.remove('valid');
                                        	input.parentElement.classList.add('invalid');
                                        	validInput['last-name'] = false;
                                	}
                               		break;
				case 'email':
					if (input.value.match(regExp.email)) 
					{
						input.parentElement.classList.remove('invalid');
						input.parentElement.classList.add('valid');
						validInput.email = true;
					}
					else 
					{
						input.parentElement.classList.remove('valid');
						input.parentElement.classList.add('invalid');
						validInput.email = false;
					}
					break;
				case 'phone-number':
					if (input.value.match(regExp.phone))
					{
						input.parentElement.classList.remove('invalid');
						input.parentElement.classList.add('valid');
						validInput.phone = true;
					}
					else
					{
						input.parentElement.classList.remove('valid');
						input.parentElement.classList.add('invalid');
						validInput.phone = false;
					}
					break;
				case 'password':
					if (input.value.match(regExp.password))
                                	{
                                        	input.parentElement.classList.remove('invalid');
                                        	input.parentElement.classList.add('valid');
                                        	validInput.password = true;
                                	}
                                	else
                                	{
                                        	input.parentElement.classList.remove('valid');
                                        	input.parentElement.classList.add('invalid');
                                        	validInput.password = false;
                                	}
                                	break;
				case 'confirm-password':
					if (input.value === document.querySelector('#password').value && validInput.password)
					{
						input.parentElement.classList.remove('invalid');
						input.parentElement.classList.add('valid');
						validInput['confirm-password'] = true;
					}
					else
					{
						input.parentElement.classList.remove('valid');
						input.parentElement.classList.add('invalid');
						validInput['confirm-password'] = false;
					}

					if (validInput.password != validInput['confirm-password'])
						input.parentElement.classList.add('not-match');
					else
						input.parentElement.classList.remove('not-match');
					break;
				default:
					console.log('Error');
					break;
			}});
	});
}

function createLayout() {
	const body = document.body;
	const firstContainer = document.createElement('div');
	const secondContainer = document.createElement('div');
	const titleContainer = document.createElement('div');
	const creditContainer = document.createElement('div');
	const logoContainer = document.createElement('div');
	const titleText = document.createElement('h1');

	body.classList.add('container');
	firstContainer.classList.add('container', 'welcome');
	secondContainer.classList.add('container', 'main');
	titleContainer.classList.add('container', 'title');
	creditContainer.classList.add('container', 'credit');
	logoContainer.classList.add('logo');

	firstContainer.appendChild(titleContainer);
	firstContainer.appendChild(creditContainer);
	titleContainer.appendChild(logoContainer);
	titleContainer.appendChild(titleText);

	// First container layout
	titleText.textContent = "The Promised Neverland";
	creditContainer.textContent = 'Photo by ';
	const bgAuthorLink = document.createElement('a');
	bgAuthorLink.setAttribute('href', 'https://unsplash.com/@toanchu?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash');
	bgAuthorLink.textContent = "Toan Chu";
	const unsplashLink = document.createElement('a');
	unsplashLink.setAttribute('href', 'https://unsplash.com/photos/a-flock-of-birds-flying-over-a-body-of-water-pXtg_S85bTQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash');
	unsplashLink.textContent = 'Unsplash';
	creditContainer.appendChild(bgAuthorLink);
	creditContainer.appendChild(unsplashLink);

	// Second container layout
	const headerContainer =  document.createElement('div');
	const welcomeText = document.createElement('h2');
	const secondText = document.createElement('p');
	const form = document.createElement('form');
	form.setAttribute('id', 'form');
	form.classList.add('container');

	headerContainer.classList.add('container', 'main-header');

	welcomeText.textContent = "Welcome to The Promised Neverland, where all your burdens becomes light as a feather. Join us now!";
	secondText.textContent = "You know you want to.";

	headerContainer.appendChild(welcomeText);
	headerContainer.appendChild(secondText);

	// Form layout
	const formHeader = document.createElement('h2');
	formHeader.textContent = "Let's do this!";
	form.appendChild(formHeader);

	const fieldset = document.createElement('div');
	fieldset.classList.add('fieldset');
	form.appendChild(fieldset);

	const fields = ['FIRST NAME', 'LAST NAME', 'EMAIL', 'PHONE NUMBER', 'PASSWORD', 'CONFIRM PASSWORD'];
	fields.forEach(field => {
		const container = document.createElement('div');
		const label = document.createElement('label');
		const input = document.createElement('input');
		const help = document.createElement('span');

		container.classList.add('container', 'input-container');
		help.classList.add('help');

		let id = getId(field);
		label.setAttribute('for', id);
		label.textContent = field;

		switch(field) 
		{
			case 'EMAIL':
				input.setAttribute('type', 'email');
				input.setAttribute('placeholder', 'alanturing@gmail.com');
				input.setAttribute('autocomplete', 'on');
				help.textContent = "Please enter a valid email address";
				break;
			case 'PHONE NUMBER':
				input.setAttribute('type', 'tel');
				input.setAttribute('placeholder', '0937549257');
				help.textContent = "Please enter a valid phone number";
				break;
			case 'PASSWORD':
			case 'CONFIRM PASSWORD':
				input.setAttribute('type', 'password');
				if (field == 'PASSWORD')
					input.setAttribute('placeholder', 'Mathison@cs1900');
				else
					input.setAttribute('placeholder', 'Mathison@cs1900');
				help.textContent = "Please enter a valid password";
				break;
			default:
				input.setAttribute('type', 'text');
				input.setAttribute('autocomplete', 'on');
				input.setAttribute('minlength', '2');
				input.setAttribute('maxlength', '50');
				if (field == "FIRST NAME")
					input.setAttribute('placeholder', 'Alan');
				else
					input.setAttribute('placeholder', 'Turing');
				help.textContent = "Please enter a valid name";
				break;
		}

		input.setAttribute('id', id);
		input.setAttribute('name', id);
		input.required = true;

		container.appendChild(label);
		container.appendChild(input);
		container.appendChild(help);
		fieldset.appendChild(container);
	});

	// Button layout
	const btnContainer = document.createElement('div');
	const btn = document.createElement('button');
	const logInContainer = document.createElement('div');
	const logInText = document.createElement('p');
	const logInLink = document.createElement('a');

	btnContainer.classList.add('container', 'button');
	logInContainer.classList.add('container', 'log-in');

	btn.textContent = 'Create Account';
	btn.setAttribute('type', 'submit');
	btn.setAttribute('form', 'form');

	logInText.textContent = 'Already have an account?';
	logInLink.setAttribute('href', '#');
	logInLink.textContent = 'Log in';

	btnContainer.appendChild(btn);
	logInContainer.appendChild(logInText);
	logInContainer.appendChild(logInLink);
	btnContainer.appendChild(logInContainer);

	secondContainer.appendChild(headerContainer);
	secondContainer.appendChild(form);
	secondContainer.appendChild(btnContainer);

	body.appendChild(firstContainer);
	body.appendChild(secondContainer);
}

function getId(s) {
	let arr = (s.toLowerCase()).split(' ');
	return (arr.length == 1) ? arr[0] : `${arr[0]}-${arr[1]}`;
}
