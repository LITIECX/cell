/**
 *定义一个容器类，用于保存实例
 */
class Ioc {

    private readonly SubMap: Map<any, any> = new Map();  //保存所有的订阅方法

    private readonly providerMap: Map<any, any> = new Map(); //保存原型类
    private readonly instanceMap: Map<any, any> = new Map();  //保存实例化的类


    public setProvider(key: any, value: any): void {
        if (!this.providerMap.has(key)) this.providerMap.set(key, value);
    }
    public getProvider(key: any): any {
        return this.providerMap.get(key);
    }

    public getSubMap() {
        return this.SubMap;
    }

    public setSub(key: any, value: any): void {
        if (!this.SubMap.has(key)) this.SubMap.set(key, value);
    }

    public getSub(key: any): void {
        if (this.SubMap.has(key)) {
            return this.SubMap.get(key);
        } else {
            return undefined;
        }
    }

    public setInstance(key: any, value: any): void {
        if (!this.instanceMap.has(key)) this.instanceMap.set(key, value);
    }

    public getInstance(key: any): any {

        if (this.instanceMap.has(key)) {
            return this.instanceMap.get(key);
        } else {
            return undefined;
        }
    }

}

/**
 *    导出类的对象
 */
export const rootInjector = new Ioc();

