let toan = parseFloat(prompt("nhập số điểm toan của bạn"));
let van = parseFloat(prompt("Nhập số điểm văn của bạn"));
let anh = parseFloat(prompt("Nhập số điểm anh của bạn"));
if (isNaN (toan) || isNaN (van) || isNaN (anh) || toan < 0 || van <0 || anh <0 || toan >10 || van >10 || anh >10 ) {
    console.log("vui long nhập điểm hợp lệ");
}else{
    let dtb = (toan + van + anh) /3;
    let hocLuc = dtb >= 8.0 ? "Giỏi":
                 dtb >= 6.5 ? "Khá":
                 dtb >= 5.0 ? "Trung bình" : "Yếu";
    console.log(`Điểm trung bình ${dtb.toFixed(2)}`) ;
    console.log(`Xep loai ${hocLuc}`)            
}
