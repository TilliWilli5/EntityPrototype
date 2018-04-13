class AtomError extends Error {
    constructor(...args){
        super(...args);
        this.message = args.length === 0
            ? this.constructor.message
            : `${this.constructor.message} : ${args[0]}`;
    }
}

// XXXX: class XXXX extends AtomError { static get message(){return "";} },
module.exports = {
    //TODO: подумать как это сочетается с EntityPrototype\Atom\.devnote -6-
    DefaultJsValueRestrictedError: class DefaultJsValueRestrictedError extends AtomError { static get message(){return "В Атомах данного класса запрещены дефолтные значения";} },
    InvalidAtomValidatorError: class InvalidAtomValidatorError extends AtomError { static get message(){return "Предоставленная функция не может использоваться для создания Валидатора Атомов";}},
    InvalidAtomTypeError: class InvalidAtomTypeError extends AtomError { static get message(){return "Предоставленное значение не является Атомом необходимого типа";} },
    AtomValidationFailedError: class AtomValidationFailedError extends AtomError { static get message(){return "Валидация Атома провалена";} },
    NotAtomError: class NotAtomError extends AtomError { static get message(){return "This is not an Atom";} },
};