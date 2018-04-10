const {util} = require("@tilliwilli/sgl");

module.exports = function(){
    return util.Uuid().replace(/-/g,"");
}