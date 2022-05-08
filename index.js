const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')


let options = {
    hashLeaves: true,
    sort:true,
    duplicateOdd: false,
    isBitcoinTree: false
}

let whitelistAddresses = [
    '0x7A2Fba526142B95086183b6cE3E7EDf835E52d84',
    '0xA54E8CB831d953Df7D6E9457183ECB885fb2550c',
    '0xd0c17D06dBC69c43D752EAeeFd1b3EDCA5a21d15'
]


const tree1 = new MerkleTree(whitelistAddresses, keccak256, options)


console.log(tree1.toString())

let leaves1 = tree1.getHexLeaves();

console.log(leaves1)

console.log(tree1.getHexRoot())