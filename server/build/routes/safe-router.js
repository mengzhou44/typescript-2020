"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_1 = require("./auth");
var safeRouter = express_1.Router();
exports.safeRouter = safeRouter;
safeRouter.get('/safe', auth_1.requireAuth, function (req, res) {
    res.send("\n       <div>\n             Sensitive Data here!\n          </div>\n      ");
});
