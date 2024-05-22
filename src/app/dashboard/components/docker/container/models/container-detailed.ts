import {JsonClassType, JsonProperty} from 'jackson-js';

export class HealthLog {
    @JsonProperty({value: 'End'})
    end: string;

    @JsonProperty({value: 'ExitCode'})
    exitCode: number;

    @JsonProperty({value: 'Output'})
    output: string;

    @JsonProperty({value: 'Start'})
    start: string;
}


export class LogConfig {
    @JsonProperty({value: 'Config'})
    config: object;

    @JsonProperty({value: 'Type'})
    type: string;
}


export class RestartPolicy {
    @JsonProperty({value: 'MaximumRetryCount'})
    maximumRetryCount: number;

    @JsonProperty({value: 'Name'})
    name: string;
}


export class PortBindings {
    @JsonProperty({value: 'HostIp'})
    hostIp: string;

    @JsonProperty({value: 'HostPort'})
    hostPort: string;
}


export class HostConfig {
    @JsonProperty({value: 'AutoRemove'})
    autoRemove: boolean;

    @JsonProperty({value: 'Binds'})
    binds: any[];

    @JsonProperty({value: 'BlkioDeviceReadBps'})
    blkioDeviceReadBps: any;

    @JsonProperty({value: 'BlkioDeviceReadIOps'})
    blkioDeviceReadIOps: any;

    @JsonProperty({value: 'BlkioDeviceWriteBps'})
    blkioDeviceWriteBps: any;

    @JsonProperty({value: 'BlkioDeviceWriteIOps'})
    blkioDeviceWriteIOps: any;

    @JsonProperty({value: 'BlkioWeight'})
    blkioWeight: number;

    @JsonProperty({value: 'BlkioWeightDevice'})
    blkioWeightDevice: any;

    @JsonProperty({value: 'CapAdd'})
    capAdd: any;

    @JsonProperty({value: 'CapDrop'})
    capDrop: any;

    @JsonProperty({value: 'Cgroup'})
    cgroup: string;

    @JsonProperty({value: 'CgroupParent'})
    cgroupParent: string;

    @JsonProperty({value: 'CgroupnsMode'})
    cgroupnsMode: string;

    @JsonProperty({value: 'ConsoleSize'})
    consoleSize: number[];

    @JsonProperty({value: 'ContainerIDFile'})
    containerIDFile: string;

    @JsonProperty({value: 'CpuCount'})
    cpuCount: number;

    @JsonProperty({value: 'CpuPercent'})
    cpuPercent: number;

    @JsonProperty({value: 'CpuPeriod'})
    cpuPeriod: number;

    @JsonProperty({value: 'CpuQuota'})
    cpuQuota: number;

    @JsonProperty({value: 'CpuRealtimePeriod'})
    cpuRealtimePeriod: number;

    @JsonProperty({value: 'CpuRealtimeRuntime'})
    cpuRealtimeRuntime: number;

    @JsonProperty({value: 'CpuShares'})
    cpuShares: number;

    @JsonProperty({value: 'CpusetCpus'})
    cpusetCpus: string;

    @JsonProperty({value: 'CpusetMems'})
    cpusetMems: string;

    @JsonProperty({value: 'DeviceCgroupRules'})
    deviceCgroupRules: any;

    @JsonProperty({value: 'DeviceRequests'})
    deviceRequests: any;

    @JsonProperty({value: 'Devices'})
    devices: any;

    @JsonProperty({value: 'Dns'})
    dns: any;

    @JsonProperty({value: 'DnsOptions'})
    dnsOptions: any;

    @JsonProperty({value: 'DnsSearch'})
    dnsSearch: any;

    @JsonProperty({value: 'ExtraHosts'})
    extraHosts: any;

    @JsonProperty({value: 'GroupAdd'})
    groupAdd: any;

    @JsonProperty({value: 'IOMaximumBandwidth'})
    ioMaximumBandwidth: number;

    @JsonProperty({value: 'IOMaximumIOps'})
    ioMaximumIOps: number;

    @JsonProperty({value: 'Init'})
    init: boolean;

    @JsonProperty({value: 'IpcMode'})
    ipcMode: string;



    @JsonProperty({value: 'Isolation'})
    isolation: string;

    @JsonProperty({value: 'Links'})
    links: any;

    @JsonProperty({value: 'LogConfig'})
    logConfig: LogConfig;

    @JsonProperty({value: 'MaskedPaths'})
    maskedPaths: string[];

    @JsonProperty({value: 'Memory'})
    memory: number;

    @JsonProperty({value: 'MemoryReservation'})
    memoryReservation: number;

    @JsonProperty({value: 'MemorySwap'})
    memorySwap: number;

    @JsonProperty({value: 'MemorySwappiness'})
    memorySwappiness: any;

    @JsonProperty({value: 'NanoCpus'})
    nanoCpus: number;

    @JsonProperty({value: 'NetworkMode'})
    networkMode: string;

