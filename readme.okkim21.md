EnLearn: Dice Game
======
Introduction
-------------
I built this dice game using ECMAScript 2015 and Mocha for unit test. 
- I ran it on Chrome and checked ECMAScript 2015 compatibility with Kangax ([link](https://kangax.github.io/compat-table/es6/)).  

- You can find scorer.js file under scorer folder.
It has two methods named **score** and **suggestedCategories**.
The score method takes the category and the roll and returns the score.
The suggestedCategories method takes the roll and returns a list of the category ordered by the score.
- I created a folder named test for a test file.

Setup
------
1. Clone repository or Download zip
   > git clone https://github.com/okkim21/enlearn.git

2. Install dependencies 
   > npm install
   
   - To use npm, you have to download Node.js
   ([link](https://nodejs.org/en/download/)). 
    When you download Node.js, you automatically get npm installed on your computer.
    To check if you have Node.js installed, run this command in your terminal:
    > node -v

3. Install mocha
   ([npm](https://www.npmjs.com/package/mocha))
   > npm install -g mocha

Run
------
1. Open diceGame.html with Chrome directly (file protocol).
You don't need http protocol to run the file.

2. Unit Test 
   > npm test 

    You can see 24 unit tests running.
    - The first 23 are to check whether score is right for each category.
    - The last test is for the suggestedCategories method.
