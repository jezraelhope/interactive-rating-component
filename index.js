//variables 
const ratingsContainer = document.getElementById('ratings-container');
const thankYouContainer = document.getElementById("thank-you-container");

//choosing the rating
let rating = document.getElementById('rating')
const ul = document.querySelector('.ul');

ul.addEventListener('click' , function(e){
    rating.innerText = e.target.innerText;
    for(let i = 0; i < ul.children.length; i++) {
        if(ul.children[i].id != rating.innerText) {
            ul.children.style.backgroundColor = "hsl(0, 0%, 100%)";
            ul.children.style.backgroundColor = "hsl(25, 97%, 53%)";
            e.target.style.backgroundColor = "hsl(25, 97%, 53%)";
            e.target.style.color = "hsl(0, 0%, 100%)";
        }
    }
})




