const AtomMathan = require("./atom.mathan.js");

module.exports = function ContextBinder(AtomType){
    return {
        eq: AtomMathan(AtomType).eq,
    };
}