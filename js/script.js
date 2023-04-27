const nav = document.querySelector('nav');
const hamburger = document.querySelector('.hamburger');
console.log(hamburger);
hamburger.addEventListener('click',()=>{
    nav.classList.toggle('active');
});