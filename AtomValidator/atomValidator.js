const {InvalidAtomValidatorError} = require("../AtomError/index.js");

const Atom = require("../Substance/atom.js");
const BoolAtom = require("../Atom/bool.js");

class AtomValidator
{
    constructor(AtomType, ValidatorFunction){
        this.ValidateFunction(AtomType, ValidatorFunction);
        this.AtomType = AtomType;//TODO:сделать прайвит
        this.Validator = ValidatorFunction;//TODO:сделать прайвит
    }

    ValidateFunction(AtomType, ValidatorFunction){
        if(!(AtomType.prototype instanceof Atom))
            throw new InvalidAtomValidatorError(`Invalid AtomType: ${AtomType.name}`);
        if(!(ValidatorFunction(new AtomType()) instanceof BoolAtom))
            throw new InvalidAtomValidatorError(`Provided Function is not fullfill requirement: f(AtomType)=>BoolAtom`);
    }
}

module.exports = AtomValidator;

var Vfunc = function isTrue(boolAtom){
    return boolAtom.value === true
        ? new BoolAtom(true)
        : new BoolAtom(false);
}
var v1 = new AtomValidator(BoolAtom, Vfunc);