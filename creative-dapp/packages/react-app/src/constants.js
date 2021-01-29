// MY INFURA_ID, SWAP IN YOURS FROM https://infura.io/dashboard/ethereum
export const INFURA_ID = "460f40a260564ac4a4f4b3fffb032dad";

//MY ETHERSCAN_ID, SWAP IN YOURS FROM https://etherscan.io/myapikey
export const ETHERSCAN_KEY = "PSW8C433Q667DVEX5BCRMGNAH9FSGFZ7Q8";




// EXTERNAL CONTRACTS

export const DAI_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f"

/**
 * See all ids below
 * https://ethereum.stackexchange.com/questions/17051/how-to-select-a-network-id-or-is-there-a-list-of-network-ids
 */
export const KOVAN_ID = 42;
export const MAINNET_ID = 1;
export const ROPSTEN_ID = 3;
export const MATIC_ID = 137;
export const TESTNET_ID = 80001;
export const GOERLI_ID = 5;

export default {
  [KOVAN_ID]: {
    lendingPoolAddressesProvider: "0x88757f2f99175387ab4c6a4b3067c77a695b0349",
    lendingPool: "0x9FE532197ad76c5a68961439604C037EB79681F0",
    tokens: {
        WETH: "0xf8aC10E65F2073460aAD5f28E1EABE807DC287CF",
      BAT: "0x2d12186Fbb9f9a8C28B3FfdD4c42920f8539D738",
      DAI: "0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD",
      KNC: "0x3F80c39c0b96A0945f9F0E9f55d8A8891c5671A8",
      LEND: "0x1BCe8A0757B7315b74bA1C7A731197295ca4747a",
      LINK: "0xAD5ce863aE3E4E9394Ab43d4ba0D80f419F61789",
      MANA: "0x738Dc6380157429e957d223e6333Dc385c85Fec7",
      MKR: "0x61e4CAE3DA7FD189e52a4879C7B8067D7C2Cc0FA",
      REP: "0x260071C8D61DAf730758f8BD0d6370353956AE0E",
      SNX: "0x7FDb81B0b8a010dd4FFc57C3fecbf145BA8Bd947",
      TUSD: "0x1c4a937d171752e1313D70fb16Ae2ea02f86303e",
      USDC: "0xe22da380ee6B445bb8273C81944ADEB6E8450422",
      USDT: "0xA01bA9fB493b851F4Ac5093A324CB081A909C34B",
      WBTC: "0x3b92f58feD223E2cB1bCe4c286BD97e42f2A12EA",
      ZRX: "0xD0d76886cF8D952ca26177EB7CfDf83bad08C00C",
      aBAT: "0x5ad67de6Fb697e92a7dE99d991F7CdB77EdF5F74",
      aDAI: "0x58AD4cB396411B691A9AAb6F74545b2C5217FE6a",
      aETH: "0xD483B49F2d55D2c53D32bE6efF735cB001880F79",
      aKNC: "0xB08EC9EdB6BD7971220FEa04644174f3EbfbDe96",
      aLEND: "0xa2facD0F9Ef0Bb75cFc64Ad692F79378b5C3673a",
      aLINK: "0xEC23855Ff01012E1823807CE19a790CeBc4A64dA",
      aMANA: "0xe68204D69Cbfaf6124190EFa65ad9C591C0D48e4",
      aMKR: "0xfB762B5BAb463f7F35610Ba65e2534993a1c09C6",
      aREP: "0x0578469469Db1129271f4eb3EB9D97426506c44c",
      aSUSD: "0xb9c1434aB6d5811D1D0E92E8266A37Ae8328e901",
      aSNX: "0xb4D480f963f4F685F1D51d2B6159D126658B1dA8",
      aTUSD: "0xA79383e0d2925527ba5Ec1c1bcaA13c28EE00314",
      aUSDC: "0x02F626c6ccb6D2ebC071c068DC1f02Bf5693416a",
      aUSDT: "0x13512979ADE267AB5100878E2e0f485B568328a4",
      aWBTC: "0xCD5C52C7B30468D16771193C47eAFF43EFc47f5C",
      aZRX: "0x0F456900c6bdFddfA27E1E4E4c84EB823a2eE13c",
      sUSD: "0xD868790F57B39C9B2B51b12de046975f986675f9",
    },
  },
  [MAINNET_ID]: {
    lendingPoolAddressesProvider: "0x24a42fD28C976A61Df5D00D0599C34c4f90748c8",
    lendingPool: "0x398eC7346DcD622eDc5ae82352F02bE94C62d119",
    lendingPoolCore: "0x3dfd23A6c5E8BbcFc9581d2E864a68feb6a076d3",
    tokens: {
        WETH: "0xDcD33426BA191383f1c9B431A342498fdac73488",
      BAT: "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
      DAI: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      KNC: "0xdd974D5C2e2928deA5F71b9825b8b646686BD200",
      LEND: "0x80fB784B7eD66730e8b1DBd9820aFD29931aab03",
      LINK: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
      MANA: "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942",
      MKR: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
      REP: "0x1985365e9f78359a9B6AD760e32412f4a445E862",
      SNX: "0xC011A72400E58ecD99Ee497CF89E3775d4bd732F",
      TUSD: "0x0000000000085d4780B73119b644AE5ecd22b376",
      USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      USDT: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      WBTC: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
      ZRX: "0xE41d2489571d322189246DaFA5ebDe1F4699F498",
      aBAT: "0xE1BA0FB44CCb0D11b80F92f4f8Ed94CA3fF51D00",
      aDAI: "0xfC1E690f61EFd961294b3e1Ce3313fBD8aa4f85d",
      aETH: "0x3a3A65aAb0dd2A17E3F1947bA16138cd37d08c04",
      aKNC: "0x9D91BE44C06d373a8a226E1f3b146956083803eB",
      aLEND: "0x7D2D3688Df45Ce7C552E19c27e007673da9204B8",
      aLINK: "0xA64BD6C70Cb9051F6A9ba1F163Fdc07E0DfB5F84",
      aMANA: "0x6FCE4A401B6B80ACe52baAefE4421Bd188e76F6f",
      aMKR: "0x7deB5e830be29F91E298ba5FF1356BB7f8146998",
      aREP: "0x71010A9D003445aC60C4e6A7017c1E89A477B438",
      aSNX: "0x328C4c80BC7aCa0834Db37e6600A6c49E12Da4DE",
      aSUSD: "0x625aE63000f46200499120B906716420bd059240",
      aTUSD: "0x4DA9b813057D04BAef4e5800E36083717b4a0341",
      aUSDC: "0x9bA00D6856a4eDF4665BcA2C2309936572473B7E",
      aUSDT: "0x71fc860F7D3A592A4a98740e39dB31d25db65ae8",
      aWBTC: "0xFC4B8ED459e00e5400be803A9BB3954234FD50e3",
      aZRX: "0x6Fb0855c404E09c47C3fBCA25f08d4E41f9F062f",
      sUSD: "0x57Ab1E02fEE23774580C119740129eAC7081e9D3",
    },
  },
  [ROPSTEN_ID]: {
    lendingPoolAddressesProvider: "0x1c8756FD2B28e9426CDBDcC7E3c4d64fa9A54728",
    lendingPool: "0x9E5C7835E4b13368fd628196C4f1c6cEc89673Fa",
    lendingPoolCore: "0x4295Ee704716950A4dE7438086d6f0FBC0BA9472",
    tokens: {
      BAT: "0x85B24b3517E3aC7bf72a14516160541A60cFF19d",
      DAI: "0xf80A32A835F79D7787E8a8ee5721D0fEaFd78108",
      KNC: "0xCe4aA1dE3091033Ba74FA2Ad951f6adc5E5cF361",
      LEND: "0x217b896620AfF6518B9862160606695607A63442",
      LINK: "0x1a906E71FF9e28d8E01460639EB8CF0a6f0e2486",
      MANA: "0x78b1F763857C8645E46eAdD9540882905ff32Db7",
      MKR: "0x78b1F763857C8645E46eAdD9540882905ff32Db7",
      REP: "0xBeb13523503d35F9b3708ca577CdCCAdbFB236bD",
      SNX: "0xC011A72400E58ecD99Ee497CF89E3775d4bd732F",
      TUSD: "0xa51EE1845C13Cb03FcA998304b00EcC407fc1F92",
      USDC: "0x851dEf71f0e6A903375C1e536Bd9ff1684BAD802",
      USDT: "0xB404c51BBC10dcBE948077F18a4B8E553D160084",
      WBTC: "0xa0E54Ab6AA5f0bf1D62EC3526436F3c05b3348A0",
      ZRX: "0x02d7055704EfF050323A2E5ee4ba05DB2A588959",
      aBAT: "0x0D0Ff1C81F2Fbc8cbafA8Df4bF668f5ba963Dab4",
      aDAI: "0xcB1Fe6F440c49E9290c3eb7f158534c2dC374201",
      aETH: "0x2433A1b6FcF156956599280C3Eb1863247CFE675",
      aKNC: "0xCf6efd4528d27Df440fdd585a116D3c1fC5aDdEe",
      aLEND: "0x383261d0e287f0A641322AEB15E3da50147Dd36b",
      aLINK: "0x52fd99c15e6FFf8D4CF1B83b2263a501FDd78973",
      aMANA: "0x8e96a4068da80F66ef1CFc7987f0F834c26106fa",
      aMKR: "0xEd6A5d671f7c55aa029cbAEa2e5E9A18E9d6a1CE",
      aREP: "0xE4B92BcDB2f972e1ccc069D4dB33d5f6363738dE",
      aSNX: "0x328C4c80BC7aCa0834Db37e6600A6c49E12Da4DE",
      aSUSD: "0x5D17e0ea2d886F865E40176D71dbc0b59a54d8c1",
      aTUSD: "0x82F01c5694f36690a985F01dC0aD46e1B20E7a1a",
      aUSDC: "0x2dB6a31f973Ec26F5e17895f0741BB5965d5Ae15",
      aUSDT: "0x790744bC4257B4a0519a3C5649Ac1d16DDaFAE0D",
      aWBTC: "0xA1c4dB01F8344eCb11219714706C82f0c0c64841",
      aZRX: "0x5BDC773c9D3515a5e3Dd415428F92a90E8e63Ae4",
      sUSD: "0xc374eB17f665914c714Ac4cdC8AF3a3474228cc5",
    },
  },
};


