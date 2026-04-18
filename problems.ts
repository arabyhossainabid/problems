// Problem solving 1 Reverse a String
function reverseString(s: string): string {
    let output = "";
    for (let i = s.length - 1; i >= 0; i--) {
        output += s[i];
    }
    return output;
}

// Problem solving 2 FizzBuzz 
function fizzBuzz(n: number): void {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// Problem solving 3 Find Largest Number
function findLargest(nums: number[]): number {
    if (nums.length === 0) return 0;
    let boroNum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > boroNum) {
            boroNum = nums[i];
        }
    }
    return boroNum;
}

// Problem solving 5 Sum of Array
function sumArray(arr: number[]): number {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

// Problem solving 7 Factorial
function factorial(n: number): number {
    if (n < 0) return -1;
    if (n === 0 || n === 1) return 1;

    let res = 1;
    for (let i = 2; i <= n; i++) {
        res *= i;
    }
    return res;
}

// Problem solving 8 Even Numbers List
function getEvens(numbers: number[]): number[] {
    let evenList: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenList.push(numbers[i]);
        }
    }
    return evenList;
}

// Problem solving 10 Find Minimum
function findMinimum(arr: number[]): number {
    if (arr.length === 0) return 0;
    let choto = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < choto) {
            choto = arr[i];
        }
    }
    return choto;
}

// Problem solving 12 Prime Check
function isPrime(n: number): boolean {
    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Problem solving 14 Celsius to Fahrenheit
function celsiusToFahrenheit(c: number): number {
    return (c * 9 / 5) + 32;
}

// Problem solving 15 Count Character
function countOccurrences(str: string, char: string): number {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
