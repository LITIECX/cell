
import {demo, getName, myIoc} from "./ioc";
import {news} from "./news";


myIoc.setFun(news);
console.log(myIoc);
let me= myIoc.data[0];
new me().init();
console.log(me);
demo();
console.log(getName());



