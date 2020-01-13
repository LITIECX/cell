"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ioc_1 = require("./ioc");
function SubTopic(params) {
    console.log(params);
    return function (target, name, desc) {
        ioc_1.rootInjector.setSub(params, desc.value);
    };
}
exports.SubTopic = SubTopic;
//# sourceMappingURL=SubTopic.js.map