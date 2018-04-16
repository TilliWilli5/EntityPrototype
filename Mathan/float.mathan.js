const AtomMathan = require("./atom.mathan.js");

const PRECISION = 8;

const INT = v => Math.trunc(v*Math.pow(10,PRECISION));//преобразуем к целочисленному
const DISINT = v => v*Math.pow(10,-PRECISION);//преобразуем к целочисленному


/**
 * Контекст байндер для Математического функционала
 * @param {MathanContext} AtomType 
 */
function ContextBinder(AtomType){

    const $ = AtomType.Atomify;

    function mod(a1, a2){
        var r = DISINT(
            INT($(a1).value) % INT($(a2).value)
        );
        return $(r);
    }

    return Object.assign(AtomMathan(AtomType), {mod});
}

module.exports = ContextBinder;


/**
 * @typedef MathanContext
 * @property {Function} factory фабрика Атомов заданного класса
 */


 //
 //                                 <TESTING>
 //
