"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ioc = /** @class */ (function () {
    function Ioc() {
        this.SubMap = new Map();
        this.instanceMap = new Map();
    }
    Ioc.prototype.getSubMap = function () {
        return this.SubMap;
    };
    Ioc.prototype.setSub = function (key, value) {
        if (!this.SubMap.has(key))
            this.SubMap.set(key, value);
    };
    Ioc.prototype.getSub = function (key) {
        if (this.SubMap.has(key)) {
            return this.SubMap.get(key);
        }
        else {
            return undefined;
        }
    };
    Ioc.prototype.setInstance = function (key, value) {
        if (!this.instanceMap.has(key))
            this.instanceMap.set(key, value);
    };
    Ioc.prototype.getInstance = function (key) {
        if (this.instanceMap.has(key)) {
            return this.instanceMap.get(key);
        }
        else {
            return undefined;
        }
    };
    Ioc.prototype.fork = function () {
        var childInjector = new Ioc();
        childInjector.parentInjector = this;
        return childInjector;
    };
    return Ioc;
}());
exports.Ioc = Ioc;
exports.rootInjector = new Ioc();
//# sourceMappingURL=ioc.js.map