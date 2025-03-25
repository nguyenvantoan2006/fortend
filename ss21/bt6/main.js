let n = parseFloat(prompt("Nhập vào một số nguyên"));
for (let i = 1; i< Math.abs(n); i++){
    if(n % i === 0){
        console.log(`ước của ${n} là:`);
        console.log(i);
    }
}