const Substance = require("./substance.js");
const JsObject = require("../JsObject/index.js");

const value = Symbol("ValueStorage");

class Atom extends Substance
{
    /**
     * 
     * @param {*} jsValue vanila javascript type / raw data
     */
    constructor(jsValue){
        super();
        this.ValidateJsValue(jsValue);
        //TODO: подумать как реализовать клонирование и нужно оно тут вообще?!
        // var clonedJsValue = JsObject.CloneJsObject(jsValue);
        var atomValue = this.ConvertToAtomValue(jsValue);
        this.StoreAtomValue(atomValue);
    }



















    valueOf(){
        return this.value;
    }

    Clone(){
        return new this.constructor(this.LoadAtomValue());
    }

    get value(){
        return this.LoadAtomValue();
    }

    StoreAtomValue(atomValue){
        this[value] = atomValue;
    }

    LoadAtomValue(){
        return this[value];
    }

    //Not implemented below

    IsAcceptableJsValue(jsValue){ 
        throw new Error("Not implemented: IsAcceptableJsValue");
    }
    
    ValidateJsValue(jsValue){
        if(!this.IsAcceptableJsValue(jsValue))
            throw new Error(`Invalid value: ${jsValue}`);
    }

    ConvertToAtomValue(jsValue){
        throw new Error("Not implemented: ConvertToAtomValue");
    }
}

module.exports = Atom;