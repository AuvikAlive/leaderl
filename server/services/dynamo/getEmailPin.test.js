const { getEmailPin } = require('./getEmailPin');

test('getEmailPin returns email pin', async () => {
  const email = 'auvik1@yahoo.com';

  try {
    await expect(getEmailPin(email)).resolves.toBeDefined();
  } catch (error) {
    throw error;
  }
});
