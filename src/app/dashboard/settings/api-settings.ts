export class ApiSettings {

    static get AUTH_ENDPOINT(): string {
        return 'http://localhost:9000/api/';
    }

    static get DOCKER_HOST(): string {
        return 'http://localhost:9000/api/docker/';
    }

    static get DOCKER_CONTAINER_ENDPOINT(): string {
        return this.DOCKER_HOST + 'container/';
    }
}
