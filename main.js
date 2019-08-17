
// Function that takes the text typed into the input and replaces "Some Dog" with
// that text when the button is clicked.
function addName() {
  var textToChange = document.getElementById('name-change');
	var textEntered = document.getElementById('input-text').value;
	textToChange.innerHTML = textEntered;
}
var buttonClick = document.getElementById('button-click');
buttonClick.addEventListener('click', addName);


// Function that reveals the text for each column and then also hides it again.
// I wanted the text to be hidden when the page was loaded and then the button
// to reveal the text and then be able to hide it once again when you were done with
// it. I felt this was more user friendly. I used the toggle method to switch the class
// for the paragraphs on and off.

// function for How to Dog paragraph toggle
function hideHowText() {
  var howTextHide = document.getElementById('hide-dog-how');
  howTextHide.classList.toggle('dog-how-paragraph');
};

var howButtonHide = document.getElementById('hide-how-button');
howButtonHide.addEventListener('click', hideHowText);

// function for What Is dogs paragraph toggle
function hideWhatText() {
  var whatTextHide = document.getElementById('hide-dog-what');
  whatTextHide.classList.toggle('dog-what-paragraph');
};

var whatButtonHide = document.getElementById('hide-what-button');
whatButtonHide.addEventListener('click', hideWhatText);

// function for Facts From Dog paragraph toggle
function hideFactText() {
  var factTextHide = document.getElementById('hide-dog-fact');
  factTextHide.classList.toggle('dog-fact-paragraph');
};

var factButtonHide = document.getElementById('hide-fact-button');
factButtonHide.addEventListener('click', hideFactText);
