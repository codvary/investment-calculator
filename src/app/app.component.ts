import { Component } from '@angular/core';
import { HeaderComponent } from "./component/header/header.component";
import { FormComponent } from './component/form/form.component';
import { ResultComponent } from './component/result/result.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FormComponent, ResultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'codvary-blog';
}
