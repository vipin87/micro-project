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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService, catalogClient, cartClient) {
        this.appService = appService;
        this.catalogClient = catalogClient;
        this.cartClient = cartClient;
    }
    async onModuleInit() {
        this.catalogClient.subscribeToResponseOf('catalog.test');
        this.cartClient.subscribeToResponseOf('cart.test');
    }
    getCatalog() {
        return this.catalogClient.send('catalog.test', {});
    }
    getCart() {
        return this.cartClient.send('cart.test', {});
    }
};
__decorate([
    common_1.Get("/catalog"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "getCatalog", null);
__decorate([
    common_1.Get("/cart"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "getCart", null);
AppController = __decorate([
    common_1.Controller(),
    __param(1, common_1.Inject('CATALOG_SERVICE')),
    __param(2, common_1.Inject('CART_SERVICE')),
    __metadata("design:paramtypes", [app_service_1.AppService,
        microservices_1.ClientKafka,
        microservices_1.ClientKafka])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map