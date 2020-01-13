"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LedSub_1 = require("../cell/subscribe/LedSub");
var mqtt = require("mqtt");
var ioc_1 = require("./ioc");
ioc_1.rootInjector.setInstance("led", new LedSub_1.LedSub());
var client = mqtt.connect("http://47.107.111.14:1883");
client.on('connect', function () {
    var map = ioc_1.rootInjector.getSubMap(); //得到所有订阅主题
    map.forEach(function (value, key) {
        client.subscribe(key); //订阅输入指令
        console.log("Subscribe topic" + key);
    });
});
client.on('message', function (topic, message) {
    console.log("topic:" + topic);
    console.log(message.toString());
    var me = ioc_1.rootInjector.getSub(topic);
    // @ts-ignore
    me(message);
});
//# sourceMappingURL=main.js.map