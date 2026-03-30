import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {AsyncPipe} from "@angular/common";
import {TableModule} from "primeng/table";
import {GridColumn} from "@/app/features/shared/generic-grid/grid-column";
import {Button} from "primeng/button";

@Component({
    selector: "generic-grid",
    templateUrl: `generic-grid-component.html`,
    imports: [
        TableModule,
        Button
    ],
    providers: [],
    standalone: true
})

export class GenericGridComponent<T> implements OnInit {
    /*Inputs*/
    @Input() data: T[] = [];
    @Input() columnHeaders: GridColumn<T>[] = [];
    /*Outputs*/
    @Output() addNew = new EventEmitter<void>();

    ngOnInit(): void {

    }

    onAddNew() {
        this.addNew.emit();
    }
}
