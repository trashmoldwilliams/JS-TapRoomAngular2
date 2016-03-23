export class Keg {
  public pints: number = 124;
  public refill: boolean = false;
  constructor (public name: string, public brand: string, public price: number, public alcohol: number, id: number){
  }
}
