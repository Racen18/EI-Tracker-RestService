//-----SCHEMA MODEL DATA FOR EXPENSE-----//

/**
@CreatedBy      : Thamilarasan M
@CreatedTime    : 18 May 2022
@ModifiedBy     : 
@ModifiedTime   : 
@Description    : This file contains schema for expense
**/

//All modules must be imported here
const mongoose = require('mongoose')

//-----Expense Sub-Schema Definition-----//
const userSubSchema = new mongoose.Schema(
    {
        userID          : { type: String, required: true, unique: true},
        userName        : { type: String, required: true}
    },
    {
        _id             :   false
    }
);

//-----Expense Schema Definition-----//
const expense = new mongoose.Schema(
    {
        expenseID       : { type: String, required: true, unique: true},
        expenseName     : { type: String, required: true},
        expenseDate     : { type: String, required: true},
        expenseAmount   : { type: Number, required: true},
        createdBy       : { type: userSubSchema, required: true},
        createdTime     : { type: String, required: true},
    },
    {
        collection      : 'ET-Expense'
    }
);

const expenseSchema = mongoose.model('ET-Expense', expense);
  
module.exports = expenseSchema
