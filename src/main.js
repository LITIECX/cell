"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LedSub_1 = require("../cell/subscribe/LedSub");
var mqtt = require("mqtt");
var ioc_1 = require("./ioc");
var smartLamp_1 = require("../cell/subscribe/smartLamp");
/**
 * 存储订阅类
 */
var subInstance = [
    LedSub_1.LedSub,
    smartLamp_1.smartLamp
];
/**
 * 初始化实例
 */
for (var _i = 0, subInstance_1 = subInstance; _i < subInstance_1.length; _i++) {
    var list = subInstance_1[_i];
    ioc_1.rootInjector.setInstance(list, new list());
}
console.log(ioc_1.rootInjector);
var client = mqtt.connect("http://127.0.0.1:1883");
/**
 * 订阅主题
 */
client.on('connect', function () {
    var map = ioc_1.rootInjector.getSubMap(); //得到所有订阅主题
    map.forEach(function (value, key) {
        client.subscribe(key); //订阅输入指令
        console.log("Subscribe topic" + key);
    });
});
/**
 * 接收消息
 */
client.on('message', function (topic, message) {
    console.log("topic:" + topic);
    console.log(message.toString());
    var me = ioc_1.rootInjector.getSub(topic);
    me(message);
});
//# sourceMappingURL=main.js.map