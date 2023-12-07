const taskFactorySample = (delay, resolve, val) => 
  () => new Promise((res, rej) => setTimeout(resolve ? res : rej, delay, val));

const runTasks = require('./01Pool'); 

describe('runTasks', () => {
  it('should execute tasks with the specified pool size', async () => {
    const tasks = [
      taskFactorySample(100, true, 1),
      taskFactorySample(100, true, 2),
      taskFactorySample(100, true, 3),
      taskFactorySample(100, true, 4),
    ];
    const poolSize = 2;
    const results = await runTasks(tasks, poolSize);
    expect(results).toEqual([
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 },
    ]);
  });

  it('should gracefully handle errors', async () => {
    const tasks = [
      taskFactorySample(100, true, 1),
      taskFactorySample(100, false, 'error1'),
      taskFactorySample(100, true, 2),
      taskFactorySample(100, false, 'error2'),
    ];
    const poolSize = 2;
    const results = await runTasks(tasks, poolSize);
    expect(results).toEqual([
      { value: 1 },
      { error: 'error1' },
      { value: 2 },
      { error: 'error2' },
    ]);
  });

  it('should work with an empty task list', async () => {
    const tasks = [];
    const poolSize = 2;
    const results = await runTasks(tasks, poolSize);
    expect(results).toEqual([]);
  });

  it('should work with a pool size larger than the number of tasks', async () => {
    const tasks = [
      taskFactorySample(100, true, 1),
      taskFactorySample(100, true, 2),
    ];
    const poolSize = 5;
    const results = await runTasks(tasks, poolSize);
    expect(results).toEqual([
      { value: 1 },
      { value: 2 },
    ]);
  });

  it('should work with a pool size of 1', async () => {
    const tasks = [
      taskFactorySample(100, true, 1),
      taskFactorySample(100, true, 2),
      taskFactorySample(100, true, 3),
      taskFactorySample(100, true, 4),
    ];
    const poolSize = 1;
    const results = await runTasks(tasks, poolSize);
    expect(results).toEqual([
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 },
    ]);
  });
});
