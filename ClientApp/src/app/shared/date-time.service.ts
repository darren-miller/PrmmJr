import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DateTimeService {
    private _datetimeFormat: string;
    private _locale: string;

    constructor() {
        // Default, DTG format, Note: case is important, must be 'HHmm' for 24 hour formatting
        this._datetimeFormat = 'DDHHmm[Z]MMMYYYY';
        this._locale = 'en-US';
    }

    get datetimeFormat(): string {
        return this._datetimeFormat;
    }

    setDatetimeFormat(value: string) {
        this._datetimeFormat = value;
    }

    get locale(): string {
        return this._locale;
    }

    setLocale(value: string) {
        this._locale = value;
    }
}
