let answer = parseInt(prompt("Please input the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        alert("FizzBuzz");
    } else if (i % 3 === 0) {
        alert("Fizz");
    } else if (i % 5 === 0) {
        alert("Buzz");
    } else {
        alert(i);
    }
}