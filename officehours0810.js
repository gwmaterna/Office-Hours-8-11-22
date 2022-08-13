for (let index = 0; index < 100; index+=10) {
    console.log(index);
}
for(let index=100; index>=50; index-=10) {
    console.log(`Decrement: ${index}`);
}

let x= 0;
while(x<= 10) {
    console.log(x);
    x++;
}
let y=1;

do {
    console.log(y);
    y++
} while(y<= 10);

let totalMinutes = 60;
//show that we stirred the pot every 5 minutes

for(let i = 0; i <= totalMinutes; i+=5) {
    console.log(`I stirred the pot at ${i} minutes.`)

}

console.log(`${2+10}`)

let bills = [10, 20, 30, 40, 50 ,100, 200]
// print out each seperately
for (let i=0; i< bills.length; i++) {
    console.log(`Bill: ${bills[i]}`)
}

//apply 22% tip if bill is less than or equal to 100
//else apply a tip of 20% if bill is greater than 100
// let bills = [10, 20, 30, 40, 50 ,100, 200]
// print out each seperately
for (let i=0; i< bills.length; i++) {
    if(bills[i] <= 100){
        console.log(`
        Bill: ${bills[i]}
        Tip (22%):${bills[i] * .22}
        `)
    } else {
        console.log(
        `
        Bill: ${bills[i]}
        Tip (20%): ${bills[i] * .20}
        `
        )
    }
}
