import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DropDown } from './pizza-model';
import { PizzaService } from '../pizza-service.service';
import { PizzaForm } from './pizza.form';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  constructor(private pizzaService: PizzaService) { }

  Crusts$: Observable<DropDown[]>;
  Toppings$: Observable<DropDown[]>;
  PizzaForm: PizzaForm;

  ngOnInit(): void {
    this.Crusts$ = this.pizzaService.CrustsList$;
    this.Toppings$ = this.pizzaService.ToppingsList$;
    this.pizzaService.GetDropdowns();
  }


}
