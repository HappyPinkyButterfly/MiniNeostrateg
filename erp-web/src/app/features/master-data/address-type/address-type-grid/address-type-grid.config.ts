import {GridColumn} from "@/app/features/shared/generic-grid/grid-column";
import {AddressType} from "@/app/features/shared/models/address-type";

export const ADDRESS_TYPE_COLUMNS: GridColumn<AddressType>[] = [
    { field: 'id',        header: 'ID' },
    { field: 'code',      header: 'Code' },
    { field: 'name',      header: 'Name' },
    { field: 'active',    header: 'Active' },
    { field: 'version',   header: 'Version' },
    { field: 'createdOn', header: 'Created On' },
    { field: 'createdBy', header: 'Created By' },
    { field: 'updatedOn', header: 'Updated On' },
    { field: 'updatedBy', header: 'Updated By' }
];
