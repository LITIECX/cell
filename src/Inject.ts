import {rootInjector} from "./ioc";

/**
 * 通过setter完成属性注入
 * @constructor
 */
export function Inject(): (_constructor: any, propertyName: string) => any {
    return function (_constructor: any, propertyName: string): any {
        const  propertyType: any = Reflect.getMetadata('design:type', _constructor, propertyName);
        let instance = rootInjector.getInstance(propertyType);
        if (!instance) {
           let providerClass =rootInjector.getProvider(propertyType);
            instance = new providerClass();
            rootInjector.setInstance(propertyType, instance);
        }
        _constructor[propertyName] = instance;

        return (_constructor as any)[propertyName];
    };
}
