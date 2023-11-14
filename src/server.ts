import { adminRouter } from "./routes/admin.routes"

const express = require('express')
const app = express()
const PORT = 3000 || process.env.PORT
const cookieParser = require('cookie-parser')
require('dotenv').config()
app.post("/test", (req, res)=>{
    console.log("hi")
})
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/api/admin/', adminRouter)

app.listen(PORT, () => {
    console.log("Server listening at " + PORT);
})
