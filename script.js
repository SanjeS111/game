let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue || minValue == answerNumber) {
            const phraseRandom = Math.round(Math.random() * 3);
            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`
                    break;

                case 1:
                    answerPhrase = `Вы забыли, какое число загадали?\n\u{1F92A}`
                    break;

                case 2:
                    answerPhrase = `Вы ошиблись с числом!\n\u{1F9D0}`
                    break;

                case 3:
                    answerPhrase = `Не жульничайте!\n\u{1F620}`
                    break;
            }
        
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            
            answerField.innerText = `Может это ${answerNumber }?`;
        }
    }
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random() * 3);
            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`
                    break;

                case 1:
                    answerPhrase = `Вы забыли, какое число загадали?\n\u{1F92A}`
                    break;

                case 2:
                    answerPhrase = `Вы ошиблись с числом!\n\u{1F9D0}`
                    break;

                case 3:
                    answerPhrase = `Не жульничайте!\n\u{1F620}`
                    break;
            }
        
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
                    
            
            answerField.innerText = `Это ${answerNumber }?`;
        }
    }
})


document.getElementById('btnRetry').addEventListener('click', function () {
    location.reload();
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const answerRandom = Math.round(Math.random() * 3);
        switch (answerRandom) {
            case 0:
                answerPhrase = `Я всегда угадываю\n\u{1F60E}`
                break;

            case 1:
                answerPhrase = `xaxaxaxaxa! \n\u{1F60E}`
                break;

            case 2:
                answerPhrase = `Я так и знал!\n\u{1F973}`
                break;

            case 3:
                answerPhrase = `Нашел с кем тягаться!\n\u{1F929}`
                break;
        }
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})

