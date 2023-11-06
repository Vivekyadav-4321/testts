const mongoose = require('mongoose')
const adminSchema = require('./admin.schema')
mongoose.connect("mongodb://localhost:27017/vas").then(() => {
    console.log("connected to MongoDB");
}).catch(() => {
    console.log("Unable to connect to MongoDB");
})
const adminCollection = mongoose.model("admin", adminSchema)

module.exports = { adminCollection }

