const express = require('express');
const sessions = require('../data/sessions.json');
const debug = require('debug')('app:AdminRouter');
const { MongoClient } = require('mongodb');

const AdminRouter = express.Router();

AdminRouter.route('/').get((req, res) => {
    const url = 'mongodb+srv://sourabhjadav7:n8VLVoPro48b15IX@globalmantics.uk0xb1e.mongodb.net?retryWrites=true&w=majority&appName=globalmantics';
    const dbName = 'globalmantics';

    (async function mongo() {
        let client;
        try {
            client = await MongoClient.connect(url);
            debug('Connected to MongoDB');

            const db = client.db(dbName);
            const response = await db.collection('sessions').insertMany(sessions);
            res.json(response);
        } catch (error) {
            console.error(error.stack);
            res.status(500).json({ error: 'Internal server error' });
        } finally {
            if (client) client.close();
        }
    })();
});

module.exports = AdminRouter;
