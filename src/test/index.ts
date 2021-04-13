const promiseTest = (): Promise<number> =>
  new Promise((resolve, reject) => {
    resolve(1);
  });

describe('Example async/await test', () => {
  it('awaits promise', async () => {
    const x = await promiseTest();
    expect(x).toEqual(1);
    // assert.equal(1, 2);
    // assert.equal(x, 1);
  });
});
