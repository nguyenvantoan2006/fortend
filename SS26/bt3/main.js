function filterValiEmails(arr){
    if(!Array.isArray(arr)){
        return"Dữ liệu không hợp lệ ";
        
    }
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let result = arr.filter(email => typeof email ==="string" && emailRegex.test(email));
    return result.length > 0 ? result:"mang khong co phan tu nao";
    
}
console.log (filterValiEmails(["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"]));
console.log (filterValiEmails([]));
console.log (filterValiEmails("abc"));