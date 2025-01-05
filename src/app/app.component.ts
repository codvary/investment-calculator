import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./component/header/header.component";
import { FormComponent } from './component/form/form.component';
import { ResultComponent } from './component/result/result.component';
import { type Result } from './model/result.model';
import { type Data } from './model/data.model';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FormComponent, ResultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'codvary-blog';

  /**when ever any variable state is getting change use signal */
  resultData = signal<Result[]| undefined>(undefined);

  calculateInvestmentResults(data: Data) {
    const annualData = [];
    let investmentValue = data.initialInvestment;

    for (let i = 0; i < data.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (data.expectedReturn / 100);
      investmentValue += interestEarnedInYear + data.annualInvestment;
      const totalInterest =
        investmentValue - data.annualInvestment * year - data.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: data.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: data.initialInvestment + data.annualInvestment * year,
      });
    }
      this.resultData.set(annualData);
  } 
}
