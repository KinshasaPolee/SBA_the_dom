let navLinks = document.getElementById('top_menu').getElementsByTagName('a');

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].style.color = 'white';
}

let dynamicHeader = document.querySelector('h1').style.color = 'white';
let newDiv = document.createElement('div');
let newParagraph = document.createElement('p');
newParagraph.textContent = 'Home';

newDiv.appendChild(newParagraph);
document.body.appendChild(newDiv);

function createTemplate() {
    let fragment = document.createDocumentFragment();
    let template = document.createElement('template');

    template.innerHTML = '<p></p>';

    let clone = template.content.cloneNode(true);
    fragment.appendChild(clone);

    let container = document.getElementById('template-container');
    container.appendChild(fragment);
}

createTemplate();

function scrollToSection(sectionId) {
    var targetSection = document.getElementById(sectionId);

    targetSection.scrollIntoView({ behavior: 'smooth' });
}

function handleButtonClick() {
    console.log("Button clicked! You can perform some action here.");
}

function handleTextInputEnter(event) {
    if (event.key === 'Enter') {
        var inputValue = event.target.value;
        console.log("Enter key pressed! Input value: " + inputValue);
    }
}

var buttonElement = document.getElementById('button1');
buttonElement.addEventListener('click', handleButtonClick);

var textInputElement = document.getElementById('textInput');
textInputElement.addEventListener('keydown', handleTextInputEnter);

function handleFormSubmit(event) {
    var usernameInput = document.getElementById('username');
    var errorMessage = document.getElementById('error-message');
    if (!usernameInput.checkValidity()) {
        event.preventDefault();
        errorMessage.textContent = "Invalid username. Please use at least 3 characters (letters and numbers only).";
    } else {
        errorMessage.textContent = "";
    }
}
var formElement = document.getElementById('validationForm');
formElement.addEventListener('submit', handleFormSubmit);

var currentURL = window.location.href;
console.log('Current URL:', currentURL);

window.alert('Welcome to the BOM Example!\nCurrent URL: ' + currentURL);