function successResponse(statusCodeValue,successValue,messageValue,dataValue) {
    var data = {
        statusCode: statusCodeValue,
        success: successValue,
        message: messageValue,
        data: dataValue
    };
    return data
}

function failureResponse(statusCodeValue,successValue,messageValue,errorValue) {
    var data = {
        statusCode: statusCodeValue,
        success: successValue,
        message: messageValue,
        error:errorValue
    };
    return data
}