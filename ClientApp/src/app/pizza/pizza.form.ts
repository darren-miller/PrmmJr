import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PizzaService } from '../pizza-service.service';
import { PizzaModel } from './pizza-model';
import moment = require('moment');

export class PizzaForm{
  public form: FormGroup;
  public today: Date;
  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      id:[''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      orderWhen: ['', Validators.required],
      wantDelivered: [false],
      crustId: ['', Validators.required],
      topping1Id: [''],
      topping2Id: [''],

    });
  }

  initializeForm(result: PizzaModel) {
    this.form.patchValue(result);
    this.form.get('firstName').setValue(result.FirstName?.toString());
    this.form.get('lastName').setValue(result.LastName?.toString());
    this.form.get('orderWhen').setValue(result.OrderWhen?.toString());
    this.form.get('crustId').setValue(result.CrustId?.toString());
    this.form.get('topping1Id').setValue(result.Topping1Id?.toString());
    this.form.get('topping2Id').setValue(result.Topping2Id?.toString());
    this.form.get('wantDelivered').setValue(result.WantDelivered?.toString());
  }

  convertFormToPizzModel(pizzaId: number): PizzaModel {
    const dtgOrderDate = moment(this.form.controls['OrderWhen'].value);
    let dtgOrderStr = '';
    if (dtgOrderDate.isValid()) {
      dtgOrderStr = dtgOrderDate.format('YYYY-MM-DDTHH:mm').toString();
    }
    return {
      Id: pizzaId,
      FirstName: this.form.get('firstName').value,
      LastName: this.form.get('lastName').value,
      OrderWhen: this.form.get('orderWhen').value,
      CrustId: this.form.get('crustId').value,
      Topping1Id: this.form.get('topping1Id').value,
      Topping2Id: this.form.get('topping2Id').value,
      WantDelivered: this.form.get('topping2Id').value
    };
  }
}