export const DAI_ABI = [{"inputs":[{"internalType":"uint256","name":"chainId_","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"guy","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":true,"inputs":[{"indexed":true,"internalType":"bytes4","name":"sig","type":"bytes4"},{"indexed":true,"internalType":"address","name":"usr","type":"address"},{"indexed":true,"internalType":"bytes32","name":"arg1","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"arg2","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"LogNote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"guy","type":"address"}],"name":"deny","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"move","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"bool","name":"allowed","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"pull","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"push","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"guy","type":"address"}],"name":"rely","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"wards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]


export const ILendingPoolAddressesProvider_ABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "id",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "hasProxy",
				"type": "bool"
			}
		],
		"name": "AddressSet",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "newAddress",
				"type": "address"
			}
		],
		"name": "ConfigurationAdminUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "newAddress",
				"type": "address"
			}
		],
		"name": "EmergencyAdminUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "newAddress",
				"type": "address"
			}
		],
		"name": "LendingPoolCollateralManagerUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "newAddress",
				"type": "address"
			}
		],
		"name": "LendingPoolConfiguratorUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "newAddress",
				"type": "address"
			}
		],
		"name": "LendingPoolUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "newAddress",
				"type": "address"
			}
		],
		"name": "LendingRateOracleUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "newMarketId",
				"type": "string"
			}
		],
		"name": "MarketIdSet",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "newAddress",
				"type": "address"
			}
		],
		"name": "PriceOracleUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "id",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newAddress",
				"type": "address"
			}
		],
		"name": "ProxyCreated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "id",
				"type": "bytes32"
			}
		],
		"name": "getAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getEmergencyAdmin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getLendingPool",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getLendingPoolCollateralManager",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getLendingPoolConfigurator",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getLendingRateOracle",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMarketId",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPoolAdmin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPriceOracle",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "id",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "newAddress",
				"type": "address"
			}
		],
		"name": "setAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "id",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "impl",
				"type": "address"
			}
		],
		"name": "setAddressAsProxy",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "admin",
				"type": "address"
			}
		],
		"name": "setEmergencyAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "manager",
				"type": "address"
			}
		],
		"name": "setLendingPoolCollateralManager",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "configurator",
				"type": "address"
			}
		],
		"name": "setLendingPoolConfiguratorImpl",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "pool",
				"type": "address"
			}
		],
		"name": "setLendingPoolImpl",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "lendingRateOracle",
				"type": "address"
			}
		],
		"name": "setLendingRateOracle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "marketId",
				"type": "string"
			}
		],
		"name": "setMarketId",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "admin",
				"type": "address"
			}
		],
		"name": "setPoolAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "priceOracle",
				"type": "address"
			}
		],
		"name": "setPriceOracle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

