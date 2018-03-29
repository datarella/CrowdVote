var HDWalletProvider = require("truffle-hdwallet-provider");

var infura_apikey = "v5tOnAp5nwYa4qqIdZU0";
var mnemonic = "bar phrase head margin empower cherry cable wild angle dash bring uncover";

module.exports = {
    solc: {
        optimizer: {
            enabled: true,
            runs: 200
        }
    },
    networks: {
        ropsten: {
            provider: function() {
                return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey)
            },
            gas: 4098712,
            gasPrice: 30000000000,
            network_id: 3
        }
    }
};
