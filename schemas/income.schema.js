//-----SCHEMA MODEL DATA FOR INCOME-----//

/**
@CreatedBy      : Thamilarasan M
@CreatedTime    : 25 May 2022
@ModifiedBy     : 
@ModifiedTime   : 
@Description    : This file contains schema for income
**/

//All modules must be imported here
const mongoose = require('mongoose')

//-----Income Sub-Schema Definition-----//
const userSubSchema = new mongoose.Schema(
    {
        userID          : { type: String, required: true, unique: true},
        userName        : { type: String, required: true}
    },
    {
        _id             :   false
    }
);

//-----Income Schema Definition-----//
const income = new mongoose.Schema(
    {
        incomeID       : { type: String, required: true, unique: true},
        incomeName     : { type: String, required: true},
        incomeDate     : { type: String, required: true},
        incomeAmount   : { type: Number, required: true},
        createdBy       : { type: userSubSchema, required: true},
        createdTime     : { type: String, required: true},
    },
    {
        collection      : 'ET-Income'
    }
);

const incomeSchema = mongoose.model('ET-Income', income);
  
module.exports = incomeSchema