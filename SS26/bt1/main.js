function filterNumbers(arr){
    if(!Array.isArray(arr)){
        console.log("Dữ liệu không hợp lệ ")
        return;
    }
    if(arr.length === 0){
        console.log("Mảng không có phần tử nào")
        return;
    }
    let result = arr.filter(num => typeof num === "number" && num >=10);
    console.log(result);

}
filterNumbers([1,22,10,9,8]);
filterNumbers([]);
filterNumbers(["abc"]);
