import {ClassType} from "jackson-js/dist/@types";
import {JsonParser, ObjectMapper} from "jackson-js";

export class JacksonParseUtil {

    static parseStringObjectArray(jsonArray: string, classType: ClassType<any> ) {
        return new JsonParser().parse(jsonArray, {
            mainCreator: () => [Array, [classType]]
        });

    }

    static parseStringObject(json: string, classType: ClassType<any> ) {
        return new JsonParser().parse(json, {
            mainCreator: () => [Array, classType]
        });
    }

    static parseJSONObjectArray(jsonArray: Array<any>, classType: ClassType<any> ) {
        return new JsonParser().transform(jsonArray, {
            mainCreator: () => [Array, [classType]]
        });

    }
    static parseJSONObject(jsonObject: Object, classType: ClassType<any>) {
        return new JsonParser().transform(jsonObject, {
            mainCreator: () => [classType]
        });
    }

    static stringifyJacksonData(data: any): string {
        return new ObjectMapper().stringify(data);

    }

}
