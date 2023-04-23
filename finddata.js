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
    // Find a single user post
    const userFindFirst = await userModel.findOne({});
    console.log(userFindFirst);

    // Instead of using a standard find method
    const userFind1 = await userModel.findOne({ userName: "Kvnrynfl_" });
    console.log(userFind1);
    

    const userFind2 = await userModel.findOne({ userName: "Kvnrynfl_" }).populate("userName");
    console.log(userFind2);

    // Use the equivalent where() method
    const userFindWhere = await userModel.where("userName").equals("Kvnrynfl_");
    console.log(userFindWhere)

    // return nya id
    const userFind3 = await userModel.exists({ userName: "Kvnrynfl_" });
    console.log(userFind3)

    // paling mantap use ini
    const userFind = await userModel.find({ userName: "Kvnrynfl_" }).exec();
    console.log(userFind);
})();

