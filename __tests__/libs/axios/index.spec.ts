import axios from '@libs/axios';

describe('my axios __tests__', () => {
  it('get __tests__', async () => {
    const res = await axios.get('/menus');
    expect(res.status).toBe(200);
  });
});
