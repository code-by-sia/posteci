export class Request {

    constructor(private url: string, private payload: any) {

    }

    async send() {
        return await fetch(this.url, this.payload);
    }

    async text(): Promise<string> {
        return (await this.send()).text()
    }

    async json(): Promise<string> {
        return (await this.send()).json()
    }

    async form(): Promise<FormData> {
        return (await this.send()).formData()
    }

    async blob(): Promise<Blob> {
        return (await this.send()).blob()
    }
}
