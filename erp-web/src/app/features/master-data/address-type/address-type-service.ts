import {Injectable} from "@angular/core";
import {ADDRESS_TYPE_DATA} from "@/app/features/shared/data/address-type-data";
import {AddressTypeModel} from "@/app/features/shared/models/address-type-model";
import {BehaviorSubject, Observable, of} from "rxjs";

@Injectable({
    providedIn: "root",
})

export class AddressTypeService {

    private data: AddressTypeModel[] = ADDRESS_TYPE_DATA;
    private addressTypesSubject = new BehaviorSubject<AddressTypeModel[]>(this.data);
    addressTypes$ = this.addressTypesSubject.asObservable();

    getAll():Observable<AddressTypeModel[]>{
        return this.addressTypes$;
    }

    insert(newType:AddressTypeModel):void {
        const currentTypes = this.addressTypesSubject.getValue();
        const updatedTypes = [...currentTypes, newType];
        this.addressTypesSubject.next(updatedTypes);
    }

    generateUUID(): string {
        return crypto.randomUUID();
    }
}
