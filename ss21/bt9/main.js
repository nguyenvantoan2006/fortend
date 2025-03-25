let num = parseFloat(prompt("Nhập một số nguyên bất kì"));
if(!isNaN(num)&& Number.isInteger(num)) {
    if ( num <2){
        console.log(`${num} không phải số nguyên tố`);
    }else{
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0){
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(`${num} là số nguyên tố.`);
        } else {
            console.log(`${num} không phải số nguyên tố.`);
        }
    }
}else{
    console.log("Vui lòng nhập số nguyên hợp lệ");
}