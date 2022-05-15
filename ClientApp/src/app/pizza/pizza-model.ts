export class PizzaModel {
  constructor(
    public Id?: number,
    public FirstName?: string,
    public LastName?: string,
    public OrderWhen?: string,
    public WantDelivered?: boolean,
    public Crusts?: DropDown[],
    public Toppings?: DropDown[],

    public CrustId?: number,
    public Topping1Id?: number,
    public Topping2Id?: number,

  ) { }
}

export class PizzaTabelModel {
  constructor(
    public Id?: number,
    public FirstName?: string,
    public LastName?: string,
    public OrderWhen?: Date
  ) { }
}

export interface DropDown {
  Id: number;
  Name: string;
}

export class PizzaDropdowns {
  Toppings: DropDown[];
  Crusts: DropDown[];
}
