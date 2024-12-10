import instance from './axios_settings';

async function makeRequest(method, url, data = null) {
    const config = {
        method: method,
        url: url,
        data: data,
    };
    const response = await instance.request(config);
    return response.data;
}

export default makeRequest;