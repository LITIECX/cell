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
var Inject_1 = require("../../src/Inject");
var LedSub_1 = require("./LedSub");
require("reflect-metadata");
var smartLamp = /** @class */ (function () {
    function smartLamp() {
    }
    smartLamp.prototype.ledOne = function (data) {
        console.log("this is one" + data.toString());
    };
    smartLamp.prototype.ledTwo = function (data) {
        console.log("this is two" + data.toString());
    };
    smartLamp.prototype.ledThree = function () {
        console.log("this is three");
    };
    __decorate([
        Inject_1.Inject(),
        __metadata("design:type", LedSub_1.LedSub)
    ], smartLamp.prototype, "led", void 0);
    __decorate([
        SubTopic_1.SubTopic("/one/smart"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], smartLamp.prototype, "ledOne", null);
    __decorate([
        SubTopic_1.SubTopic("/two/smart"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], smartLamp.prototype, "ledTwo", null);
    __decorate([
        SubTopic_1.SubTopic("/three/smart"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], smartLamp.prototype, "ledThree", null);
    smartLamp = __decorate([
        Injectable_1.Injectable()
    ], smartLamp);
    return smartLamp;
}());
exports.smartLamp = smartLamp;
//# sourceMappingURL=smartLamp.js.map