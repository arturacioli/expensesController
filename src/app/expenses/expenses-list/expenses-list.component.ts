import { Component, EventEmitter, Output } from '@angular/core';
import { ExpensesService } from '../expenses.service';
import { CurrencyPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-expenses-list',
  imports: [CurrencyPipe, MatIconModule],
  templateUrl: './expenses-list.component.html',
  styleUrl: './expenses-list.component.css'
})
export class ExpensesListComponent {
  @Output() openNew = new EventEmitter();
  @Output() delete = new EventEmitter();

  constructor(private expensesService: ExpensesService){

  }

  get expensesList(){
    return this.expensesService.expenses;
  }

  onAddClick(){
    this.openNew.emit();
  }

  onDelete(id: string){
    this.expensesService.deleteExpense(id);
  }
}
