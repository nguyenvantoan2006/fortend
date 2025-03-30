function printEvenNumbers(arr) {
    if (!Array.isArray(arr)) {
        console.log("Tham số đầu vào phải là một mảng.");
        return;
    }

    let evenNumbers = arr.filter(num => num % 2 === 0);

    if (evenNumbers.length === 0) {
        console.log("Mảng không chứa số chẵn.");
    } else {
        console.log("Các số chẵn trong mảng là:", evenNumbers);
    }
}

const numbers1 = [1, 3, 5, 7]; 
printEvenNumbers(numbers1); 

const numbers2 = [2, 4, 6, 8]; 
printEvenNumbers(numbers2); 

