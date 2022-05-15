import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DateTimeService } from '../../shared/date-time.service';

@Component({
    selector: 'app-datetime-picker',
    templateUrl: './datetime-picker.component.html',
    styleUrls: ['./datetime-picker.component.css']
})
export class DatetimePickerComponent implements OnInit {
    @ViewChild('picker') picker: any;
    @Input() dateControl: FormControl;

    public datetimeSelectedFormat: string;

    constructor(private readonly _datetimeService: DateTimeService) { }

    ngOnInit() {
        this.datetimeSelectedFormat = this._datetimeService.datetimeFormat;
    }

    closePicker() {
        this.picker.cancel();
    }
}
