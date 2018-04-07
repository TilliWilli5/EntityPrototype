const FiniteNumberAtom = require("./finiteNumber.js");

const value = Symbol("ValueStorage");

class IntegerAtom extends FiniteNumberAtom
{
    IsAcceptableJsValue(jsValue){
        return super.IsAcceptableJsValue(jsValue);
    }

    ConvertToAtomValue(jsValue){
        var finiteNumber = super.ConvertToAtomValue(jsValue);
        var safeInteger = finiteNumber > 0
            ? finiteNumber > Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : finiteNumber
            : finiteNumber < -Number.MAX_SAFE_INTEGER ? -Number.MAX_SAFE_INTEGER : finiteNumber;
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

var integer1 = new IntegerAtom(-99999999999999999999999999999999999999.01);
console.log(integer1.value, integer1.value===Number.MAX_SAFE_INTEGER);