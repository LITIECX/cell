
import {Ioc, rootInjector} from "./ioc";


export function Subscribe(target:any){ //无参装饰器

    // let injector: Ioc = rootInjector;
    // let provide: any = target;
    // injector.setProvider(provide, target);
    // injector.setInstance(provide,new target());  //订阅的实例化老在这里出错。
}


// export function Subscribe(injectOptions?: InjectOptions): (_constructor: any) => any {
//     有参装饰器
//
//     return function (_constructor: any): any {
//         let injector: Ioc = rootInjector;
//         let provide: any = _constructor;
//
//         if (injectOptions && injectOptions.injector) injector = injectOptions.injector;
//         if (injectOptions && injectOptions.provide) provide = injectOptions.provide;
//         injector.setProvider(provide, _constructor);
//         injector.setInstance(provide,new _constructor());
//         return _constructor;
//     };
// }
