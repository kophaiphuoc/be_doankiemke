const { productModel } = require('../models/products')
const productsService = {
    addProductService: async (data) => {
        try {
            const newModel = new productModel({
                nameProduct: data.nameProduct,
                codeProduct: data.codeProduct,
                codeTypeProduct: data.codeTypeProduct,
                typeProduct: data.typeProduct,
                producerProduct: data.producerProduct,
                sizeProduct: data.sizeProduct,
                quantityProduct: data.quantityProduct,
                descriptionProduct: data.descriptionProduct
            })
            const request = await newModel.save()
            if (request) {
                return 200
            } else {
                return 500
            }
        } catch (error) {
            console.log(error)
            return 500
        }
    },
    deleteProductService: async (id) => {
        try {
            const request = await productModel.findByIdAndDelete({ _id: id })
            if (request) {
                return 200
            } else {
                return 500
            }
        } catch (error) {
            console.log(error);
            return 500
        }
    },
    editProductService: async (data) => {
        const id = data.id
        const updateMany = data.data
        try {
            const request = await productModel.findByIdAndUpdate(id, updateMany)
            if (request) {
                return 200
            } else {
                return 500
            }
        } catch (error) {
            console.log(error);
            return 500
        }
    },
    findProductService: async (code) => {
        try {
            const request = await productModel.findOne({ codeProduct: code })
            if (request) {
                const data = {
                    code: 200,
                    data: request
                }
                return data
            } else {
                const data = {
                    code: 500
                }
                return data
            }
        } catch (error) {
            const data = {
                code: 500
            }
            console.log(error);
            return data
        }
    },
    getTypeProductService: async (code) => {
        try {
            const request = await productModel.find({ codeTypeProduct: code })
            if (request) {
                const data = {
                    code: 200,
                    data: request
                }
                return data
            } else {
                const data = {
                    code: 500
                }
                return data
            }
        } catch (error) {
            const data = {
                code: 500
            }
            console.log(error);
            return data
        }
    }
}

module.exports = { productsService }