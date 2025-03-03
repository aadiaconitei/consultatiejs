// console.log('reviews', reviews);
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const randomBtn = document.querySelector('.random-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
// console.log('img', img);
let currentItem = 3;

function showReview(index) {
    const review = reviews[index];
    console.log('review', review);
    img.src = review.img;
    author.textContent = review.name;
    job.textContent = review.job;
    // info.textContent = review.text;
    info.innerHTML = review.text;
}
window.addEventListener('DOMContentLoaded', function () {
    // this.alert(12345);
    showReview(currentItem);
    // const review = reviews[currentItem];
    // console.log('review', review);
    // img.src = review.img;
    // author.textContent = review.name;
    // job.textContent = review.job;
    // // info.textContent = review.text;
    // info.innerHTML = review.text;

});

randomBtn.addEventListener('click', function () {
    //Math.floor(Math.random() * 4);[0,4)
    currentItem = Math.floor(Math.random() * reviews.length);
    showReview(currentItem);
    // const review = reviews[currentItem];
    // console.log('review', review);
    // img.src = review.img;
    // author.textContent = review.name;
    // job.textContent = review.job;
    // // info.textContent = review.text;
    // info.innerHTML = review.text;
});
