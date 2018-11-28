import axios from 'axios';
import httpReq from './http';
import config from '../config';
var instanceGeneral = axios.create({
    baseURL: config.baseUrl
});
export function login(opts) {
    return instanceGeneral({
        method: 'post',
        url: '/auth/oauth/login',
        headers: { Authorization: 'Basic d2ViOndlYg==' },
        params: {
            ...opts
        }
    });
}

export function logout() {
    return httpReq({
        method: 'get',
        url: '../auth/oauth/removeToken'
    });
}
