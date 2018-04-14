const BoolAtom = require("../Atom/bool.js");
const TRUE = BoolAtom.True;
const FALSE = BoolAtom.False;


const AtomValidatorFactory = require("../AtomValidator/atomValidatorFactory.js");
const FloatAtom = require("../Atom/float.js");

const validators = [
    /** @param {LimitCue} ctx */
    function MinLimit(floatAtom, ctx = {exclude:false,value:Number.MIN_VALUE}){
        if(ctx.exclude) return floatAtom.value > ctx.value ? TRUE : FALSE;
        else return floatAtom.value >= ctx.value ? TRUE : FALSE;
    },
    /** @param {LimitCue} ctx */
    function MaxLimit(floatAtom, ctx = {exclude:false,value:Number.MAX_VALUE}){
        if(ctx.exclude) return floatAtom.value < ctx.value ? TRUE : FALSE;
        else return floatAtom.value <= ctx.value ? TRUE : FALSE;
    },
    // function Clamp(floatAtom, ctx){

    // },
    // function Discrete(floatAtom){

    // },
];

module.exports = AtomValidatorFactory(FloatAtom, validators);

const Console = require("../console.js");

//TODO: очень плохая реализация + вынести в отдельный файл
function ToString(atomOrValue){
    return atomOrValue && typeof(atomOrValue.Super)==="function" && atomOrValue instanceof atomOrValue.Super()
        ? `${atomOrValue.constructor.name}<${atomOrValue.value}>`
        : "" + atomOrValue;
}

var tableReport = []
.concat(() => {
    var tryValue = 12, validator = module.exports.MinLimit, reportPass="", reportMessage="", reportResult="";var reportValue = ToString(tryValue);var ctx={exclude:false,value:12};
    try{reportResult = validator.Valid(tryValue,ctx);reportPass="[PASSED]";}catch(e){reportPass="[FAILED]";reportMessage=e.message;}
    return [validator.name, reportValue, reportPass, reportMessage, ToString(reportResult)];
})
.concat(() => {
    var tryValue = new BoolAtom(), validator = module.exports.MinLimit, reportPass="", reportMessage="", reportResult="";var reportValue = ToString(tryValue);var ctx={exclude:false,value:12};
    try{reportResult = validator.Valid(tryValue,ctx);reportPass="[PASSED]";}catch(e){reportPass="[FAILED]";reportMessage=e.message;}
    return [validator.name, reportValue, reportPass, reportMessage, ToString(reportResult)];
})
.concat(() => {
    var tryValue = new BoolAtom(true), validator = module.exports.MinLimit, reportPass="", reportMessage="", reportResult="";var reportValue = ToString(tryValue);var ctx={exclude:false,value:12};
    try{reportResult = validator.Valid(tryValue,ctx);reportPass="[PASSED]";}catch(e){reportPass="[FAILED]";reportMessage=e.message;}
    return [validator.name, reportValue, reportPass, reportMessage, ToString(reportResult)];
})
.concat(() => {
    var tryValue = new FloatAtom(15), validator = module.exports.MinLimit, reportPass="", reportMessage="", reportResult="";var reportValue = ToString(tryValue);var ctx={exclude:false,value:12};
    try{reportResult = validator.Valid(tryValue,ctx);reportPass="[PASSED]";}catch(e){reportPass="[FAILED]";reportMessage=e.message;}
    return [validator.name, reportValue, reportPass, reportMessage, ToString(reportResult)];
})
.map(vfunc => vfunc());

Console.Table(tableReport, ["VFunc", "Value", "Status", "ErrorMessage", "Result"], "-");

/**
 * @typedef LimitCue
 * @property {Number} value значение лимита
 * @property {false|true} exclude значение лимита
 */