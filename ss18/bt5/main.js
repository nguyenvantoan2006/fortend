
let experience = parseFloat(prompt("Nhập số năm kinh nghiệm:"));
let level = isNaN(experience) || experience < 0 ? "Vui lòng nhập số hợp lệ!" :
            experience < 1 ? "Mới vào nghề" :
            experience <= 3 ? "Nhân viên có kinh nghiệm" :
            experience <= 6 ? "Chuyên viên" : 
            "Quản lý";
console.log(level);
