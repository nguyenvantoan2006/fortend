let month = Number(prompt("Mời bạn nhập tháng: "));
 if(month <= 0 || month > 12){
     alert("Tháng không hợp lệ");
 } else {
     if(month >= 1 && month <=3){
         alert("Mùa xuân");
     } else if(month >= 4 && month <= 6){
         alert("Mùa hạ")
     } else if(month >= 7 && month <= 9){
         alert("Mùa thu")
     }else {
         alert("Mùa đông")
     }
 }