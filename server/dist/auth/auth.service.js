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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcryptjs_1 = require("bcryptjs");
const users_service_1 = require("../users/users.service");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async register(user) {
        const checkUser = await this.usersService.findUserByEmail(user.email);
        if (checkUser) {
            throw new common_1.BadRequestException(`User with email: ${user.email} already exist.`);
        }
        const hashedPass = await (0, bcryptjs_1.hash)(user.password, 10);
        user.password = hashedPass;
        const createdUser = await this.usersService.createUser(user);
        return createdUser;
    }
    async login(user) {
        const { email, password } = user;
        const checkUser = await this.usersService.findUserByEmail(user.email);
        if (!checkUser) {
            throw new common_1.NotFoundException(`User with email: ${email} does not exist.`);
        }
        const isPassValid = await (0, bcryptjs_1.compare)(password, checkUser.password);
        if (!isPassValid) {
            throw new common_1.UnauthorizedException('Invalid password.');
        }
        const token = await this.jwtService.signAsync({ userID: checkUser.id, email: checkUser.email });
        return token;
    }
    async getMe(userId) {
        return await this.usersService.getMe(userId);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map