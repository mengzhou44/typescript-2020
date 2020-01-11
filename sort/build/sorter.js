"use strict";
exports.__esModule = true;
var number_collection_1 = require("./number-collection");
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length - 1; i++) {
            for (var j = i; j < length; j++) {
                if (this.collection.compare(j - 1, j) === true) {
                    this.collection.swap(j - 1, j);
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter(new number_collection_1.NumberCollection([32, 24, 15, 19]));
sorter.sort();
console.log(sorter.collection);
