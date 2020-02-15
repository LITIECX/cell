import {SubTopic} from "../../src/SubTopic";
import {Injectable} from "../../src/Injectable";



@Injectable()
 class LedSub {


    @SubTopic("/one")
    public ledOne( data:any) {
        console.log("this is one"+data.toString());
    }


    @SubTopic("/two")
    public ledTwo(data:any){

        console.log("this is two"+data.toString());
    }

    @SubTopic("/three")
    public ledThree(){
        console.log("this is three");

    }
    public display(){
        console.log("this is display");
    }

}

export {LedSub};





