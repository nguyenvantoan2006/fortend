function filterNumbers(arr){
    if(!Array.isArray(arr)){
        console.log("Dữ liệu không hợp lệ ")
        return;
    }
    if(arr.length === 0){
        console.log("Mảng không có phần tử nào")
        return;
    }
    let result = arr.filter(item => typeof item === "string" && item.length >5);
    console.log(result);

}
console.log (filterNumbers(["apple", "banana", "cat", "elephant", "dog"]));
console.log (filterNumbers([]));
console.log (filterNumbers(["abc"]));
