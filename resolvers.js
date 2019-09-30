const user = {
  _id: 'asdf213a',
  name: 'John',
  picture: 'https://www.google.com',
  email: 'john@gmail.com',
};

module.exports = {
  Query: {
    me: () => user,
  },
};
