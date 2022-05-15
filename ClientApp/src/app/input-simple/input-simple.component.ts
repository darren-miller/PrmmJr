import { Attribute, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
    selector: 'app-input-simple',
    templateUrl: './input-simple.component.html',
    styleUrls: ['./input-simple.component.scss']
})
export class InputSimpleComponent implements OnInit {

    @Input() parentForm: FormGroup;
    @Input() fieldName: string;
    @Input() isRequired: boolean = false;
    @Input() isDisabled: boolean = false;

    formControl: FormControl;
    inputId: string;
    labelId: string;
    label: string;
    @Input() Dynaminlabel: string;
    type: string;
    placeholder: string;
    initialValue: string;
    class: string = '';

    constructor(
        @Attribute('inputId') public _inputId: string,
        @Attribute('labelId') public _labelId: string,
        @Attribute('label') public _label: string,
        @Attribute('type') public _type: string,
        @Attribute('initialValue') _initialValue: string,
        @Attribute('placeholder') public _placeholder: string,
        @Attribute('class') public _class: string) {
        this.label = _label;
        this.type = _type;
        this.inputId = _inputId;
        this.labelId = _labelId;
        this.initialValue = _initialValue;

        this.class = _class;

        if (this.Dynaminlabel) {
            this.label = this.Dynaminlabel;
        }
        // Usually the placeholder is the same as label, in case it is not we allow for it to be set separately
        if (_placeholder) {
            this.placeholder = _placeholder;
        }
        else {
            this.placeholder = _label;
        }

    }

    ngOnInit() {
        this.formControl = this.parentForm.get(this.fieldName) as FormControl;
        if (this.isDisabled) {
            this.formControl.disable();
        }
    }
}
