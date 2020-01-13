import {rootInjector, Subscribe} from "../../src";

/**
 * 普通装饰器
 * @param target
 * @constructor
 */
export  function  App(target:any) {
    target.prototype.name;
    target.prototype.init = (arg1,arg2)=>{
        target.prototype.name =arg1;
        console.log("ltt"+arg1+arg2);
    }
    target.version =`V1.1`;
}

/**
 * 装饰器工厂
 * @constructor
 */
export function Test(params:string) {
    console.log(params);
    return function (target:any,str:any) {
        console.log(str);

    }
}

 function input(params:any) {
    return function (target:any,attr :any) {
        console.log(attr+"lttt");
        target[attr] = params;
    }
}

function data(params:any) {
    return function (target:any,attr :any,desc:any) {
        console.log(attr+"lttt");
        // target[attr]();
        desc.value();
    }
}


export class HomeLed {
    public name:string;
    constructor(){}
    @data("/sub")
    getData(){
        console.log("getData exe");
    }


}


// console.log(HomeLed.version);
let  home  = new HomeLed();
// console.log(home.init('china','is'));
// console.log(home.name);




