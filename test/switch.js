var mqtt =require('_mqtt@3.0.0@mqtt/types');
var  data ={"name":"switch","switch":"1"};
var client =mqtt.connect("mqtt://test.mosquitto.org");
client.on('connect',function () {
    console.log("connect successful!");
});
var num =process.argv[2];
setTimeout(function () {
    if(num="0") {
        data ={"name":"switch","switch":"0"};
    }
    else{
        data ={"name":"switch","sw":"1"};
    }
    client.publish('switch',JSON.stringify(data));
    console.log("message publish"+JSON.stringify(data));
    client.end();
},3000);


