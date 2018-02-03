const { saveApplicationToDB } = require('./saveApplicationToDB');
const { applicationExistsInDB } = require('./applicationExistsInDB');
const { deleteApplicationFromDB } = require('./deleteApplicationFromDB');

test('applicationExistsInDB returns false when user does not exist', async () => {
  const email = 'xyz321';

  try {
    await expect(applicationExistsInDB(email)).resolves.toBe(false);
  } catch (error) {
    throw error;
  }
});

test('applicationExistsInDB returns true when user exists', async () => {
  const email = 'test@example.com';
  const phoneNumber = '+999999999999';
  const firstName = 'John';
  const lastName = 'Doe';

  try {
    await saveApplicationToDB(email, phoneNumber, firstName, lastName);
    await expect(applicationExistsInDB(email)).resolves.toBe(true);
    await deleteApplicationFromDB(email);
  } catch (error) {
    throw error;
  }
});
