import {Component} from "@angular/core";
import {
    AddressTypeGridComponent
} from "@/app/features/master-data/address-type/address-type-grid/address-type-grid.component";
import {
    AddressTypeDialogComponent
} from "@/app/features/master-data/address-type/address-type-dialog/address-type-dialog.component";

@Component({
    selector: 'address-type-page',
    templateUrl: 'address-type-page.component.html',
    standalone: true,
    imports: [
        AddressTypeGridComponent,
        AddressTypeDialogComponent
    ]
})

export class AddressTypePageComponent {

    /*Variables*/
    visibleDialog = false;

     onAddNew() {
         this.visibleDialog = true;
    }

    hideDialog($event: boolean) {
        this.visibleDialog = $event;
    }
}
