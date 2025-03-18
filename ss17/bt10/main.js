let n = Number(prompt("Nhập một số:"));
let sqrt = Math.sqrt(n);
let result = Number.isInteger(sqrt) ? `${n} là số chính phương` : `${n} không phải số chính phương`;

console.log(result);
document.writeln(result);
alert(result)

