import {rootInjector} from "./ioc";

/**
 * 完成类的注入
 * @constructor
 */
export function Injectable(): (_constructor: any) => any {
    return function (_constructor: any): any {
        rootInjector.setProvider(_constructor, _constructor);
        return _constructor;
    };
}
