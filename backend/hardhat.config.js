require ('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/JDAIER55VKgz7x5uUxumlvYKdjdNacHr',
      accounts: [ '957cddbec85ba1c6327f69a5867c771ef6dbc012b0c6e6c1131e09a0431018da' ]
    }
  }
}
