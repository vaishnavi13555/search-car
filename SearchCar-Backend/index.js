const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');a
const app = express();
const port = 4000;

app.use(cors());

// Update the MongoDB URL for localhost
const url = 'mongodb://localhost:27017'; // Local MongoDB connection string
const database = 'admin'; // Updated database name to 'admin'
const client = new MongoClient(url);

app.use(express.json());

app.get('/data', async (req, res) => {
  try {
    const query = {};
    query.Fuel_type = req.query.fuelType;
    query.Brand = req.query.selectbrand;
    query.transmission = req.query.transmission;
    query.body_type = req.query.bodyType;

    let result = await client.connect();
    console.log("MongoDB connected locally");

    let db = result.db(database); // Use 'admin' database
    let collection = db.collection('car_info'); // Updated collection to 'car_info'
    let response = await collection.find(query).toArray();
    
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/brands', async (req, res) => {
  try {
    await client.connect();
    const db = client.db(database); // Use 'admin' database
    const collection = db.collection('carp'); // Updated collection to 'car_info'

    const brands = await collection.distinct('Brand');   
    res.json(brands);
  } catch (error) {
    res.json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
