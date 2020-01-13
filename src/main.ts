
import {LedSub} from "../cell/subscribe/LedSub";
import * as mqtt from 'mqtt';
import {Ioc, rootInjector} from "./ioc";


rootInjector.setInstance("led",new LedSub());
let client =mqtt.connect("http://47.107.111.14:1883");


client.on('connect',()=>{
    let map =rootInjector.getSubMap();//得到所有订阅主题
    map.forEach((value, key) => {
        client.subscribe(key);//订阅输入指令
        console.log("Subscribe topic" +key);
    });

});


client.on('message',(topic,message)=>{
    console.log("topic:"+topic);
    console.log(message.toString());
    let me =rootInjector.getSub(topic);
    // @ts-ignore
    me(message);
});









