const payouts = [5.12, 1.08, 8.66];

const total = payouts.reduce((a,b)=>a+b,0);

document.getElementById("totalEarnings").innerHTML =
"$" + total.toFixed(2) + " CAD";