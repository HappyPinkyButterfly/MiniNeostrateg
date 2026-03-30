import {Component, Input} from "@angular/core";
import {ControlValueAccessor, FormsModule} from "@angular/forms";
import {BaseField} from "@/app/features/shared/base-field";

@Component({
    selector: "text-field",
    standalone: true,
    imports: [
        FormsModule
    ],
    templateUrl: "text-field.component.html"
})

export class TextFieldComponent extends BaseField implements ControlValueAccessor {

}
