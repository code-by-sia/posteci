import {HttpHeader} from '@/model/httpHeader';

export default class HttpRequest {
    public name!: string
    public method: string = 'GET'
    public path!: string
    public headers: HttpHeader[] = []
    public protocol: string = 'HTTPS'
    public body: null | string = null
}
