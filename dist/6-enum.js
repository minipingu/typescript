"use strict";
var RollNumbers;
(function (RollNumbers) {
    RollNumbers["John"] = "asistent";
    RollNumbers["kelly"] = "leader";
})(RollNumbers || (RollNumbers = {}));
let John = RollNumbers.kelly;
typeof (John);
