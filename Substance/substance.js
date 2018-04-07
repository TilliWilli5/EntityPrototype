class Substance
{
    toString(){
        throw new Error("Casting to string is prohibited");
    }
    valueOf(){
        throw new Error("Not implemented: valueOf");
    }
    Preserialize(){
        return this;
    }
    Serialize(){
        JSON.stringify(this.Preserialize());
    }
    static Deserialize(serialized){
        return JSON.parse(serialized);
    }

}

module.exports = Substance;