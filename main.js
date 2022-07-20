//-----SERVER STARTING POINT FOR EXPENSE-INCOME-TRACKER-----//

/**
@CreatedBy      : Thamilarasan M
@CreatedTime    : May 17 2022
@ModifiedBy     : Thamilarasan M
@ModifiedTime   : July 18 2022
@Description    : This file contains all the initialization steps for starting the server
**/

//All modules must be imported here
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const basicAuth = require('express-basic-auth');
const engine = require('./utils/engine')
const endpoints = require('./utils/endpoints')
const expenseService = require('./services/expense.service');
const incomeService = require('./services/income.service');
const userService = require('./services/user.service');

//All modules must be initialized here
const expenseIncomeTracker = express();
const consoleLogger = engine.generateConsoleLogger()

//Module configuration must be mentioned here
expenseIncomeTracker.use(cors());
expenseIncomeTracker.use(express.json());
expenseIncomeTracker.use(bodyParser.urlencoded({extended: false}));
expenseIncomeTracker.use(basicAuth({users:{[process.env.EXPENSE_INCOME_TRACKER_USERNAME] : process.env.EXPENSE_INCOME_TRACKER_PASSWORD}}))

//Mapping the endpoints to the respective service modules
expenseIncomeTracker.use(endpoints.ENDPOINT_NAME_URL, expenseService)
expenseIncomeTracker.use(endpoints.ENDPOINT_NAME_URL, incomeService)
expenseIncomeTracker.use(endpoints.ENDPOINT_NAME_URL, userService)

//IpAddress and PortNumber Configurations
const ipAddress = process.env.IP_ADDRESS
const portNumber = process.env.PORT_NUMBER

//Server running host and port
expenseIncomeTracker.listen(portNumber, () => {
    consoleLogger.info(`Server is running on ${ipAddress}:${portNumber}`)
})

//To get encrypted connection key
console.log('connectionString:', engine.encryptConnection(process.env.DATABASE_CONNECTION_KEY))

module.exports = expenseIncomeTracker;