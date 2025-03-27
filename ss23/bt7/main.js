let n = parseFloat(prompt("Nhập số phần tử của mảng"));
if (isNaN(n) || n < 0){
    console.log("Số lượng phần tử ko được nhỏ hơn không");
}else{
    let arr =[];
    while(arr.length < n){
        arr.push(parseFloat(prompt(`Nhap phần tử thứ ${arr.length + 1}`)));

    }
    let sortedArr = [... new Set (arr)].sort((a,b)=> b - a);
    console.log(sortedArr.length <2 ? "Không có số lớn thứ hai" : sortedArr[1]);
}
