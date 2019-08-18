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
