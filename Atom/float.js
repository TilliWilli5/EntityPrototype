const Atom = require("../Substance/atom.js");
const WithMathan = require("../Mathan/float.mathan.js");

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

    static get DefaultJsValue(){
        return 0;
    }
}

//TODO: refactoring
var math = WithMathan(FloatAtom);
for(let func in math)
{
    FloatAtom.prototype[func] = function(...args){return math[func](this, ...args.slice())};
}

module.exports = FloatAtom;
//  = Object.assign(
//     FloatAtom.prototype,
//     WithMathan(FloatAtom).map(f => function(...args){return f(this, ...args.slice())} ),
// );


var f1 = new FloatAtom(12.3);
var f2 = f1.add(12);
console.log(f2.value);