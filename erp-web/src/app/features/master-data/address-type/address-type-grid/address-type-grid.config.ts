import {GridColumn} from "@/app/features/shared/generic-grid/grid-column";
import {AddressType} from "@/app/features/shared/models/address-type";

export const ADDRESS_TYPE_COLUMNS: GridColumn<AddressType>[] = [
    { field: 'id',        header: 'ID'         , order: 10, visible: false},
    { field: 'code',      header: 'Code'       , order: 20, visible: false},
    { field: 'name',      header: 'Name'       , order: 30, visible: false},
    { field: 'active',    header: 'Active'     , order: 40, visible: false},
    { field: 'version',   header: 'Version'    , order: 50, visible: false},
    { field: 'createdOn', header: 'Created On' , order: 60, visible: false},
    { field: 'createdBy', header: 'Created By' , order: 70, visible: false},
    { field: 'updatedOn', header: 'Updated On' , order: 80, visible: false},
    { field: 'updatedBy', header: 'Updated By' , order: 90, visible: false}
];

export const VISIBLE_ADDRESS_TYPE_COLUMNS: Set<string> = new Set([
    'code',
    'name',
    'active',
    'createdOn',
    'createdBy',
    'updatedOn',
    'updatedBy',
]);
