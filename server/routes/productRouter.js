const express = require('express')

const router = express.Router()

const Product = require('../models/productModel')


router.get('/products', async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).send({ data: products })
    } catch (err) {
        res.status(400).send({ error: err })
    }
})

router.post("/products", async (req, res) => {
    try {
        const { name, description, price, category, imageUrl } = req.body;
        const newProduct = new Product({
            name,
            desciption:description,
            price,
            category,
            imageUrl
        });

        await newProduct.save();
        res.status(200).json({ message: "Product created successfully.", product: newProduct });
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: err.message });
    }
});


// router.post("/products", async (req, res) => {
//     try {
//         console.log("new product")
//         const { name,
//             imageUrl,
//             price,
//             description,
//             category } = req.body
//         const newProduct = new Product({ name, imageUrl, price, description,category:[{name:category}]})
//         newProduct.save()
//         console.log(newProduct)
//     } catch (err) {
//         console.log(err)
//         res.status(400).send({ error: err })
//     }
// })
// router.get('/products-by-categories', async (req, res) => {
//     try {
//         const products = await Product.aggregate([
//             { $match: {} },
//             {
//                 $group: {
//                     _id: '$category',
//                     products: { $push: '$$ROOT' }
//                 }
//             },
//             { $project: { name: '$_id', products: 1, _id: 0 } }
//         ])
//         res.status(200).send({ data: products })
//     } catch (err) {
//         res.status(400).send({ error: err })
//     }
// })
router.get('/products-by-categories', async (req, res) => {
    try {
        const products = await Product.aggregate([
            {
                $group: {
                    _id: '$category',
                    products: { $push: '$$ROOT' }
                }
            },
            { $project: { category: '$_id', products: 1, _id: 0 } }
        ]);
        res.status(200).json({ data: products });
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: err.message });
    }
});

module.exports = router