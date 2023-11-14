"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin_routes_1 = require("./routes/admin.routes");
const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const cookieParser = require('cookie-parser');
require('dotenv').config();
app.post("/test", (req, res)=>{
    console.log("hi")
})
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api/admin/', admin_routes_1.adminRouter);
app.listen(PORT, () => {
    console.log("Server listening at " + PORT);
});
