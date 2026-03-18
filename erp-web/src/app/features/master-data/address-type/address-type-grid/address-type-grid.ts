import {Component, OnInit} from "@angular/core";
import {AddressTypeModel} from "@/app/features/shared/models/address-type-model";
import {AddressTypeService} from "@/app/features/master-data/address-type/address-type-service";
import {TableModule} from "primeng/table";

@Component({
    selector: 'address-type-grid',
    templateUrl: './address-type-grid.html',
    imports: [
        TableModule
    ]
})

export class AddressTypeGridComponent implements OnInit {

    addressTypes: AddressTypeModel[] = [];
    loading = false;
    cols = [
        { field: 'id', header: 'ID' },
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'active', header: 'Active' },
        { field: 'version', header: 'Version' },
        { field: 'createdOn', header: 'Created On' },
        { field: 'createdBy', header: 'Created By' },
        { field: 'updatedOn', header: 'Updated On' },
        { field: 'updatedBy', header: 'Updated By' }
    ];


    constructor(
        private addressTypeService: AddressTypeService
    ) {}

    ngOnInit():void {
        this.loadAddressTypes();
    }

    get columnHeaders(){
        return this.cols
    }



    loadAddressTypes(): void {
        this.loading = true;

        this.addressTypeService.getAll().subscribe({
            next:(data: AddressTypeModel[]) => {
                this.addressTypes = data;
                this.loading = false;
            },

            error: (err) => {
                console.log('Error loading address types',err);
                this.loading = false;
            }}
        )
    }

}
