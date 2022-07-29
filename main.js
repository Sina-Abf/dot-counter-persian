'use strict';

const alphabet = {
  ا: 0,
  ب: 1,
  پ: 3,
  ت: 2,
  ث: 3,
  ج: 1,
  چ: 3,
  ح: 0,
  خ: 1,
  د: 0,
  ذ: 1,
  ر: 0,
  ز: 1,
  ژ: 3,
  س: 0,
  ش: 3,
  ص: 0,
  ض: 1,
  ط: 0,
  ظ: 1,
  ع: 0,
  غ: 1,
  ف: 1,
  ک: 0,
  گ: 0,
  ل: 0,
  م: 0,
  ن: 1,
  و: 0,
  ه: 0,
  ی: 0,
};

const form = document.getElementById('form');
const input = document.getElementById('form-input');
const button = document.getElementById('form-button');
const counter = document.getElementById('form-counter');

let dots = 0;

const dotCounter = (text) => {
  const textArr = text.split('');
  console.log(textArr);
  for (const i of textArr) {
    for (const key in alphabet) {
      if (key === i) {
        dots += alphabet[key];
      }
    }
  }
  if (textArr.indexOf('ی') !== textArr.length - 1) {
    if (textArr.at(textArr.indexOf('ی') + 1) !== ' ') {
      dots += 2;
    } else {
      dots += 2;
    }
  }
  console.log(dots);
  counter.innerHTML = dots;
  dots = 0;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  dotCounter(input.value);
});
