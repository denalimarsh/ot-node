require('dotenv').config();
const log = require('../modules/Utilities').getLogger();

if (process.env.NODE_ENV !== 'test' && !(process.env.NODE_WALLET && process.env.NODE_PRIVATE_KEY)) {
    log.error('You have to set node wallet and private key in .env');
    process.kill(0);
}

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.bulkInsert('blockchain_data', [{
        blockchain_title: 'Ethereum',
        network_id: 'rinkeby',
        gas_limit: '800000',
        gas_price: '5000000000',
        ot_contract_address: '0x826b0e0b03f22c5e58557456bd8b8ede318c2e0a',
        token_contract_address: '0x98d9a611ad1b5761bdc1daac42c48e4d54cf5882',
        escrow_contract_address: '0x69e278c7ce092cc5d11b2b0b7b02bc0b8ad46540',
        bidding_contract_address: '0xa71caf7de40ae1f949b7d6874a6ff91370ce6d51',
        reading_contract_address: '0x9b174280f96abf54f5a6c96c2164d2f2b0cfc28a',
        hub_contract_address: '0x4dab8f6a90de5cd46004f86cff98fb1a2e0aeaa1',
        rpc_node_host: 'https://rinkeby.infura.io/1WRiEqAQ9l4SW6fGdiDt',
        rpc_node_port: '',
        wallet_address: process.env.NODE_WALLET,
        wallet_private_key: process.env.NODE_PRIVATE_KEY,
    }], {}),

    down: (queryInterface, Sequelize) => queryInterface.bulkDelete('blockchain_data', null, {}),
};
