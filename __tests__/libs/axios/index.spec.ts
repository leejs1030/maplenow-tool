import myAxios from '@libs/myaxios';

describe('my axios __tests__', () => {
  it('get __tests__', async () => {
    const res = await myAxios.get('/menus');
    expect(res.status).toBe(200);
  });
});
