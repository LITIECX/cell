"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ioc_1 = require("./ioc");
var news_1 = require("./news");
ioc_1.myIoc.setFun(news_1.news);
console.log(ioc_1.myIoc);
var me = ioc_1.myIoc.data[0];
new me().init();
console.log(me);
ioc_1.demo();
console.log(ioc_1.getName());
//# sourceMappingURL=main.js.map