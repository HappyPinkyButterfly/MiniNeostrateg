import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Dialog} from "primeng/dialog";
import {
    AddressTypeFormGroup,
    buildFormGroup
} from "@/app/features/master-data/address-type/address-type-dialog/address-type-form";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
    selector: "address-type-dialog",
    templateUrl: "./address-type-dialog.component.html",
    imports: [
        Dialog,
        ReactiveFormsModule
    ]
})

export class AddressTypeDialogComponent {
     @Input() visible: boolean = false;

     @Output() visibleChange = new EventEmitter<boolean>();

     componentForm: AddressTypeFormGroup = buildFormGroup();

     onHide() {
         this.visibleChange.emit(false);
    }
}
