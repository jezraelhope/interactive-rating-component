//variables 
const ratingsContainer = document.getElementById('ratings-container');
const thankYouContainer = document.getElementById("thank-you-container");

//choosing the rating
let rating = document.getElementById('rating')
const ul = document.querySelector('.ul');
ul.addEventListener('click' , function(e){
    e.target.style.backgroundColor = "hsl(25, 97%, 53%)";
    e.target.style.color = "hsl(0, 0%, 100%)";
    rating.innerText = e.target.innerText
})

