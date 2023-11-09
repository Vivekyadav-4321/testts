const mongoose = require('mongoose')
const adminSchema = require('./admin.admin')
mongoose.connect("mongodb://localhost/vas").then(() => {
    console.log("connected to MongoDB");
}).catch(() => {
    console.log("Unable to connect to MongoDB");
})
export const adminCollection = mongoose.model("admin", adminSchema)


