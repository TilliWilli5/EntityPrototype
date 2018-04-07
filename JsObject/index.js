function CloneJsObject(jsObject){
    return JSON.parse(JSON.stringify(jsObject));
}

module.exports = {
    CloneJsObject
};