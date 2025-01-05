import { Component, input } from '@angular/core';
import { type Result } from '../../model/result.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-result',
  imports: [CurrencyPipe],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  result = input<Result[]>();
}
