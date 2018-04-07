const Atom = require("../Substance/atom.js");

const value = Symbol("ValueStorage");

class FloatAtom extends Atom
{
    IsAcceptableJsValue(jsValue){
        if(typeof(jsValue)==="number" && Number.isNaN(jsValue) === false)
            return true;
    }

    ConvertToAtomValue(jsValue){
        return Number.isFinite(jsValue)
            ? jsValue
            : jsValue > 0 ? Number.MAX_VALUE : -Number.MAX_VALUE;
    }

    StoreAtomValue(atomValue){
        this[value] = atomValue;
    }

    LoadAtomValue(){
        return this[value];
    }
}

module.exports = FloatAtom;