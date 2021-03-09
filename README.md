![MIT LICENSE](https://img.shields.io/github/license/scottbromander/the_marketplace.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)

# Project Name

JQuery Salary Calculator

## Description

_Duration: 2 Days_

In this project I used JavaScript, HTML, JQuery, and TailwindCSS in order to take in employee information through inputs, append the information to the DOM and calculate the total monthly payroll of all employees enter. Additionally I aimed to give the payroll a red background if it was greater than 20K dollars per month.

I styled this application by using TailwindCSS. I discovered heroicons.com which allowed be the used an svg icon to turn my delete button into a trashcan icon. 

In html I created inputs and let the user know what should be entered into the fields user placeholder text. I created a click listener for the submit button and from there I took that information and created an employee object, pushed that into an employees array, and emptied the input field (change the name of the array of the object!). I appended the information from my employee objects to the DOM along with a delete button. This delete button worked by using the .text() method along with .match() to find the unique (make sure the id is unique in the input field!) id through a regex searching for the first string of numbers. I summed the total salaries by employee and appended the resultant total monthly payroll to the DOM. 

## Screen Shot

![](./images/Screen Shot 2021-03-08 at 9.00.44 PM.png?raw=true)
![](./images/Screen Shot 2021-03-08 at 9.01.14 PM.png?raw=true)
![](./images/Screen Shot 2021-03-08 at 9.01.30 PM.png?raw=true)

## Installation

Open index.html file in browser

## Usage

(is usage the manner by which someone interacts with this site?)

## Built With

(should I mention TailwindCSS here and not above)

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. Additionally my wife Jaclyn Gabrielson (add linkedin) who decided on the the layout of the website?

## Support
If you have suggestions or issues, please email me at [lucas.gabrielson@icloud.com]



