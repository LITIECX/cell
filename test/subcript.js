"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var METHOD_METADATA = 'method';
var PATH_METADATA = 'path';
var Controller = function (path) {
    return function (target) {
        Reflect.defineMetadata(PATH_METADATA, path, target);
    };
};
var Data = /** @class */ (function () {
    function Data() {
    }
    Data = __decorate([
        Controller("/led")
    ], Data);
    return Data;
}());
var Led = /** @class */ (function () {
    function Led() {
    }
    Led = __decorate([
        Controller("led2")
    ], Led);
    return Led;
}());
//# sourceMappingURL=subcript.js.map