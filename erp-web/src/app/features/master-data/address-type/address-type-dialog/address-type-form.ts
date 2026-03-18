import {FormControl, FormGroup} from "@angular/forms";

export type AddressTypeFormControls = {
    id: FormControl<string>;
    code: FormControl<string>;
    name: FormControl<string>;
    version: FormControl<number>;
    createdOn: FormControl<Date>;
    createdBy: FormControl<string>;
    updatedOn: FormControl<Date>;
    updatedBy: FormControl<string>;
}

export type AddressTypeFormGroup = FormGroup<AddressTypeFormControls>;

export function buildFormGroup(): AddressTypeFormGroup {
    return new FormGroup<AddressTypeFormControls>({
        id: new FormControl('',{nonNullable: true}),
        code: new FormControl('',{nonNullable: true}),
        name: new FormControl('',{nonNullable: true}),
        version: new FormControl(1,{nonNullable: true}),
        createdOn: new FormControl(new Date,{nonNullable: true}),
        createdBy: new FormControl('',{nonNullable: true}),
        updatedOn: new FormControl(new Date,{nonNullable: true}),
        updatedBy: new FormControl('',{nonNullable: true}),
    });
}
