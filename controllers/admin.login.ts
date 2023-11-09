const router = require("express").Router()
import { Request, Response } from "express"
const appConfig = require("../constants/appConfig")
const responseMessages = require("../constants/messages")
const { adminCollection } = require('../models/zindex')
const jwt = require("jsonwebtoken")

export async function adminLoginController(req: Request, res: Response) {

    try {
        res.send("sent 12")
        const admin = await adminCollection.findOne({ email: req.body.email, password: req.body.password }, { email: 1, password: 1 })
        if (!admin) {
            return res.status(404).json({ message: responseMessages.ADMIN_NOT_FOUND })
        }
        else {
            const adminJWT = jwt.sign({ email: admin.email, password: admin.password }, process.env.JWT_TOKEN_SECRETE, { expiresIn: appConfig.JWT_EXPIRE })
            return res.cookie('admin_login_info', adminJWT, { maxAge: appConfig.COOKIES_MAX_AGE }).status(200).json({ message: responseMessages.ADMIN_LOGGED_IN, data: adminJWT })
        }
    } catch (err) {
        console.log("ERROR: " + __dirname);
        console.log(err);
    }
}
