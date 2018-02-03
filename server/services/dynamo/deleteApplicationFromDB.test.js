const { saveApplicationToDB } = require('./saveApplicationToDB');
const { deleteApplicationFromDB } = require('./deleteApplicationFromDB');

test('deleteApplicationFromDB removes user application from database', async () => {
  const email = 'test@example.com';
  const phoneNumber = '+999999999999';
  const firstName = 'John';
  const lastName = 'Doe';

  try {
    await saveApplicationToDB(email, phoneNumber, firstName, lastName);
    await expect(deleteApplicationFromDB(email)).resolves.toBe(true);
  } catch (error) {
    throw error;
  }
});
