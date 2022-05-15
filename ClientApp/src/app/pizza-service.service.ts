import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DropDown, PizzaDropdowns } from './pizza/pizza-model';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private httpClient: HttpClient) { }
  private CrustsList: BehaviorSubject<DropDown[]> = new BehaviorSubject<DropDown[]>([]);
  public CrustsList$: Observable<DropDown[]> = this.CrustsList.asObservable();

  private ToppingsList: BehaviorSubject<DropDown[]> = new BehaviorSubject<DropDown[]>([]);
  public ToppingsList$: Observable<DropDown[]> = this.ToppingsList.asObservable();

  GetDropdowns() {
    this.httpClient.get<PizzaDropdowns>("/api/Pizza/GetPizzaDropdowns").subscribe(data => {
      this.ToppingsList.next(data.Toppings);
      this.CrustsList.next(data.Crusts);
    });
  }
}
