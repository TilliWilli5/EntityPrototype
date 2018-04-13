const {DefaultJsValueRestrictedError} = require("../AtomError/index.js");

const Atom = require("../Substance/atom.js");

const value = Symbol("ValueStorage");

class TimeAtom extends Atom
{

    IsAcceptableJsValue(jsValue){
        if(
            jsValue.constructor && jsValue.constructor === Date
            ||
            typeof(jsValue) === "string" && jsValue.match(/^\d{4}-\d{2}-\d{2}[T ]{1}\d{2}:\d{2}:\d{2}.\d{3}[zZ]{1}/) === null
            ||
            Number.isInteger(jsValue)
        )
        return true;
    }

    ConvertToAtomValue(jsValue){
        switch(typeof(jsValue))
        {
            case "object": return jsValue.valueOf();
            case "string": return (new Date(jsValue)).valueOf();
            case "number": return Math.floor(new Date(jsValue)).valueOf()
        }
    }

    StoreAtomValue(atomValue){
        this[value] = atomValue;
    }

    LoadAtomValue(){
        return new Date(this[value]);
    }

    static get DefaultJsValue(){
        throw new DefaultJsValueRestrictedError();
    }

    static get Now(){
        return new Date();
    }
}

module.exports = TimeAtom;

new TimeAtom(1);
// new TimeAtom(-144.004);
// new TimeAtom();
// var t1 = new TimeAtom(null);
var t1 = new TimeAtom(Date.now());
// new TimeAtom({});
console.log(t1.value);