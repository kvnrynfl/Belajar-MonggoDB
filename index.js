const mongoose = require('mongoose');
require('dotenv').config();

(async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.DB_URL, { keepAlive: true }).then(() => console.log('Connected to DB !'));
    } catch (error) {
        console.log(`Error: ${error}`);
    }
})();
