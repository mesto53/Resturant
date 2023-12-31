export class Menu {
  public id: number;
  public name: string;
  public price?: number | null;
  constructor(id: number, name: string, price?: number | null) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}
