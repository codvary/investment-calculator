import { NgModule } from "@angular/core";
import { FormComponent } from "../component/form/form.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [FormComponent],
    imports:[FormsModule],
    exports:[FormComponent]
})
export class UserModule{

}