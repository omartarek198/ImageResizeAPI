"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var app = (0, express_1["default"])();
var port = 3000;
app.get('/api', function (req, res) {
    res.send('Hello, world!');
});
app.listen(port, function () {
    console.log("server started at localhost:".concat(port));
});
exports["default"] = app;
