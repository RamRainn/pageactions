'use strict';
// СТАРЫЙ ВАРИАНТ ПОИСКА ЭЛЕМЕНТОВ НА СТРАНИЦЕ
const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');
console.log(btns);

const circles = document.getElementsByClassName('circle');
console.log(circles);

// НОВЫЙ ВАРИАНТ ПОИСКА, БОЛЕЕ ФУНКЦИОНАЛЬНЫЙ

const hearts = document.querySelectorAll('.heart');
hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('div');

console.log(oneHeart);