//-----REST SERVICE FOR CRUD OPERATION IN EXPENSE-----//

/**
@CreatedBy      : Thamilarasan M
@CreatedTime    : May 25 2022
@ModifiedBy     : 
@ModifiedTime   : 
@Description    : This file contains rest services for expense
**/

//All modules must be imported here
let express = require('express');
let engine = require('../utils/engine');
let endpoints = require('../utils/endpoints');
let expenseSchema = require('../schemas/expense.schema')

/****** Initilizing objects for imported classes here ******/
let expenseService = express.Router();
let logger = engine.generateConsoleLogger();


/********************** CRUD Operation REST APIs for expense Entity **********************/


/**
@CreatedBy    : Thamilarasan M
@CreatedTime  : May 25 2022
@ModifiedBy   : Thamilarasan M
@ModifiedTime : July 18 2022
@Description  : This API creates mutiple expenses
**/
expenseService.post(endpoints.ENDPOINT_VERSION + endpoints.ENDPOINT_EXPENSE, async (request, response) => {
    try {
        logger.info(request.headers); logger.info(request.params); logger.info(request.body)

        const databaseConnection = engine.decryptConnection(request.headers.connectionkey)
        engine.generateDatabaseConnector(databaseConnection)

        expenseSchema.insertMany(request.body).then((output) => {
            output = engine.generateServiceResponse(response, output, request.method, 200, request.originalUrl)
            logger.info(output); response.json(output)
        }).catch((error) => {
            logger.error(error.stack)
            response.json(engine.generateServiceResponse(response, error.message, request.method, 500, request.originalUrl))
        })
    } catch (exception) {
        logger.error(exception.stack)
        response.json(engine.generateServiceResponse(response, exception.message, request.method, 500, request.originalUrl))
    }
})



/**
@CreatedBy    : Thamilarasan M
@CreatedTime  : June 02 2022
@ModifiedBy   : Thamilarasan M
@ModifiedTime : July 18 2022
@Description  : This API read expenses based on filter and pagination
**/
expenseService.post(endpoints.ENDPOINT_VERSION + endpoints.ENDPOINT_EXPENSES, async (request, response) => {
    try {
        logger.info(request.headers); logger.info(request.params); logger.info(request.body)

        const databaseConnection = engine.decryptConnection(request.headers.connectionkey)
        engine.generateDatabaseConnector(databaseConnection)

        expenseSchema.find(request.body.filter).limit(request.body.limit).skip(request.body.limit * request.body.page).sort(request.body.sort).then((output) => {
            output = engine.generateServiceResponse(response, output, request.method, 200, request.originalUrl)
            logger.info(output); response.json(output)
        }).catch((error) => {
            logger.error(error.stack)
            response.json(engine.generateServiceResponse(response, error.message, request.method, 500, request.originalUrl))
        })
    } catch (exception) {
        logger.error(exception.stack)
        response.json(engine.generateServiceResponse(response, exception.message, request.method, 500, request.originalUrl))
    }
})



/**
@CreatedBy    : Thamilarasan M
@CreatedTime  : June 02 2022
@ModifiedBy   : Thamilarasan M
@ModifiedTime : July 18 2022
@Description  : This API read one expense based on expenseID
**/
expenseService.get(endpoints.ENDPOINT_VERSION + endpoints.ENDPOINT_ONE_EXPENSE, async (request, response) => {
    try {
        logger.info(request.headers); logger.info(request.params); logger.info(request.body)

        const databaseConnection = engine.decryptConnection(request.headers.connectionkey)
        engine.generateDatabaseConnector(databaseConnection)

        expenseSchema.find({ expenseID: request.params.expenseid }).then((output) => {
            output = engine.generateServiceResponse(response, output, request.method, 200, request.originalUrl)
            logger.info(output); response.json(output)
        }).catch((error) => {
            logger.error(error.stack)
            response.json(engine.generateServiceResponse(response, error.message, request.method, 500, request.originalUrl))
        })
    }
    catch (exception) {
        logger.error(exception.stack)
        response.json(engine.generateServiceResponse(response, exception.message, request.method, 500, request.originalUrl))
    }
})



/**
@CreatedBy    : Thamilarasan M
@CreatedTime  : June 02 2022
@ModifiedBy   : Thamilarasan M
@ModifiedTime : July 18 2022
@Description  : This API partially updates expenses
**/
expenseService.patch(endpoints.ENDPOINT_VERSION + endpoints.ENDPOINT_EXPENSES, async (request, response) => {
    try {
        logger.info(request.headers); logger.info(request.params); logger.info(request.body)

        const databaseConnection = engine.decryptConnection(request.headers.connectionkey)
        engine.generateDatabaseConnector(databaseConnection)

        expenseSchema.updateMany(request.body.filter, request.body.fields).then((output) => {
            output = engine.generateServiceResponse(response, output, request.method, 200, request.originalUrl)
            logger.info(output); response.json(output)
        }).catch((error) => {
            logger.error(error.stack)
            response.json(engine.generateServiceResponse(response, error.message, request.method, 500, request.originalUrl))
        })
    } catch (exception) {
        logger.error(exception.stack)
        response.json(engine.generateServiceResponse(response, exception.message, request.method, 500, request.originalUrl))
    }
})



/**
@CreatedBy    : Thamilarasan M
@CreatedTime  : June 02 2022
@ModifiedBy   : Thamilarasan M
@ModifiedTime : July 18 2022
@Description  : This API delete one expense based on expenseID
**/
expenseService.delete(endpoints.ENDPOINT_VERSION + endpoints.ENDPOINT_ONE_EXPENSE, async (request, response) => {
    try {
        logger.info(request.headers); logger.info(request.params); logger.info(request.body)

        const databaseConnection = engine.decryptConnection(request.headers.connectionkey)
        engine.generateDatabaseConnector(databaseConnection)

        expenseSchema.deleteOne({ expenseID: request.params.expenseid }).then((output) => {
            output = engine.generateServiceResponse(response, output, request.method, 200, request.originalUrl)
            logger.info(output); response.json(output)
        }).catch((error) => {
            logger.error(error.stack)
            response.json(engine.generateServiceResponse(response, error.message, request.method, 500, request.originalUrl))
        })
    } catch (exception) {
        logger.error(exception.stack)
        response.json(engine.generateServiceResponse(response, exception.message, request.method, 500, request.originalUrl))
    }
})


module.exports = expenseService