import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExpensesService } from '../expenses.service';

@Component({
  selector: 'app-new-expense',
  imports: [FormsModule],
  templateUrl: './new-expense.component.html',
  styleUrl: './new-expense.component.css'
})
export class NewExpenseComponent {
  enteredValue?: number;
  enteredExpenseReason?: string;
  enteredExpenseType?: string;
  enteredDate?: string = new Date().toLocaleDateString('en-CA');

  expenseTypeList = ['Food', 'Health', 'Clothes','Entertainment', 'Gift', 'Education', 'Transportation', 'Other'];

  @Output() close = new EventEmitter();

  constructor(private expensesService: ExpensesService){

  }

  onSubmit(form: HTMLFormElement){
    this.expensesService.saveNewExpense({
      id: new Date().getTime().toString(),
      value: this.enteredValue,
      type: this.enteredExpenseType,
      reason: this.enteredExpenseReason,
      date: this.enteredDate
    })
    this.close.emit()
  }

  onClose(){
    this.close.emit();
  }
}
