const { accountModel } = require('../models/staff')

const accountServices = {
    loginAccountService: async (email, password) => {
        try {
          const account = await accountModel.findOne({ email: email, password: password }).exec();
          if (account) {
            const data = {
              code: 200,
              data: account
            };
            return data;
          } else {
            const data = {
              code: 500
            };
            return data;
          }
        } catch (error) {
          console.log(error);
          const data = {
            code: 500
          };
          return data;
        }
      },
    createAccountService: async (data) => {
        try {
            const newAccount = new accountModel({
                username: data.username,
                password: data.password,
                numberPhone: data.numberPhone,
                email: data.email,
                address: data.address,
                role: data.role
            })
            const request = await newAccount.save()
            if (request) {
                return 200
            } else {
                return 500
            }
        } catch (error) {
            return 500
        }
    }
}

module.exports = { accountServices }