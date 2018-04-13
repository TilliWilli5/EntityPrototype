const { InvalidAtomValidatorError, InvalidAtomTypeError, NotAtomError } = require("../AtomError/index.js");

const Atom = require("../Substance/atom.js");
const BoolAtom = require("../Atom/bool.js");

const type = Symbol("atomConstructor");
const validator = Symbol("validatorFunction");

function ValidateFunction(atomConstructor, validatorFunction){
    if(typeof(validatorFunction) !== "function")
        throw new InvalidAtomValidatorError();
    if(!(atomConstructor.prototype instanceof Atom))
        throw new InvalidAtomTypeError(`Invalid AtomType: ${atomConstructor.name}`);

    const fakeCtx = {true: BoolAtom.True, false: BoolAtom.False};
    if(!(validatorFunction.bind(fakeCtx)(new atomConstructor()) instanceof BoolAtom))
        throw new InvalidAtomValidatorError(`Provided Function is not fullfill requirement: f(AtomType)=>BoolAtom`);
}

class AtomValidator
{
    constructor(atomConstructor, validatorFunction){
        ValidateFunction(atomConstructor, validatorFunction);

        this[type] = atomConstructor;

        // const BindedValidator = validatorFunction.bind(this);
        // this[validator] = function(atom){
        //     if( !atom instanceof Atom )
        //         throw new AtomValidationFailedError();
        //     return BindedValidator(atom);
        // };
        this[validator] = validatorFunction.bind(this);
        this.name = validatorFunction.name;
    }

    Valid(atom){
        // if(!(atom instanceof this[type])) return BoolAtom.False;
        if(!(atom instanceof this[type])) throw new NotAtomError(atom);
        else return this[validator](atom);
    }

    Invalid(atom){
        return !this.Valid(atom);
    }

    get true(){
        return BoolAtom.True;
    }

    get false(){
        return BoolAtom.False;
    }
    
}

module.exports = AtomValidator;

// var Vfunc = function isTrue(boolAtom){
//     return boolAtom.value === true
//         ? this.true
//         : this.false;
// }
// var isTrueAtom = new AtomValidator(BoolAtom, Vfunc);
// var v2 = new AtomValidator(BoolAtom, ()=>{});
// var result = isTrueAtom.Valid(new BoolAtom(false));
// console.log(result, result.value, result.Serialize());

// var result = v1.IsValid(false);
// var result = v1.Validate(true);
// var result = v1.Validate(null);

// console.log("IsValid: ", isTrueAtom.Valid(BoolAtom.True).value);

// var v2 = new AtomValidator(BoolAtom, "do it");