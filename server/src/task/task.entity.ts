import { ProjectORMEntity } from "src/project/project.entity";
import { UsersORMEntity } from "src/users/users.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TaskStatus } from "./taskStatus.enum";

@Entity()
export class TaskORMEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @Column()
    description: string

    @CreateDateColumn()
    createdAt: Date

    @Column()
    dueDate: string

    @Column()
    status: TaskStatus

    @ManyToOne(()=>ProjectORMEntity,(project)=>project.tasks)
    @JoinColumn({name:'projectID'})
    project: ProjectORMEntity
    @Column({
        nullable: false
    })
    projectID: string


    @ManyToOne(()=>UsersORMEntity, (task)=>task.tasks)
    @JoinColumn({name:'userID'})
    user: UsersORMEntity
    @Column({
        nullable: false
    })
    userID: string
}
