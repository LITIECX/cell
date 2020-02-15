/**
 * 设备端
 * 1. 创建输出数据格式   output data  out_data
 * 2. 创建输入数据格式   input  data  in_data
 * 3.发布订阅数据格式
 */

/**
 * 输出数据格式
 * @type {{w: string, name: string, switch: string}}
 */
var out_data = {
    "name": "led",
    "switch": "on",
    "w": "0.25"
};
/**
 * 输入数据格式
 * @type {{w: string, name: string, switch: string}}
 */
var in_data = {
    "name": "led",
    "switch": "on",
    "w": "0.25"
};

var mqtt = require('mqtt');

var client = mqtt.connect("http://127.0.0.1:1883");

client.on("connect", function () {//连接成功
    client.subscribe('in_led');//订阅输入指令
    console.log("client is connect");
});
setInterval(work, 3000);  //三秒发送一次数据

function work() {
    client.publish('/one', JSON.stringify(out_data));//发送数据
    client.publish('/three', JSON.stringify(out_data));//发送数据
    console.log("out_data is publish !");
}
client.on("message",function (topic,message) {
    if(topic=="in_led"){
        console.log("message"+message.toString());
    }
});

