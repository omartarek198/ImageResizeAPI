"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.rootDir = exports.output_dir = exports.input_dir = void 0;
var express_1 = __importDefault(require("express"));
var home_1 = __importDefault(require("./routes/home"));
var images_1 = __importDefault(require("./routes/images"));
exports.input_dir = "src//images//";
exports.output_dir = "src/thumbnails/";
exports.rootDir = __dirname;
var app = (0, express_1["default"])();
var port = 3000;
app.use("/", home_1["default"]);
app.use("/images", images_1["default"]);
app.listen(port, function () {
    console.log("server started :".concat(port));
});
exports["default"] = app;
