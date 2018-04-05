const Atom = require("./atom.js");

class StringAtom extends Atom
{
    constructor(value){
        super(value);
    }

    IsValid(value){
        if(typeof(value)==="string")
            return true;
    }

    Convert(value){
        return value;
    }

    Store(value){
        this.v = value
    }
}



var x = new StringAtom(12);

console.log(x.v);