const BACKEND_URL = "http://localhost:8080";
let txData = {};



async function exchange() {
    const {
        currencyFrom,
        currencyTo,
        amountFrom,
    } = txData;
    const privateKey = document.getElementById('private-key').value;

    let txHash;
    if (currencyFrom != "ETH") {
        txHash = await swapTokenToToken(privateKey, ADDRESS[currencyFrom], ADDRESS[currencyTo], tw(amountFrom));
    } else {
        txHash = await swapEtherToToken(privateKey, ADDRESS[currencyTo], tw(amountFrom));
    }
    console.log(txHash)
    document.getElementById('tx-hash').innerText = `Transaction Hash: ${txHash.transactionHash}`;

    await query('POST', `${BACKEND_URL}/exchange/${getUserID()}`, JSON.stringify({"txHash": txHash.transactionHash}));
}

(async function getData() {
    const result = (await query("GET", `${BACKEND_URL}/exchange/${getUserID()}`)).result;
    const {
        currencyFrom,
        currencyTo,
        amountTo,
    } = result;
    txData = result;
    console.log(result)
    document.getElementById('token-from').innerText = currencyFrom;
    document.getElementById('token-to').innerText = currencyTo;
    document.getElementById('token-address-from').innerText = ADDRESS[currencyFrom];
    document.getElementById('token-address-to').innerText = ADDRESS[currencyTo];
    document.getElementById('token-amount-to').innerText = amountTo;
    console.log(currencyTo)
    const amountFrom = await predictAmount(ADDRESS[currencyFrom], ADDRESS[currencyTo], amountTo);
    txData.amountFrom = amountFrom;
    document.getElementById('token-amount-from').innerText = amountFrom;
})();

function getUserID() {
    const url = window.location;
    const urlData = parseURL(url);
    return urlData.tx;
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

    console.log(settings)

    return await $.ajax(settings);
}