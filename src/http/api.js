import makeRequest from './base_request';

export async function getContacts() {
    return makeRequest('get', `/info/contacts`, null);
}

export async function getMenu() {
    return makeRequest('get', `/menu`, null);
}

export async function getPromo(name = '') {
    const path = name ? `/${name}` : ''
    return makeRequest('get', `/promo${path}`, null);
}

export async function getAbout() {
    return makeRequest('get', `/info/about`, null);
}

export async function getSocial() {
    return makeRequest('get', `/info/social`, null);
}

export async function getService(name = '') {
    const path = name ? `/${name}` : ''
    return makeRequest('get', `/services${path}`, null);
}

export async function getWhys() {
    return makeRequest('get', `/info/whychooseus`, null);
}

export async function getBanner() {
    return makeRequest('get', `/banner`, null);
}

export async function getHouse(id) {
    return makeRequest('get', `/housing/house`, null);
}

export async function getTanhouse(id) {
    return makeRequest('get', `/housing/townhouse`, null);
}
