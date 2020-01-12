"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var loginRouter = express_1.Router();
exports.loginRouter = loginRouter;
loginRouter.get('/', function (req, res) {
    if (req.session && req.session.isLoggedIn) {
        res.send("\n       <div>\n          <h1>You are logged in.</h1>\n          <a href='/logout'> Logout </a>\n          </div>\n      ");
    }
    else {
        res.send("\n      <div>\n         <h1>Please login</h1>\n         <a href='/login'> Login </a>\n      </div> \n     ");
    }
});
loginRouter.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'hi@hi.com' && password === 'password') {
        req.session = {
            isLoggedIn: true
        };
        res.redirect('/');
    }
});
loginRouter.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
loginRouter.get('/login', function (req, res) {
    res.send("<form method='POST'>\n              <div>\n                    <label>Email</label>\n                    <input type='text' name='email' >\n                </div>\n                <div>\n                  <label>Password</label>\n                  <input type='password' name='password' >\n                </div>\n                <button>Login</button>\n            </form>");
});
