import { NgModule, LOCALE_ID } from '@angular/core';
import { NgxMatDatetimePickerModule, NgxMatDateFormats, NGX_MAT_DATE_FORMATS } from '@angular-material-components/datetime-picker';
import { NgxMatMomentModule, NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular-material-components/moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMatDateAdapter } from '@angular-material-components/datetime-picker';


import { DatetimePickerComponent } from '../datetime/datetime-picker/datetime-picker.component';
export const MOMENT_DATETIME_DTG_FORMAT = 'DDHHmm[Z]MMMYYYY'; // Note: case 'HHmm' is important
import { SharedModule } from '../shared/shared.module';
import { DateTimeService } from '../shared/date-time.service';
import { CustomDatetimeAdapterService } from '../shared/custom-datetime-adapter.service';

const CUSTOM_MOMENT_FORMATS: NgxMatDateFormats = {
    parse: {
        dateInput: MOMENT_DATETIME_DTG_FORMAT
    },
    display: {
        dateInput: MOMENT_DATETIME_DTG_FORMAT,
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY'
    }
};

@NgModule({
    declarations: [
        DatetimePickerComponent
    ],
    imports: [
        MatDatepickerModule,
        NgxMatMomentModule,
      NgxMatDatetimePickerModule,
      SharedModule
    ],
    exports: [
        MatDatepickerModule,
        NgxMatMomentModule,
        NgxMatDatetimePickerModule,
        DatetimePickerComponent
    ],
    providers: [
        DateTimeService,
        { provide: LOCALE_ID, useValue: 'en-US' },
        { provide: NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
        { provide: NgxMatDateAdapter, useClass: CustomDatetimeAdapterService },
        { provide: NGX_MAT_DATE_FORMATS, useValue: CUSTOM_MOMENT_FORMATS }
    ]
})
export class DatetimePickerModule { }
