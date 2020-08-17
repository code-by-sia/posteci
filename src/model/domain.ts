import HttpRequest from '@/model/httpRequest';

export default interface Domain {
    name: string,
    requests: HttpRequest[]
}
