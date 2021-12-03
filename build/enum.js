"use strict";
//enum
//numeric enums
// enum Month {
//   JAN = 1,
//   FEB,
//   MAR,
//   APR,
//   MAY
// }
// console.log(Month.JAN);
//string enums
var StringEnum;
(function (StringEnum) {
    StringEnum["JAN"] = "Januari";
    StringEnum["FEB"] = "Februari";
    StringEnum["MAR"] = "Maret";
    StringEnum["APR"] = "April";
    StringEnum["MAY"] = "May";
})(StringEnum || (StringEnum = {}));
console.log(StringEnum);
