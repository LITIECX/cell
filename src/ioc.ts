
export class Ioc {

  public parentInjector: Ioc;
  private readonly SubMap: Map<any, any> = new Map();
  private readonly instanceMap: Map<any, any> = new Map();


  public getSubMap(){
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

  public fork(): Ioc {
    const childInjector = new Ioc();
    childInjector.parentInjector = this;
    return childInjector;
  }


}


export const rootInjector = new Ioc();

