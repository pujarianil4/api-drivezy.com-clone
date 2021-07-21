require("dotenv").config()

const serviceID=process.env.SERVICE_ID
const accountSID=process.env.ACCOUNT_SID
const authToken=process.env.AUTHTOKEN


module.exports={
    servideID:serviceID,
    accountSID:accountSID,
    authToken:authToken
}