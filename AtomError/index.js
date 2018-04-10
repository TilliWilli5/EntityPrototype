class AtomError extends Error {}

module.exports = {
    DefaultJsValueRestrictedError: class DefaultJsValueRestrictedError extends AtomError {},

    InvalidAtomValidatorError: class InvalidAtomValidatorError extends AtomError {},
};