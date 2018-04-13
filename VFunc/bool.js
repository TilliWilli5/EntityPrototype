const AtomValidatorFactory = require("../AtomValidator/atomValidatorFactory.js");
const BoolAtom = require("../Atom/bool.js");

const validators = [
    function IsTrue(boolAtom){
        return boolAtom.value === true
            ? this.true
            : this.false;
    },
    function IsFalse(boolAtom){
        return boolAtom.value === false
            ? this.true
            : this.false;
    }
];

module.exports = AtomValidatorFactory(BoolAtom, validators);

const Console = require("../console.js");

function ToString(atomOrValue){
    return atomOrValue instanceof BoolAtom
        ? `${atomOrValue.constructor.name}<${atomOrValue.value}>`
        : "" + atomOrValue;
}

var tableReport = [];
[]
.concat(() => {
    var tryValue = 12, validator = module.exports.IsTrue, reportPass="", reportMessage="", reportResult="";var reportValue = ToString(tryValue);
    try{reportResult = validator.Valid(tryValue);reportPass="[PASSED]";}catch(e){reportPass="[FAILED]";reportMessage=e.message;}
    tableReport.push([validator.name, reportValue, reportPass, reportMessage, ToString(reportResult)]);
})
.concat(() => {
    var tryValue = true, validator = module.exports.IsTrue, reportPass="", reportMessage="", reportResult="";var reportValue = ToString(tryValue);
    try{reportResult = validator.Valid(tryValue);reportPass="[PASSED]";}catch(e){reportPass="[FAILED]";reportMessage=e.message;}
    tableReport.push([validator.name, reportValue, reportPass, reportMessage, ToString(reportResult)]);
})
.concat(() => {
    var tryValue = false, validator = module.exports.IsTrue, reportPass="", reportMessage="", reportResult="";var reportValue = ToString(tryValue);
    try{reportResult = validator.Valid(tryValue);reportPass="[PASSED]";}catch(e){reportPass="[FAILED]";reportMessage=e.message;}
    tableReport.push([validator.name, reportValue, reportPass, reportMessage, ToString(reportResult)]);
})
.concat(() => {
    var tryValue = null, validator = module.exports.IsTrue, reportPass="", reportMessage="", reportResult="";var reportValue = ToString(tryValue);
    try{reportResult = validator.Valid(tryValue);reportPass="[PASSED]";}catch(e){reportPass="[FAILED]";reportMessage=e.message;}
    tableReport.push([validator.name, reportValue, reportPass, reportMessage, ToString(reportResult)]);
})
.concat(() => {
    var tryValue = undefined, validator = module.exports.IsTrue, reportPass="", reportMessage="", reportResult="";var reportValue = ToString(tryValue);
    try{reportResult = validator.Valid(tryValue);reportPass="[PASSED]";}catch(e){reportPass="[FAILED]";reportMessage=e.message;}
    tableReport.push([validator.name, reportValue, reportPass, reportMessage, ToString(reportResult)]);
})
.concat(() => {
    var tryValue = 0, validator = module.exports.IsTrue, reportPass="", reportMessage="", reportResult="";var reportValue = ToString(tryValue);
    try{reportResult = validator.Valid(tryValue);reportPass="[PASSED]";}catch(e){reportPass="[FAILED]";reportMessage=e.message;}
    tableReport.push([validator.name, reportValue, reportPass, reportMessage, ToString(reportResult)]);
})
.concat(() => {
    var tryValue = BoolAtom.True, validator = module.exports.IsTrue, reportPass="", reportMessage="", reportResult="";var reportValue = ToString(tryValue);
    try{reportResult = validator.Valid(tryValue);reportPass="[PASSED]";}catch(e){reportPass="[FAILED]";reportMessage=e.message;}
    tableReport.push([validator.name, reportValue, reportPass, reportMessage, ToString(reportResult)]);
})
.concat(() => {
    var tryValue = BoolAtom.False, validator = module.exports.IsTrue, reportPass="", reportMessage="", reportResult="";var reportValue = ToString(tryValue);
    try{reportResult = validator.Valid(tryValue);reportPass="[PASSED]";}catch(e){reportPass="[FAILED]";reportMessage=e.message;}
    tableReport.push([validator.name, reportValue, reportPass, reportMessage, ToString(reportResult)]);
})
.concat(() => {
    var tryValue = new BoolAtom(false), validator = module.exports.IsTrue, reportPass="", reportMessage="", reportResult="";var reportValue = ToString(tryValue);
    try{reportResult = validator.Valid(tryValue);reportPass="[PASSED]";}catch(e){reportPass="[FAILED]";reportMessage=e.message;}
    tableReport.push([validator.name, reportValue, reportPass, reportMessage, ToString(reportResult)]);
})
.concat(() => {
    var tryValue = new BoolAtom(true), validator = module.exports.IsTrue, reportPass="", reportMessage="", reportResult="";var reportValue = ToString(tryValue);
    try{reportResult = validator.Valid(tryValue);reportPass="[PASSED]";}catch(e){reportPass="[FAILED]";reportMessage=e.message;}
    tableReport.push([validator.name, reportValue, reportPass, reportMessage, ToString(reportResult)]);
})
.map(vfunc => vfunc());

Console.Table(tableReport, ["VFunc", "Value", "Status", "ErrorMessage", "Result"], "-");