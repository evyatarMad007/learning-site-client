import axios from "axios";

interface IHttpService {
    get: (url: string) => Promise<any>;
    post: (url: string, data: any) => Promise<any>;
    put: (url: string, data: any) => Promise<any>;
    delete: (url: string) => Promise<any>;
}

// Facade pattern for HttpService.
class HttpService implements IHttpService {

    private httpModule: any = axios;
    public baseURL: string = "https://localhost:8080";

    // # for Auth requests.
    private autHeaders = {
        authorization: `Bearer ${localStorage.getItem("userInfo")}`,
        "Content-Type": "application/json",
    };

    // # for get requests.
    public get(url: string): Promise<any> {
        return this.httpModule.get(`${this.baseURL}/${url}`, { headers: this.autHeaders });
    }

    // # for post requests.
    public post(url: string, data: any): Promise<any> {
        return this.httpModule.post(`${this.baseURL}/${url}`, data, { headers: this.autHeaders });
    }

    // # for put requests.
    public put(url: string, data: any): Promise<any> {
        return this.httpModule.put(`${this.baseURL}/${url}`, data, { headers: this.autHeaders });
    }

    // # for delete requests.
    public delete(url: string): Promise<any> {
        return this.httpModule.delete(`${this.baseURL}/${url}`, { headers: this.autHeaders });
    }

    // # set headers.
    public setHeaders(headers: any): void {
        this.autHeaders = { ...this.autHeaders, ...headers };
    }

    // # set baseURL.
    public setBaseURL(baseURL: string): void {
        this.baseURL = baseURL;
    }
}

export default  new HttpService();