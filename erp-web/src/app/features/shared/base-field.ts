import {Component, Input, Optional, Self} from "@angular/core";
import {NgControl} from "@angular/forms";

@Component({
    template: '',
    standalone: false,
})

export abstract class BaseField {
    @Input() label?: string | null;
    @Input() sameRow?: boolean;

    value:any = null

    protected onChange: (value: any) => void = () => {};
    protected onTouched: () => void = () => {};
    disabled = false;

    constructor(@Optional() @Self() public ngControl: NgControl | null) {
        if (this.ngControl != null) {
            this.ngControl.valueAccessor = this as any;
        }
    }

    writeValue(value: any): void {
        this.value = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    get resolvedLabel(): string {
        return this.label ?? '';
    }
}
