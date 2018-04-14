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
        //TODO: подумать как можно реализовать sealed класс по-другому и насколько это нужно
        if(this.constructor !== AtomValidator)
            throw new Error("Наследование от класса -AtomValidator- запрещено");

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

    //TODO: нужна лучшая реализацией
    Valid(atom, context){
        if(atom && atom.IsAtom && atom.IsAtom(atom))//TODO: нужна лучшая реализацией
            if(!(atom instanceof this[type])) throw new InvalidAtomTypeError();
            else return this[validator](atom, context);
        else
            throw new NotAtomError();
        // if(!(atom instanceof this[type])) return BoolAtom.False;
    }

    Invalid(atom, context){
        return !this.Valid(atom, context);
    }

    get true(){
        return BoolAtom.True;
    }

    get false(){
        return BoolAtom.False;
    }

    // FormValidationContext(context){
    //     return Object.assign(context, {
    //         true: BoolAtom.True,
    //         false: BoolAtom.False,
    //     });
    // }
    
}

module.exports = AtomValidator;

var Vfunc = function isTrue(boolAtom){
    return boolAtom.value === true
        ? this.true
        : this.false;
}
var isTrueAtom = new AtomValidator(BoolAtom, Vfunc);
// var v2 = new AtomValidator(BoolAtom, ()=>{});
var result = isTrueAtom.Valid(new BoolAtom(false));
console.log(result, result.value, result.Serialize());

// var result = v1.IsValid(false);
// var result = v1.Validate(true);
// var result = v1.Validate(null);

console.log("IsValid: ", isTrueAtom.Valid(BoolAtom.True).value);

// var v2 = new AtomValidator(BoolAtom, "do it");