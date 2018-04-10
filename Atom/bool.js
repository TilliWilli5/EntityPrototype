const Atom = require("../Substance/atom.js");

class BoolAtom extends Atom
{
    IsAcceptableJsValue(jsValue){
        var typeofString = typeof(jsValue);
        if(typeofString==="boolean")
            return true;
    }

    ConvertToAtomValue(jsValue){
        return jsValue;
    }

    static get DefaultJsValue(){
        return false;
    }
}

module.exports = BoolAtom;

// var b1 = new BoolAtom();
// var res = (b1.value);
// console.log(res);