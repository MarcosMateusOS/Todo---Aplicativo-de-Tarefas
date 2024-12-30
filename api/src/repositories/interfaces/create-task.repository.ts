export interface ICreateTaskRepository {
    type: string
    title: string
    description: string
    done: boolean
    finishAt: Date
    createdAt: Date
}