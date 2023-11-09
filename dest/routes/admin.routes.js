"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
const express_1 = require("express");
const admin_login_1 = require("../controllers/admin.login");
exports.adminRouter = (0, express_1.Router)();
exports.adminRouter.get('/login', admin_login_1.adminLoginController);
