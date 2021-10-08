module.exports.sum = function palindrom(str){
    str = str.toLowerCase();
    console.log(str == str.split('').reverse().join(''));
}
  
// palindrom('Ana')


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>...

module.exports.fibonaccee = function fibonache(n){
    const result = [0,1]
    
    for(let i = 2; i <=n; i++){
        const prevNum1 = result[i-1]
        const prevNum2 = result[i-2]
        result.push(prevNum1+prevNum2)
    }
    console.log(result[n])

}

// console.log(fibonache(8))
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

module.exports.factoreal = function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
// console.log(factorial(5))
  



