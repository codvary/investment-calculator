import { Injectable, signal } from '@angular/core';
import { Result } from '../model/result.model';
import { Data } from '../model/data.model';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  /**when ever any variable state is getting change use signal */
  resultData = signal<Result[]| undefined>(undefined);

  constructor() { }

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
