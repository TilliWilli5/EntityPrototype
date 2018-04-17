const ValidatorController = require("../AtomValidator/atomValidatorFactory.js");
const FloatAtom = require("../Atom/float.js");

const validators = [
    /** @param {LimitCue} ctx */
    function MinLimit(floatAtom, ctx = {exclude:false,value:Number.MIN_VALUE}){
        if(ctx.exclude) return floatAtom.value > ctx.value ? true : false;
        else return floatAtom.value >= ctx.value ? true : false;
    },
    /** @param {LimitCue} ctx */
    function MaxLimit(floatAtom, ctx = {exclude:false,value:Number.MAX_VALUE}){
        if(ctx.exclude) return floatAtom.value < ctx.value ? true : false;
        else return floatAtom.value <= ctx.value ? true : false;
    },
    // function Clamp(floatAtom, ctx){
    //     if(ctx.exclude) return floatAtom.value < ctx.value ? true : false;
    //     else return floatAtom.value <= ctx.value ? true : false;

    // },
    function Discrete(floatAtom, ctx = {value:Infinity}){
        return floatAtom.mod(ctx.value).value === 0;
    },
];

module.exports = ValidatorController(FloatAtom, validators);

/**
 * @typedef LimitCue
 * @property {Number} value значение лимита
 * @property {false|true} exclude значение лимита
 */

const Console = require("../console.js");

//TODO: очень плохая реализация + вынести в отдельный файл
function ToString(atomOrValue){
    return atomOrValue && typeof(atomOrValue.Origin)==="function" && atomOrValue instanceof atomOrValue.Origin
        ? `${atomOrValue.constructor.name}<${atomOrValue.value}>`
        : "" + atomOrValue;
}

var tableReport = []

//Min Limit
.concat(() => {
    var tryValue = 12, validator = module.exports.MinLimit, reportPass="", reportMessage="", reportResult="";var reportValue = ToString(tryValue);var ctx={exclude:false,value:12};
    try{reportResult = validator.Valid(tryValue,ctx);reportPass="[PASSED]";}catch(e){reportPass="[FAILED]";reportMessage=e.message;}
    return [validator.name, reportValue, reportPass, reportMessage, ToString(reportResult), JSON.stringify(ctx)];
})
.concat(() => {
    var tryValue = undefined, validator = module.exports.MinLimit, reportPass="", reportMessage="", reportResult="";var reportValue = ToString(tryValue);var ctx={exclude:false,value:12};
    try{reportResult = validator.Valid(tryValue,ctx);reportPass="[PASSED]";}catch(e){reportPass="[FAILED]";reportMessage=e.message;}
    return [validator.name, reportValue, reportPass, reportMessage, ToString(reportResult), JSON.stringify(ctx)];
})
.concat(() => {
    var tryValue = true, validator = module.exports.MinLimit, reportPass="", reportMessage="", reportResult="";var reportValue = ToString(tryValue);var ctx={exclude:false,value:12};
    try{reportResult = validator.Valid(tryValue,ctx);reportPass="[PASSED]";}catch(e){reportPass="[FAILED]";reportMessage=e.message;}
    return [validator.name, reportValue, reportPass, reportMessage, ToString(reportResult), JSON.stringify(ctx)];
})
.concat(() => {
    var tryValue = new FloatAtom(15), validator = module.exports.MinLimit, reportPass="", reportMessage="", reportResult="";var reportValue = ToString(tryValue);var ctx={exclude:false,value:12};
    try{reportResult = validator.Valid(tryValue,ctx);reportPass="[PASSED]";}catch(e){reportPass="[FAILED]";reportMessage=e.message;}
    return [validator.name, reportValue, reportPass, reportMessage, ToString(reportResult), JSON.stringify(ctx)];
})

//Max Limit
.concat(() => {
    var tryValue = true, validator = module.exports.MaxLimit, reportPass="", reportMessage="", reportResult="";var reportValue = ToString(tryValue);var ctx={exclude:false,value:12};
    try{reportResult = validator.Valid(tryValue,ctx);reportPass="[PASSED]";}catch(e){reportPass="[FAILED]";reportMessage=e.message;}
    return [validator.name, reportValue, reportPass, reportMessage, ToString(reportResult), JSON.stringify(ctx)];
})
.concat(() => {
    var tryValue = new FloatAtom(1.5), validator = module.exports.MaxLimit, reportPass="", reportMessage="", reportResult="";var reportValue = ToString(tryValue);var ctx={exclude:false,value:12};
    try{reportResult = validator.Valid(tryValue,ctx);reportPass="[PASSED]";}catch(e){reportPass="[FAILED]";reportMessage=e.message;}
    return [validator.name, reportValue, reportPass, reportMessage, ToString(reportResult), JSON.stringify(ctx)];
})
//Discrete
.concat(() => {
    var tryValue = new FloatAtom(2.25), validator = module.exports.Discrete, reportPass="", reportMessage="", reportResult="";var reportValue = ToString(tryValue);var ctx={value:1};
    try{reportResult = validator.Valid(tryValue,ctx);reportPass="[PASSED]";}catch(e){reportPass="[FAILED]";reportMessage=e.message;}
    return [validator.name, reportValue, reportPass, reportMessage, ToString(reportResult), JSON.stringify(ctx)];
})
.concat(() => {
    var tryValue = new FloatAtom(2.25), validator = module.exports.Discrete, reportPass="", reportMessage="", reportResult="";var reportValue = ToString(tryValue);var ctx={value:0.5};
    try{reportResult = validator.Valid(tryValue,ctx);reportPass="[PASSED]";}catch(e){reportPass="[FAILED]";reportMessage=e.message;}
    return [validator.name, reportValue, reportPass, reportMessage, ToString(reportResult), JSON.stringify(ctx)];
})
.concat(() => {
    var tryValue = new FloatAtom(2.25), validator = module.exports.Discrete, reportPass="", reportMessage="", reportResult="";var reportValue = ToString(tryValue);var ctx={value:0.25};
    try{reportResult = validator.Valid(tryValue,ctx);reportPass="[PASSED]";}catch(e){reportPass="[FAILED]";reportMessage=e.message;}
    return [validator.name, reportValue, reportPass, reportMessage, ToString(reportResult), JSON.stringify(ctx)];
})
.concat(() => {
    var tryValue = new FloatAtom(2.25), validator = module.exports.Discrete, reportPass="", reportMessage="", reportResult="";var reportValue = ToString(tryValue);var ctx={value:0.01};
    try{reportResult = validator.Valid(tryValue,ctx);reportPass="[PASSED]";}catch(e){reportPass="[FAILED]";reportMessage=e.message;}
    return [validator.name, reportValue, reportPass, reportMessage, ToString(reportResult), JSON.stringify(ctx)];
})
.concat(() => {
    var tryValue = new FloatAtom(2.25), validator = module.exports.Discrete, reportPass="", reportMessage="", reportResult="";var reportValue = ToString(tryValue);var ctx={value:0.1};
    try{reportResult = validator.Valid(tryValue,ctx);reportPass="[PASSED]";}catch(e){reportPass="[FAILED]";reportMessage=e.message;}
    return [validator.name, reportValue, reportPass, reportMessage, ToString(reportResult), JSON.stringify(ctx)];
})
.map(vfunc => vfunc());

Console.Table(tableReport, ["VFunc", "Value", "Status", "ErrorMessage", "Result", "Context"], "-");