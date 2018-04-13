function MaxLengthReducer(arr){return arr.reduce((acc,val)=>acc>val?acc:val,0)}

function TableMaxDimensions(table){
    var rSize = table.length;
    var cSize = 0;
    for(var r=0;r<table.length;++r)
        if(cSize<table[r].length)
            cSize = table[r].length;
    return {rSize, cSize};
}

function TableColumnWidths(table){
    var tableSizes = TableMaxDimensions(table);
    // var filledTable = table.map(r=>r.map(c=>c?c:""));

    var transTable = new Array(tableSizes.cSize);
    for(var x=0;x<tableSizes.cSize;++x)
        transTable[x] = new Array(tableSizes.rSize);

    for(var i=0;i<table.length;++i)
        for(var j=0;j<table[i].length;++j)
            transTable[j][i] = (""+table[i][j]).length;

    var columnMaxWidth = transTable.map(col=>MaxLengthReducer(col));
    return columnMaxWidth;
};

const paddingRight = 2;

function table(table, header, subline){
    var withHeader = header ? [].concat([header], table) : table;
    var needSubline = typeof(subline)==="string";
    
    var colWidths = TableColumnWidths(withHeader);

    var report = withHeader.map((row) => {
        var rowReport = row.map((col, iCol) => {
            return (col + " ".repeat(colWidths[iCol]+paddingRight)).slice(0, (""+col).length===0?undefined:-(""+col).length)
        });
        // if(iCol===0 && needSubline)
        //     return rowReport.join("") + "\n" + subline.repeat(colWidths.reduce((acc,val)=>acc+val,paddingRight*colWidths.length)) + "\n";
        // else
        return rowReport.join("") + "\n";
    });

    if(needSubline)
    {
        report = [].concat(
            report.slice(0,1),
            [subline.repeat(colWidths.reduce((acc,val)=>acc+val,paddingRight*colWidths.length)) + "\n"],
            report.slice(1)
        );

    }
    console.log(report.join(""));
}

// console.table = table;

module.exports = {
    Table: table,
};

// table([
//     [0, "1414",undefined,null, 1.35663636, 1, 1, 1, 1],
//     ["adadad", "x",1,NaN, 1.35663636],
//     ["adadad", "1414",1,null, 1.35663636],
//     ["adadad", Infinity+100,1,null, 999999999999999999, 999999999999999999],
// ]);