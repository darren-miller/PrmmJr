import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { InputSimpleComponent } from './input-simple.component';


describe('InputSimpleComponent', () => {
    let component: InputSimpleComponent;
    let fixture: ComponentFixture<InputSimpleComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [InputSimpleComponent],
            imports: [SharedModule,
                BrowserAnimationsModule,
                ReactiveFormsModule,
                FormsModule
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(InputSimpleComponent);
        component = fixture.componentInstance;
        component.parentForm = new FormGroup({
            HeaderName: new FormControl('')
        });
        component.fieldName = 'HeaderName';
        component.inputId = '';
        component.labelId = '';
        component.type = 'type';
        component.placeholder = '';
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
