export class Port {
    ip: string;
    private_port: number;
    public_port: number;
    type: string;

    constructor(data: any) {
        this.ip = data.ip;
        this.private_port = data.private_port;
        this.public_port = data.public_port;
        this.type = data.type;
    }
}
