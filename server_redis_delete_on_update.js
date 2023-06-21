const express = require('express');
const { createClient } = require('redis');

const app = express();
const client = createClient();

const productRedisKey = "products";
const productList = ['Produto 1', 'Produto 2'];

const getAllProducts = async () => {
    const time = Math.random() * 5000;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productList);
        }, time);
    });
}

app.get('/saved', async (req, res) => {
    productList.push('Produto 3');
    await client.del(productRedisKey);
    res.send({ ok: 'ok' });
});

app.get('/', async (req, res) => {
    let products = await client.get(productRedisKey);

    if (products) return res.send(JSON.parse(products));
    
    products = await getAllProducts();
    await client.set(productRedisKey, JSON.stringify(products));
    res.send(products);
});

const startup = async () => {
    await client.connect();

    app.listen(3000, () => {
        console.log('server running...');
    });
}

startup();
