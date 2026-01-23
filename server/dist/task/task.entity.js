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
exports.TaskORMEntity = void 0;
const project_entity_1 = require("../project/project.entity");
const users_entity_1 = require("../users/users.entity");
const typeorm_1 = require("typeorm");
const taskStatus_enum_1 = require("./taskStatus.enum");
let TaskORMEntity = class TaskORMEntity {
};
exports.TaskORMEntity = TaskORMEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TaskORMEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TaskORMEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TaskORMEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TaskORMEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TaskORMEntity.prototype, "dueDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TaskORMEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => project_entity_1.ProjectORMEntity, (project) => project.tasks),
    (0, typeorm_1.JoinColumn)({ name: 'projectID' }),
    __metadata("design:type", project_entity_1.ProjectORMEntity)
], TaskORMEntity.prototype, "project", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false
    }),
    __metadata("design:type", String)
], TaskORMEntity.prototype, "projectID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.UsersORMEntity, (task) => task.tasks),
    (0, typeorm_1.JoinColumn)({ name: 'userID' }),
    __metadata("design:type", users_entity_1.UsersORMEntity)
], TaskORMEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false
    }),
    __metadata("design:type", String)
], TaskORMEntity.prototype, "userID", void 0);
exports.TaskORMEntity = TaskORMEntity = __decorate([
    (0, typeorm_1.Entity)()
], TaskORMEntity);
//# sourceMappingURL=task.entity.js.map