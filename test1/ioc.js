"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ioc = /** @class */ (function () {
    function ioc(str, num) {
        this.data = [];
        this.str = str;
        this.num = num;
    }
    ioc.prototype.setFun = function (hook) {
        this.data.push(hook);
    };
    return ioc;
}());
function demo() {
    this.name = 'dsf';
    console.log("this is demo");
}
exports.demo = demo;
function getName() {
    return this.name;
}
exports.getName = getName;
exports.myIoc = new ioc("ioc", 44);
//# sourceMappingURL=ioc.js.map