const queryRetry = require('./02Retry'); 

describe('queryRetry', () => {
  it('should successfully resolve on the first attempt', async () => {
    const urlQuery = jest.fn().mockResolvedValue({ ok: true });
    const result = await queryRetry(urlQuery, 3, 1000, true);
    expect(urlQuery).toHaveBeenCalledTimes(1); 
    expect(result).toEqual({ ok: true }); 
  });

  it('should successfully resolve after multiple attempts', async () => {
    const urlQuery = jest.fn()
      .mockRejectedValueOnce(new Error('Failed attempt 1'))
      .mockRejectedValueOnce(new Error('Failed attempt 2'))
      .mockResolvedValue({ ok: true });
    const result = await queryRetry(urlQuery, 3, 1000, true);
    expect(urlQuery).toHaveBeenCalledTimes(3); 
    expect(result).toEqual({ ok: true });});

  it('should throw an error if all attempts fail', async () => {
    const urlQuery = jest.fn().mockRejectedValue(new Error('Failed attempt'));
    await expect(queryRetry(urlQuery, 3, 1000, true)).rejects.toThrow('Max retry exceeded');
    expect(urlQuery).toHaveBeenCalledTimes(4); 
  },7000);

  it('should resolve before the expected time without useIncrement', async ()=>{
    const expectedTime = 3000;
    const startTime = Date.now();
    const urlQuery = jest.fn()
      .mockRejectedValueOnce(new Error('Failed attempt 1'))
      .mockRejectedValueOnce(new Error('Failed attempt 2'))
      .mockResolvedValue({ ok: true });
    const result = await queryRetry(urlQuery, 3, 1000, false);
    const endTime = Date.now();
    const elapsedTime = endTime-startTime;
    expect(elapsedTime).toBeLessThanOrEqual(expectedTime)
  });
  it('should resolve after the expected time with useIncrement', async ()=>{
    const expectedTime = 10000;
    const startTime = Date.now();
    const urlQuery = jest.fn()
        .mockRejectedValueOnce(new Error('Failed attempt 1'))
        .mockRejectedValueOnce(new Error('Failed attempt 2'))
        .mockRejectedValueOnce(new Error('Failed attempt 3'))
        .mockRejectedValueOnce(new Error('Failed attempt 4'))
        .mockResolvedValue({ ok: true });
    const result = await queryRetry(urlQuery, 4, 1000, true);
    const endTime = Date.now();
    const elapsedTime = endTime-startTime;
    expect(elapsedTime).toBeGreaterThanOrEqual(expectedTime)
  },11000);
});
