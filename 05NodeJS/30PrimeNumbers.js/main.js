
const primeCalculator = require('./primesToN');
const progressBar = require('./progressBar');


const N = process.argv[2] || 10; 
const bar = progressBar.createProgressBar(N);
const primes = primeCalculator(N,(current,total)=>{
    bar.update(current,total)
});
bar.stop(bar);

console.log(`First ${N} prime numbers:`, JSON.stringify(primes));
