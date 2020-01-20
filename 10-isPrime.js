//memoization
pure function - deterministic
    f(x) => y
    f(x1) => y1

function add(x,y){
    return x + y;
}

var z = 100;
function add(x,y){
    return x + y + z;
}
add(10,20) => 130

z = 1000

add(10,20) => 1030

var isPrime = (function(){
    var cache = {};
    function checkPrime(n){
        console.log('processing ', n);
        for(var i = 2; i <= (n/2); i++)
            if (n % i === 0){
                return false;
            }
        return true;
    }
    function isPrime(n){
        if (typeof cache[n] !== 'undefined')
            return cache[n];
        cache[n] = checkPrime(n);
        return cache[n];
    }
    return isPrime;
})();


isPrime()