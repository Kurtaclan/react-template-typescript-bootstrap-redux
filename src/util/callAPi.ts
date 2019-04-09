export default function callApi(method: string, endpoint: string, action: string) {
    return fetch(endpoint + action, {
        method
    })
}