import { Component, computed, inject, Signal } from '@angular/core';
import { InvestmentService } from '../investment.service';
import { ResultData } from '../result-data.model';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);

  results: Signal<ResultData[] | undefined> = computed(() => this.investmentService.resultsData());
}
