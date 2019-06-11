
var money, time, answer;



var optionalExpenses = {
    number: {}
};

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (var i = 0; i < 2; i++) {
        var a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется?");
    
        if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a!= '' && b!= '' && a.length < 50) {
            console.log("done!");
            appData.expenses[a] = b;
        }
        else {
            alert("Вы не ввели информацию! Попробуйте снова");
            i--;
        }
    }
}
chooseExpenses();

function chooseOptExpenses() {
    for (var i = 0; i < 3; i++) {
        var a = prompt("Статья необязательных расходов?");    
        if (typeof(a) === 'string' && typeof(a) != null && a!= '' && a.length < 50) {
            appData.optionalExpenses[i] = a;
        }
        else {
            alert("Вы не ввели информацию! Попробуйте снова");
            i--;
        }
    }
}
chooseOptExpenses();


function checkSavings() {
    if (appData.savings == true) {
        var save = +prompt("Каково сумма накоплений?");
        var percent = +prompt("Под какой процент?");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

function detectDayBudget() {  
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Ежедневный бюджет: '+ appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    }
    else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    }
    else if (appData.moneyPerDay > 2000){
        console.log("Высокий уровень достатка");
    }
    else {
        console.log("Произошла ошибка");
    }
}
detectLevel();