const tbn = (x) => new BigNumber(x);
const tw = (x) => BigNumber.isBigNumber(x) ? x.times(1e18).integerValue() : tbn(x).times(1e18).integerValue();
const fw = (x) => BigNumber.isBigNumber(x) ? x.times(1e-18).toNumber() : tbn(x).times(1e-18).toNumber();

async function swapTokenToToken(privateKey, sourceToken, destinationToken, exchangedAmount) {
    const instance = getInstance(ABI.KYBER, ADDRESS.KYBER);
    const transactionData = getCallData(instance, "swapTokenToToken", [destinationToken, exchangedAmount, sourceToken, "0"]);
    return await set(privateKey, ADDRESS.KYBER, 0, transactionData);
}

async function swapEtherToToken(privateKey, tokenAddress, etherSum) {
    const instance = getInstance(ABI.KYBER, ADDRESS.KYBER);
    const transactionData = getCallData(instance, "swapEtherToToken", [tokenAddress, "0"]);
    return await set(privateKey, ADDRESS.KYBER, etherSum, transactionData);
}

async function predictAmount(sourceToken, destinationToken, tokenSum) {
    const rateFromToken = await getExchangeRate(destinationToken, sourceToken, tokenSum);
    const rateFromEther = tbn(1e18).div(rateFromToken);
    return rateFromEther.times(tokenSum).toNumber();
}

async function getExchangeRate(sourceToken, destinationToken, exchangedAmount) {
    const instance = getInstance(ABI.KYBER, ADDRESS.KYBER);
    const result =  await get(instance, "getExpectedRate", [sourceToken, destinationToken, exchangedAmount]);
    return result.expectedRate;
}

async function get(instance, method, parameters) {
    return await instance.methods[method](...parameters).call();
}

async function set(privateKey, receiver, amount, transactionData) {
    const userAddress = getAddress(privateKey);
    const txParam = {
        nonce: Number(await web3.eth.getTransactionCount(userAddress)),
        to: receiver,
        value: Number(amount),
        from: userAddress,
        data: transactionData !== undefined ? transactionData : '',
        gasPrice: 5000000000,
        gas: 2100000
    };

    const privateKeyBuffer = ethereumjs.Buffer.Buffer.from(privateKey.substring(2), 'hex');

    const tx = new ethereumjs.Tx(txParam);
    tx.sign(privateKeyBuffer);
    const serializedTx = tx.serialize();

    return await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'));
}

function getCallData(instance, method, parameters) {
    return instance.methods[method](...parameters).encodeABI();
}

function getInstance(ABI, address) {
    return new web3.eth.Contract(ABI, address);
}

function getAddress(privateKey) {
    let _privateKey = privateKey.substring(2, privateKey.length);
    return keythereum.privateKeyToAddress(_privateKey);
}

function getPrivateKey() {
    let params = {
        keyBytes: 32,
        ivBytes: 16
    };
    let dk = keythereum.create(params);
    return "0x" + dk.privateKey.reduce((memo, i) => {
        return memo + ('0' + i.toString(16)).slice(-2);
    }, '');
}