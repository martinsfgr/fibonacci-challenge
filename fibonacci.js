const checkValue= (index) => {
    if (index < 350) {
        return false;
    } else if (index == undefined) {
        return index = 0;
    }
}

const generateFibonacciArray = () => {
    let fib = [];
    let i = 0;
    
    loopLimit = checkValue(fib[i]);

    while (loopLimit == false) {
        let fibOperation = fib[i-1] + fib[i-2];
        
        if (isNaN(fibOperation) == false) {
            fib.push(fibOperation);
            loopLimit = checkValue(fib[i]);
            i++;
        } else {
            fib.push(i);
            i++;
        }
    }

    return fib
}

const fibonacciArray = generateFibonacciArray();

const isFibonnaci = (number) => {
    return fibonacciArray.includes(number);
}

isFibonnaci(3);
isFibonnaci(7);
