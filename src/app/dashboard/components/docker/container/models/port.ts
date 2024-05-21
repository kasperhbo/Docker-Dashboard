import {JsonProperty} from "jackson-js";

export class Port {
    //
    // ip: string;
    // private_port: number;
    // public_port: number;
    // type: string;

    @JsonProperty({
        value: 'id'
    })
    id: string;

    @JsonProperty({
        value: 'private_port'
    })
    privatePort: number;

    @JsonProperty({
        value: 'public_port'
    })
    publicPort: number;

    @JsonProperty({
        value: 'type'
    })
    type: string;
}
