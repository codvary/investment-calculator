import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../../service/investment.service';

@Component({
  selector: 'app-result',
  imports: [CurrencyPipe],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  
  constructor(private investmentService:InvestmentService){}

  get result(){
    return this.investmentService.resultData.asReadonly();
  }
}
