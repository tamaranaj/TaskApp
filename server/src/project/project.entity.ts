import { TaskORMEntity } from "src/task/task.entity";
import { UsersORMEntity } from "src/users/users.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProjectORMEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name:string

    @Column()
    description: string

    @ManyToOne(()=>UsersORMEntity, (user)=>user.projects)
    @JoinColumn({name: "userID"})
    user: UsersORMEntity
    @Column({
        nullable: false
    })
    userID: string


    @OneToMany(()=>TaskORMEntity, (task)=>task.project)
    tasks: TaskORMEntity[]
}
