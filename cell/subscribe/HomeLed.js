"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 普通装饰器
 * @param target
 * @constructor
 */
function App(target) {
    target.prototype.name;
    target.prototype.init = function (arg1, arg2) {
        target.prototype.name = arg1;
        console.log("ltt" + arg1 + arg2);
    };
    target.version = "V1.1";
}
exports.App = App;
/**
 * 装饰器工厂
 * @constructor
 */
function Test(params) {
    console.log(params);
    return function (target, str) {
        console.log(str);
    };
}
exports.Test = Test;
function input(params) {
    return function (target, attr) {
        console.log(attr + "lttt");
        target[attr] = params;
    };
}
function data(params) {
    return function (target, attr, desc) {
        console.log(attr + "lttt");
        // target[attr]();
        desc.value();
    };
}
var HomeLed = /** @class */ (function () {
    function HomeLed() {
    }
    HomeLed.prototype.getData = function () {
        console.log("getData exe");
    };
    __decorate([
        data("/sub")
    ], HomeLed.prototype, "getData", null);
    return HomeLed;
}());
exports.HomeLed = HomeLed;
// console.log(HomeLed.version);
var home = new HomeLed();
// console.log(home.init('china','is'));
// console.log(home.name);
//# sourceMappingURL=HomeLed.js.map