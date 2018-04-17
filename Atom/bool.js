const Atom = require("../Substance/atom.js");
const WithMathan = require("../Mathan/bool.mathan.js");

class BoolAtom extends Atom
{
    IsAcceptableJsValue(jsValue){
        var typeofString = typeof(jsValue);
        if(typeofString==="boolean")
            return true;
    }

    ConvertToAtomValue(jsValue){
        return jsValue;
    }

    static get DefaultJsValue(){
        return false;
    }

    static get True(){
        return new BoolAtom(true);
    }

    static get False(){
        return new BoolAtom(false);
    }
}

//TODO: refactoring
var math = WithMathan(BoolAtom);
for(var func in math)
{
    BoolAtom.prototype[func] = function(...args){
        var atomifiedArgs = args.map(a => BoolAtom.Atomify(a));//TODO: HACK: плохо реализовано
        return math[func](this, ...atomifiedArgs.slice(-1))
    };
}

module.exports = BoolAtom;//Object.assign(
    // BoolAtom,
    // ...WithMathan(BoolAtom).map(f => function(...args){return f(this, ...args.slice())} ),
// );

// var b1 = new BoolAtom();
// var res = (b1.value);
// console.log(res);