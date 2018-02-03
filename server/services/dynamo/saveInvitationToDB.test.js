const { saveInvitationToDB } = require('./saveInvitationToDB');
const { deleteInvitationFromDB } = require('./deleteInvitationFromDB');

test('saveInvitationToDB saves invitation to database', async () => {
  const email = 'test@leaderal.com';
  const phoneNumber = '+999999999';
  const firstName = 'john';
  const lastName = 'doe';
  const invitationCode = '12345678';

  try {
    await expect(
      saveInvitationToDB(
        email,
        invitationCode,
        phoneNumber,
        firstName,
        lastName
      )
    ).resolves.toBe(true);
    await deleteInvitationFromDB(email);
  } catch (error) {
    throw error;
  }
});
