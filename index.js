// console.log("HERRO");

function fibonacci(number) {
    let numbersArray = [1];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    numbersArray.push(numbersArray.reduce(reducer)); // there are now 2 numbers in the initial array so the for loop would work
    // console.log(numbersArray);

    for (i = 0; i < number - 2 ; i++) {
        lastNumber = numbersArray[numbersArray.length - 1]; //find the last number in current array
        secondLastNumber = numbersArray[numbersArray.length - 2]; //find the 2nd last number in current array
        newArray = []; //creates a new array to put the 2 numbers in
        newArray.push(lastNumber);
        newArray.push(secondLastNumber);
        // console.log(lastNumber);
        // console.log(secondLastNumber);
        // console.log(newArray);
        newNumber = newArray.reduce(reducer); //adds up number
        // console.log(newNumber);
        numbersArray.push(newNumber); // pushes the new number into the fibonacci array.
        // console.log(numbersArray);
    }
        console.log(numbersArray);
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