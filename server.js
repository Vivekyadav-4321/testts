const express = require('express')
const app = express()
const PORT = 3000 || process.env.PORT
const adminRouter = require("./controllers/admin.login")
const cookieParser = require('cookie-parser')
require('dotenv').config()

app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/api/admin/', adminRouter)

app.listen(PORT, () => {
    console.log("Server listening at " + PORT);
})