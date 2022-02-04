import {Injectable} from "@angular/core";
import {CartLine} from "../../share/models/cart-line.model";
import {Product} from "../../share/models/product.model";

@Injectable()
export class CartService {
  private cartLines: CartLine[] = [];

  constructor() {
  }

  public getCartLines(): CartLine[] {
    return this.cartLines;
  }

  public addCartLine(product: Product): void {
    if (this.hasCartLine(product.id)) {
      this.increase(product.id)
    } else {
      this.cartLines.push(new CartLine(product));
    }
  }

  public increase(id: number): void {
    if (this.hasCartLine(id)) {
      this.getCartLine(id).increase();
    }
  }

  public decrease(id: number): void {
    if (this.hasCartLine(id)) {
      this.getCartLine(id).decrease();
    }
  }

  public deleteCartLine(id: number): void {
    if (this.hasCartLine(id)) {
      this.cartLines = this.cartLines.filter((line: CartLine) => line.product.id !== id);
    }
  }

  public getTotal(): number {
    return this.cartLines.reduce((prev, line) => {
      return prev + line.subtotal;
    }, 0);
  }

  private getCartLine(id: number): CartLine {
    const cartLine = this.locator(id);

    if (cartLine) {
      return cartLine;
    } else {
      throw new Error(`not found CartLine with - ${id} id`);
    }
  }

  private hasCartLine(id: number): boolean {
    return !!this.locator(id);
  }

  private locator(id: number): CartLine | undefined {
    return this.cartLines.find((line: CartLine) => line.product.id === id);
  }
}
