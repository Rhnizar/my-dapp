// Import dotenv and load the .env file
// delete require.cache[require.resolve('dotenv')];
require("dotenv").config();
console.log(`process.env   RRR  ==>  ${process.env.SEPOLIA_URL}`);
console.log(`process.env.PRIVATE_KEY  ==>  ${process.env.PRIVATE_KEY}`);
console.log(`rr ==>  ${process.env.RR}`);