"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../src");
var Cloth = /** @class */ (function () {
    function Cloth() {
        this.name = 'ltt';
    }
    Cloth.prototype.say = function () {
        console.log("hello world");
    };
    Cloth = __decorate([
        src_1.Subscribe
    ], Cloth);
    return Cloth;
}());
var Clothes = /** @class */ (function () {
    function Clothes() {
        this.name = 'caijizhe';
    }
    Clothes.prototype.say = function () {
        console.log("hello world");
    };
    Clothes = __decorate([
        src_1.Subscribe
    ], Clothes);
    return Clothes;
}());
var Human = /** @class */ (function () {
    function Human() {
    }
    Human = __decorate([
        src_1.Subscribe
    ], Human);
    return Human;
}());
var rootInjector = new src_1.Ioc();
var me = rootInjector.getInstance(Cloth);
var m = rootInjector.getInstance(Clothes);
console.log(rootInjector);
console.log(me.name);
console.log(m.name);
m.say();
//# sourceMappingURL=hello.js.map