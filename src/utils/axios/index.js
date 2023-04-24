import axios, { } from 'axios';

class Axios {
    constructor() {
        this.http = axios.create({ baseURL: 'https://refillplug.up.railway.app/auth' });
    }

    async get(url, config) {
        return await this.http.get(url, config).then(({ data, status, statusText }) => ({ data, status, statusText }));
    }

    async post(url, data, config) {
        return await this.http.post(url, data, config).then(({ data, status, statusText }) => ({ data, status, statusText }));
    }

    async patch(url, data, config) {
        return await this.http.patch(url, data, config).then(({ data, status, statusText }) => ({ data, status, statusText }));
    }

    async put(url, data, config) {
        return await this.http.put(url, data, config).then(({ data, status, statusText }) => ({ data, status, statusText }));
    }

    async delete(url, config) {
        return await this.http.delete(url, config).then(({ data, status, statusText }) => ({ data, status, statusText }));
    }
}

export default new Axios();