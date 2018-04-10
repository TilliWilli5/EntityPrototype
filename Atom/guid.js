const {DefaultJsValueRestrictedError} = require("../AtomError/index.js");

const StringAtom = require("./string.js");
const uuid = require("../uuid.js");

class GuidAtom extends StringAtom
{
    IsAcceptableJsValue(jsValue){
        return super.IsAcceptableJsValue(jsValue)
            && jsValue.match(/[^0-9a-z]/g) === null//нету знаков кроме шестнадцетеричных
            ;
    }

    static get DefaultJsValue(){
        return uuid();
    }
}

module.exports = GuidAtom;
// var guid1 = new GuidAtom("3c22316c174c41f7b162c27d4f3deb10");
// var guid2 = new GuidAtom();
// var guidValue = guid1.value;
// console.log(guidValue, guid1.value, guid2.value);