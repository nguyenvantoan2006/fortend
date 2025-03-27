let n = parseFloat(prompt("Nhập số lượng phần tử của mảng"));
if (n === 0){
    console.log("Không có ký tự số");
}else{
    let arr =[];
    let result = [];
    for (let i = 0; i < n; i++){
        let value = prompt(`Nhap phần tử thú ${i +1}`);
        arr.push(value);
        if(!isNaN(value) && value.trim() !==""){
            result.push(value);
        }
    }
    if(result.length===0){
        console.log("Không có ký tự số")
    }else{
        console.log(result.join(" "));
    }
}