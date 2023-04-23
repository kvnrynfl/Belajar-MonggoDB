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
    const article = await Blog.findById("6247589060c9b6abfa1ef530").exec();
    article.title = "Updated Title";
    await article.save();
    console.log(article);
})();





