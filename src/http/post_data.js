import makeRequest from './base_request';

export async function postAskForm(data) {
    return makeRequest('post', `/communication/mail`, data);
}

export async function postCallBackForm(data) {
    return makeRequest('post', `/communication/phone`, data);
}