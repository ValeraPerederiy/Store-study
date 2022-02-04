import {CartLine} from "./cart-line.model";

export class Order {
  constructor(
    public name: string,
    public phone: string,
    public address: string,
    public cartLines: CartLine[],
    public id?: number
  ) {
  }
}
