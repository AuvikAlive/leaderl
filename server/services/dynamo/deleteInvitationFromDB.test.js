const { saveInvitationToDB } = require('./saveInvitationToDB');
const { deleteInvitationFromDB } = require('./deleteInvitationFromDB');

test('deleteInvitationFromDB removes user application from database', async () => {
  const email = 'test@example.com';
  const phoneNumber = '+999999999999';
  const firstName = 'John';
  const lastName = 'Doe';

  try {
    await saveInvitationToDB(email, phoneNumber, firstName, lastName);
    await expect(deleteInvitationFromDB(email)).resolves.toBe(true);
  } catch (error) {
    throw error;
  }
});
