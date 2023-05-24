const { create } = require('ipfs-http-client');
const fs = require("fs");



const client = create('https://ipfs.infura.io:5001/api/v0')


const fun = async () => {
    let buf = fs.readFileSync("C:\\Users\\lbgyo\\Pictures\\whitepaper.pdf");//读取文件，并将缓存区进行转换
    //var file = new File([buf], "whitepaper.pdf", {type: ".pdf", lastModified: Date.now()});
    const hash = await client.add(buf).catch((error)=>{console.log(error)})
    console.log(hash)
}

fun()