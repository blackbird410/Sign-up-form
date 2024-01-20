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

	headerContainer.classList.add('container', 'main-header');

	welcomeText.textContent = "Welcome to The Promised Neverland, where all your burdens becomes light as a feather. Join us now!";
	secondText.textContent = "You know you want to.";

	headerContainer.appendChild(welcomeText);
	headerContainer.appendChild(secondText);

	// Form layout
	const formHeader = document.createElement('h2')

	secondContainer.appendChild(headerContainer);
	secondContainer.appendChild(form);

	body.appendChild(firstContainer);
	body.appendChild(secondContainer);
}
