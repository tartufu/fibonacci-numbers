// console.log("HERRO");

function fibonacci(number) {
    let numbersArray = [1];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    numbersArray.push(numbersArray.reduce(reducer));
    numbersArray.push(numbersArray.reduce(reducer));
    console.log(numbersArray);

    for (i = 0; i < number - 3 ; i++) {
        lastNumber = numbersArray[numbersArray.length - 1];
        secondLastNumber = numbersArray[numbersArray.length - 2];
        newArray = [];
        newArray.push(lastNumber);
        newArray.push(secondLastNumber);
        console.log(lastNumber);
        console.log(secondLastNumber);
        console.log(newArray);
        newNumber = newArray.reduce(reducer);
        console.log(newNumber);
        numbersArray.push(newNumber);
        console.log(numbersArray);
    }
}




// let numbersArray = [1];

// const reducer = (accumulator, currentValue) => accumulator + currentValue;



// numbersArray.push(numbersArray.reduce(reducer));
// console.log(numbersArray);
// numbersArray.push(numbersArray.reduce(reducer));
// console.log(numbersArray);

// let newArray = [];
// let lastNumber = numbersArray[numbersArray.length - 1];
// let secondLastNumber = numbersArray[numbersArray.length - 2];
// newArray.push(lastNumber);
// newArray.push(secondLastNumber);
// console.log(lastNumber);
// console.log(secondLastNumber);
// console.log(newArray);
// let newNumber = newArray.reduce(reducer);
// console.log(newNumber);

// numbersArray.push(newNumber);
// console.log(numbersArray);



// lastNumber = numbersArray[numbersArray.length - 1];
// secondLastNumber = numbersArray[numbersArray.length - 2];
// newArray = [];
// newArray.push(lastNumber);
// newArray.push(secondLastNumber);
// console.log(lastNumber);
// console.log(secondLastNumber);
// console.log(newArray);
// newNumber = newArray.reduce(reducer);
// console.log(newNumber);
// numbersArray.push(newNumber);
// console.log(numbersArray);


// lastNumber = numbersArray[numbersArray.length - 1];
// secondLastNumber = numbersArray[numbersArray.length - 2];
// newArray = [];
// newArray.push(lastNumber);
// newArray.push(secondLastNumber);
// console.log(lastNumber);
// console.log(secondLastNumber);
// console.log(newArray);
// newNumber = newArray.reduce(reducer);
// console.log(newNumber);
// numbersArray.push(newNumber);
// console.log(numbersArray);

// lastNumber = numbersArray[numbersArray.length - 1];
// secondLastNumber = numbersArray[numbersArray.length - 2];
// newArray = [];
// newArray.push(lastNumber);
// newArray.push(secondLastNumber);
// console.log(lastNumber);
// console.log(secondLastNumber);
// console.log(newArray);
// newNumber = newArray.reduce(reducer);
// console.log(newNumber);
// numbersArray.push(newNumber);
// console.log(numbersArray);

// lastNumber = numbersArray[numbersArray.length - 1];
// secondLastNumber = numbersArray[numbersArray.length - 2];
// newArray = [];
// newArray.push(lastNumber);
// newArray.push(secondLastNumber);
// console.log(lastNumber);
// console.log(secondLastNumber);
// console.log(newArray);
// newNumber = newArray.reduce(reducer);
// console.log(newNumber);
// numbersArray.push(newNumber);
// console.log(numbersArray);

// lastNumber = numbersArray[numbersArray.length - 1];
// secondLastNumber = numbersArray[numbersArray.length - 2];
// newArray = [];
// newArray.push(lastNumber);
// newArray.push(secondLastNumber);
// console.log(lastNumber);
// console.log(secondLastNumber);
// console.log(newArray);
// newNumber = newArray.reduce(reducer);
// console.log(newNumber);
// numbersArray.push(newNumber);
// console.log(numbersArray);

// lastNumber = numbersArray[numbersArray.length - 1];
// secondLastNumber = numbersArray[numbersArray.length - 2];
// newArray = [];
// newArray.push(lastNumber);
// newArray.push(secondLastNumber);
// console.log(lastNumber);
// console.log(secondLastNumber);
// console.log(newArray);
// newNumber = newArray.reduce(reducer);
// console.log(newNumber);
// numbersArray.push(newNumber);
// console.log(numbersArray);

fibonacci(13);