const Atom = require("../Substance/atom.js");

class EnumAtom extends Atom
{
    IsAcceptableJsValue(jsValue){
        if(
            jsValue.constructor === Object
            &&
            Object.values(jsValue).every(el => Number.isInteger(el))
            &&
            Object.values(jsValue).every((el,index,arr)=>arr.lastIndexOf(el)===index)
        )
            return true;
    }

    ConvertToAtomValue(jsValue){
        return Object.freeze(jsValue);
    }
}

module.exports = EnumAtom;

//use cases

// var Color = new Enum("red", "blue", "green");
// ChangeColorTo(Color.Red);
// if(theColor === Color.Red)

// var Color = new Enum("red green blue");
// ChangeColorTo(Color.Red);
// if(theColor === Color.Red)


// var color = new Enum("red green blue");
// ChangeColorTo(color.red);
// if(theColor === color.red)

// var eColor = new Enum("red green blue");
// ChangeColorTo(eColor.red);
// if(theColor === eColor.red)

// var COLOR = new Enum("red green blue");
// ChangeColorTo(COLOR.RED);
// if(theColor === COLOR.RED)


// var Color = new Enum({Red, Green, Blue});
// ChangeColorTo(Color.Red);
// if(theColor === COLOR.RED)

// var Color = new Enum({Red:1, Green:2, Blue:3});
// ChangeColorTo(Color.Red);
// if(theColor === COLOR.RED)

// var $ = Enum.Element;
// var Color = new Enum($.Red, $.Green, $.Blue);
// var Color = new Enum($.Red.Green.Blue);
// var Color = $.Red.Green.Blue;
// var Color = Enum.From.Red.Green.Blue;
// var Color = Enum.From.Red.Green.Blue.Create();
// var Color = e.Red.Green.Blue.Create();
// var intAtom = a.Int.Create();
// var intAtom = $.Int.New();
// var intAtom = $.atom.Int.New();
// var intAtom = $.atom.List.Guid.New();
// var now = $.time.now;
// var now = $.time.now();
// var enumColors = $.enum.from.Red.Green.Create();
// var enumColors = $.enum.Red.Green();
// var Color = _.Red.Green.Blue;
// // ChangeColorTo(Color.Red);
// // if(theColor === COLOR.RED)

// var theEnum = Object.freeze({
//     Red:1,
//     Green:2,
//     Blue:3
// });

// var enumColors = $enum.Red.Green.Blue.$;

/*$.bool(false);$bool(false)*/