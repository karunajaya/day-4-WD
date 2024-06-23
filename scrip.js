1.Do the below programs in anonymous function & IIFE

a. Print odd numbers in an array

1. Anonymous Function

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let oddNumbers = numbers.filter(function(number) {
    return number % 2 !== 0;
});

console.log(oddNumbers); // Output: [1, 3, 5, 7, 9]

2. Immediately Invoked Function Expression (IIFE)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function(arr) {
    let oddNumbers = arr.filter(function(number) {
        return number % 2 !== 0;
    });
    console.log(oddNumbers); // Output: [1, 3, 5, 7, 9]
})(numbers);

b. Convert all the strings to title caps in a string array

1.Anonymous Function:

let strings = ["hello", "world", "javascript", "is", "awesome"];

let titleCaps = strings.map(function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
});

console.log(titleCaps); // Output: ["Hello", "World", "Javascript", "Is", "Awesome"]

2.Immediately Invoked Function Expression (IIFE)

let strings = ["hello", "world", "javascript", "is", "awesome"];

(function(arr) {
    let titleCaps = arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
    console.log(titleCaps); // Output: ["Hello", "World", "Javascript", "Is", "Awesome"]
})(strings);

c. Sum of all numbers in an array

1.Anonymous Function:

let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce(function(total, num) {
    return total + num;
}, 0);

console.log(sum); // Output: 15

2.Immediately Invoked Function Expression (IIFE)

let numbers = [1, 2, 3, 4, 5];

(function(arr) {
    let sum = arr.reduce(function(total, num) {
        return total + num;
    }, 0);
    console.log(sum); // Output: 15
})(numbers);

d. Return all the prime numbers in an array

1.Anonymous Function:

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let primes = numbers.filter(function(num) {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
});

console.log(primes); // Output: [2, 3, 5, 7]

2.Immediately Invoked Function Expression (IIFE)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function(arr) {
    let primes = arr.filter(function(num) {
        for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    });
    console.log(primes); // Output: [2, 3, 5, 7]
})(numbers);

e. Return all the palindromes in an array

1.Anonymous Function:

let words = ["madam", "hello", "racecar", "world", "level"];

let palindromes = words.filter(function(word) {
    return word === word.split('').reverse().join('');
});

console.log(palindromes); // Output: ["madam", "racecar", "level"]

2.Immediately Invoked Function Expression (IIFE)

let words = ["madam", "hello", "racecar", "world", "level"];

(function(arr) {
    let palindromes = arr.filter(function(word) {
        return word === word.split('').reverse().join('');
    });
    console.log(palindromes); // Output: ["madam", "racecar", "level"]
})(words);

f. Return median of two sorted arrays of the same size

1.Anonymous Function:

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

let median = function(arr1, arr2) {
    let merged = arr1.concat(arr2).sort((a, b) => a - b);
    let mid = merged.length / 2;
    return (merged[mid - 1] + merged[mid]) / 2;
};

console.log(median(arr1, arr2)); // Output: 3.5

2.Immediately Invoked Function Expression (IIFE)

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

(function(a1, a2) {
    let merged = a1.concat(a2).sort((a, b) => a - b);
    let mid = merged.length / 2;
    let median = (merged[mid - 1] + merged[mid]) / 2;
    console.log(median); // Output: 3.5
})(arr1, arr2);

g. Remove duplicates from an array

1.Anonymous Function:

let numbers = [1, 2, 3, 4, 5, 1, 2, 6];

let uniqueNumbers = numbers.filter(function(num, index, arr) {
    return arr.indexOf(num) === index;
});

console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5, 6]

2.Immediately Invoked Function Expression (IIFE)

let numbers = [1, 2, 3, 4, 5, 1, 2, 6];

(function(arr) {
    let uniqueNumbers = arr.filter(function(num, index, arr) {
        return arr.indexOf(num) === index;
    });
    console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5, 6]
})(numbers);

h. Rotate an array by k times

1.Anonymous Function:

let array = [1, 2, 3, 4, 5];
let k = 2;

let rotate = function(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
};

console.log(rotate(array, k)); // Output: [4, 5, 1, 2, 3]

2.Immediately Invoked Function Expression (IIFE)

let array = [1, 2, 3, 4, 5];
let k = 2;

(function(arr, k) {
    k = k % arr.length;
    let rotated = arr.slice(-k).concat(arr.slice(0, -k));
    console.log(rotated); // Output: [4, 5, 1, 2, 3]
})(array, k);

2.Do the below programs in arrow functions.

a.Print odd numbers in an array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let oddNumbers = numbers.filter(num => num % 2 !== 0);

console.log(oddNumbers); // Output: [1, 3, 5, 7, 9]

b.Convert all the strings to title caps in a string array

let strings = ["hello", "world", "javascript", "is", "awesome"];

let titleCaps = strings.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());

console.log(titleCaps); // Output: ["Hello", "World", "Javascript", "Is", "Awesome"]

c.Sum of all numbers in an array

let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15

d.Return all the prime numbers in an array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let primes = numbers.filter(num => {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
});

console.log(primes); // Output: [2, 3, 5, 7]

e.Return all the palindromes in an array

let words = ["madam", "hello", "racecar", "world", "level"];

let palindromes = words.filter(word => word === word.split('').reverse().join(''));

console.log(palindromes); // Output: ["madam", "racecar", "level"]
