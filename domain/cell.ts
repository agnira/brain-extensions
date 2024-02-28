export class Cell {
    public constructor(
        public id: string,
        public created_at: Date,
        public updated_at: Date,
        public title: string,
        public description: string,
        public parent_id: string,
    ) { }
}

export interface ICellRepository {
    store(data: Cell): Promise<Cell>
    get(id: string): Promise<Cell>
    fetch(): Promise<Cell[]>
    update(id: string, data: Partial<Cell>): Promise<Cell>
    delete(id: string): Promise<string>
}

export interface ICellUseCase {
    create(data: Cell): Promise<Cell>
    get(id: string): Promise<Cell>
    fetch(): Promise<Cell[]>
    update(id: string, data: Partial<Cell>): Promise<Cell>
    delete(id: string): Promise<string>
}