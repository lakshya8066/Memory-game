document.addEventListener('DOMContentLoaded', () => {

  /*
  Functions to use:
  push
  querySelector
  getAttribute
  createElement
  appendChild
  Math.random
  sort
  for loops
  */

  //card options
  const cardArray = [
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    }
  ]
  //to store the score
  var score=0;

  //using the grid from html
  const grid = document.querySelector('.grid');

  //to store the chosen cards
  var cardsChosen=[]

  //to store the chosen cards ids
  var cardsChosenid=[]

  //sorting the array in a random order
  cardArray.sort(() => Math.random() - 0.5); 

  //this function creates the board
  function createBoard() {

    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.src = "images/blank.png";
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipcard);
      grid.appendChild(card);
    }
  }

  
  
  createBoard();

  //this function flips the card that is clicked
  function flipcard()
  {
    var id= this.getAttribute('data-id'); //using this not card
    cardsChosen.push(cardArray[id].name);
    cardsChosenid.push(id);

    this.setAttribute('src', cardArray[id].img);
    if(cardsChosen.length===2)
    {
      setTimeout(checkMatch, 500);
    }
  }

  function checkMatch()
  {
    var cards = document.querySelectorAll('img');
    if(cardsChosen[0]===(cardsChosen[1]))
    {
      score+=1 ;
      alert("you found it");
      console.log(cardsChosenid);
      cards[cardsChosenid[0]].setAttribute('src',"images/white.png");
      cards[cardsChosenid[1]].setAttribute('src',"images/white.png");
      document.getElementById("results").innerHTML=score;
    }
    else
    {
      alert("try again");
      cards[cardsChosenid[0]].setAttribute('src',"images/blank.png");
      cards[cardsChosenid[1]].setAttribute('src',"images/blank.png");
    }
    cardsChosen=[];
    cardsChosenid=[];
  }
  if(score==6)
  {
    alert("you won");
  }
})
