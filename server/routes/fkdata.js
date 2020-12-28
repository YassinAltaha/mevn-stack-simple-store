const {MongoClient} = require('mongodb');

const express = require('express');
const path = require('path');

const router = express.Router();
router.use('/images/', express.static(path.join(__dirname , '../assets')));

  router.get('/', async (req, res) => {
    const client = await MongoClient.connect(
      'mongodb://127.0.0.1:27017/',
      {useNewUrlParser:true , useUnifiedTopology:true}
    );
    const db = client.db('vue-db');
    const products = await db.collection('products').find({}).toArray();
       res.status(200).json(products);
       client.close()
});

  router.get('/users/:userId/cart', async (req, res) => {
    const { userId } = req.params;
    const client = await MongoClient.connect(
      'mongodb://127.0.0.1:27017/',
      {useNewUrlParser:true , useUnifiedTopology:true}
    );
    const db = client.db('vue-db');
    const user = await db.collection('users').findOne({ id: userId });
    if(!user) return res.status(404).json("Could not find user");
    
    const products = await db.collection('products').find({}).toArray();
    const cartItemIds = user.cartItems;
      const cartItems = cartItemIds.map(id =>
      products.find(product => product.id=== id));
      res.status(200).json(cartItems);
    client.close();
});

router.get('/products/:productId', async (req, res) => {
    const {productId} = req.params;
    const client = await MongoClient.connect(
      'mongodb://127.0.0.1:27017/',
      {useNewUrlParser:true , useUnifiedTopology:true}
    );
    const db = client.db('vue-db');
    const product = await db.collection('products').findOne({id: productId});
    if(product){
        res.status(200).json(product);
    }else{
        res.status(404).json("product not found");
    }
       client.close();
});

router.post('/users/:userId/cart', async (req, res) => {
 const { userId } = req.params;
  const { productId } = req.body;
  const client = await MongoClient.connect(
    'mongodb://localhost:27017',
    { useNewUrlParser: true, useUnifiedTopology: true },
  );
  const db = client.db('vue-db');
  await db.collection('users').updateOne({ id: userId }, {
    $addToSet: { cartItems: productId },
  });
  const user = await db.collection('users').findOne({ id: userId });
  const cartItemIds = user.cartItems;
  const products = await db.collection('products').find({}).toArray();
  const cartItems = cartItemIds.map(id =>
    products.find(product => product.id === id));
  res.status(200).json(cartItems);
  client.close();
});

router.delete('/users/:userId/cart/:productId', async (req, res) =>{
    const {userId} = req.params;
    const {productId} = req.params;
    const client = await MongoClient.connect(
    'mongodb://localhost:27017',
    { useNewUrlParser: true, useUnifiedTopology: true },
  );
  const db = client.db('vue-db');
  await db.collection('users').updateOne({ id: userId }, {
    $pull: { cartItems: productId },
  });
  const user = await db.collection('users').findOne({ id: userId });
  const products = await db.collection('products').find({}).toArray();
  const cartItemIds = user.cartItems;
  const cartItems = cartItemIds.map(id =>
    products.find(product => product.id === id));
    res.status(200).json(cartItems);
  client.close();
})

module.exports = router;