function longestRunOfTwoNumbers(input) {
    if (input.length <= 2) {
        return input;
    }

    let start = 0;
    let maxStart = 0;
    let maxLength = 0;
    let currentLength = 0;
    let currentNumbers = [];
    let first = 0;
    let second = 0;

    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i]) || input[i] == " ") {
            if (currentLength > maxLength) {
                maxLength = currentLength;
                maxStart = start;
            }
            start = i+1
            currentNumbers = [];
            currentLength = 0;
            continue
        }
        if (currentNumbers.includes(input[i])) {
            if (input[i] == currentNumbers[0]) {
                first = i;

            } else {
                second = i;
            }
            currentLength++;
        } else {
            currentNumbers.push(input[i]);
            second = i - 1

            if (currentNumbers.length <= 2) {
                currentLength++
            } else {
                if (maxLength < currentLength) {
                    maxLength = currentLength;
                    maxStart = start;
                };
                start = Math.min(first, second) + 1;
                first = Math.max(first, second);

                currentNumbers.shift();
                currentLength = i - start + 1;
            }
        }
    }

    if (currentLength > maxLength) {
        maxLength = currentLength;
        maxStart = start;
    }
    if (maxLength<1){
        return null
    }
    return input.slice(maxStart, maxStart + maxLength);
}

module.exports = longestRunOfTwoNumbers;

console.log(longestRunOfTwoNumbers('.abbc'))