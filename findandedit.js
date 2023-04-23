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
    const userFind = await userModel.findOne({ userName: "Kvnrynfl_" }).exec();
    userFind.userName = "testketiga";
    await userFind.save();
})();

