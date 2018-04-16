const Substance = require("./substance.js");
const JsObject = require("../JsObject/index.js");
const ExternalAtomify = require("./atomify.js");

const value = Symbol("ValueStorage");

class Atom extends Substance
{
    /**
     * 
     * @param {*} jsValue vanila javascript type / raw data
     */
    constructor(jsValue){
        super();
        this.ValidateDefaultJsValue();
        jsValue = (jsValue === undefined || jsValue === null)
            ? this.constructor.DefaultJsValue
            : jsValue;
        this.ValidateJsValue(jsValue);
        //TODO: подумать как реализовать клонирование и нужно оно тут вообще?!
        // var clonedJsValue = JsObject.CloneJsObject(jsValue);
        var atomValue = this.ConvertToAtomValue(jsValue);
        this.StoreAtomValue(atomValue);
    }



















    static get DefaultJsValue(){
        throw new Error(`Every Atom must provide DefaultJsValue`);
    }

    ValidateDefaultJsValue(){
        if( this.constructor.hasOwnProperty("DefaultJsValue") === false)
            throw new Error(`The specified class: ${this.constructor.name} doesn't provide property DefaultJsValue`);
    }

    // valueOf(){
    //     return this.value;
    // }

    static New(jsValue){
        return 
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

    IsAtom(atom){//TODO: необходимо придумать надежный алгоритм определения (Атом или НеАтом)
        return atom instanceof Atom;
    }

    get Type(){
        return this.constructor;
    }

    get Origin(){//TODO: необходимо придумать надежный алгоритм определения (Атом или НеАтом)
        return Atom;
    }

    static get Origin(){//TODO: необходимо придумать надежный алгоритм определения (Атом или НеАтом)
        return Atom;
    }

    static get Atomify(){
        const Factory = this;
        return function(jsValueOrAtom){
            return jsValueOrAtom instanceof Atom
                ? new Factory(jsValueOrAtom.value)
                : new Factory(jsValueOrAtom);
        }
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