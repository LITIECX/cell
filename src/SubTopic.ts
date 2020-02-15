
import {rootInjector} from "./ioc";



export function SubTopic(params:any) {

    console.log(params);
    return function(target:any,name:any,desc:any){
        rootInjector.setSub(params,desc.value);
    }

}



