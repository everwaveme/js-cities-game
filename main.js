let usedCities = [];
let userScore = 0;

while (true) {
    let userCity = prompt('Введите название города');

    if (!userCity) {
        alert(`Количество правильных ответов: ${userScore}. Вы проиграли!`);
        break;
    }

    userCity = userCity.toLowerCase();

    while ((userCity.at(-1) === 'ь') || (userCity.at(-1) === 'ъ') || (userCity.at(-1) === 'ы') || (userCity.at(-1) === 'й')) {
        userCity = userCity.slice(0, -1);
    }

    if (usedCities.includes(userCity)) {
        alert('Такой город уже был!');
        continue;
    }

    if (!cities) {
        alert('Поздравляем! Вы обыграли компьютер!');
        break;
    }

    for (let i = 0; i < cities.length; i++) {
        
        if (userCity.at(-1) === cities[i][0] && !usedCities.includes(cities[i])) {
            alert(cities[i]);
            usedCities.push(cities[i]);
            usedCities.push(userCity);
            userScore++;
            break;
        }
    }
}
