const {InvalidAtomValidatorError,InvalidAtomTypeError} = require("../AtomError/index.js");

const Atom = require("../Substance/atom.js");
const BoolAtom = require("../Atom/bool.js");

const type = Symbol("atomConstructor");
const validator = Symbol("validatorFunction");

function ValidateFunction(atomConstructor, validatorFunction){
    if(!(atomConstructor.prototype instanceof Atom))
        throw new InvalidAtomValidatorError(`Invalid AtomType: ${atomConstructor.name}`);
    if(!(validatorFunction(new atomConstructor()) instanceof BoolAtom))
        throw new InvalidAtomValidatorError(`Provided Function is not fullfill requirement: f(AtomType)=>BoolAtom`);
}

class AtomValidator
{
    constructor(atomConstructor, validatorFunction){
        ValidateFunction(atomConstructor, validatorFunction);

        this[type] = atomConstructor;
        this[validator] = validatorFunction;
    }

    Valid(atom){
        if(!(atom instanceof this[type])) return BoolAtom.False;
        else return this[validator](atom);
    }

    Invalid(atom){
        return !this.Valid(atom);
    }
}

module.exports = AtomValidator;

var Vfunc = function isTrue(boolAtom){
    return boolAtom.value === true
        ? BoolAtom.True
        : BoolAtom.False;
}
var isTrueAtom = new AtomValidator(BoolAtom, Vfunc);
// var v2 = new AtomValidator(BoolAtom, ()=>{});
var result = isTrueAtom.Valid(new BoolAtom(false));
// console.log(result, result.value, result.Serialize());

// var result = v1.IsValid(false);
// var result = v1.Validate(true);
// var result = v1.Validate(null);

console.log("IsValid: ", isTrueAtom.Valid(BoolAtom.True));