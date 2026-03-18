import {Injectable} from "@angular/core";
import {ADDRESS_TYPE_DATA} from "@/app/features/shared/data/address-type-data";
import {AddressType} from "@/app/features/shared/models/address-type";
import {BehaviorSubject, Observable, of} from "rxjs";

@Injectable({
    providedIn: "root",
})

export class AddressTypeService {

    private data: AddressType[] = ADDRESS_TYPE_DATA;
    private addressTypesSubject = new BehaviorSubject<AddressType[]>(this.data);
    addressTypes$ = this.addressTypesSubject.asObservable();

    getAll():Observable<AddressType[]>{
        return this.addressTypes$;
    }

    insert(newType:AddressType):void {
        const currentTypes = this.addressTypesSubject.getValue();
        const updatedTypes = [...currentTypes, newType];
        this.addressTypesSubject.next(updatedTypes);
    }

    generateUUID(): string {
        return crypto.randomUUID();
    }
}
