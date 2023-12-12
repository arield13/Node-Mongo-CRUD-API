//const Product = require('../models/productModel');
let Products = [
    { id: 1, name: 'First Product' },
    { id: 2, name: 'Second Product' }
];

async function getAllProducts(req, res) {
    try {
        const _products = await Products;
        res.json(_products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function getProductById(req, res) {
    try {
        const id = parseInt(req.params.id);
        const product = await Products.find( pr => pr.id === id);
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function createProduct( req, res)  {
    // Endpoint to create a new product
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json(newItem);
}

async function updateProduct(req, res) {
    // Endpoint to update an existing product
    const id = parseInt(req.params.id);
    const updatedItem = req.body;
    let itemIndex = items.findIndex(item => item.id === id);
    if (itemIndex === -1) {
        return res.status(404).send('Item not found');
    }
    items[itemIndex] = { ...items[itemIndex], ...updatedItem };
    res.json(items[itemIndex]);
}

async function deleteProduct(req, res) {
    // Endpoint to delete an product by ID
    const id = parseInt(req.params.id);
    const deletedItem = items.find(item => item.id === id);
    if (!deletedItem) {
        return res.status(404).send('Item not found');
    }
    items = items.filter(item => item.id !== id);
    res.json(deletedItem);
}

// Implement other CRUD operations similarly

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};
