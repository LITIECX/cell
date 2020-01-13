import {SubTopic} from "../../src/SubTopic";



// @Subscribe()
export class LedSub {


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

}





