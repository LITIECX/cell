import {LedSub} from "../cell/subscribe/LedSub";

import * as mqtt from 'mqtt';
import {rootInjector} from "./ioc";
import {smartLamp} from "../cell/subscribe/smartLamp";

/**
 * 存储订阅类
 */

let subInstance: any[] = [
    LedSub,
    smartLamp
];

/**
 * 初始化实例
 */

for (let list of subInstance) {
    rootInjector.setInstance(list, new list());
}
console.log(rootInjector);


let client = mqtt.connect("http://127.0.0.1:1883");
/**
 * 订阅主题
 */
client.on('connect', () => {
    let map = rootInjector.getSubMap();//得到所有订阅主题
    map.forEach((value, key) => {
        client.subscribe(key);//订阅输入指令
        console.log("Subscribe topic" + key);
    });
});

/**
 * 接收消息
 */
client.on('message', (topic, message) => {
    console.log("topic:" + topic);
    console.log(message.toString());
    let me:any = rootInjector.getSub(topic);
    me(message);
});









