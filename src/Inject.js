"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ioc_1 = require("./ioc");
/**
 * 通过setter完成属性注入
 * @constructor
 */
function Inject() {
    return function (_constructor, propertyName) {
        var propertyType = Reflect.getMetadata('design:type', _constructor, propertyName);
        var instance = ioc_1.rootInjector.getInstance(propertyType);
        if (!instance) {
            var providerClass = ioc_1.rootInjector.getProvider(propertyType);
            instance = new providerClass();
            ioc_1.rootInjector.setInstance(propertyType, instance);
        }
        _constructor[propertyName] = instance;
        return _constructor[propertyName];
    };
}
exports.Inject = Inject;
//# sourceMappingURL=Inject.js.map