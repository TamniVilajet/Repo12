// Only change code below this line
function sumFibonacci(num) {
    var fiboNums = [1,1];
    var nextNum = fiboNums[fiboNums.length-2] + fiboNums[fiboNums.length-1];
    var sum = 0;
    if(num < 0){
        return 0;
    } else {

    while(nextNum <= num) {
        fiboNums.push(nextNum);
        nextNum = fiboNums[fiboNums.length-2] + fiboNums[fiboNums.length-1];
    }
    var temp = fiboNums;

    for(var i = 0; i<=fiboNums.length; i++) {
        if(num === 1) {
            return 1;
        }
        else if(fiboNums[i] % 2 === 1) {
        sum += fiboNums[i];
            }
        }
        return sum;
    }
    
}

// Only change code above this line
console.log(sumFibonacci(1)); // Change this line
console.log(sumFibonacci(10)); 
console.log(sumFibonacci(20)); 
console.log(sumFibonacci(4)); 
console.log(sumFibonacci(-5)); 
module.exports = sumFibonacci;