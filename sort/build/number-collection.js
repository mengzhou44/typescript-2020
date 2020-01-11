"use strict";
exports.__esModule = true;
var NumberCollection = /** @class */ (function () {
    function NumberCollection(data) {
        this.data = data;
        this.length = this.data.length;
    }
    NumberCollection.prototype.swap = function (i, j) {
        var temp = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = temp;
    };
    NumberCollection.prototype.compare = function (i, j) {
        return this.data[i] > this.data[j];
    };
    return NumberCollection;
}());
exports.NumberCollection = NumberCollection;
