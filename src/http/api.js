import makeRequest from './base_request';

// export const contacts = {
//     getContacts
// };

export async function getContacts() {
    return makeRequest('get', `/info/contacts`, null);
}