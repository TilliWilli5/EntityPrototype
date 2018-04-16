const PRECISION = 8;

const INT = v => Math.trunc(v*Math.pow(10,PRECISION));//преобразуем к целочисленному
const DISINT = v => v*Math.pow(10,-PRECISION);//преобразуем к целочисленному


/**
 * Контекст байндер для Математического функционала
 * @param {MathanContext} context 
 */
function ContextBinder(context){

    var NewAtom = context.factory;

    function Add(a1, a2){
        return NewAtom(a1.value + a2.value);
    }
    function Sub(a1, a2){
        return NewAtom(a1.value - a2.value);
    }
    function Mul(a1, a2){
        return NewAtom(a1.value * a2.value);
    }
    function Div(a1, a2){
        return NewAtom(a1.value / a2.value);
    }
    function Mod(a1, a2){
        return NewAtom(
            DISINT(INT(a1.value) % INT(a2.value))
        );
    }
    function Eq(a1, a2){
        return NewAtom(a1.value === a2.value);
    }

    return [
        Add, Mul, Div, Mod, Eq
    ];
}

module.exports = ContextBinder;


/**
 * @typedef MathanContext
 * @property {Function} factory фабрика Атомов заданного класса
 */


 //
 //                                 <TESTING>
 //
