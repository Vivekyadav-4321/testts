"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminCollection = void 0;
const mongoose = require('mongoose');
const adminSchema = require('./admin.admin');
mongoose.connect("mongodb://localhost/vas").then(() => {
    console.log("connected to MongoDB");
}).catch(() => {
    console.log("Unable to connect to MongoDB");
});
exports.adminCollection = mongoose.model("admin", adminSchema);
