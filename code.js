// Create the UI layout
createLayout();

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

		container.classList.add('container', 'input-container');

		let id = getId(field);
		label.setAttribute('for', id);
		label.textContent = field;

		switch(field) 
		{
			case 'EMAIL':
				input.setAttribute('type', 'email');
				input.setAttribute('autocomplete', 'on');
				break;
			case 'PHONE NUMBER':
				input.setAttribute('type', 'tel');
				break;
			case 'PASSWORD':
			case 'CONFIRM PASSWORD':
				input.setAttribute('type', 'password');
				break;
			default:
				input.setAttribute('type', 'text');
				input.setAttribute('autocomplete', 'on');
				break;
		}

		input.setAttribute('id', id);
		input.setAttribute('name', id);

		container.appendChild(label);
		container.appendChild(input);
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
