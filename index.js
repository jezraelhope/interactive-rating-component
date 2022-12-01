//variables 
const ratingsContainer = document.getElementById('ratings-container');
const thankYouContainer = document.getElementById("thank-you-container");
const ul = document.querySelector('.ul');
const rating = document.getElementById('rating');
const submitButton = document.querySelector('.btn-submit');


//choosing the rating

ul.addEventListener('click' , (e) => {
    rating.innerText = e.target.innerText;
    console.log(rating.innerText)
})

const toggleDisplay = () => {
    if(rating.innerText){
        ratingsContainer.style.display = "none"
    }
}




