import {Port} from "./port";

export class Container {
    id: string;
    image: string;
    name: string;
    state: string;
    status: string;
    ports: any[];

    constructor(data: any) {
        this.id = data.id;
        this.image = data.image;
        this.name = data.name;
        this.state = data.state;
        this.status = data.status;
        this.ports = data.ports ? data.ports.map((port: any) => new Port(port)) : [];
    }
}
