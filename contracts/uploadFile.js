const pinataApiKey = '2953a600653c93105ac1';
const pinataApiSecret = 'c5aea6cd3884eb1d5318c33a9d710c8bb3e1d99f2bd6dbde7a677a43a921c526';
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
var args = process.argv.slice(2);
var filePath = args[0];

const pinFileToIPFS = async () => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  let data = new FormData();
  data.append("file", fs.createReadStream(filePath));
  const res = await axios.post(url, data, {
    maxContentLength: "Infinity",
    headers: {
      "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
      pinata_api_key: pinataApiKey,
      pinata_secret_api_key: pinataApiSecret,
    },
  });
  console.log(res.data);
};
pinFileToIPFS();
