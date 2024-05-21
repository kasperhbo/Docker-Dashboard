export interface NetworkSettings {
    IPAddress: string;
}

export interface State {
    Running: boolean;
    Status: string;
    ExitCode: number;
    StartedAt: string;
    FinishedAt: string;
}

export interface ContainerTemplate {
    Id: string;
    Name: string;
    newContainerName?: string;
    edit?: boolean;
    NetworkSettings: NetworkSettings;
    State: State;
    Created: string;
    webhookEnabled?: boolean;
}
