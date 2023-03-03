let score=0;
let CoffeeCup=0;

const scoreDisplay = document.getElementByld('Score')
const coffeeCupImg = document.getElementByld('coffeeCupImg')
const coffeePerSecond = document.getElementById('Coffee Cup / second')





const coffeeGameArea = doc.getElementById('coffeeCupImg');
coffeeGameArea.addEventListener('click', function(clickEvent)){
    if (clickEvent.target.matches('.coffeeCupImg')){
        CoffeeCup++;
        scoreDisplay.innerText = score;
    }
}


coffeeCupImg.addEventListener('click', function (clickEvent))
{
    CoffeeCup = CoffeeCup + 1;
    score.innerText = CoffeeCup;
}

const expMach = document.getElementById('expMachine')
const expMachCost = document.getElementById('expCost')
const expMachAmount = document.getElementById('expAmount')

expMach.addEventListener('click', function(clickEvent))
{
    if (CoffeeCup>= 10){

        CoffeeCup = CoffeeCup - 10;
        score.innerText = CoffeeCup;
        cost1 = cost1 + 5
        amount1 += 1
        expMachCost.innerText = amount1
        CCS +=1
        coffeePerSecond.innerText = CCS
        expMachAmount.innerText = cost1

        setInterval(function () {
            CoffeeCup = CoffeeCup +1;
            scoreDisplay.innerText = CoffeeCup;

        },1000)
    }
}

const cappMach = document.getElementById('cappMachine')
const cappMachCost = document.getElementById('cappCost')
const cappMachAmount = document.getElementById('cappAmount')

cappMach.addEventListener('click', function(clickEvent)){
    if (CoffeeCup>= 25){

        CoffeeCup = CoffeeCup - 25;
        score.innerText = CoffeeCup;
        cost1 = cost1 + 5
        amount1 += 1
        cappMachCost.innerText = amount1
        CCS +=1
        coffeePerSecond.innerText = CCS
        cappMachAmount.innerText = cost1

        setInterval(function () {
            CoffeeCup = CoffeeCup +1;
            score.innerText = CoffeeCup;

        },1000)
    }
}

const autoMach = document.getElementById('autoMachine')
const autoMachCost = document.getElementById('autoCost')
const autoMachAmount = document.getElementById('autoAmount')

mnet.addEventListener('click', function(clickEvent)){
    if (CoffeeCup>= 50){

        CoffeeCup = CoffeeCup - 50;
        score.innerText = CoffeeCup;
        cost1 = cost1 + 5
        amount1 += 1
        autoMachCost.innerText = amount1
        CCS +=1
        coffeePerSecond.innerText = CCS
        autoMachAmount.innerText = cost1

        setInterval(function () {
            CoffeeCup = CoffeeCup +1;
            score.innerText = CoffeeCup;

        },1000)
    }
}


const