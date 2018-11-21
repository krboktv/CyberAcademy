const BACKEND_URL = "http://localhost:8080";

async function createAccount() {
    const privateKey = getPrivateKey();
    const address = getAddress(privateKey);

    document.getElementById('account').innerHTML = `<h2>Private key: <span>${privateKey}</span></h2><h2>Address: <span>${address}</span></h2>`;

    await sendAddress(address);
}

async function sendAddress(address) {
    const response = await query('POST', `${BACKEND_URL}/create/${getUserID()}`, JSON.stringify({"address":address}));
    if (response.error != null)
        throw response.error;
    return response.result;
}

function getUserID() {
    const url = window.location;
    const urlData = parseURL(url);
    return urlData.create;
}

function parseURL(url) {
    const params = url.search.substring(1);
    return JSON.parse(
        '{"' +
        decodeURI(params)
            .replace(/"/g, '\\"')
            .replace(/&/g, '","')
            .replace(/=/g, '":"') +
        '"}'
    );
}

async function query(method, url, data) {
    const settings = {
        async: true,
        crossDomain: true,
        url: url,
        method: method,
        processData: false
    };

    if (data) {
        settings.data = data;
        settings.headers = {
            "Content-Type": "application/json"
        };
    }

    return await $.ajax(settings);
}