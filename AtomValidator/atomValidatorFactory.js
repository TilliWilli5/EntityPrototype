const AtomValidator = require("./atomValidator.js");

function AtomValidatorFactory(atomType, validators){
    validators = Array.isArray(validators)
        ? validators
        : [validators];
    const atomValidators = validators.map(validator => new AtomValidator(atomType, validator));
    var result = {};
    for(var atomValidator of atomValidators)//TODO: заполнять таким образом не производительно
    {
        result[atomValidator.name] = atomValidator;
    }
    return result;
}

module.exports = AtomValidatorFactory;