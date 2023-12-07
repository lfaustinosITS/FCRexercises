
const runTasks = (tasks, pool_size) => {
  if (tasks.length < 1) {
    return [];
  }

  return new Promise(async (resolve, reject) => {
    const results = new Array(tasks.length);
    let runningTasks = 0;
    let nextTaskIndex = 0;

    const executeTask = async (taskIndex) => {
      if (taskIndex >= tasks.length) {
        return;
      }

      const task = tasks[taskIndex];
      runningTasks++;
      try {
        results[taskIndex] = { value: await task() };
      } catch (error) {
        results[taskIndex] = { error: error };
      }
      runningTasks--;

      if (runningTasks === 0 && nextTaskIndex >= tasks.length) {
        resolve(results);
      } else {
        executeTask(nextTaskIndex);
        nextTaskIndex++;
      }
    };

    for (let i = 0; i < Math.min(pool_size, tasks.length); i++) {
      executeTask(nextTaskIndex);
      nextTaskIndex++;
    }
  });
};

module.exports = runTasks;

