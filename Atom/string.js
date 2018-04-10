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
}

module.exports = StringAtom;