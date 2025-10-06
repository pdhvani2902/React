

    // --- Task 1: Print numbers from 1 to 10 using a for loop ---
console.log("Task 1: Numbers from 1 to 10");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// --- Task 2: Sum all even numbers between 1 and 20 using a while loop ---
console.log("\nTask 2: Sum of all even numbers between 1 and 20");

let num = 1;
let sum = 0;

while (num <= 20) {
    if (num % 2 === 0) {
        sum += num;
    }
    num++;
}

console.log("Sum of even numbers: " + sum);

// --- Task 3: Use do-while loop to ask for input until user enters number > 10 ---
console.log("\nTask 3: Ask user for input until number > 10");

// For browser environment
let input;
do {
    input = parseInt(prompt("Enter a number greater than 10:"));
} while (input <= 10);

console.log("You entered: " + input + " (greater than 10)");

