//-----ENDPOINTS FOR EXPENSE INCOME TRACKER-----//

/**
@CreatedBy      : Thamilarasan M
@CreatedTime    : 18 May 2022
@ModifiedBy     : 
@ModifiedTime   : 
@Description    : This file contains all the endpoints used for expense income tracker
**/

class endpoints {
    //Base URL Configurations
    static ENDPOINT_BASE_URL = `${process.env.EIT_BASE_URL}`
    static ENDPOINT_NAME_URL = '/expenseincometracker'
    static ENDPOINT_VERSION = '/v1'

    //Expense Service URL
    static ENDPOINT_EXPENSE = '/expense'
    static ENDPOINT_EXPENSES = '/expenses'
    static ENDPOINT_ONE_EXPENSE = '/expense/:expenseid'

    //Income Service URL
    static ENDPOINT_INCOME = '/income'
    static ENDPOINT_INCOMES = '/incomes'
    static ENDPOINT_ONE_INCOME = '/income/:incomeid'

    //User Service URL
    static ENDPOINT_USER = '/user'
    static ENDPOINT_USERS = '/users'
    static ENDPOINT_ONE_USER = '/user/:userid'
}

module.exports = endpoints