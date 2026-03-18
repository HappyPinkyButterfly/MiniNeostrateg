import {MetaData} from "@/app/features/shared/models/meta-data";

export interface AddressTypeModel extends MetaData {
    id: string,
    code: string,
    name: string,
    active: boolean,
}
