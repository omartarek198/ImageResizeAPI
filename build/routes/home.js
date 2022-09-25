"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var home = express_1["default"].Router();
home.get("/", function (req, res) {
    res.send("Go to /images?width=100&height=300&name=fjord.jpg for an example");
    return;
});
exports["default"] = home;
