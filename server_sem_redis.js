const express = require('express');

const app = express();

const productRedisKey = "products";

const getAllProducts = async () => {
    const time = Math.random() * 5000;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['Produto 1', 'Produto 2']);
        }, time);
    });
}

app.get('/', async (req, res) => {
    products = await getAllProducts();
    res.send(products);
});

const startup = async () => {
    app.listen(3000, () => {
        console.log('server running...');
    });
}

startup();
