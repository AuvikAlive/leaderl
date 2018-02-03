const { saveApplicationToDB } = require('./saveApplicationToDB');
const { deleteApplicationFromDB } = require('./deleteApplicationFromDB');

test('saveApplicationToDB saves application to database', async () => {
  const email = 'test@leaderal.com';
  const phoneNumber = '+999999999';
  const firstName = 'john';
  const lastName = 'doe';

  try {
    await expect(
      saveApplicationToDB(email, phoneNumber, firstName, lastName)
    ).resolves.toBe(true);
    await deleteApplicationFromDB(email);
  } catch (error) {
    throw error;
  }
});
