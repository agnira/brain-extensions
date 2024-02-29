import { Cell, ICellUseCase } from "../domain/cell";
import CellRepository from "../repository/cell";

export default class CellUseCase implements ICellUseCase {
  public constructor(
    private cellRepository: CellRepository
  ) { }

  create(data: Cell): Promise<Cell> {
    throw new Error("Method not implemented.");
  }
  get(id: string): Promise<Cell> {
    throw new Error("Method not implemented.");
  }
  async fetch(): Promise<Cell[]> {
    return await this.cellRepository.fetch()
  }
  update(id: string, data: Partial<Cell>): Promise<Cell> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<string> {
    throw new Error("Method not implemented.");
  }
}