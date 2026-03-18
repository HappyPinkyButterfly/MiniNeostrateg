import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {AddressTypeService} from "@/app/features/master-data/address-type/address-type-service";
import {TableModule} from "primeng/table";
import {ADDRESS_TYPE_COLUMNS} from "@/app/features/master-data/address-type/address-type-grid/address-type-grid.config";
import {AddressType} from "@/app/features/shared/models/address-type";
import {AddressTypeGridDatasource} from "@/app/features/master-data/address-type/address-type-grid/address-type-grid.datasource";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {GenericGridComponent} from "@/app/features/shared/generic-grid/generic-grid-component";

@Component({
    selector: 'address-type-grid',
    templateUrl: './address-type-grid.component.html',
    providers: [AddressTypeGridDatasource],
    imports: [
        TableModule,
        AsyncPipe,
        GenericGridComponent
    ]
})

export class AddressTypeGridComponent implements OnInit {

    /*Inputs*/

    /*Outputs*/
    @Output() addNew = new EventEmitter<void>();

    /*Variables*/
    cols = ADDRESS_TYPE_COLUMNS;
    addressTypes$: Observable<AddressType[]> | undefined;


    constructor(
        private dataSource: AddressTypeGridDatasource
    ) {}

    ngOnInit():void {
        this.addressTypes$ = this.dataSource.loadAddressTypes()
    }

    get columnHeaders(){
        return this.cols
    }


    onAddNew() {
       this.addNew.emit();
    }
}
