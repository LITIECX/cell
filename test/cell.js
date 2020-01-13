/**
 *
 *
 */

var cell = require('_mqtt@3.0.0@mqtt/types');
var client = cell.connect('mqtt://test.mosquitto.org');
client.on('connect', function () {
    client.subscribe('led');
    client.subscribe('switch');
    client.publish('topic', 'Hello topic');
});

var con ={
    "name":"",
    "sw":""
};

client.on('message', function (topic, message) {  //信息处理函数
   if(topic=="led") {
       console.log(message.toString());
   }
   if(topic=="switch")
   {
        con=JSON.parse(message.toString());
        if(con.sw="0"){
            client.publish("in_led","off");
            console.log("向led发送off");
        }else {
            client.publish("in_led","on");
            console.log("向led发送on");
        }
   }
});
