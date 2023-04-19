const mongoose = require('mongoose');
const { userModel } = require('./models/user.js')
require('dotenv').config();

(async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.DB_URL, { keepAlive: true }).then(() => console.log('Connected to DB !'));
    } catch (error) {
        console.log(`Error: ${error}`);
    }
})();

(async () => {
    // Create a new user post object
    const article = new userModel({
        userId: 594400446731517973,
        userName: 'Fannnn',
        userTag: 6315,
    });

    // Insert the article in our MongoDB database
    await article.save();
})();