    @JsonProperty({value: 'OomKillDisable'})
    oomKillDisable: any;

    @JsonProperty({value: 'OomScoreAdj'})
    oomScoreAdj: number;

    @JsonProperty({value: 'PidMode'})
    pidMode: string;

    @JsonProperty({value: 'PidsLimit'})
    pidsLimit: any;

    @JsonProperty({value: 'PortBindings'})
    portBindings: { [key: string]: PortBindings[] };

    @JsonProperty({value: 'Privileged'})
    privileged: boolean;

    @JsonProperty({value: 'PublishAllPorts'})
    publishAllPorts: boolean;

    @JsonProperty({value: 'ReadonlyPaths'})
    readonlyPaths: string[];

    @JsonProperty({value: 'ReadonlyRootfs'})
    readonlyRootfs: boolean;

    @JsonProperty({value: 'RestartPolicy'})
    restartPolicy: RestartPolicy;

    @JsonProperty({value: 'Runtime'})
    runtime: string;

    @JsonProperty({value: 'SecurityOpt'})
    securityOpt: any;

    @JsonProperty({value: 'ShmSize'})
    shmSize: number;

    @JsonProperty({value: 'UTSMode'})
    utsMode: string;

    @JsonProperty({value: 'Ulimits'})
    ulimits: any;

    @JsonProperty({value: 'UsernsMode'})
    usernsMode: string;

    @JsonProperty({value: 'VolumeDriver'})
    volumeDriver: string;

    @JsonProperty({value: 'VolumesFrom'})
    volumesFrom: any;

    @JsonProperty({value: 'Mounts'}) @JsonClassType({type: () => [Mounts]})
    mounts: Mounts[];

}


export class Mounts {
    @JsonProperty({value: 'Destination'})
    destination: string;

    @JsonProperty({value: 'Driver'})
    driver: string;

    @JsonProperty({value: 'Mode'})
    mode: string;

    @JsonProperty({value: 'Name'})
    name: string;

    @JsonProperty({value: 'Propagation'})
    propagation: string;

    @JsonProperty({value: 'RW'})
    rw: boolean;

    @JsonProperty({value: 'Source'})
    source: string;

    @JsonProperty({value: 'Type'})
    type: string;
}


export class Network {
    @JsonProperty({value: 'Aliases'})
    aliases: any;

    @JsonProperty({value: 'DNSNames'})
    dnsNames: any;

    @JsonProperty({value: 'DriverOpts'})
    driverOpts: any;

    @JsonProperty({value: 'EndpointID'})
    endpointID: string;

    @JsonProperty({value: 'Gateway'})
    gateway: string;

    @JsonProperty({value: 'GlobalIPv6Address'})
    globalIPv6Address: string;

    @JsonProperty({value: 'GlobalIPv6PrefixLen'})
    globalIPv6PrefixLen: number;

    @JsonProperty({value: 'IPAMConfig'})
    ipamConfig: any;

    @JsonProperty({value: 'IPAddress'})
    ipAddress: string;

    @JsonProperty({value: 'IPPrefixLen'})
    ipPrefixLen: number;

    @JsonProperty({value: 'IPv6Gateway'})
    ipv6Gateway: string;

    @JsonProperty({value: 'Links'})
    links: any;

    @JsonProperty({value: 'MacAddress'})
    macAddress: string;

    @JsonProperty({value: 'NetworkID'})
    networkID: string;
}

export class NetworkSettings {
    @JsonProperty({value: 'Bridge'})
    bridge: string;

    @JsonProperty({value: 'EndpointID'})
    endpointID: string;

    @JsonProperty({value: 'Gateway'})
    gateway: string;

    @JsonProperty({value: 'GlobalIPv6Address'})
    globalIPv6Address: string;

    @JsonProperty({value: 'GlobalIPv6PrefixLen'})
    globalIPv6PrefixLen: number;

    @JsonProperty({value: 'HairpinMode'})
    hairpinMode: boolean;

    @JsonProperty({value: 'IPAddress'})
    ipAddress: string;

    @JsonProperty({value: 'IPPrefixLen'})
    ipPrefixLen: number;

    @JsonProperty({value: 'IPv6Gateway'})
    ipv6Gateway: string;

    @JsonProperty({value: 'LinkLocalIPv6Address'})
    linkLocalIPv6Address: string;

    @JsonProperty({value: 'LinkLocalIPv6PrefixLen'})
    linkLocalIPv6PrefixLen: number;

    @JsonProperty({value: 'MacAddress'})
    macAddress: string;

    @JsonProperty({value: 'Networks'})
    networks: { [key: string]: Network };

    @JsonProperty({value: 'Ports'})
    ports: { [key: string]: PortBindings[] };

    @JsonProperty({value: 'SandboxID'})
    sandboxID: string;

    @JsonProperty({value: 'SandboxKey'})
    sandboxKey: string;

