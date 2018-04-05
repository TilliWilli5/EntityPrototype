class Atom
{
    /**
     * 
     * @param {*} value vanila javascript type
     */
    constructor(value){
        this.Validate(value);
        this.Store(this.Convert(value));
    }

    IsValid(value){ 
        throw new Error("Not implemented: IsValid");
    }
    
    Validate(value){
        if(!this.IsValid(value))
            throw new Error(`Invalid value: ${value}`);
    }

    Convert(value){
        throw new Error("Not implemented: Convert");
    }

    Store(value){
        throw new Error("Not implemented: Store");
    }

}

module.exports = Atom;