let usd = prompt("nhập số tiền USD");
usd = Number(usd);
const rate =25000;
let vnd = usd * rate;
alert(usd + "USD =" + vnd.toLocaleString() + "VND");
document.writeln(+ usd +"USD ="+ vnd.toLocaleString() );
console.log(usd + "USD =" + vnd.toLocaleString() +"VND");