const ABI = {
    "ERC20": [{
        "constant": false,
        "inputs": [{"name": "_spender", "type": "address"}, {"name": "_value", "type": "uint256"}],
        "name": "approve",
        "outputs": [{"name": "success", "type": "bool"}],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{"name": "supply", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "_from", "type": "address"}, {"name": "_to", "type": "address"}, {
            "name": "_value",
            "type": "uint256"
        }],
        "name": "transferFrom",
        "outputs": [{"name": "success", "type": "bool"}],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [{"name": "digits", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{"name": "_owner", "type": "address"}],
        "name": "balanceOf",
        "outputs": [{"name": "balance", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "_to", "type": "address"}, {"name": "_value", "type": "uint256"}],
        "name": "transfer",
        "outputs": [{"name": "success", "type": "bool"}],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{"name": "_owner", "type": "address"}, {"name": "_spender", "type": "address"}],
        "name": "allowance",
        "outputs": [{"name": "remaining", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": true, "name": "_owner", "type": "address"}, {
            "indexed": true,
            "name": "_spender",
            "type": "address"
        }, {"indexed": false, "name": "_value", "type": "uint256"}],
        "name": "Approval",
        "type": "event"
    }],
    "KYBER": [{
        "constant": false,
        "inputs": [{"name": "alerter", "type": "address"}],
        "name": "removeAlerter",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "enabled",
        "outputs": [{"name": "", "type": "bool"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "pendingAdmin",
        "outputs": [{"name": "", "type": "address"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "getOperators",
        "outputs": [{"name": "", "type": "address[]"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "src", "type": "address"}, {"name": "srcAmount", "type": "uint256"}, {
            "name": "dest",
            "type": "address"
        }, {"name": "destAddress", "type": "address"}, {
            "name": "maxDestAmount",
            "type": "uint256"
        }, {"name": "minConversionRate", "type": "uint256"}, {"name": "walletId", "type": "address"}, {
            "name": "hint",
            "type": "bytes"
        }],
        "name": "tradeWithHint",
        "outputs": [{"name": "", "type": "uint256"}],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "token", "type": "address"}, {
            "name": "srcAmount",
            "type": "uint256"
        }, {"name": "minConversionRate", "type": "uint256"}],
        "name": "swapTokenToEther",
        "outputs": [{"name": "", "type": "uint256"}],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "token", "type": "address"}, {"name": "amount", "type": "uint256"}, {
            "name": "sendTo",
            "type": "address"
        }],
        "name": "withdrawToken",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "maxGasPrice",
        "outputs": [{"name": "", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "newAlerter", "type": "address"}],
        "name": "addAlerter",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "kyberNetworkContract",
        "outputs": [{"name": "", "type": "address"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{"name": "user", "type": "address"}],
        "name": "getUserCapInWei",
        "outputs": [{"name": "", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "src", "type": "address"}, {"name": "srcAmount", "type": "uint256"}, {
            "name": "dest",
            "type": "address"
        }, {"name": "minConversionRate", "type": "uint256"}],
        "name": "swapTokenToToken",
        "outputs": [{"name": "", "type": "uint256"}],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "newAdmin", "type": "address"}],
        "name": "transferAdmin",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [],
        "name": "claimAdmin",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "token", "type": "address"}, {"name": "minConversionRate", "type": "uint256"}],
        "name": "swapEtherToToken",
        "outputs": [{"name": "", "type": "uint256"}],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "newAdmin", "type": "address"}],
        "name": "transferAdminQuickly",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "getAlerters",
        "outputs": [{"name": "", "type": "address[]"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{"name": "src", "type": "address"}, {"name": "dest", "type": "address"}, {
            "name": "srcQty",
            "type": "uint256"
        }],
        "name": "getExpectedRate",
        "outputs": [{"name": "expectedRate", "type": "uint256"}, {"name": "slippageRate", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{"name": "user", "type": "address"}, {"name": "token", "type": "address"}],
        "name": "getUserCapInTokenWei",
        "outputs": [{"name": "", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "newOperator", "type": "address"}],
        "name": "addOperator",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "_kyberNetworkContract", "type": "address"}],
        "name": "setKyberNetworkContract",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "operator", "type": "address"}],
        "name": "removeOperator",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{"name": "field", "type": "bytes32"}],
        "name": "info",
        "outputs": [{"name": "", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "src", "type": "address"}, {"name": "srcAmount", "type": "uint256"}, {
            "name": "dest",
            "type": "address"
        }, {"name": "destAddress", "type": "address"}, {
            "name": "maxDestAmount",
            "type": "uint256"
        }, {"name": "minConversionRate", "type": "uint256"}, {"name": "walletId", "type": "address"}],
        "name": "trade",
        "outputs": [{"name": "", "type": "uint256"}],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{"name": "amount", "type": "uint256"}, {"name": "sendTo", "type": "address"}],
        "name": "withdrawEther",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{"name": "token", "type": "address"}, {"name": "user", "type": "address"}],
        "name": "getBalance",
        "outputs": [{"name": "", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "admin",
        "outputs": [{"name": "", "type": "address"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"name": "_admin", "type": "address"}],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": true, "name": "trader", "type": "address"}, {
            "indexed": false,
            "name": "src",
            "type": "address"
        }, {"indexed": false, "name": "dest", "type": "address"}, {
            "indexed": false,
            "name": "actualSrcAmount",
            "type": "uint256"
        }, {"indexed": false, "name": "actualDestAmount", "type": "uint256"}],
        "name": "ExecuteTrade",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": false, "name": "newNetworkContract", "type": "address"}, {
            "indexed": false,
            "name": "oldNetworkContract",
            "type": "address"
        }],
        "name": "KyberNetworkSet",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": false, "name": "token", "type": "address"}, {
            "indexed": false,
            "name": "amount",
            "type": "uint256"
        }, {"indexed": false, "name": "sendTo", "type": "address"}],
        "name": "TokenWithdraw",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": false, "name": "amount", "type": "uint256"}, {
            "indexed": false,
            "name": "sendTo",
            "type": "address"
        }],
        "name": "EtherWithdraw",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": false, "name": "pendingAdmin", "type": "address"}],
        "name": "TransferAdminPending",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": false, "name": "newAdmin", "type": "address"}, {
            "indexed": false,
            "name": "previousAdmin",
            "type": "address"
        }],
        "name": "AdminClaimed",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": false, "name": "newAlerter", "type": "address"}, {
            "indexed": false,
            "name": "isAdd",
            "type": "bool"
        }],
        "name": "AlerterAdded",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": false, "name": "newOperator", "type": "address"}, {
            "indexed": false,
            "name": "isAdd",
            "type": "bool"
        }],
        "name": "OperatorAdded",
        "type": "event"
    }]
};

const ADDRESS = {
    "OMG":  "0x659c4206b2ee8CC00af837CddA132eb30fA58df8",
    "KNC":  "0x55080ac40700BdE5725D8a87f48a01e192F660AF",
    "SALT": "0x6b1224743CC0E5994d1B35f2b90A1A12a51044aC",
    "ZIL":  "0xa8787F4faB0467B80d2F57722b1Bc8DDE707630E",
    "ETH":  "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    "KYBER": "0x39CC6802cF1625C30548B57D885932CB381EB4a4",
    "NULL": "0x0000000000000000000000000000000000000000"
}