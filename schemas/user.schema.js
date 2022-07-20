//-----SCHEMA MODEL DATA FOR USER-----//

/**
@CreatedBy      : Thamilarasan M
@CreatedTime    : 18 May 2022
@ModifiedBy     : 
@ModifiedTime   : 
@Description    : This file contains schema for user
**/

//All modules must be imported here
const mongoose = require('mongoose')

//-----User Sub-Schema Definition-----//
const userContactSubSchema = new mongoose.Schema(
    {
        userEmail       : { type: String, required: true, unique: true },
        userNumber      : { type: Number, required: true, unique: true },
        userPassword    : { type: String, required: true }
    }
)

//-----User Schema Definition-----//
const user = new mongoose.Schema(
    {
        userID          : { type: String, required: true, unique: true },
        userName        : { type: String, required: true },
        userData        : { type: userContactSubSchema, required: true },
        createdTime     : { type: String, required: true },
    },
    {
        collection      : 'ET-User'
    }
);

const userSchema = mongoose.model('ET-User', user);
  
module.exports = userSchema
