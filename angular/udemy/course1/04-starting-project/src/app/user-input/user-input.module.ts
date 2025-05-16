import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { UserInputComponent } from "./user-input.component";


@NgModule({
    imports: [FormsModule],
    declarations: [UserInputComponent],
    exports: [UserInputComponent]
})
export class UserInputModule {

}