const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const dotenv = require('dotenv');
dotenv.config();
const { MongoClient } = require('mongodb');
const uri = process.env.URI;

const client = new MongoClient(uri);


let _db;

const initDb = async () => {
    if (_db) {
        console.log('DB is already initialized!');
        return _db;
    }
    
    try {
        await client.connect();
        _db = client;
        return _db;
    } catch (e) {
        console.error('Error:', e);
        throw e; 
    }
};

const getDb = () => {
    if (!_db) {
        throw Error('DB is not initialized');
    }
    return _db;
};


module.exports = { initDb, getDb };