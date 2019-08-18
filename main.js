//getting those tooltips
var factsTooltip = document.getElementById('show-facts-tooltip');
var factspar = factsTooltip.parentNode;

function addFactTooltip() {
    factsTooltip.classList.remove('tooltip-off');
}

factspar.addEventListener('mouseover', addFactTooltip);

function removeFactTooltip() {
  factsTooltip.classList.add('tooltip-off')
}

factspar.addEventListener('mouseout', removeFactTooltip);

//what tooltip
var whatTooltip = document.getElementById('show-what-tooltip');
var whatpar = whatTooltip.parentNode;

function addWhatTooltip() {
    whatTooltip.classList.remove('tooltip-off');
}

whatpar.addEventListener('mouseover', addWhatTooltip);

function removeWhatTooltip() {
  whatTooltip.classList.add('tooltip-off')
}

whatpar.addEventListener('mouseout', removeWhatTooltip);

//how tooltop
var howTooltip = document.getElementById('show-how-tooltip');
var howpar = howTooltip.parentNode;

function addHowTooltip() {
    howTooltip.classList.remove('tooltip-off');
}

howpar.addEventListener('mouseover', addHowTooltip);

function removeHowTooltip() {
  howTooltip.classList.add('tooltip-off')
}

howpar.addEventListener('mouseout', removeHowTooltip);


// Function that takes the text typed into the input and replaces "Some Dog" with
// that text when the button is clicked.
function addName() {
  var textToChange = document.getElementById('name-change');
	var textEntered = document.getElementById('input-text');
  if (textEntered.value.length > 0) {
	   textToChange.innerHTML = textEntered.value;
     textEntered.classList.add('dog-name-input')
     textEntered.classList.remove('dog-name-notext');
  } else {
    textEntered.classList.remove('dog-name-input')
    textEntered.classList.add('dog-name-notext');
  }
}

var buttonClick = document.getElementById('button-click');
buttonClick.addEventListener('click', addName);


// Function that reveals the text for each column and then also hides it again.
// I wanted the text to be hidden when the page was loaded and then the button
// to reveal the text and then be able to hide it once again when you were done with
// it. I felt this was more user friendly. I used the toggle method to switch the class
// for the paragraphs on and off.

// function for How to Dog paragraph toggle
var howTextHide = document.getElementById('hide-dog-how');
var howButtonHide = document.getElementById('hide-how-button');

function hideHowText() {
  howTextHide.classList.toggle('dog-how-paragraph');
}

howButtonHide.addEventListener('click', hideHowText);

// function for What Is dogs paragraph toggle
var whatTextHide = document.getElementById('hide-dog-what');
var whatButtonHide = document.getElementById('hide-what-button');

function hideWhatText() {
  whatTextHide.classList.toggle('dog-what-paragraph');
}

whatButtonHide.addEventListener('click', hideWhatText);

// function for Facts From Dog paragraph toggle
var factTextHide = document.getElementById('hide-dog-fact');
var factButtonHide = document.getElementById('hide-fact-button');

function hideFactText() {
  factTextHide.classList.toggle('dog-fact-paragraph');
}

factButtonHide.addEventListener('click', hideFactText);

//Paragraph swapping!

var paragraphSelect = document.getElementById('paragraph-select');
var newParagraphText = document.getElementById('new-text-paragraph');
var submitParagraphButton = document.getElementById('submit-paragraph');

function changeDogParagraphText() {
  if (paragraphSelect.value.toString() === 'how') {
    howTextHide.innerHTML = newParagraphText.value;
    newParagraphText.value = "Enter new paragraph here..."
  } else if (paragraphSelect.value.toString() === 'what') {
    whatTextHide.innerHTML = newParagraphText.value;
    newParagraphText.value = "Enter new paragraph here..."
  } else {
    factTextHide.innerHTML = newParagraphText.value;
    newParagraphText.value = "Enter new paragraph here..."
  }
}

function eraseFillerText() {
  if (newParagraphText.value === "Enter new paragraph here...") {
    newParagraphText.value = "";
  } else {
    newParagraphText.value = newParagraphText.value;
  }
}

newParagraphText.addEventListener('click', eraseFillerText);
submitParagraphButton.addEventListener('click', changeDogParagraphText);
