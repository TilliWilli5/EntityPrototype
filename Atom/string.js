const Atom = require("../Substance/atom.js");

const value = Symbol("ValueStorage");

class StringAtom extends Atom
{
    IsAcceptableJsValue(jsValue){
        if(typeof(jsValue)==="string")
            return true;
    }

    ConvertToAtomValue(jsValue){
        return jsValue;
    }

    StoreAtomValue(atomValue){
        this[value] = atomValue;
    }

    LoadAtomValue(){
        return this[value];
    }
}

module.exports = StringAtom;