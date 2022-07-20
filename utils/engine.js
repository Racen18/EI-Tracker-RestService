//-----ENGINE FUNCTIONS FOR EXPENSE INCOME TRACKER-----//

/**
@CreatedBy    : Thamilarasan M
@CreatedTime  : May 17 2022
@ModifiedBy   : 
@ModifiedTime : 
@Description  : This file contains all the common functions
**/

//All modules must be imported here
const pino = require('pino')
const pretty = require('pino-pretty')
const mongoose = require('mongoose');


/********************** Common Functions **********************/

module.exports = class engine{
   
    /**
    @CreatedBy    : Thamilarasan M
    @CreatedTime  : May 17 2022
    @ModifiedBy   : 
    @ModifiedTime : 
    @Description  : Function to log values in console
    **/
    static generateConsoleLogger(){
        return pino(pretty({colorize: true}))
    }


   

    /**
    @CreatedBy    : Thamilarasan M
    @CreatedTime  : May 17 2022
    @ModifiedBy   : 
    @ModifiedTime : 
    @Description  : Function to change normal value to base64 value
    **/
    static encryptConnection(connectionKey){
        return Buffer.from(connectionKey).toString('base64');
    }

    

    /**
    @CreatedBy    : Thamilarasan M
    @CreatedTime  : May 17 2022
    @ModifiedBy   : 
    @ModifiedTime : 
    @Description  : Function to change base64 value to normal value
    **/
    static decryptConnection(connectionKey){
        console.log(connectionKey, 'jfjebfkbkfbbfb')
        if(connectionKey){
            return Buffer.from(connectionKey, 'base64').toString();
        }
        else{
            throw new Error('Wrong Connection Key')
        }
    }
    
  

    /**
    @CreatedBy    : Thamilarasan M
    @CreatedTime  : May 17 2022
    @ModifiedBy   : 
    @ModifiedTime : 
    @Description  : Function to connect to the database
    **/
    static generateDatabaseConnector(databaseURL){
        const databaseConnector = mongoose.connect(
            databaseURL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
        return databaseConnector
    }



    /**
    @CreatedBy    : Thamilarasan M
    @CreatedTime  : May 17 2022
    @ModifiedBy   : 
    @ModifiedTime : 
    @Description  : Function to gave the output
    **/
    static generateServiceResponse(response, output, method, status, endpoint){
        response.status(status)
        var serviceResponse = {
            outputResponse : output,
            apiResponse   : {
                method     : method,
                status     : status,
                timestamp  : new Date().toLocaleString(),
                endpoint   : endpoint
            }
        }
        return serviceResponse
    }

}