import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Dialog} from "primeng/dialog";
import {
    AddressTypeFormGroup,
    buildFormGroup, DEFAULT_FORM_VALUE
} from "@/app/features/master-data/address-type/address-type-dialog/address-type-form";
import {ReactiveFormsModule} from "@angular/forms";
import {TextFieldComponent} from "@/app/features/shared/components/text-field/text-field.component";
import {PrimeTemplate} from "primeng/api";
import {Button} from "primeng/button";
import {ToggleSwitchComponent} from "@/app/features/shared/components/toggle-switch/toggle-switch.component";

@Component({
    selector: "address-type-dialog",
    templateUrl: "./address-type-dialog.component.html",
    standalone: true,
    imports: [
        Dialog,
        ReactiveFormsModule,
        TextFieldComponent,
        PrimeTemplate,
        Button,
        ToggleSwitchComponent
    ]
})

export class AddressTypeDialogComponent implements OnInit {

     @Input() visible: boolean = false;

     @Output() visibleChange = new EventEmitter<boolean>();

     componentForm: AddressTypeFormGroup = buildFormGroup();

    ngOnInit(): void {
        console.log(this.componentForm.controls)
    }

     onHide() {
         this.visibleChange.emit(false);
    }

    resetFormForNew() {
        this.componentForm.reset({...DEFAULT_FORM_VALUE} as never, {emitEvent: false});
        this.componentForm.markAsPristine();
        this.componentForm.markAsUntouched();
    }

    saveDialog() {
        console.log('Form controls:', this.componentForm.controls);
        console.log('Form value:', this.componentForm.value);
        console.log('Code value:', this.componentForm.get('code')?.value);
        console.log('Name value:', this.componentForm.get('name')?.value);
    }
}
