"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function requireAuth(req, res, next) {
    if (req.session && req.session.isLoggedIn) {
        next();
    }
    else {
        res.status(403).send('Not Permitted');
    }
}
exports.requireAuth = requireAuth;
