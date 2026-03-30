import {Component, Input} from "@angular/core";
import {ControlValueAccessor, FormsModule} from "@angular/forms";
import {BaseField} from "@/app/features/shared/base-field";
import {ToggleSwitch} from "primeng/toggleswitch";

@Component({
    selector: "toggle-switch",
    standalone: true,
    imports: [
        FormsModule,
        ToggleSwitch
    ],
    templateUrl: "toggle-switch.component.html"
})

export class ToggleSwitchComponent extends BaseField implements ControlValueAccessor {

}
