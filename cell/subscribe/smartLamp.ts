import {SubTopic} from "../../src/SubTopic";
import {Injectable} from "../../src/Injectable";
import {Inject} from "../../src/Inject";
import {LedSub} from "./LedSub";
import 'reflect-metadata';


@Injectable()
class smartLamp {
    @Inject()
    private led:LedSub;

    @SubTopic("/one/smart")
    public ledOne( data:any) {
        console.log("this is one"+data.toString());
    }

    @SubTopic("/two/smart")
    public ledTwo(data:any){

        console.log("this is two"+data.toString());
    }

    @SubTopic("/three/smart")
    public ledThree(){
        console.log("this is three");
    }

}

export {smartLamp};
