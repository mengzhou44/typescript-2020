"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        for (var i = 0; i < this.length - 1; i++) {
            for (var j = 0; j < this.length - i - 1; j++) {
                if (this.compare(j, j + 1) === true) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
var NumberCollection = /** @class */ (function (_super) {
    __extends(NumberCollection, _super);
    function NumberCollection(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        _this.length = _this.data.length;
        return _this;
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
}(Sorter));
exports.NumberCollection = NumberCollection;
var CharCollection = /** @class */ (function (_super) {
    __extends(CharCollection, _super);
    function CharCollection(text) {
        var _this = _super.call(this) || this;
        _this.text = text;
        _this.length = _this.data.length;
        _this.data = text.split('');
        return _this;
    }
    CharCollection.prototype.swap = function (i, j) {
        var temp = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = temp;
    };
    CharCollection.prototype.compare = function (i, j) {
        return this.data[i] > this.data[j];
    };
    return CharCollection;
}(Sorter));
exports.CharCollection = CharCollection;
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.next = null;
    }
    return Node;
}());
exports.Node = Node;
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        return _this;
    }
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head) {
                return 0;
            }
            var length = 1;
            var node = this.head;
            while (node.next) {
                length++;
                node = node.next;
            }
            return length;
        },
        enumerable: true,
        configurable: true
    });
    LinkedList.prototype.add = function (value) {
        if (this.head === null) {
            this.head = new Node(value);
        }
        else {
            var temp = this.head;
            while (temp.next !== null) {
                temp = temp.next;
            }
            temp.next = new Node(value);
        }
    };
    LinkedList.prototype.at = function (index) {
        if (this.head === null) {
            throw 'out of range';
        }
        var pos = 0;
        var node = this.head;
        while (node !== null) {
            if (pos === index) {
                return node;
            }
            pos++;
            node = node.next;
        }
        throw 'out of range';
    };
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        var leftNode = this.at(leftIndex);
        var rightNode = this.at(rightIndex);
        return leftNode.value > rightNode.value;
    };
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        var leftNode = this.at(leftIndex);
        var rightNode = this.at(rightIndex);
        var temp = leftNode.value;
        leftNode.value = rightNode.value;
        rightNode.value = temp;
    };
    return LinkedList;
}(Sorter));
exports.LinkedList = LinkedList;
