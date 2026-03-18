import {AddressType} from "@/app/features/shared/models/address-type";
import {Injectable} from "@angular/core";
import {AddressTypeService} from "@/app/features/master-data/address-type/address-type-service";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AddressTypeGridDatasource {

    constructor(
        private addressTypeService: AddressTypeService
    ) {}

    loadAddressTypes(): Observable<AddressType[]> {
        return this.addressTypeService.getAll();
    }
}

