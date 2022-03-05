// Put your JS here.
/*
There are two ways of defining const/variable 
let myVariable;
var myVariable = "";
Recommending let */
// this is the comment mark for single line comment 

/*
const myHeading = document.querySelector('h1');
alert('hello!'); // a pop up window with hello!
myHeading.textContent = 'Hello World!';

// Function 
function add(num1, num2) {
    let result = num1 + num2;
    return result;
}

console.log(add(5, 6)); // result will appear in the console
*/ 

/*
// Event (click event)
document.querySelector('html').onclick = function() {
    alert("Stop poking me!");
}
*/

/* Another version of the event 
let myHyml = document.querySelector('html');
myHtml.onclick = function() {
    alert("Stop poking me!");
}
*/

// adding an image changer 
/*
first direct to the img section
then using the onclick function to change its content. 
After that, retrive src, determine src and update it
 */
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/firefox2.png');
    } else {
      myImage.setAttribute('src','images/firefox-icon.png');
    }
}

// addding a personalized welcome message 
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// check if the name item exist, if not set it, or set textContent.
// Have been updated. In this version, the small windom will keep popping up until have valid input. 
function setUserName() {
    let myName = prompt('Please enter your name.'); // will display a dialog box
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome, ' + myName;
    }
}

myButton.onclick = function() {
    setUserName();
}

