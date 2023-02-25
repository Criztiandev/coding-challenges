const generateRandomPassword = (length) => {
  // generate a random password based on the length provided
  const password = Math.random().toString(36).slice(-length);
  return password;
};
