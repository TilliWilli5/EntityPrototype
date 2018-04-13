class AtomError extends Error {}

module.exports = {
    //TODO: подумать как это сочетается с EntityPrototype\Atom\.devnote -6-
    DefaultJsValueRestrictedError: class DefaultJsValueRestrictedError extends AtomError {},//в Атомах данного класса запрещены дефолтные значения
    InvalidAtomValidatorError: class InvalidAtomValidatorError extends AtomError {},//предоставленная функция не может использоваться для создания Валидатора Атомов
    InvalidAtomTypeError: class InvalidAtomTypeError extends AtomError {},//предоставленное значение не является Атомом необходимого типа
    AtomValidationFailedError: class AtomValidationFailedError extends AtomError {},//валидация Атома провалена
};