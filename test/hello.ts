
import {Ioc, Subscribe} from "../src";


@Subscribe
class Cloth {
    public name: string = 'ltt';
    say(){
        console.log("hello world");
    }
}

@Subscribe
class Clothes {
    public name:string ='caijizhe'

    say(){
        console.log("hello world");
    }

}
@Subscribe
class Human {

}
let rootInjector =new Ioc();
let me =rootInjector.getInstance(Cloth);
let m =rootInjector.getInstance(Clothes);
console.log(rootInjector);
console.log(me.name);
console.log(m.name);
m.say();










