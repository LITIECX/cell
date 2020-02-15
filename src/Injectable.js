"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ioc_1 = require("./ioc");
/**
 * 完成类的注入
 * @constructor
 */
function Injectable() {
    return function (_constructor) {
        ioc_1.rootInjector.setProvider(_constructor, _constructor);
        return _constructor;
    };
}
exports.Injectable = Injectable;
//# sourceMappingURL=Injectable.js.map