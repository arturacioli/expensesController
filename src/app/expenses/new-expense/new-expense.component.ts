import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExpensesService } from '../expenses.service';

@Component({
  selector: 'app-new-expense',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './new-expense.component.html',
  styleUrl: './new-expense.component.css'
})
export class NewExpenseComponent {
  // enteredValue?: number;
  // enteredExpenseReason?: string;
  // enteredExpenseType?: string;
  // enteredDate?: string = new Date().toLocaleDateString('en-CA');

  expenseForm :FormGroup = new FormGroup({
    value : new FormControl('',[Validators.required, Validators.min(0.1)]),
    reason : new FormControl('',[Validators.required]),
    type : new FormControl('',[Validators.required]),
    date : new FormControl(new Date().toLocaleDateString('en-CA'),[Validators.required])
  });

  expenseTypeList = ['Food', 'Health', 'Clothes','Entertainment', 'Gift', 'Education', 'Transportation', 'Other'];

  @Output() close = new EventEmitter();

  constructor(private expensesService: ExpensesService){
  
  }

  onSubmit(){
    if(!this.expenseForm.valid){
      alert('preencha os campos corretamente')
    } else{
      this.expensesService.saveNewExpense({
        id: new Date().getTime().toString(),
        value: this.expenseForm.get('value')?.value,
        type: this.expenseForm.get('type')?.value,
        reason: this.expenseForm.get('reason')?.value,
        date: this.expenseForm.get('date')?.value
      })
      this.close.emit()

    }
  }

  onClose(){
    this.close.emit();
  }
}
