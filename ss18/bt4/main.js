let number = (prompt("Nhập số từ 0-9"));
let result;

switch (number){
    case "1":
        result = "Số Một"
        break;
    case "2":
        result = "Số Hai"
        break;
    case "3":
        result = "Số Ba"
        break;
    case "4":
        result = "Số Bốn"
        break;
    case "5":
        result = "Số Năm"
        break;
    case "6":
        result = "Số Sáu"
        break;
    case "7":
        result = "Số Bảy"
        break;
    case "8":
        result = "Số Tám"
        break;
    case "9":
        result = "Số Chín"
        break;
    default:
        result = "Vui lòng nhập chính xác số từ 0-9:";
    
    

}
console.log(result);