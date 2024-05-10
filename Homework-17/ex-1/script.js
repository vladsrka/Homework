"use strict";

let usedWords = [];

function checkWord() {
    let inputWord = document.getElementById('inputWord').value.toLowerCase();
    let result = document.getElementById('result');
    let previousWord = usedWords[usedWords.length - 1];

    if (usedWords.length === 0) {
        result.textContent = 'Первое слово! Ждем следующее слово...';
        usedWords.push(inputWord);
    } else if (inputWord.charAt(0) !== previousWord.charAt(previousWord.length - 1) || usedWords.includes(inputWord)) {
        result.textContent = 'Неправильно! Попробуйте снова.';
    } else {
        result.textContent = 'Правильно! Следующее слово...';
        usedWords.push(inputWord);
    }

    document.getElementById('inputWord').value = '';
}