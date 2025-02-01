// Функция, генерирующая случайное число
function generateNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Логика игры
function playGame() {
    const secretNumber = generateNumber();
    const comp1 = 'Компьютер 1';
    const comp2 = 'Компьютер 2';
    let min = 1;
    let max = 100;
    let attempts = 1;

    console.log(`${comp1} загадал число: ${secretNumber}.`); 

    while (min <= max) {
        let guess = Math.floor((min + max) / 2);
        console.log(`Попытка №${attempts}, Диапазон: [${min}, ${max}]`);

        if (guess === secretNumber) {
            console.log(`${comp2}: пробую число ${guess}.`);
            console.log(`${comp1}: Угадал!`);
            break;
        } else if (guess > secretNumber) {
            console.log(`${comp2}: пробую число ${guess}.`);
            console.log(`${comp1}: Меньше.`);
            max = guess - 1;
        } else {
            console.log(`${comp2}: пробую число ${guess}.`);
            console.log(`${comp1}: Больше.`);
            min = guess + 1;
        }

        attempts += 1;
    }
    console.log(`Результат: ${secretNumber}. Количество попыток: ${attempts}`);
}

playGame();