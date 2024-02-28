export class Item {
    public constructor(
        public id: string,
        public created_at: Date,
        public updated_at: Date,
        public content: string,
    ) { }
}

export interface IItemRepository {
    store(data: Item): Promise<Item>
    get(id: string): Promise<Item>
    fetch(): Promise<Item[]>
    update(id: string, data: Partial<Item>): Promise<Item>
    delete(id: string): Promise<string>
}

export interface IItemUseCase {
    create(data: Item): Promise<Item>
    get(id: string): Promise<Item>
    fetch(): Promise<Item[]>
    update(id: string, data: Partial<Item>): Promise<Item>
    delete(id: string): Promise<string>
}