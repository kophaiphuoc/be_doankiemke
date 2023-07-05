const { accountServices } = require('../services/staffService')

const accountControllers = {
    loginControllerService: async (req, res) => {
        const email = req.body.email
        const password = req.body.password
        await accountServices.loginAccountService(email, password).then((result) => {
            console.log(result)
            if (result.code != 200) {
                res.status(500).json({
                    code: 500,
                    mess: "Lỗi hệ thống"
                })
            } else {
                res.status(200).json({
                    code: 200,
                    data: result.data,
                    mess: "Đăng nhập thành công"
                })
            }
        }).catch((e) => {
            console.log(e)
            res.status(500).json({
                code: 500,
                mess: "Lỗi hệ thống"
            })
        })
    },
    createAccountService: (req, res) => {
        const data = req.body
        accountServices.createAccountService(data).then((result) => {
            if (result != 200) {
                res.status(500).json({
                    code: 500,
                    mess: "Lỗi hệ thống"
                })
            } else {
                res.status(200).json({
                    code: 200,
                    mess: "Đăng nhập thành công"
                })
            }
        }).catch((e) => {
            console.log(e)
            res.status(500).json({
                code: 500,
                mess: "Lỗi hệ thống"
            })
        })
    }
}

module.exports = { accountControllers }