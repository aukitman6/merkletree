const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')


let options = {
    hashLeaves: true,
    sort:true,
    duplicateOdd: false,
    isBitcoinTree: false
}

let whitelistAddresses1 = [
    "0x656fB5DB86C6639236acED5089181BE0FAf8ed9e",
    "0x73998aB59b053A0eB5443F8a4Ea015412d55Ce4A",
    "0x659b60F085458c6BA2e70D32887D1aF055E1B728",
    "0x988C00875bfFbdbCc5b37261A00AFe23fA809293",
    "0x94d7dc89c6f0656Ba8C38aF88fE59912fabC70dA",
    ["0xb578ef86633De67Ec7f37b10f53071d0A8b3B325","0x94d7dc89c6f0656Ba8C38aF88fE59912fabC70dA"],
    "0x911c4c2408d2e5bb3ee07ecbe0a0057a20139573",
    "0x3d664cb92E341fc51379B36d22C8b4CaE0b4d32C803d664cb92E341fc51379B36d22C8b4CaE0b4d32C8",
    "0x792Bd5b014F446dd34e79bc996f663a6014cb055",
    "0x1AA2792076b191Cc16b47387CAAD13755C2aBcA4",
    "0x5CC1C519A012F1EA67dEEa21C1F2ec0C5e891A33",
    "0xeafA8953646704143B3834BFA40dCB261d1eCE97",
    "0x6015b7d9193e218A397b11efB420E527940E5191",
    "0x106e2e076e5C6B5c0A9909065B474BABFD38805C"
]



const tree1 = new MerkleTree(whitelistAddresses1, keccak256, options);

// let options2 = {
//     hashLeaves: false,
//     sort:true,
//     duplicateOdd: false,
//     isBitcoinTree: false
// }

// const tree2 = new MerkleTree(tree1.getHexLeaves(), keccak256, options2);
// // console.log("root: " + tree1.getHexRoot())
console.log(keccak256("0xb578ef86633De67Ec7f37b10f53071d0A8b3B2###0x94d7dc89c6f0656Ba8C38aF88fE59912fabC70dA8"))

let merkleProof = tree1.getHexProof("0x" + keccak256(["0xb578ef86633De67Ec7f37b10f53071d0A8b3B324","0x94d7dc89c6f0656Ba8C38aF88fE59912fabC70dA8"]).toString('hex'));

console.log("proof: " + merkleProof)
console.log("HexRoot: " + tree1.getHexRoot())

console.log(tree1.verify(merkleProof, "0x" + keccak256(["0xb578ef86633De67Ec7f37b10f53071d0A8b3B324","0x94d7dc89c6f0656Ba8C38aF88fE59912fabC70dA8"]).toString('hex'), tree1.getHexRoot()))
