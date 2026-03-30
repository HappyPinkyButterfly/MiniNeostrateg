import {FormControl, FormGroup} from "@angular/forms";

export type AddressTypeFormControls = {

    id: FormControl<string>;
    code: FormControl<string>;
    name: FormControl<string>;
    active: FormControl<boolean>;
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
        active: new FormControl(true,{nonNullable: true}),
        version: new FormControl(1,{nonNullable: true}),
        createdOn: new FormControl(new Date,{nonNullable: true}),
        createdBy: new FormControl('',{nonNullable: true}),
        updatedOn: new FormControl(new Date,{nonNullable: true}),
        updatedBy: new FormControl('',{nonNullable: true}),
    });
}

export const DEFAULT_FORM_VALUE = {
    id:'',
    code:'',
    name:'',
    version:1,
    active: true,
    createdOn:new Date,
    createdBy:'',
    updatedOn:new Date,
    updatedBy:'',
} as const;
