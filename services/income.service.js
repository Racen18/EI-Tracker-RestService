//-----REST SERVICE FOR CRUD OPERATION IN INCOME-----//

/**
@CreatedBy      : Thamilarasan M
@CreatedTime    : July 18 2022
@ModifiedBy     : 
@ModifiedTime   : 
@Description    : This file contains rest services for income
**/

//All modules must be imported here
let express = require('express');
let engine = require('../utils/engine');
let endpoints = require('../utils/endpoints');
let incomeSchema = require('../schemas/income.schema')

/****** Initilizing objects for imported classes here ******/
let incomeService = express.Router();
let logger = engine.generateConsoleLogger();


/********************** CRUD Operation REST APIs for income Entity **********************/


/**
@CreatedBy    : Thamilarasan M
@CreatedTime  : July 18 2022
@ModifiedBy   : 
@ModifiedTime : 
@Description  : This API creates mutiple incomes
**/
incomeService.post(endpoints.ENDPOINT_VERSION + endpoints.ENDPOINT_INCOME, async (request, response) => {
    try {
        logger.info(request.headers); logger.info(request.params); logger.info(request.body)

        const databaseConnection = engine.decryptConnection(request.headers.connectionkey)
        engine.generateDatabaseConnector(databaseConnection)

        incomeSchema.insertMany(request.body).then((output) => {
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
@CreatedTime  : July 18 2022
@ModifiedBy   : 
@ModifiedTime : 
@Description  : This API read incomes based on filter and pagination
**/
incomeService.post(endpoints.ENDPOINT_VERSION + endpoints.ENDPOINT_INCOMES, async (request, response) => {
    try {
        logger.info(request.headers); logger.info(request.params); logger.info(request.body)

        const databaseConnection = engine.decryptConnection(request.headers.connectionkey)
        engine.generateDatabaseConnector(databaseConnection)

        incomeSchema.find(request.body.filter).limit(request.body.limit).skip(request.body.limit * request.body.page).sort(request.body.sort).then((output) => {
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
@CreatedTime  : July 18 2022
@ModifiedBy   : 
@ModifiedTime : 
@Description  : This API read one expense based on incomeID
**/
incomeService.get(endpoints.ENDPOINT_VERSION + endpoints.ENDPOINT_ONE_INCOME, async (request, response) => {
    try {
        logger.info(request.headers); logger.info(request.params); logger.info(request.body)

        const databaseConnection = engine.decryptConnection(request.headers.connectionkey)
        engine.generateDatabaseConnector(databaseConnection)

        incomeSchema.find({ incomeID: request.params.incomeid }).then((output) => {
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
@CreatedTime  : July 18 2022
@ModifiedBy   : 
@ModifiedTime : 
@Description  : This API partially updates incomes
**/
incomeService.patch(endpoints.ENDPOINT_VERSION + endpoints.ENDPOINT_INCOMES, async (request, response) => {
    try {
        logger.info(request.headers); logger.info(request.params); logger.info(request.body)

        const databaseConnection = engine.decryptConnection(request.headers.connectionkey)
        engine.generateDatabaseConnector(databaseConnection)

        incomeSchema.updateMany(request.body.filter, request.body.fields).then((output) => {
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
@CreatedTime  : July 18 2022
@ModifiedBy   : 
@ModifiedTime : 
@Description  : This API delete one income based on incomeID
**/
incomeService.delete(endpoints.ENDPOINT_VERSION + endpoints.ENDPOINT_ONE_INCOME, async (request, response) => {
    try {
        logger.info(request.headers); logger.info(request.params); logger.info(request.body)

        const databaseConnection = engine.decryptConnection(request.headers.connectionkey)
        engine.generateDatabaseConnector(databaseConnection)

        incomeSchema.deleteOne({ incomeID: request.params.incomeid }).then((output) => {
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


module.exports = incomeService