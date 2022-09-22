"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var supertest_1 = __importDefault(require("supertest"));
var index_1 = __importDefault(require("../index"));
var index_2 = require("../index");
var index_3 = require("../index");
var request = (0, supertest_1["default"])(index_1["default"]);
describe("Test endpoint (/api) is running", function () {
    it("gets api status", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get("/api")];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    console.log(response.status);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("Tests endpoint response to input", function () {
    it("tests on correct input format", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get("/api?width=100&height=300&name=1.jpg")];
                case 1:
                    response = _a.sent();
                    expect(response.text).toBe("100 300 1.jpg");
                    console.log(response.text);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("Tests endpoint response to input", function () {
    it("tests on incorrect input format", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get("/api?width=b&height=300a")];
                case 1:
                    response = _a.sent();
                    expect(response.text).toBe("error in input");
                    console.log(response.text);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("Tests endpoint response to input", function () {
    it("tests on negative values", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get("/api?width=-300&height=300")];
                case 1:
                    response = _a.sent();
                    expect(response.text).toBe("error in input");
                    console.log(response.text);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("Testing DoesImageExist function", function () {
    it("Passing an existent image", function () {
        expect((0, index_2.DoesImageExist)(index_3.input_dir + "1.jpg")).toBe(true);
    });
});
describe("Testing DoesImageExist function", function () {
    it("Passing a nonexistent image", function () {
        expect((0, index_2.DoesImageExist)(index_3.input_dir + "randomfilename")).toBe(false);
    });
});
