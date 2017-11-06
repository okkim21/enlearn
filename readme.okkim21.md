EnLearn: Dice Game
======
Introduction
-------------
I built this dice game using ECMAScript 2015 and Mocha for unit test. 
- I run it on Chrome and checked compatibility on https://kangax.github.io/compat-table/es6/

- You can find scorer.js file under scorer folder.
It has two methods named **score** and **suggestedCategories**.
The score method takes category and the roll and return the score.
The suggestedCategories method  takes the roll and return the score by category.
- I created the folder named test for a test file.

Setup
------
1. Clone repository
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
1. Run by clicking diceGame.html

2. Unit Test 

    You can see 24 unit tests running.
    - The first 23 are to check whether score is right for each category.
    - The last test is to check whether comparing score between categories is right.
   > npm test 