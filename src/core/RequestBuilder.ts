import HttpRequest from '@/model/httpRequest';

function evalAsync(env: string, code: string) {
    const finalCode = `${env};(async()=> ${code})()`;
    return eval(finalCode);
}

const VARS_ENV = `
// variables
const secret = value => value;
const password = value => value;
const bearer = token => 'Bearer2 ' + token;
`;

const HEADERS_ENV = `
// headers
const Json = 'application/json';
const XML = 'application/xml';
const CONTENT_TYPE = 'Content-Type';

const contentType = {
    json: Json,
    application: XML
};

const responseType = contentType;
`

const BODY_ENV = `
// body
const json= obj => JSON.stringify(obj);

const fake = {
    get names() { 
        return [
            "Thomas Aquinas",
            "Aristotle",
            "Confucius",
            "René Descartes",
            "Ralph Waldo Emerson",
            "Michel Foucault",
            "David Hume",
            "Immanuel Kant",
            "Søren Kierkegaard",
            "Lao-Tzu",
            "John Locke",
            "Niccolo Machiavelli",
            "Karl Marx",
            "John Stuart Mill",
            "Friedrich Nietzsche",
            "Plato",
            "Jean-Jacques Rousseau",
            "Jean-Paul Sartre",
            "Socrates",
            "Ludwig Wittgenstein"
        ]
    },
    random(max){
        return Math.floor(Math.random() * max) ;
    },
    
    get id() {
        return this.random(1e6) + 1;
    },
    
    get name(){
        const list= this.names; 
        return list[this.random(list.length)]; 
    },
    
    get date(){
        return new Date(this.random(1e12));
    },
    
    get phone(){
        return  '+' + (this.random(9666e11) + 1e12);
    }
 };
`
const METHOD_ENV = `
// method
const GET = "GET";
const POST = "POST";
const PUT = "PUT";
const PATCH = "PATCH";
const DELETE = "DELETE";
const HEAD = "HEAD";
const OPTIONS = "OPTIONS";
const COPY = "COPY";
const LINK = "LINK";
const UNLINK = "UNLINK";
const PURGE = "PURGE";
const LOCK = "LOCK";
const UNLOCK = "UNLOCK";
const PROPFIND = "PROPFIND";
const VIEW = "VIEW";
`
const PROTOCOL_ENV = `
// protocols
const HTTP = 'http';
const HTTPS ='https';
const WS = 'ws';
`;

const PATH_ENV = `
// path
const LOCALHOST = 'localhost';
const WEB = 80;
const WEB_PROXY = 8080;
const TOMCAT = 8080;
const HTTPS = 443;
const HTTP = 80;
const NGINX = 8080;
const SYNAPSE = 8243;
const SYNAPSE_HTTP = 8280;
const SOLR = 8983;
const MYSQL = 3306;
const POSTGRES = 5432;
const MONGODB = 27017;
const REDIS = 6379;
const ZOOKEEPER = 2888;

const onPort= (host, port) => (port=="" || port==80) ? host: (host + ':' + port);
const local = (port) => onPort(LOCALHOST, port);
const localhost = port => local(port);
`;

function hasBody(method: string) {
    return !(method === 'GET' || method === 'OPTIONS');
}

export default class RequestBuilder {
    private variables: any;

    constructor(private request: HttpRequest) {
    }

    static with(request: HttpRequest) {
        return new RequestBuilder(request)
    }

    withVariables(variables: any) {
        this.variables = variables;
        return this
    }

    async build() {

        const method = await this.buildMethod()
        const headers = await this.buildHeaders()
        const body = await this.buildBody()
        const url = await this.buildUrl()

        console.log({url, method, headers})

        const options:any = {
            method,
            headers,
            mode:'cors',
            redirect: 'follow'}

        return fetch(url, hasBody(method) ? options : {...options, body})
    }

    private async buildVariables() {
        let vars: string[] = []
        for (let key in this.variables) {
            vars.push(`Object.defineProperty(env,"${key}",{ get:function() { return ${this.variables[key]};}})`)
        }
        return `${VARS_ENV};\nvar env={};\n${vars.join(';\n')}\n`
    }

    private buildMethod() {
        return evalAsync(METHOD_ENV, this.request.method);
    }

    private buildBody() {
        return evalAsync(VARS_ENV + BODY_ENV, this.request.body!)
    }

    private async buildUrl() {
        const VARS = await this.buildVariables();
        const protocol = await evalAsync(VARS + PROTOCOL_ENV, this.request.protocol)
        const path = await evalAsync(VARS + PATH_ENV, this.request.path)

        return protocol + '://' + path
    }

    private async buildHeaders() {
        const headers = new Headers();
        const VARS = await this.buildVariables();

        for (let header of this.request.headers) {
            const value = await evalAsync(VARS + HEADERS_ENV, header.value);
            headers.append(header.name, value)
        }

        headers.append('Content-Type', 'application/json');
        return headers;

    }
}
