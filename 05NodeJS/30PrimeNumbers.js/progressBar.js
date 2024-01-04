
function createProgressBar(N) {
  const barLength = 20;
  const progressBar = Array(barLength).fill(' ');
  const percentageSymbol = '%';

  return {
    update: function (value, total) {
      const progress = Math.floor((value / total) * barLength);
      for (let i = 0; i < progress; i++) {
        progressBar[i] = '\u2588';
      }
      const percentage = ((value / total) * 100).toFixed(2);
      process.stdout.cursorTo(0);
      process.stdout.write(`\x1b[1;36mCalculating prime numbers \x1b[1;32m[${progressBar.join('')}]\x1b[1;34m(${percentage}${percentageSymbol})\x1b[0m`);
    },
    stop: function () {
      process.stdout.clearLine();
      process.stdout.cursorTo(0);
      console.log(`\x1b[36mCalculating prime numbers [${progressBar.fill('=').join('')}](100%)`);
      console.log('\x1b[36mCalculation completed!');
    },
  };
}

module.exports = {
  createProgressBar,
};
