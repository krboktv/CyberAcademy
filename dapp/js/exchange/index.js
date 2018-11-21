const BACKEND_URL = "http://localhost:8080";
let txData = {};


async function exchange() {
    const {
        addressFrom,
        addressTo,
        amountFrom,
        type
    } = txData;

    const privateKey = document.getElementById('private-key').value();

    let txHash;
    if (type == 0) {
        txHash = await swapTokenToToken(privateKey, addressFrom, addressTo, amountFrom);
    } else if (type == 1) {
        txHash = await swapEtherToToken(privateKey, addressFrom, addressTo, amountFrom);
    }

    document.getElementById('tx-hash').innerText = `Transaction Hash: ${txHash}`;

    await query('POST', `${BACKEND_URL}/exchange/${getUserID()}`, JSON.stringify({"txHash": txHash}));
}

(async function getData() {
    const result = await query("GET", `${BACKEND_URL}/exchange/${getUserID()}`);
    const {
        currencyFrom,
        currencyTo,
        addressFrom,
        addressTo,
        amountTo,
    } = result;
    txData = result;

    document.getElementById('token-from').innerText = currencyFrom;
    document.getElementById('token-to').innerText = currencyTo;
    document.getElementById('token-address-from').innerText = addressFrom;
    document.getElementById('token-address-to').innerText = addressTo;
    document.getElementById('token-amount-to').innerText = amountTo;

    const amountFrom = await predictAmount(ADDRESS[currencyFrom], ADDRESS[currencyTo], amountTo);
    txData.amountFrom = amountFrom;
    document.getElementById('token-amount-from').innerText = amountFrom;
})();

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