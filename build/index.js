"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var sharp = require('sharp');
var app = (0, express_1["default"])();
var port = 3000;
app.get("/api", function (req, res) {
    var W = 0;
    var H = 0;
    var name = "";
    W = Number(req.query.width);
    H = Number(req.query.height);
    name = req.query.name;
    if (W == NaN || H == NaN || name == undefined || W < 0 || H < 0) {
        res.send("error in input");
    }
    else {
        resize(W, H, name);
        res.send(W + " " + H + " " + name);
    }
});
app.listen(port, function () {
    console.log("server started at localhost:".concat(port));
});
function resize(width, height, name) {
    sharp('D:\\backend\\ImageResize\\src\\1.jpg')
        .resize(width, height)
        .toFile('output.jpg', function () {
        // output.jpg is a 300 pixels wide and 200 pixels high image
        // containing a scaled and cropped version of input.jpg
    });
}
exports["default"] = app;
