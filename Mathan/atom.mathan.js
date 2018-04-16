/**
 * Базовые математические операции
 * @module
 */

/**
 * Контекст байндер для Математического функционала
 * @param {MathanContext} AtomType 
 */
function ContextBinder(AtomType){

    const $ = AtomType.Atomify;

    function add(a1, a2){
        const r = $(a1).value + $(a2).value;
        return $(r);
    }
    function sub(a1, a2){
        const r = $(a1).value - $(a2).value;
        return $(r);
    }
    function mul(a1, a2){
        const r = $(a1).value * $(a2).value;
        return $(r);
    }
    function div(a1, a2){
        const r = $(a1).value / $(a2).value;
        return $(r);
    }
    function eq(a1, a2){
        return $($(a1).value === $(a2).value);
    }

    return {
        add, mul, div, eq
    };
}

module.exports = ContextBinder;

/**
 * @typedef MathanContext
 * @property {Function} Atomify функция возвращает дефолтную фабрику класса
 */