const Atom = require("../Substance/atom.js");

class EnumAtom extends Atom
{
    /**
     * @param {EnumProto} jsValue 
     */
    IsAcceptableJsValue(jsValue){
        if(
            jsValue.constructor === Object
            &&
            Object.values(jsValue).every(el => Number.isInteger(el))
            &&
            Object.values(jsValue).every((el,index,arr)=>arr.lastIndexOf(el)===index)
        )
            return true;
    }

    ConvertToAtomValue(jsValue){
        return Object.freeze(jsValue);
    }

    static get DefaultJsValue(){
        return {};
    }

    get is(){
        var self = this;
        return new Proxy({}, {
            get: function(obj, prop){
                return (value) => value === self.value[prop];
            }
        });
    }

}

module.exports = EnumAtom;

/**
 * Объект вида {red:1, green:2, blue:3}
 * @typedef {Array<{key,value}>} EnumProto
 *
 */

var proto = "red green blue".split(" ")
    .map(v => v.trim().toLowerCase())
    .reduce((a,v,i)=>{a[v]=i;return a},{});
var Color = new EnumAtom(proto);

var theColor = Color.value.red;

if(theColor === Color.value.red)
    console.log("it is red");

if(Color.is.red(theColor))
    console.log("it is red");

var thisColor = new EnumAtom();
    console.log(thisColor);
