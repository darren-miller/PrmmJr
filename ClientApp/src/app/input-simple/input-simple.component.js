"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSimpleComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let InputSimpleComponent = class InputSimpleComponent {
    constructor(_inputId, _labelId, _label, _type, _initialValue, _placeholder, _class) {
        this._inputId = _inputId;
        this._labelId = _labelId;
        this._label = _label;
        this._type = _type;
        this._placeholder = _placeholder;
        this._class = _class;
        this.isRequired = false;
        this.isDisabled = false;
        this.class = '';
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
        this.formControl = this.parentForm.get(this.fieldName);
        if (this.isDisabled) {
            this.formControl.disable();
        }
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.FormGroup)
], InputSimpleComponent.prototype, "parentForm", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InputSimpleComponent.prototype, "fieldName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], InputSimpleComponent.prototype, "isRequired", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], InputSimpleComponent.prototype, "isDisabled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InputSimpleComponent.prototype, "Dynaminlabel", void 0);
InputSimpleComponent = __decorate([
    core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: 'app-input-simple',
        templateUrl: './input-simple.component.html',
        styleUrls: ['./input-simple.component.scss']
    }),
    __param(0, core_1.Attribute('inputId')),
    __param(1, core_1.Attribute('labelId')),
    __param(2, core_1.Attribute('label')),
    __param(3, core_1.Attribute('type')),
    __param(4, core_1.Attribute('initialValue')),
    __param(5, core_1.Attribute('placeholder')),
    __param(6, core_1.Attribute('class')),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String])
], InputSimpleComponent);
exports.InputSimpleComponent = InputSimpleComponent;
//# sourceMappingURL=input-simple.component.js.map