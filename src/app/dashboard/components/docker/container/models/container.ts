import {Port} from "./port";
import {JsonProperty} from "jackson-js";
import {ContainersService} from "../service/containers.service";

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

// {
//     "Id": "09309fec034e008ffb64597f1807214288db4ed34bfdb27da17782ddef5095f2",
//     "Names": [
//         "/nginx_test"
//     ],
//     "Image": "kdb_nginx:latest",
//     "ImageID": "sha256:3f4204a41ee55ee40a0fdbc9605158eead74fb2af56a6890b8e6b2a0610d8c5d",
//     "Command": "/docker-entrypoint.sh nginx -g 'daemon off;'",
//     "Created": 1716234288,
//     "Labels": {
//         "com.docker.compose.config-hash": "ca6db75d15eadbfa611d2b957a744773518205a505b0c9a665b75f61e37ce8f2",
//         "com.docker.compose.container-number": "1",
//         "com.docker.compose.depends_on": "",
//         "com.docker.compose.image": "sha256:3f4204a41ee55ee40a0fdbc9605158eead74fb2af56a6890b8e6b2a0610d8c5d",
//         "com.docker.compose.oneoff": "False",
//         "com.docker.compose.project": "vistwo-main",
//         "com.docker.compose.project.config_files": "/Users/brk/_hellebrekers/vispro/vistwo-main/docker-compose.yml",
//         "com.docker.compose.project.working_dir": "/Users/brk/_hellebrekers/vispro/vistwo-main",
//         "com.docker.compose.service": "nginx",
//         "com.docker.compose.version": "2.27.0",
//         "maintainer": "NGINX Docker Maintainers <docker-maint@nginx.com>"
//     },
//     "State": "running",
//     "Status": "Up 3 minutes",
//     "HostConfig": {
//         "NetworkMode": "vistwo-main_default"
//     },
//     "NetworkSettings": {
//         "Networks": {
//             "vistwo-main_default": {
//                 "IPAMConfig": null,
//                 "Links": null,
//                 "Aliases": null,
//                 "MacAddress": "02:42:ac:13:00:02",
//                 "NetworkID": "3e4c16e48260f3582495944f6bcc29e07f6fec35bce45e4764d11bb4df34f909",
//                 "EndpointID": "65fa3d58d63d02275512391a6cf88ad6a65066fddb2daceb0db30fba15363b03",
//                 "Gateway": "172.19.0.1",
//                 "IPAddress": "172.19.0.2",
//                 "IPPrefixLen": 16,
//                 "IPv6Gateway": "",
//                 "GlobalIPv6Address": "",
//                 "GlobalIPv6PrefixLen": 0,
//                 "DriverOpts": null,
//                 "DNSNames": null
//             }
//         }
//     },
//     "Mounts": [
//         {
//             "Type": "volume",
//             "Name": "nginx",
//             "Source": "/var/lib/docker/volumes/nginx/_data",
//             "Destination": "/etc/nginx",
//             "Driver": "local",
//             "Mode": "z",
//             "RW": true,
//             "Propagation": ""
//         }
//     ]
// },

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

    startContainer(containersService: ContainersService){
        containersService.startContainer(this.id);
    }

    stopContainer(containersService: ContainersService){
        containersService.stopContainer(this.id);
    }



}
