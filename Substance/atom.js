const Substance = require("./substance.js");
const JsObject = require("../JsObject/index.js");

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

    //Not implemented below

    IsAcceptableJsValue(value){ 
        throw new Error("Not implemented: IsAcceptableJsValue");
    }
    
    ValidateJsValue(value){
        if(!this.IsAcceptableJsValue(value))
            throw new Error(`Invalid value: ${value}`);
    }

    ConvertToAtomValue(value){
        throw new Error("Not implemented: ConvertToAtomValue");
    }

    StoreAtomValue(value){
        throw new Error("Not implemented: StoreAtomValue");
    }

    LoadAtomValue(){
        throw new Error("Not implemented: LoadAtomValue");
    }
}

module.exports = Atom;