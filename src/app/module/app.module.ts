import { NgModule } from "@angular/core";
import { HeaderComponent } from "../component/header/header.component";
import { ResultComponent } from "../component/result/result.component";
import { AppComponent } from "../app.component";
import { BrowserModule } from "@angular/platform-browser";
import { UserModule } from "./user.module";

@NgModule({
    declarations:[AppComponent, HeaderComponent, ResultComponent],
    imports:[BrowserModule, UserModule],
    bootstrap:[AppComponent]
})
export class AppModule{

}