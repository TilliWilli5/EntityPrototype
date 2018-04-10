const StringAtom = require("./string.js");

class GuidAtom extends StringAtom
{
    IsAcceptableJsValue(jsValue){
        return super.IsAcceptableJsValue(jsValue)
            && jsValue.match(/[^0-9a-z]/g) === null//нету знаков кроме шестнадцетеричных
            ;
    }
}

module.exports = GuidAtom;
// var guid = new GuidAtom("550e8400xe29bx41d4xa716x446655440000");
// var guidValue = +guid;
// console.log(guidValue, guid.value);