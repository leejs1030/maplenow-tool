import menus from '@src/menus';

describe('test for menus', () => {
  it('get menus from nexon now', async () => {
    const ret = await menus.getMenus();
    expect(Array.isArray(ret)).toBeTruthy();
    ret.forEach((e: { children: unknown }) => expect(Array.isArray(e.children)).toBeTruthy());
  });
});
