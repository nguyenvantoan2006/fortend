let month = Number(prompt("Mời bạn nhập tháng: "));
 if(month <= 0 || month > 12){
     alert("Tháng không hợp lệ");
 } else {
     if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
         alert(`Tháng ${month} có 31 ngày`);
     } else if(month === 4 || month === 6 || month === 9 || month === 11){
         alert(`Tháng ${month} có 30 ngày`)
     } else{
         alert(`Tháng ${month} có 28 ngày hoặc 29 ngày năm nhuận`)
     }
 }