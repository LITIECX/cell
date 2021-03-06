"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var SubTopic_1 = require("../../src/SubTopic");
var Injectable_1 = require("../../src/Injectable");
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
    LedSub.prototype.display = function () {
        console.log("this is display");
    };
    __decorate([
        SubTopic_1.SubTopic("/one"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LedSub.prototype, "ledOne", null);
    __decorate([
        SubTopic_1.SubTopic("/two"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LedSub.prototype, "ledTwo", null);
    __decorate([
        SubTopic_1.SubTopic("/three"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LedSub.prototype, "ledThree", null);
    LedSub = __decorate([
        Injectable_1.Injectable()
    ], LedSub);
    return LedSub;
}());
exports.LedSub = LedSub;
//# sourceMappingURL=LedSub.js.map