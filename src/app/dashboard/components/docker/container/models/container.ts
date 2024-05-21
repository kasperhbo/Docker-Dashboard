import {Port} from "./port";
import {JsonProperty} from "jackson-js";

export class Container {

    @JsonProperty({value: 'id'})
    id: string;

    @JsonProperty({value: 'image'})
    image: string;

    @JsonProperty({value: 'command'})
    command: string;

    @JsonProperty({value: 'name'})
    name: string;

    @JsonProperty({value: 'state'})
    state: string;

    @JsonProperty({value: 'status'})
    status: string;

    @JsonProperty({value: 'ports'})
    ports: Port[];

    @JsonProperty({value: 'volumes'})
    volumes: any[];

    @JsonProperty({value: 'environment'})
    environment: any[];

    @JsonProperty({value: 'can_start'})
    canStart: boolean;

    @JsonProperty({value: 'can_stop'})
    canStop: boolean;

    @JsonProperty({value: 'network_info'})
    networkInfo: any;

    @JsonProperty({value: 'created', required: false})
    created: string;



    get formattedCreated(): string {
        if (this.created) {
            return new Date(this.created).toLocaleString();
        } else {
            return 'N/A';
        }
    }

    @JsonProperty({value: 'started_at', required: false})
    startedAt: string;

    get formattedStartedAt(): string {
        if (this.startedAt) {
            return new Date(this.startedAt).toLocaleString();
        } else {
            return 'N/A';
        }
    }

    @JsonProperty({value: 'finished_at', required: false})
    finishedAt: string;

    get formattedFinishedAt(): string {
        if (this.finishedAt) {
            return new Date(this.finishedAt).toLocaleString();
        } else {
            return 'N/A';
        }
    }

    get isRunning(): boolean {
        return this.state == 'running';
    }

    get isStopped(): boolean {
        return this.state == 'stopped';
    }

    get isPaused(): boolean {
        return this.state == 'paused';
    }

    get isExited(): boolean {
        return this.state.includes('exited');
    }
}
