const FloatAtom = require("./float.js");

const value = Symbol("ValueStorage");

class IntegerAtom extends FloatAtom
{
    IsAcceptableJsValue(jsValue){
        return super.IsAcceptableJsValue(jsValue);
    }

    ConvertToAtomValue(jsValue){
        var floatNumber = super.ConvertToAtomValue(jsValue);
        var safeInteger = floatNumber > 0
            ? floatNumber > Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : floatNumber
            : floatNumber < -Number.MAX_SAFE_INTEGER ? -Number.MAX_SAFE_INTEGER : floatNumber;
        var integer = Math.floor(safeInteger);
        return integer;
    }

    StoreAtomValue(atomValue){
        this[value] = atomValue;
    }

    LoadAtomValue(){
        return this[value];
    }
}

module.exports = IntegerAtom;
// var x = +new IntegerAtom(12) +new IntegerAtom(99.05) +new IntegerAtom(Infinity);
// console.log(`IntegerAtom(12): `, +new IntegerAtom(x));