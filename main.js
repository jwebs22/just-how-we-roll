/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

/*******************
 * YOUR CODE BELOW *
 *******************/



/*******************
 * EVENT LISTENERS *
 *******************/
let single6Roll = document.querySelector("#d6-roll");
single6Roll.addEventListener("click", function()
{
    rollSix();
    let d6Mean = document.querySelector("#d6-rolls-mean");
    d6Mean.innerText = means(sixes).toPrecision(2);
});

let double6Roll = document.querySelector("#doubleRow");
double6Roll.addEventListener("click", function()
{
    rollDoubleSixes();
    let doubleD6Mean = document.querySelector("#double-d6-rolls-mean");
    doubleD6Mean.innerText = means(doubleSixes).toPrecision(2);
});

let single12Roll = document.querySelector("#d12-roll");
single12Roll.addEventListener("click", function()
{
    rollTwelve();
    let d12Mean = document.querySelector("#d12-rolls-mean");
    d12Mean.innerText = means(twelves).toPrecision(2);
});

let single20Roll = document.querySelector("#d20-roll");
single20Roll.addEventListener("click", function()
{
    rollTwenty();
    let d20Mean = document.querySelector("#d20-rolls-mean");
    d20Mean.innerText = means(twenties).toPrecision(2);
})

let reset = document.querySelector("#reset-button");
reset.addEventListener("click", function()
{
    resetAll();
})


/******************
 * RESET FUNCTION *
 ******************/

function resetAll ()
{
    sixes = [];
    doubleSixes = [];
    twelves = [];
    twenties = [];
    
    let sixSideImg = document.querySelector("#d6-roll");
    sixSideImg.src = "images/start/d6.png";

    let sixSideImgD1 = document.querySelector("#double-d6-roll-1");
    sixSideImgD1.src = "images/start/d6.png";

    let sixSideImgD2 = document.querySelector("#double-d6-roll-2");
    sixSideImgD2.src = "images/start/d6.png";

    let twelveSideImg = document.querySelector("#d12-roll");
    twelveSideImg.src = "images/start/d12.jpeg";

    let twentySideImg = document.querySelector("#d20-roll");
    twentySideImg.src = "images/start/d20.jpg";

    d6Mean = document.querySelector("#d6-rolls-mean");
    d6Mean.innerText = "N/A";

    doubleD6Mean = document.querySelector("#double-d6-rolls-mean");
    doubleD6Mean.innerText = "N/A";

    d12Mean = document.querySelector("#d12-rolls-mean");
    d12Mean.innerText = "N/A";

    d20Mean = document.querySelector("#d20-rolls-mean");
    d20Mean.innerText = "N/A";
}


/****************
 * MATH SECTION *
 ****************/

 function means(arr)
 {
     let sum = 0;

     for (let i = 0; i < arr.length; i++)
     {
         sum += arr[i];
     }
     return sum / arr.length; //returns avg number
 }


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/

function rollSix()
{
    let sixesRoll = getRandomNumber(6);
    sixes.push(sixesRoll);
  
    let sideImg = document.querySelector("#d6-roll");
    sideImg.src = `images/d6/${sixesRoll}.png`;
}

function rollDoubleSixes()
{
    let doubleSixesRoll1 = getRandomNumber(6);
    let doubleSixesRoll2 = getRandomNumber(6);

    let doubleSum = doubleSixesRoll1 + doubleSixesRoll2;
    doubleSixes.push(doubleSum);

    let die1Img = document.querySelector("#double-d6-roll-1");
    die1Img.src = `images/d6/${doubleSixesRoll1}.png`;

    let die2Img = document.querySelector("#double-d6-roll-2");
    die2Img.src = `images/d6/${doubleSixesRoll2}.png`;
}

function rollTwelve()
{
    twelvesRoll = getRandomNumber(12);
    twelves.push(twelvesRoll);
    
    let sideImg = document.querySelector("#d12-roll");
    sideImg.src = `images/numbers/${twelvesRoll}.png`;  
}

function rollTwenty()
{
    twentyRoll = getRandomNumber(20);
    twenties.push(twentyRoll);

    let sideImg = document.querySelector("#d20-roll");
    sideImg.src = `images/numbers/${twentyRoll}.png`;
}    
