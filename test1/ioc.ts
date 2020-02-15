class ioc {
    str:string;
    num:number;
    constructor(str,num){
        this.str=str;
        this.num=num;
    }
    data: any[]=[];
    setFun(hook: any) {
        this.data.push(hook);
    }
}

function demo() {
    this.name='dsf';
    console.log("this is demo");
}

function getName() {
    return this.name;
}

export var myIoc= new ioc("ioc",44);
export {demo,getName};

