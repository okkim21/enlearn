
const scorerService = new Scorer();

const rolling = document.getElementById('rolling');
const isCheck = document.getElementById('isCheck');
let diceNumber1 = document.getElementById('dice-side-1');
let diceNumber2 = document.getElementById('dice-side-2');
let diceNumber3 = document.getElementById('dice-side-3');
let diceNumber4 = document.getElementById('dice-side-4');
let diceNumber5 = document.getElementById('dice-side-5');
let scoreList = document.getElementById('scoreList');
let isChance = false;

rolling.addEventListener('click', getDicesNumber);

isCheck.addEventListener('change', function(e) {
  isChance = isCheck.checked;
});

function getDicesNumber() {
   clearUl();

   let dice1 = Math.floor((Math.random()) * 8)+1;
   let dice2 = Math.floor((Math.random()) * 8)+1;
   let dice3 = Math.floor((Math.random()) * 8)+1;
   let dice4 = Math.floor((Math.random()) * 8)+1;
   let dice5 = Math.floor((Math.random()) * 8)+1;
   diceNumber1.innerHTML = dice1; 
   diceNumber2.innerHTML = dice2;
   diceNumber3.innerHTML = dice3;
   diceNumber4.innerHTML = dice4;
   diceNumber5.innerHTML = dice5;

   // get categories
   let rolling = [];
   rolling = [dice1, dice2, dice3, dice4, dice5];
 
   let categories = scorerService.suggestedCategories(rolling, isChance);
 
   for (var [key, value] of categories) {
     let node = document.createElement("DIV");                
     let textnode = document.createTextNode(key + ' = ' + value);     
        
     node.appendChild(textnode);                             
     scoreList.appendChild(node);  
   }

}

function clearUl() {
  let ul = document.querySelector('.list');
  let listLength = ul.children.length;

  while (ul.children.length !=0){
    ul.removeChild(ul.childNodes[0]);
  }

}