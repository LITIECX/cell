"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var SubTopic_1 = require("../../src/SubTopic");
// @Subscribe()
var LedSub = /** @class */ (function () {
    function LedSub() {
    }
    LedSub.prototype.ledOne = function (data) {
        console.log("this is one" + data.toString());
    };
    LedSub.prototype.ledTwo = function (data) {
        console.log("this is two" + data.toString());
    };
    LedSub.prototype.ledThree = function () {
        console.log("this is three");
    };
    __decorate([
        SubTopic_1.SubTopic("/one")
    ], LedSub.prototype, "ledOne", null);
    __decorate([
        SubTopic_1.SubTopic("/two")
    ], LedSub.prototype, "ledTwo", null);
    __decorate([
        SubTopic_1.SubTopic("/three")
    ], LedSub.prototype, "ledThree", null);
    return LedSub;
}());
exports.LedSub = LedSub;
//# sourceMappingURL=LedSub.js.map