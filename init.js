
window.onload = function(){
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;


// Слушаем событие нажатия на кнопку "Сгенерировать"
document.getElementById('generateButton').addEventListener('click', function() {
    // Получаем данные о новом пользователе
    const newPerson = personGenerator.getPerson();

    // Выводим информацию о пользователе в HTML
    document.getElementById('firstNameOutput').innerText = newPerson.firstName;
    document.getElementById('surnameOutput').innerText = newPerson.surname;
    document.getElementById('genderOutput').innerText = newPerson.gender;
    document.getElementById('birthYearOutput').innerText = newPerson.birthYear;
    document.getElementById('middleNameOutput').innerText = newPerson.middleName;
    document.getElementById('bestJobOutput').innerText = newPerson.bestJob;  
    document.getElementById('birthMonthsOutput').innerText = newPerson.birthMonths;
    document.getElementById('birthDayOutput').innerText = newPerson.birthDay;

});
    
    // Слушаем событие нажатия на кнопку "Очистить"
    document.getElementById('resetButton').addEventListener('click', function() {
    // Очищаем информацию о пользователе в HTML
    document.getElementById('firstNameOutput').innerText = 'Генерация имени';
    document.getElementById('surnameOutput').innerText = 'Генерация фамилии';
    document.getElementById('genderOutput').innerText = 'Генерация пола';
    document.getElementById('birthYearOutput').innerText = 'и года рождения';
    document.getElementById('middleNameOutput').innerText = 'Генерация отчества';
    document.getElementById('bestJobOutput').innerText = 'Генерация профессии';
    document.getElementById('birthMonthsOutput').innerText = 'месяца';
    document.getElementById('birthDayOutput').innerText = 'Генерация числа';
    });
};
