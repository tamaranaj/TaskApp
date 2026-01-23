export interface Task {
    id: string,
    title:string,
    description: string,
    createdAt: string,
    dueDate: string,
    projectID: string,
    status:TaskStatus
    userID:string
}
export enum TaskStatus{
    new = 'New',
    inProgress = 'In progress',
    done = 'Done'
}