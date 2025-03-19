let gio = parseInt(prompt("Nhập giờ (0-23):"));
let phut = parseInt(prompt("Nhập phút (0-59):"));
let giay = parseInt(prompt("Nhập giây (0-59):"));

if (
    gio >= 0 && gio <= 23 &&
    phut >= 0 && phut <= 59 &&
    giay >= 0 && giay <= 59
) {
    let buoi = gio >= 12 ? "PM" : "AM";
    let gio12h = gio % 12;
    if (gio12h === 0) {
        gio12h = 12; 
    }

    console.log(`Thời gian: ${gio12h}:${phut.toString().padStart(2, '0')}:${giay.toString().padStart(2, '0')} ${buoi}`);
} else {
    console.log("Giá trị nhập không hợp lệ!");
}
