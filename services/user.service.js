//-----REST SERVICE FOR CRUD OPERATION IN USER-----//

/**
@CreatedBy      : Thamilarasan M
@CreatedTime    : July 18 2022
@ModifiedBy     : 
@ModifiedTime   : 
@Description    : This file contains rest services for user
**/

//All modules must be imported here
let express = require('express');
let engine = require('../utils/engine');
let endpoints = require('../utils/endpoints');
let userSchema = require('../schemas/user.schema')

/****** Initilizing objects for imported classes here ******/
let userService = express.Router();
let logger = engine.generateConsoleLogger();


/********************** CRUD Operation REST APIs for user Entity **********************/


/**
@CreatedBy    : Thamilarasan M
@CreatedTime  : July 18 2022
@ModifiedBy   : 
@ModifiedTime : 
@Description  : This API creates mutiple users
**/
userService.post(endpoints.ENDPOINT_VERSION + endpoints.ENDPOINT_USER, async (request, response) => {
    try {
        logger.info(request.headers); logger.info(request.params); logger.info(request.body)

        const databaseConnection = engine.decryptConnection(request.headers.connectionkey)
        engine.generateDatabaseConnector(databaseConnection)

        userSchema.insertMany(request.body).then((output) => {
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
@Description  : This API read users based on filter and pagination
**/
userService.post(endpoints.ENDPOINT_VERSION + endpoints.ENDPOINT_USERS, async (request, response) => {
    try {
        logger.info(request.headers); logger.info(request.params); logger.info(request.body)

        const databaseConnection = engine.decryptConnection(request.headers.connectionkey)
        engine.generateDatabaseConnector(databaseConnection)

        userSchema.find(request.body.filter).limit(request.body.limit).skip(request.body.limit * request.body.page).sort(request.body.sort).then((output) => {
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
@Description  : This API read one expense based on userID
**/
userService.get(endpoints.ENDPOINT_VERSION + endpoints.ENDPOINT_ONE_USER, async (request, response) => {
    try {
        logger.info(request.headers); logger.info(request.params); logger.info(request.body)

        const databaseConnection = engine.decryptConnection(request.headers.connectionkey)
        engine.generateDatabaseConnector(databaseConnection)

        userSchema.find({ userID: request.params.userid }).then((output) => {
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
@Description  : This API partially updates users
**/
userService.patch(endpoints.ENDPOINT_VERSION + endpoints.ENDPOINT_USERS, async (request, response) => {
    try {
        logger.info(request.headers); logger.info(request.params); logger.info(request.body)

        const databaseConnection = engine.decryptConnection(request.headers.connectionkey)
        engine.generateDatabaseConnector(databaseConnection)

        userSchema.updateMany(request.body.filter, request.body.fields).then((output) => {
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
@Description  : This API delete one income based on userID
**/
userService.delete(endpoints.ENDPOINT_VERSION + endpoints.ENDPOINT_ONE_USER, async (request, response) => {
    try {
        logger.info(request.headers); logger.info(request.params); logger.info(request.body)

        const databaseConnection = engine.decryptConnection(request.headers.connectionkey)
        engine.generateDatabaseConnector(databaseConnection)

        userSchema.deleteOne({ userID: request.params.userid }).then((output) => {
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


module.exports = userService