"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var SubTopic_1 = require("../../src/SubTopic");
var SendData = /** @class */ (function () {
    function SendData() {
    }
    SendData.prototype.send = function () {
    };
    SendData.prototype.sendDisplay = function () {
    };
    __decorate([
        SubTopic_1.SubTopic("/led/control")
    ], SendData.prototype, "send", null);
    __decorate([
        SubTopic_1.SubTopic("/led/display")
    ], SendData.prototype, "sendDisplay", null);
    return SendData;
}());
exports.SendData = SendData;
//# sourceMappingURL=SendData.js.map