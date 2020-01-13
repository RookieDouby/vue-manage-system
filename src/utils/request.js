export function request({ 
        url,
        method = "post",
        data,
        headers = {},
        requestList
    }) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(url, method);
        Object.keys(headers).forEach(key => 
            xhr.setRequestHeader(key, headers[key])
        );
        xhr.send();
        xhr.onload = e => {
            resolve({
                data: e.target.response
            })
        }
    })        
}