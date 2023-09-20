"use strict";
//Enum:Facilita o manuseio de grupos de constantes nomeadas. 
var MarcaTenis2;
(function (MarcaTenis2) {
    MarcaTenis2[MarcaTenis2["NIKE"] = 5] = "NIKE";
    MarcaTenis2["PUMA"] = "Puma";
    MarcaTenis2["ADIDAS"] = "Adidas";
})(MarcaTenis2 || (MarcaTenis2 = {}));
const test = {
    marcaTenis: MarcaTenis2.NIKE
};
if (test.marcaTenis === MarcaTenis2.NIKE) {
    console.log("é nike");
}
