function capitalizeFirstLetter(str) {
    
    return str.split(' ')   
              .map(word => word.charAt(0).toUpperCase() + word.slice(1)) //
              .join(' '); 
}


const input = prompt("Nhập một chuỗi để chuyển ký tự đầu mỗi từ thành chữ in hoa:");
const result = capitalizeFirstLetter(input);
alert(result);  
