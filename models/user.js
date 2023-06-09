const { Schema, SchemaType, model } = require("mongoose");

const userSchema = new Schema({
    userId: {
        type: Number,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    userTag: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
    updatedAt: Date,
});

userSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = {
    userModel: model("User", userSchema)
};