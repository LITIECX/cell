
import {Ioc, rootInjector} from "./ioc";
import {LedSub} from "../cell/subscribe/LedSub";


export function SubTopic(params:any) {

    console.log(params);
    return function(target:any,name:any,desc:any){
        rootInjector.setSub(params,desc.value);
    }

}



