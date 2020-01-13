import "reflect-metadata";

const METHOD_METADATA = 'method';
const PATH_METADATA = 'path';

const Controller = (path: string): ClassDecorator => {
    return target => {
        Reflect.defineMetadata(PATH_METADATA, path, target);
    }
}

@Controller("/led")
class Data {


}

@Controller("led2")
class Led {

}


