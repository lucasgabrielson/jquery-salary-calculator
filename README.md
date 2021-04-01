![MIT LICENSE](https://img.shields.io/github/license/gabri1463/jquery-salary-calculator.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/gabri1463/jquery-salary-calculator.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/gabri1463/jquery-salary-calculator.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/gabri1463/jquery-salary-calculator.svg?style=social)

# Project Name

JQuery Salary Calculator

## Description

_Duration: 2 Days_

In this project I used JavaScript, HTML, JQuery, and TailwindCSS in order to take in employee information through inputs, append the information to the DOM and calculate the total monthly payroll of all employees enter. Additionally I aimed to give the payroll a red background if it was greater than 20K dollars per month.

I styled this application by using TailwindCSS. I discovered heroicons.com which allowed be the used an svg icon to turn my delete button into a trashcan icon. 

In html I created inputs and let the user know what should be entered into the fields user placeholder text. I created a click listener for the submit button and from there I took that information and created an employee object, pushed that into an employees array, and emptied the input field (change the name of the array of the object!). I appended the information from my employee objects to the DOM along with a delete button. This delete button worked by using the .text() method along with .match() to find the unique (make sure the id is unique in the input field!) id through a regex searching for the first string of numbers. I summed the total salaries by employee and appended the resultant total monthly payroll to the DOM. 

## Screen Shot

<img width="1428" alt="Screen Shot 2021-03-08 at 9 00 44 PM" src="https://user-images.githubusercontent.com/74149109/110412777-595ef100-8052-11eb-9695-15c53484456c.png">
<img width="1429" alt="Screen Shot 2021-03-08 at 9 01 14 PM" src="https://user-images.githubusercontent.com/74149109/110412784-5bc14b00-8052-11eb-984b-4de8c2b354ae.png">
<img width="1432" alt="Screen Shot 2021-03-08 at 9 01 30 PM" src="https://user-images.githubusercontent.com/74149109/110412793-5e23a500-8052-11eb-83c5-39469c5fffc8.png">

## Installation

1. npm install
2. npm run build-css
3. open index.html in browser

## Usage

Enter in employee information in input fields. Total monthly payroll is updated with each employee. Remove employees and their salary with delete icon.

## Built With

TailwindCSS Framework

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. Additionally my wife [Jaclyn Gabrielson](https://www.linkedin.com/in/jmerriamcpa) who decided on the the layout of the website.

## Support
If you have suggestions or issues, please email me at lucas.gabrielson@icloud.com



