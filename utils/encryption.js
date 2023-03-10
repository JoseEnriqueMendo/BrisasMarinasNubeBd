const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  hashPassword: async (plainPassword) => {
    const hash = await bcrypt.hash(plainPassword, 10);
    return hash;
  },
};
