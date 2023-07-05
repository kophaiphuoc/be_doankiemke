const { productsService } = require('../services/productService')

const productController = {
    addProductControllers: (req, res) => {
        const data = req.body
        productsService.addProductService(data).then((result) => {
            if (result != 200) {
                res.status(500).json({
                    code: 500,
                    mess: "Lỗi hệ thống"
                })
            } else {
                res.status(200).json({
                    code: 200,
                    mess: "Lưu thành công"
                })
            }
        }).catch((e) => {
            console.log(e)
            res.status(500).json({
                code: 500,
                mess: e
            })
        })

    },
    deleteProductControllers: (req, res) => {
        const id = req.body.id
        productsService.deleteProductService(id).then((result) => {
            if (result != 200) {
                res.status(500).json({
                    code: 500,
                    mess: "Lỗi hệ thống"
                })
            } else {
                res.status(200).json({
                    code: 200,
                    mess: "Xóa thành công"
                })
            }
        }).catch((e) => {
            console.log(e)
            res.status(500).json({
                code: 500,
                mess: e
            })
        })
    },
    editProductControllers: (req, res) => {
        const data = req.body
        productsService.editProductService(data).then((result) => {
            if (result != 200) {
                res.status(500).json({
                    code: 500,
                    mess: "Lỗi hệ thống"
                })
            } else {
                res.status(200).json({
                    code: 200,
                    mess: "Chính sửa thành công"
                })
            }
        }).catch((e) => {
            console.log(e)
            res.status(500).json({
                code: 500,
                mess: e
            })
        })
    },
    findProductControllers:(req,res)=>{
        const code = req.params.code
        productsService.findProductService(code).then((result)=>{
            if (result.code != 200) {
                res.status(500).json({
                    code: 500,
                    mess: "Lỗi hệ thống"
                })
            } else {
                res.status(200).json({
                    code: 200,
                    mess: result.data
                })
            }
        }).catch((e)=>{
            console.log(e)
            res.status(500).json({
                code: 500,
                mess: e
            })
        })
    },
    getTypeProductControllers:(req,res)=>{
        const code = req.params.code
        productsService.getTypeProductService(code).then((result)=>{
            if (result.code != 200) {
                res.status(500).json({
                    code: 500,
                    mess: "Lỗi hệ thống"
                })
            } else {
                res.status(200).json({
                    code: 200,
                    mess: result.data
                })
            }
        }).catch((e)=>{
            console.log(e)
            res.status(500).json({
                code: 500,
                mess: e
            })
        })
    }
}

module.exports = { productController }