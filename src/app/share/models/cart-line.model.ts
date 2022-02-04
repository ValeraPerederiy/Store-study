import {Product} from "./product.model";

export class CartLine {
  private _quantity: number = 1;

  constructor(public product: Product) {
  }

  get subtotal(): number {
    return this.product.price * this.quantity;
  }

  get quantity(): number {
    return this._quantity;
  }

  public increase(): void {
    ++this._quantity;
  }

  public decrease(): void {
    if (this.quantity >= 2) {
      --this._quantity;
    }
  }
}
