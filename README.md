# Dog Party - Turing Mod1 - John Adams
 - Project 1 from Mod 1 of Turing Program. We received the project on Monday (our first day of the program) and we were given a week to complete the project. The project contained a visual comp and then iterations 0-4 containing specific functionality, responsiveness and extensions that the site should include. The project concluded in a functioning site built off a visual comp using HTML, CSS and
 JS.

 ---

## Motivation
  - I came into the first week of Mod1 at Turing with very little prior knowledge of coding as a whole let alone in HTML, CSS and JS. Outside of what we learned in the pre-mod - Mod 0 - I had taken a few online classes over the years, but nothing that really stuck.
  - My goal within this project was to complete all iterations given to us, some of which went beyond what we were learning in class that week. I accomplished that goal and successfully completed each iteration and ended with a responsive and functioning site that closely resembled the visual comp provided.
  - I wanted to use this project as a way to set myself up for the rest of this module and get into the flow of daily work and time management.

## Iterations
  1. Build out HTML and CSS using the Turing Styling Guides as reference. Recreate the comp provided to be as visual similar as possible using well structured HTML and CSS.

   * Successfully recreated the visual comp with a high level of accuracy using HTML and CSS. Comp Image:
   ![Visual Comp](https://i.imgur.com/WvCj5oz.jpg)
   Screen Grab of my Dog Party Site:
   ![My work](https://i.imgur.com/hWZH0Fh.jpg)

  2. Add some functionality via Javascript. Add an interaction where the user can type their dog's name into the input field and then by clicking the button the text in the input field takes the place of the text Some Dogs.

  - I successfully implemented functionality that fulfilled the requirements of Iteration 2. I also implemented an interaction where if the user selects the submit button with no text in the input the input box becomes highlighted in red and will not change the header text. Once text is put in the input box and the button pushed - the red border disappears and the name is shown in the header. Photos:
    ![Red Border](https://i.imgur.com/FTHYwoJ.png)
    ![functionality run](https://i.imgur.com/giOi5Ei.png)

    ```function addName() {
      var textToChange = document.getElementById('name-change');
    	var textEntered = document.getElementById('input-text');
      if (textEntered.value.length > 0) {
    	   textToChange.innerHTML = textEntered.value;
         textEntered.classList.add('dog-name-input')
         textEntered.classList.remove('dog-name-noinput');
      } else {
        textEntered.classList.remove('dog-name-input')
        textEntered.classList.add('dog-name-noinput');
      }
    }

    var buttonClick = document.getElementById('button-click');
    buttonClick.addEventListener('click', addName);
    ```

  3. Make the site responsive to be used with mobile devices without any provided layouts or formatting techniques - using basic HTML/CSS. With the use of media queries have the site respond to certain screen sizes. Media queries and formatting for mobile is not something we discussed during this week of the program.

  - I was able to use media queries to alter the formatting of the web page to change based of the width of the browser and to be used and functional on mobile devices. open it up on your phone and see! Screen grab:
  ![screencapture-adamsjr8576-github-io-Dog-Party-John-Adams-2019-08-19-08_31_49](https://user-images.githubusercontent.com/49846853/63274088-68a60000-c25c-11e9-80f4-c4d3ef555268.png)

  4. Adding Extensions and further functionality via Javascript.

   1. Adding functionality to each of the buttons in the three dog columns. When the button is clicked it should hide the text and then when clicked again it should unhide the text. Bonus: add an animation.
      * I was able to successfully make the text in the columns hide and unhide when the button was pushed. I also added a `transform` to the `transition` in CSS to have the text grow and shrink as it is easing in and out.

      ```.dog-paragraph{
        text-align: left;
        height: 225px;
        overflow: hidden;
        word-break: break-all;
        transform: scale(1);
        transition: all 2s ease-in-out;
      }

     .dog-how-paragraph {
         overflow: hidden;
         word-break: break-all;
         height: 0px;
         transform: scale(.5);
         transition: all 2s ease-in-out;
       }
       ```

   2. Add a tooltip to each of the elements in the nav bar. When hovering over the link a tooltip should appear giving more info about where the link goes.

      * The tooltips where trickier to add as I found it hard to find information via googling on best practices to add a tooltip. It seemed most people did it all in CSS or just in HTML, but I wanted to use JS to create the responsiveness of it. I was able to make a tooltip for each using JS to have them show up when the mouse is hovered over the link.

      ![Imgur](https://i.imgur.com/TdYeIvR.jpg)

      ```var howTooltip = document.getElementById('show-how-tooltip');
      var howpar = howTooltip.parentNode;

      function addHowTooltip() {
          howTooltip.classList.remove('tooltip-off');
      }

      howpar.addEventListener('mouseover', addHowTooltip);

      function removeHowTooltip() {
        howTooltip.classList.add('tooltip-off')
      }

      howpar.addEventListener('mouseout', removeHowTooltip);
      ```

   3. Add a form containing input, textarea and button to bottom of the page so that it can update the text in each dog column paragraph. The input should be either a dropdown or radio/checkboxes to specify which column's text should be replaced

      * This was a good one and a tough challenge to figure out how the function in JS should be formatted to have the input select which paragraph it wants the text to replace. I ended up using an if/else if/else statement to with the input value being the conditional that determined which paraghraph to replace. This was a really fun one! I also used JS to make the textarea initial text disappear when you select the box and then if you reselect it after typing it will stay there and not disappear. And then, when you hit submit the initial text repopulates the textarea.
      ![Imgur](https://i.imgur.com/HumgRTG.png)
      ```function changeDogParagraphText() {
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
      ```
## Take-Aways

 * This project helped my gain a general understanding of basic web development via HTML, CSS and Javascript in terms of styling a page and adding user interaction and functionality. This project had a lot of barriers to overcome given the time constraints and intensity of the Turing Program. Mainly, grasping JS conceptually was tough, but once I got a hold of how to manipulate the DOM and use that to target certain elements and classes I was able to better form the logic of how to apply and put it all together. Getting that first function to work was a pretty awesome feeling!

#### Project completed and submitted: 8/18/19
