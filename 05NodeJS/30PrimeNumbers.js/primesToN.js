function sieveOfEratostenes(n,progressCallback) {
    n = parseFloat(n);
    if (typeof(n) !== "number" || n<0){
        throw new Error('Invalid Input')
    }
    const isPrime = new Array(Math.ceil(n) + 1).fill(true);

    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
        progressCallback(i, n);
    }

    return primes;
}

module.exports=sieveOfEratostenes;