    @JsonProperty({value: 'SecondaryIPAddresses'})
    secondaryIPAddresses: any;

    @JsonProperty({value: 'SecondaryIPv6Addresses'})
    secondaryIPv6Addresses: any;
}

export class State {
    @JsonProperty({value: 'Status'})
    Status: string;
    @JsonProperty({value: 'Running'})
    Running: boolean;
    @JsonProperty({value: 'Paused'})
    Paused: boolean;
    @JsonProperty({value: 'Restarting'})
    Restarting: boolean;
    @JsonProperty({value: 'OOMKilled'})
    OOMKilled: boolean;
    @JsonProperty({value: 'Dead'})
    Dead: boolean;
    @JsonProperty({value: 'Pid'})
    Pid: number;
    @JsonProperty({value: 'ExitCode'})
    ExitCode: number;
    @JsonProperty({value: 'Error'})
    Error: string;
    @JsonProperty({value: 'StartedAt'})
    StartedAt: string;
    @JsonProperty({value: 'FinishedAt'})
    FinishedAt: string;

    @JsonProperty({value: 'Health'})
    Health: any;
}

interface Label {
    key: string;
    value: string;
}

export class DockerContainerDetails {
    @JsonProperty({value: 'created'}) @JsonClassType({type: () => [String]})
    created: string;

    @JsonProperty({value: 'state'}) @JsonClassType({type: () => [State]})
    state: State;

    @JsonProperty({value: 'health'}) @JsonClassType({type: () => [String]})
    health: string;

    @JsonProperty({value: 'health_log'}) @JsonClassType({type: () => [HealthLog]})
    healthLog: HealthLog[];

    @JsonProperty({value: 'host_config'}) @JsonClassType({type: () => [HostConfig]})
    hostConfig: HostConfig;

    @JsonProperty({value: 'id'}) @JsonClassType({type: () => [String]})
    id: string;

    @JsonProperty({value: 'image'}) @JsonClassType({type: () => [String]})
    image: string;

    @JsonProperty({value: 'log_path'}) @JsonClassType({type: () => [String]})
    logPath: string;


    @JsonProperty({value: 'name'}) @JsonClassType({type: () => [String]})
    name: string;

    //
    @JsonProperty({value: 'network_settings'}) @JsonClassType({type: () => [NetworkSettings]})
    networkSettings: NetworkSettings;

    @JsonProperty({value: 'restart_count'}) @JsonClassType({type: () => [Number]})
    restartCount: number;

    @JsonProperty({value: 'status'}) @JsonClassType({type: () => [String]})
    status: string;

    @JsonProperty({value: 'py/object'})
    pyobject: string;

    @JsonProperty({value: 'Mounts'}) @JsonClassType({type: () => [Mounts]})
    mounts: Mounts[];


    @JsonProperty({value: 'labels'})
    @JsonClassType({type: () => [Object]})
    labels?: Record<string, string>;

    @JsonProperty({value: 'env'})
    @JsonClassType({type: () => [Object]})
    env?: Record<string, string>;

    get portsSimpleConfigArray(): {
        containerPort: string,
        hostPort: string,
        hostIp: string
    }[] {
        let ports = [];
        if (this.networkSettings?.ports == undefined) {
            return undefined;
        }

        for (let [containerPort, hostPorts] of Object.entries(this.networkSettings.ports)) {

            for (let hostPort of hostPorts) {
                console.log(hostPort)
                // @ts-ignore
                let port = hostPort.HostPort || 'N/A';
                // @ts-ignore
                let ip = hostPort.HostIp || 'N/A';
                ports.push({containerPort, hostPort: port,  hostIp: ip});

            }
        }

        console.log(ports);
        return ports;
    }

    get getEnvAsArray(): { key: string, value: string }[] {
        return Object.entries(this.env).map(([key, value]) => ({key, value}));
    }

    get getLabelsArray(): Label[] {
        return Object.entries(this.labels).map(([key, value]) => ({key, value}));
    }

    get getLabels(): Record<string, string> {
        return this.labels;
    }

    get getLabelsCount(): number {
        return Object.keys(this.labels).length;
    }

    get getCreatedFormatted(): string {
        return new Date(this.created).toLocaleString();
    }

    get getStartedAtFormatted(): string {
        if (this.state?.StartedAt) {
            return new Date(this.state.StartedAt).toLocaleString();
        } else {
            return 'N/A';
        }
    }

    get getFinishedAtFormatted(): string {
        if (this.state?.FinishedAt) {
            return new Date(this.state.FinishedAt).toLocaleString();
        } else {
            return 'N/A';
        }
    }


    get isRunning(): boolean {
        return this.state.Running;
    }

    get getStatus(): string {
        return this.state.Status;
    }

    get getHealth(): string {
        return this.health;
    }

    get isHealthy(): boolean {
        if (this?.health == 'healthy') {
            return true;
        }
        return this?.state.Health && this.state.Health.Status == 'healthy';


    }

}
