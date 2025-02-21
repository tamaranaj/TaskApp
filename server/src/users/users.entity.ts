import { ProjectORMEntity } from "src/project/project.entity";
import { TaskORMEntity } from "src/task/task.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'users'})
export class UsersORMEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    name:string

    @Column()
    email:string

    @Column({
        type: 'varchar'
    })
    password: string

    @OneToMany(()=>ProjectORMEntity, (project)=>project.user)
    @JoinColumn()
    projects: ProjectORMEntity[]

    @OneToMany(()=>TaskORMEntity, (tasks)=>tasks.user)
    @JoinColumn()
    tasks: TaskORMEntity[]
}
