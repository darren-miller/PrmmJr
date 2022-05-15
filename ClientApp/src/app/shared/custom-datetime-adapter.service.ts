import { NgxMatMomentAdapter } from '@angular-material-components/moment-adapter';
import { Injectable } from '@angular/core';
import * as moment from 'moment-timezone';
import { DateTimeService } from './date-time.service';

@Injectable({
    providedIn: 'root'
})
export class CustomDatetimeAdapterService extends NgxMatMomentAdapter {
    constructor(private readonly _dateTimeService: DateTimeService) {
        super(_dateTimeService.locale);
    }

    format(datetime: moment.Moment): string {
        const format = this._dateTimeService.datetimeFormat;
        const result = datetime.format(format);
        return result;
    }
}