export const aTOKEN_ABI = [
    {
      "inputs": [
        {
          "internalType": "contract LendingPoolAddressesProvider",
          "name": "_addressesProvider",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_underlyingAsset",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "_underlyingAssetDecimals",
          "type": "uint8"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_symbol",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_fromBalanceIncrease",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_toBalanceIncrease",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_fromIndex",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_toIndex",
          "type": "uint256"
        }
      ],
      "name": "BalanceTransfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_fromBalanceIncrease",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_fromIndex",
          "type": "uint256"
        }
      ],
      "name": "BurnOnLiquidation",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_to",
          "type": "address"
        }
      ],
      "name": "InterestRedirectionAllowanceChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_redirectedBalance",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_fromBalanceIncrease",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_fromIndex",
          "type": "uint256"
        }
      ],
      "name": "InterestStreamRedirected",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_fromBalanceIncrease",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_fromIndex",
          "type": "uint256"
        }
      ],
      "name": "MintOnDeposit",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_fromBalanceIncrease",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_fromIndex",
          "type": "uint256"
        }
      ],
      "name": "Redeem",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_targetAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_targetBalanceIncrease",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_targetIndex",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_redirectedBalanceAdded",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_redirectedBalanceRemoved",
          "type": "uint256"
        }
      ],
      "name": "RedirectedBalanceUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "UINT_MAX_VALUE",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "underlyingAssetAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        }
      ],
      "name": "redirectInterestStream",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        }
      ],
      "name": "redirectInterestStreamOf",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        }
      ],
      "name": "allowInterestRedirectionTo",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "redeem",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "mintOnDeposit",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "burnOnLiquidation",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferOnLiquidation",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "principalBalanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "isTransferAllowed",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "getUserIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "getInterestRedirectionAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "getRedirectedBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
]

