require('dotenv').config()

module.exports ={
  rokuIp: process.env.ROKU_HOST,
  rokuUser: process.env.ROKU_USERNAME,
  rokuPass: process.env.ROKU_PASSWORD,
};
