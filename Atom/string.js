const Atom = require("../Substance/atom.js");

class StringAtom extends Atom
{
    IsAcceptableJsValue(jsValue){
        if(typeof(jsValue)==="string")
            return true;
    }

    ConvertToAtomValue(jsValue){
        return jsValue;
    }

    static get DefaultJsValue(){
        return "";
    }
}

module.exports = StringAtom;
// var s1 = new StringAtom();
// console.log("s1.value: ", s1.value);