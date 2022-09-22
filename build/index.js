"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
exports.DoesImageExist = exports.output_dir = exports.input_dir = void 0;
var express_1 = __importDefault(require("express"));
// or
exports.input_dir = "src//images//";
exports.output_dir = "src/thumbnails/";
var fs = require("fs");
var sharp = require("sharp");
var app = (0, express_1["default"])();
var port = 3000;
app.get("/api", function (req, res) {
  var W = 0;
  var H = 0;
  var name = "";
  W = Number(req.query.width);
  H = Number(req.query.height);
  name = req.query.name;
  if (isNaN(W) || isNaN(H) || name == undefined || W < 0 || H < 0) {
    res.send("error in input");
  } else {
    if (!DoesImageExist(exports.input_dir + name)) {
      res.send("Image does not exist");
    } else {
      var out_name = W + "_" + H + "_" + name;
      if (DoesImageExist(exports.output_dir + out_name)) {
        //use cached images
      } else {
        resize(W, H, name);
        //    var img = fs.readFileSync("thumbnails/"+out_name)
        res.send(W + " " + H + " " + name);
        //   res.sendFile("thumbnails/"+out_name, { root: __dirname })
        //   res.end(img, 'binary')
      }
    }
  }
});
app.listen(port, function () {
  console.log("server started at localhost:".concat(port));
});
function resize(width, height, name) {
  var out_name = width + "_" + height + "_" + name;
  sharp(exports.input_dir + name)
    .resize(width, height)
    .toFile(exports.output_dir + out_name, function () {});
}
function DoesImageExist(path) {
  try {
    if (fs.existsSync(path)) {
      return true;
    }
  } catch (err) {
    return false;
  }
  return false;
}
exports.DoesImageExist = DoesImageExist;
exports["default"] = app;