export const LENDINGPOOL_ABI = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_reserve",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_borrowRateMode",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_borrowRate",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_originationFee",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_borrowBalanceIncrease",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint16",
          "name": "_referral",
          "type": "uint16"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_timestamp",
          "type": "uint256"
        }
      ],
      "name": "Borrow",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_reserve",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint16",
          "name": "_referral",
          "type": "uint16"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_timestamp",
          "type": "uint256"
        }
      ],
      "name": "Deposit",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_target",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_reserve",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_totalFee",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_protocolFee",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_timestamp",
          "type": "uint256"
        }
      ],
      "name": "FlashLoan",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_collateral",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_reserve",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_purchaseAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_liquidatedCollateralAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_accruedBorrowInterest",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_liquidator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "_receiveAToken",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_timestamp",
          "type": "uint256"
        }
      ],
      "name": "LiquidationCall",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_collateral",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_reserve",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_feeLiquidated",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_liquidatedCollateralForFee",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_timestamp",
          "type": "uint256"
        }
      ],
      "name": "OriginationFeeLiquidated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_reserve",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_newStableRate",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_borrowBalanceIncrease",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_timestamp",
          "type": "uint256"
        }
      ],
      "name": "RebalanceStableBorrowRate",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_reserve",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_timestamp",
          "type": "uint256"
        }
      ],
      "name": "RedeemUnderlying",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_reserve",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_user",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_repayer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_amountMinusFees",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_fees",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_borrowBalanceIncrease",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_timestamp",
          "type": "uint256"
        }
      ],
      "name": "Repay",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_reserve",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "ReserveUsedAsCollateralDisabled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_reserve",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "ReserveUsedAsCollateralEnabled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_reserve",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_newRateMode",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_newRate",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_borrowBalanceIncrease",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_timestamp",
          "type": "uint256"
        }
      ],
      "name": "Swap",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "LENDINGPOOL_REVISION",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "UINT_MAX_VALUE",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "addressesProvider",
      "outputs": [
        {
          "internalType": "contract LendingPoolAddressesProvider",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "core",
      "outputs": [
        {
          "internalType": "contract LendingPoolCore",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "dataProvider",
      "outputs": [
        {
          "internalType": "contract LendingPoolDataProvider",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "parametersProvider",
      "outputs": [
        {
          "internalType": "contract LendingPoolParametersProvider",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "contract LendingPoolAddressesProvider",
          "name": "_addressesProvider",
          "type": "address"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_reserve",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "internalType": "uint16",
          "name": "_referralCode",
          "type": "uint16"
        }
      ],
      "name": "deposit",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_reserve",
          "type": "address"
        },
        {
          "internalType": "address payable",
          "name": "_user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_aTokenBalanceAfterRedeem",
          "type": "uint256"
        }
      ],
      "name": "redeemUnderlying",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_reserve",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_interestRateMode",
          "type": "uint256"
        },
        {
          "internalType": "uint16",
          "name": "_referralCode",
          "type": "uint16"
        }
      ],
      "name": "borrow",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_reserve",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "_onBehalfOf",
          "type": "address"
        }
      ],
      "name": "repay",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_reserve",
          "type": "address"
        }
      ],
      "name": "swapBorrowRateMode",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_reserve",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "rebalanceStableBorrowRate",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_reserve",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_useAsCollateral",
          "type": "bool"
        }
      ],
      "name": "setUserUseReserveAsCollateral",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_collateral",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_reserve",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_purchaseAmount",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_receiveAToken",
          "type": "bool"
        }
      ],
      "name": "liquidationCall",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_receiver",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_reserve",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_params",
          "type": "bytes"
        }
      ],
      "name": "flashLoan",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "_reserve",
          "type": "address"
        }
      ],
      "name": "getReserveConfigurationData",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "ltv",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "liquidationThreshold",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "liquidationBonus",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "interestRateStrategyAddress",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "usageAsCollateralEnabled",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "borrowingEnabled",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "stableBorrowRateEnabled",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "isActive",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "_reserve",
          "type": "address"
        }
      ],
      "name": "getReserveData",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "totalLiquidity",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "availableLiquidity",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalBorrowsStable",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalBorrowsVariable",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "liquidityRate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "variableBorrowRate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "stableBorrowRate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "averageStableBorrowRate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "utilizationRate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "liquidityIndex",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "variableBorrowIndex",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "aTokenAddress",
          "type": "address"
        },
        {
          "internalType": "uint40",
          "name": "lastUpdateTimestamp",
          "type": "uint40"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "getUserAccountData",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "totalLiquidityETH",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalCollateralETH",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalBorrowsETH",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalFeesETH",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "availableBorrowsETH",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "currentLiquidationThreshold",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "ltv",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "healthFactor",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "_reserve",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "getUserReserveData",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "currentATokenBalance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "currentBorrowBalance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "principalBorrowBalance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "borrowRateMode",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "borrowRate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "liquidityRate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "originationFee",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "variableBorrowIndex",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "lastUpdateTimestamp",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "usageAsCollateralEnabled",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getReserves",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
]

  