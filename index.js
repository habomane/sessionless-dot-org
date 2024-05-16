const btn1 = document.getElementById('btn1');
const sparklesWhite = document.getElementById('white-sparkles');
const sparklesBlack = document.getElementById('black-sparkles');
const btn2 = document.getElementById('btn2');
const wOpenBook = document.getElementById('w-open-book');
const bOpenBook = document.getElementById('b-open-book');

btn1.addEventListener('mouseover', () => {
  sparklesWhite.classList.add('visible');
  sparklesWhite.classList.remove('hidden');
  sparklesBlack.classList.add('hidden');
  sparklesBlack.classList.remove('visible');
});

btn1.addEventListener('mouseout', () => {
    sparklesWhite.classList.remove('visible');
    sparklesWhite.classList.add('hidden');
    sparklesBlack.classList.remove('hidden');
    sparklesBlack.classList.add('visible');
});

btn2.addEventListener('mouseover', () => {
    wOpenBook.classList.add('visible');
    wOpenBook.classList.remove('hidden');
    bOpenBook.classList.add('hidden');
    bOpenBook.classList.remove('visible');
  });
  
  btn2.addEventListener('mouseout', () => {
        wOpenBook.classList.remove('visible');
    wOpenBook.classList.add('hidden');
    bOpenBook.classList.remove('hidden');
    bOpenBook.classList.add('visible');
  });
  
