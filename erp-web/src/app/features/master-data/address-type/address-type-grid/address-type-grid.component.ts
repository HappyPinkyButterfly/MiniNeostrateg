import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {AddressTypeService} from "@/app/features/master-data/address-type/address-type-service";
import {TableModule} from "primeng/table";
import {
    ADDRESS_TYPE_COLUMNS,
    VISIBLE_ADDRESS_TYPE_COLUMNS
} from "@/app/features/master-data/address-type/address-type-grid/address-type-grid.config";
import {AddressType} from "@/app/features/shared/models/address-type";
import {AddressTypeGridDatasource} from "@/app/features/master-data/address-type/address-type-grid/address-type-grid.datasource";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {GenericGridComponent} from "@/app/features/shared/generic-grid/generic-grid-component";
import {GridColumn} from "@/app/features/shared/generic-grid/grid-column";

@Component({
    selector: 'address-type-grid',
    templateUrl: './address-type-grid.component.html',
    providers: [AddressTypeGridDatasource],
    standalone: true,
    imports: [
        TableModule,
        AsyncPipe,
        GenericGridComponent
    ]
})

export class AddressTypeGridComponent implements OnInit {

    @Output() addNew = new EventEmitter<void>();

    cols = ADDRESS_TYPE_COLUMNS;
    visibleColumns = VISIBLE_ADDRESS_TYPE_COLUMNS;
    addressTypes$: Observable<AddressType[]> | undefined;


    constructor(
        private dataSource: AddressTypeGridDatasource
    ) {}

    ngOnInit():void {
        this.addressTypes$ = this.dataSource.loadAddressTypes();
        this.cols = this.showVisibleColumns(this.cols);


    }

    get columnHeaders(): GridColumn<AddressType>[] {
        return this.cols;
    }


    onAddNew() {
       this.addNew.emit();
    }

    showVisibleColumns(columns: GridColumn[]): GridColumn[] {
        return columns.map((col) => {
            return {...col, visible: this.visibleColumns.has(col.field)};
        })
    }
}
