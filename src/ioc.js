"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *定义一个容器类，用于保存实例
 */
var Ioc = /** @class */ (function () {
    function Ioc() {
        this.SubMap = new Map(); //保存所有的订阅方法
        this.providerMap = new Map(); //保存原型类
        this.instanceMap = new Map(); //保存实例化的类
    }
    Ioc.prototype.setProvider = function (key, value) {
        if (!this.providerMap.has(key))
            this.providerMap.set(key, value);
    };
    Ioc.prototype.getProvider = function (key) {
        return this.providerMap.get(key);
    };
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
    return Ioc;
}());
/**
 *    导出类的对象
 */
exports.rootInjector = new Ioc();
//# sourceMappingURL=ioc.js.map