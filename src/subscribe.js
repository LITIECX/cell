"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Subscribe(target) {
    // let injector: Ioc = rootInjector;
    // let provide: any = target;
    // injector.setProvider(provide, target);
    // injector.setInstance(provide,new target());  //订阅的实例化老在这里出错。
}
exports.Subscribe = Subscribe;
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
//# sourceMappingURL=subscribe.js.map