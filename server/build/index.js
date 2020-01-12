"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var login_router_1 = require("./routes/login-router");
var safe_router_1 = require("./routes/safe-router");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use(cookie_session_1.default({ keys: ['3232323232'] }));
        this.app.use(login_router_1.loginRouter);
        this.app.use(safe_router_1.safeRouter);
    }
    Server.prototype.start = function () {
        this.app.listen(3000, function () {
            console.log('Server is running');
        });
    };
    return Server;
}());
new Server().start();
