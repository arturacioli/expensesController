import { Component, EventEmitter, Output } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { ExpensesService } from '../expenses.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-expenses-info',
  imports: [CardComponent, CurrencyPipe],
  templateUrl: './expenses-info.component.html',
  styleUrl: './expenses-info.component.css'
})
export class ExpensesInfoComponent {
  @Output() openNew = new EventEmitter();

  constructor(private expensesService: ExpensesService){
    
  }

  get totalExpenses(){
    return this.expensesService.totalExpenses();
  }

  
}
