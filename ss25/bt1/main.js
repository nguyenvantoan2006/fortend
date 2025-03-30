function findMinValue(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    let minValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
        }
    }
    return minValue;
}

const numbers = [3, 5, 7, 2, 8];
console.log(findMinValue(numbers));
