/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Saucer, SaucerInterface } from "../../contracts/Saucer";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum Saucer.StakingPlan",
        name: "plan",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Left",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum Saucer.StakingPlan",
        name: "plan",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Staked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "_saux",
    outputs: [
      {
        internalType: "contract IERC20Upgradeable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "enum Saucer.StakingPlan",
        name: "plan",
        type: "uint8",
      },
    ],
    name: "enter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20Upgradeable",
        name: "saux",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "feeCollector",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum Saucer.StakingPlan",
        name: "plan",
        type: "uint8",
      },
    ],
    name: "leave",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "enum Saucer.StakingPlan",
        name: "",
        type: "uint8",
      },
    ],
    name: "stakes",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        internalType: "enum Saucer.StakingPlan",
        name: "plan",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum Saucer.StakingPlan",
        name: "",
        type: "uint8",
      },
    ],
    name: "wallets",
    outputs: [
      {
        internalType: "contract StakeWallet",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061288c806100206000396000f3fe60806040523480156200001157600080fd5b5060043610620001515760003560e01c806370a0823111620000c7578063a457c2d71162000086578063a457c2d71462000328578063a9059cbb146200033f578063bdb2c2091462000356578063cfb26b81146200036d578063dd62ed3e1462000381578063f2fde38b14620003bd57600080fd5b806370a082311462000291578063715018a614620002bd578063733f28a814620002c75780638da5cb5b146200030c57806395d89b41146200031e57600080fd5b80633027ffc011620001145780633027ffc014620001e3578063313ce5671462000247578063395093511462000257578063485cc955146200026e5780635c975abb146200028557600080fd5b806306fdde031462000156578063095ea7b3146200017857806318160ddd14620001a057806323b872dd14620001b35780632cb5402514620001ca575b600080fd5b62000160620003d4565b6040516200016f91906200217d565b60405180910390f35b6200018f62000189366004620021eb565b6200046e565b60405190151581526020016200016f565b6099545b6040519081526020016200016f565b6200018f620001c43660046200221a565b62000488565b620001e1620001db36600462002275565b620004b2565b005b62000235620001f436600462002293565b60c96020908152600092835260408084209091529082529020805460018201546002909201549091906001600160a01b03811690600160a01b900460ff1684565b6040516200016f949392919062002306565b604051601281526020016200016f565b6200018f62000268366004620021eb565b62000a68565b620001e16200027f3660046200233b565b62000aab565b60655460ff166200018f565b620001a4620002a236600462002379565b6001600160a01b031660009081526097602052604090205490565b620001e162000f34565b620002f3620002d836600462002275565b60ca602052600090815260409020546001600160a01b031681565b6040516001600160a01b0390911681526020016200016f565b6033546001600160a01b0316620002f3565b6200016062000f9e565b6200018f62000339366004620021eb565b62000faf565b6200018f62000350366004620021eb565b62001050565b620001e16200036736600462002399565b62001060565b60cb54620002f3906001600160a01b031681565b620001a4620003923660046200233b565b6001600160a01b03918216600090815260986020908152604080832093909416825291909152205490565b620001e1620003ce36600462002379565b620018d4565b6060609a8054620003e590620023bf565b80601f01602080910402602001604051908101604052809291908181526020018280546200041390620023bf565b8015620004645780601f10620004385761010080835404028352916020019162000464565b820191906000526020600020905b8154815290600101906020018083116200044657829003601f168201915b5050505050905090565b6000336200047e818585620019a5565b5060019392505050565b6000336200049885828562001acd565b620004a585858562001b5e565b60019150505b9392505050565b3360009081526097602052604081205411620005155760405162461bcd60e51b815260206004820152601c60248201527f6e65656420612062616c616e6365206f66206174206c6561737420310000000060448201526064015b60405180910390fd5b33600090815260c960205260408120818360048111156200053a576200053a620022cd565b60048111156200054e576200054e620022cd565b8152602080820192909252604090810160002081516080810183528154815260018201549381019390935260028101546001600160a01b03811692840192909252906060830190600160a01b900460ff166004811115620005b357620005b3620022cd565b6004811115620005c757620005c7620022cd565b9052509050600081606001516004811115620005e757620005e7620022cd565b1415620006375760405162461bcd60e51b815260206004820152601960248201527f6e6f7420656e726f6c6c656420696e20616e7920706c616e2e0000000000000060448201526064016200050c565b33600090815260c960205260408120908360048111156200065c576200065c620022cd565b6004811115620006705762000670620022cd565b8152602081019190915260400160009081208181556001810182905560020180546001600160a81b031916905560995490506000600183606001516004811115620006bf57620006bf620022cd565b1415620006cf575060006200074b565b600283606001516004811115620006ea57620006ea620022cd565b1415620006fa575060506200074b565b600383606001516004811115620007155762000715620022cd565b141562000725575060426200074b565b600483606001516004811115620007405762000740620022cd565b14156200074b575060645b60cb546000906001600160a01b03166370a0823160ca83886004811115620007775762000777620022cd565b60048111156200078b576200078b620022cd565b81526020810191909152604090810160002054905160e083901b6001600160e01b03191681526001600160a01b03909116600482015260240160206040518083038186803b158015620007dd57600080fd5b505afa158015620007f2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620008189190620023fc565b90506000620008298260646200242c565b838587602001516200083c91906200242c565b6200084891906200242c565b6200085491906200244e565b905060006200087186602001518760000151886060015162001d36565b90508015620009685760cb546001600160a01b03166323b872dd60ca60008a6004811115620008a457620008a4620022cd565b6004811115620008b857620008b8620022cd565b8152602081019190915260409081016000205460cc54915160e084901b6001600160e01b03191681526001600160a01b0391821660048201529116602482015260448101849052606401602060405180830381600087803b1580156200091d57600080fd5b505af115801562000932573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000958919062002471565b5062000965818362002495565b91505b60cb546001600160a01b03166323b872dd60ca60008a6004811115620009925762000992620022cd565b6004811115620009a657620009a6620022cd565b81526020810191909152604090810160002054905160e083901b6001600160e01b03191681526001600160a01b03909116600482015233602482015260448101859052606401602060405180830381600087803b15801562000a0757600080fd5b505af115801562000a1c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000a42919062002471565b503360008181526097602052604090205462000a5f919062001e29565b50505050505050565b3360008181526098602090815260408083206001600160a01b03871684529091528120549091906200047e908290869062000aa5908790620024af565b620019a5565b600054610100900460ff1662000ac85760005460ff161562000acc565b303b155b62000b315760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016200050c565b600054610100900460ff1615801562000b54576000805461ffff19166101011790555b62000b5e62001f7d565b62000b6862001fb1565b60cb80546001600160a01b038086166001600160a01b03199283161790925560cc805492851692909116919091179055604051309062000ba8906200216f565b6001600160a01b039091168152602001604051809103906000f08015801562000bd5573d6000803e3d6000fd5b506001600081905260ca6020527fffdc4fad4cae5b6def485eb2915a8a59a963e8bdfb9e32cab695f7ae652f88b480546001600160a01b0319166001600160a01b0393909316928317905560405163199e8acb60e01b815263199e8acb9162000c459187913091600401620024ca565b600060405180830381600087803b15801562000c6057600080fd5b505af115801562000c75573d6000803e3d6000fd5b505050503060405162000c88906200216f565b6001600160a01b039091168152602001604051809103906000f08015801562000cb5573d6000803e3d6000fd5b50600260005260ca6020527fe0b86fdc737c0cfd301a36ced403fb76310e3742e00d1a38c7c46a1f09f3411b80546001600160a01b0319166001600160a01b0392909216918217905560405163199e8acb60e01b815263199e8acb9062000d269086903090600190600401620024ca565b600060405180830381600087803b15801562000d4157600080fd5b505af115801562000d56573d6000803e3d6000fd5b505050503060405162000d69906200216f565b6001600160a01b039091168152602001604051809103906000f08015801562000d96573d6000803e3d6000fd5b50600360005260ca6020527f5b7646a6db03b87b9d4aa3a43bf0d95244ac4dd0ccad01a658e934c15d17266580546001600160a01b0319166001600160a01b0392909216918217905560405163199e8acb60e01b815263199e8acb9062000e079086903090600190600401620024ca565b600060405180830381600087803b15801562000e2257600080fd5b505af115801562000e37573d6000803e3d6000fd5b505050503060405162000e4a906200216f565b6001600160a01b039091168152602001604051809103906000f08015801562000e77573d6000803e3d6000fd5b506004600081905260ca6020527f3cb08e0198dd2c78e3fcd4789c6d528ab55f482b453e6724440a0ff8dfa784aa80546001600160a01b0319166001600160a01b0393909316928317905560405163199e8acb60e01b815263199e8acb9162000ee8918791309160019101620024ca565b600060405180830381600087803b15801562000f0357600080fd5b505af115801562000f18573d6000803e3d6000fd5b50505050801562000f2f576000805461ff00191690555b505050565b6033546001600160a01b0316331462000f905760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016200050c565b62000f9c600062001fe7565b565b6060609b8054620003e590620023bf565b3360008181526098602090815260408083206001600160a01b038716845290915281205490919083811015620010365760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016200050c565b620010458286868403620019a5565b506001949350505050565b6000336200047e81858562001b5e565b6000816004811115620010775762001077620022cd565b1415620010c75760405162461bcd60e51b815260206004820152601960248201527f506c6561736520656e74657220612076616c696420706c616e0000000000000060448201526064016200050c565b68056bc75e2d63100000821015620011225760405162461bcd60e51b815260206004820152601960248201527f4d696e696d756d20616d6f756e74203d2031303020534155580000000000000060448201526064016200050c565b33600090815260c96020526040812081836004811115620011475762001147620022cd565b60048111156200115b576200115b620022cd565b8152602081019190915260400160002060020154600160a01b900460ff1660048111156200118d576200118d620022cd565b141562001286576040518060800160405280428152602001838152602001336001600160a01b03168152602001826004811115620011cf57620011cf620022cd565b905233600090815260c96020526040812090836004811115620011f657620011f6620022cd565b60048111156200120a576200120a620022cd565b81526020808201929092526040908101600020835181559183015160018301558201516002820180546001600160a01b039092166001600160a01b03198316811782556060850151926001600160a81b03191617600160a01b836004811115620012785762001278620022cd565b0217905550905050620012ee565b33600090815260c96020526040812081836004811115620012ab57620012ab620022cd565b6004811115620012bf57620012bf620022cd565b8152602001908152602001600020905082816001016000828254620012e59190620024af565b90915550504290555b6000620012fa60995490565b9050600133600090815260c96020526040812090846004811115620013235762001323620022cd565b6004811115620013375762001337620022cd565b8152602081019190915260400160002060020154600160a01b900460ff166004811115620013695762001369620022cd565b1415620014ab5760cb546000906200145b9060649062001454906005906001600160a01b03166370a0823160ca878a6004811115620013ac57620013ac620022cd565b6004811115620013c057620013c0620022cd565b81526020810191909152604090810160002054905160e083901b6001600160e01b03191681526001600160a01b03909116600482015260240160206040518083038186803b1580156200141257600080fd5b505afa15801562001427573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200144d9190620023fc565b9062002039565b9062002047565b905081158062001469575080155b1562001481576200147b338562002055565b620014a4565b6000620014948262001454878662002039565b9050620014a2338262002055565b505b50620017ad565b600233600090815260c96020526040812090846004811115620014d257620014d2620022cd565b6004811115620014e657620014e6620022cd565b8152602081019190915260400160002060020154600160a01b900460ff166004811115620015185762001518620022cd565b1415620015b15760cb546000906200155b906064906200145490600f906001600160a01b03166370a0823160ca878a6004811115620013ac57620013ac620022cd565b905081158062001569575080155b1562001595576200147b336004620015838760056200242c565b6200158f91906200244e565b62002055565b600062001494826200145460058160046200144d8b8a62002039565b600333600090815260c96020526040812090846004811115620015d857620015d8620022cd565b6004811115620015ec57620015ec620022cd565b8152602081019190915260400160002060020154600160a01b900460ff1660048111156200161e576200161e620022cd565b1415620016a95760cb5460009062001661906064906200145490601e906001600160a01b03166370a0823160ca878a6004811115620013ac57620013ac620022cd565b90508115806200166f575080155b156200168d576200147b336200158f60046200145488600662002039565b600062001494826200145460068160046200144d8b8a62002039565b600433600090815260c96020526040812090846004811115620016d057620016d0620022cd565b6004811115620016e457620016e4620022cd565b8152602081019190915260400160002060020154600160a01b900460ff166004811115620017165762001716620022cd565b1415620017ad5760cb54600090620017599060649062001454906032906001600160a01b03166370a0823160ca878a6004811115620013ac57620013ac620022cd565b905081158062001767575080155b1562001785576200177f336200158f86600262002039565b620017ab565b60006200179b8262001454600281898862002039565b9050620017a9338262002055565b505b505b336001600160a01b03167f3cf14181ae25669a913d72411736fc5c01f538fa503e963b0b2e56bcefb3edaf8385604051620017ea929190620024ee565b60405180910390a260cb546001600160a01b03166323b872dd3360ca60008660048111156200181d576200181d620022cd565b6004811115620018315762001831620022cd565b81526020810191909152604090810160002054905160e084901b6001600160e01b03191681526001600160a01b0392831660048201529116602482015260448101869052606401602060405180830381600087803b1580156200189357600080fd5b505af1158015620018a8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620018ce919062002471565b50505050565b6033546001600160a01b03163314620019305760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016200050c565b6001600160a01b038116620019975760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016200050c565b620019a28162001fe7565b50565b6001600160a01b03831662001a095760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016200050c565b6001600160a01b03821662001a6c5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016200050c565b6001600160a01b0383811660008181526098602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038381166000908152609860209081526040808320938616835292905220546000198114620018ce578181101562001b4f5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016200050c565b620018ce8484848403620019a5565b6001600160a01b03831662001bc45760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016200050c565b6001600160a01b03821662001c285760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016200050c565b6001600160a01b0383166000908152609760205260409020548181101562001ca25760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016200050c565b6001600160a01b0380851660009081526097602052604080822085850390559185168152908120805484929062001cdb908490620024af565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405162001d2891815260200190565b60405180910390a3620018ce565b60008080600184600481111562001d515762001d51620022cd565b141562001d6457600092505050620004ab565b600284600481111562001d7b5762001d7b620022cd565b141562001d9157506005905062278d0062001de6565b600384600481111562001da85762001da8620022cd565b141562001dbe5750600a90506276a70062001de6565b600484600481111562001dd55762001dd5620022cd565b141562001de657506014905062ed4e005b8062001df3864262002495565b1062001e0557600092505050620004ab565b606462001e1383886200242c565b62001e1f91906200244e565b9695505050505050565b6001600160a01b03821662001e8b5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016200050c565b6001600160a01b0382166000908152609760205260409020548181101562001f015760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016200050c565b6001600160a01b038316600090815260976020526040812083830390556099805484929062001f3290849062002495565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b600054610100900460ff1662001fa75760405162461bcd60e51b81526004016200050c906200250b565b62000f9c6200213a565b600054610100900460ff1662001fdb5760405162461bcd60e51b81526004016200050c906200250b565b6065805460ff19169055565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000620004ab82846200242c565b6000620004ab82846200244e565b6001600160a01b038216620020ad5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016200050c565b8060996000828254620020c19190620024af565b90915550506001600160a01b03821660009081526097602052604081208054839290620020f0908490620024af565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600054610100900460ff16620021645760405162461bcd60e51b81526004016200050c906200250b565b62000f9c3362001fe7565b610300806200255783390190565b600060208083528351808285015260005b81811015620021ac578581018301518582016040015282016200218e565b81811115620021bf576000604083870101525b50601f01601f1916929092016040019392505050565b6001600160a01b0381168114620019a257600080fd5b60008060408385031215620021ff57600080fd5b82356200220c81620021d5565b946020939093013593505050565b6000806000606084860312156200223057600080fd5b83356200223d81620021d5565b925060208401356200224f81620021d5565b929592945050506040919091013590565b8035600581106200227057600080fd5b919050565b6000602082840312156200228857600080fd5b620004ab8262002260565b60008060408385031215620022a757600080fd5b8235620022b481620021d5565b9150620022c46020840162002260565b90509250929050565b634e487b7160e01b600052602160045260246000fd5b600581106200230257634e487b7160e01b600052602160045260246000fd5b9052565b848152602081018490526001600160a01b038316604082015260808101620023326060830184620022e3565b95945050505050565b600080604083850312156200234f57600080fd5b82356200235c81620021d5565b915060208301356200236e81620021d5565b809150509250929050565b6000602082840312156200238c57600080fd5b8135620004ab81620021d5565b60008060408385031215620023ad57600080fd5b82359150620022c46020840162002260565b600181811c90821680620023d457607f821691505b60208210811415620023f657634e487b7160e01b600052602260045260246000fd5b50919050565b6000602082840312156200240f57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161562002449576200244962002416565b500290565b6000826200246c57634e487b7160e01b600052601260045260246000fd5b500490565b6000602082840312156200248457600080fd5b81518015158114620004ab57600080fd5b600082821015620024aa57620024aa62002416565b500390565b60008219821115620024c557620024c562002416565b500190565b6001600160a01b039384168152919092166020820152901515604082015260600190565b60408101620024fe8285620022e3565b8260208301529392505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b60608201526080019056fe608060405234801561001057600080fd5b5060405161030038038061030083398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b61026d806100936000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063199e8acb14610030575b600080fd5b61004361003e3660046101a7565b610045565b005b61004d61012a565b80156100f5576001600160a01b03831663095ea7b38361007060016000196101ee565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044015b602060405180830381600087803b1580156100b757600080fd5b505af11580156100cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100ef9190610213565b50505050565b60405163095ea7b360e01b81526001600160a01b0383811660048301526000602483015284169063095ea7b39060440161009d565b6000546001600160a01b031633146101785760405162461bcd60e51b815260206004820152600d60248201526c2737ba103a34329037bbb732b960991b604482015260640160405180910390fd5b565b80356001600160a01b038116811461019157600080fd5b919050565b80151581146101a457600080fd5b50565b6000806000606084860312156101bc57600080fd5b6101c58461017a565b92506101d36020850161017a565b915060408401356101e381610196565b809150509250925092565b60008282101561020e57634e487b7160e01b600052601160045260246000fd5b500390565b60006020828403121561022557600080fd5b815161023081610196565b939250505056fea26469706673582212205e4bea227938cd97fa3173a58bd543ffb0f75aa461e60a6ebd7bc915ef0a7eaa64736f6c63430008090033a26469706673582212205759a870ec771d8cc4bc4224f0089252dbed47aea9f08b62b1be531e7920976464736f6c63430008090033";

type SaucerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SaucerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Saucer__factory extends ContractFactory {
  constructor(...args: SaucerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Saucer> {
    return super.deploy(overrides || {}) as Promise<Saucer>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Saucer {
    return super.attach(address) as Saucer;
  }
  override connect(signer: Signer): Saucer__factory {
    return super.connect(signer) as Saucer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SaucerInterface {
    return new utils.Interface(_abi) as SaucerInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Saucer {
    return new Contract(address, _abi, signerOrProvider) as Saucer;
  }
}
