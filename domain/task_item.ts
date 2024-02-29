export class TaskItem {
    public constructor(
        public id: string,
        public created_at: Date,
        public updated_at: Date,
        public cell_id: string,
        public task: string,
        public parent_id: string,
    ) { }
}

export interface ITaskItemRepository {
    store(data: TaskItem): Promise<TaskItem>
    get(id: string): Promise<TaskItem>
    fetch(): Promise<TaskItem[]>
    update(id: string, data: Partial<TaskItem>): Promise<TaskItem>
    delete(id: string): Promise<string>
}

export interface ITaskItemUseCase {
    create(data: TaskItem): Promise<TaskItem>
    get(id: string): Promise<TaskItem>
    fetch(): Promise<TaskItem[]>
    update(id: string, data: Partial<TaskItem>): Promise<TaskItem>
    delete(id: string): Promise<string>
}