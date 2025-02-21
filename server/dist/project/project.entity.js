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
exports.ProjectORMEntity = void 0;
const task_entity_1 = require("../task/task.entity");
const users_entity_1 = require("../users/users.entity");
const typeorm_1 = require("typeorm");
let ProjectORMEntity = class ProjectORMEntity {
};
exports.ProjectORMEntity = ProjectORMEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ProjectORMEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProjectORMEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProjectORMEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.UsersORMEntity, (user) => user.projects),
    (0, typeorm_1.JoinColumn)({ name: "userID" }),
    __metadata("design:type", users_entity_1.UsersORMEntity)
], ProjectORMEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false
    }),
    __metadata("design:type", String)
], ProjectORMEntity.prototype, "userID", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => task_entity_1.TaskORMEntity, (task) => task.project),
    __metadata("design:type", Array)
], ProjectORMEntity.prototype, "tasks", void 0);
exports.ProjectORMEntity = ProjectORMEntity = __decorate([
    (0, typeorm_1.Entity)()
], ProjectORMEntity);
//# sourceMappingURL=project.entity.js.map