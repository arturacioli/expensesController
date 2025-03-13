import { Component } from '@angular/core';
import { ExpensesListComponent } from "./expenses-list/expenses-list.component";
import { NewExpenseComponent } from "./new-expense/new-expense.component";
import { ExpensesInfoComponent } from "./expenses-info/expenses-info.component";

@Component({
  selector: 'app-expenses',
  imports: [ExpensesListComponent, NewExpenseComponent, ExpensesInfoComponent],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css'
})
export class ExpensesComponent {
  isAddingExpense: boolean = false;
  onAddExpense(){
    this.isAddingExpense = true;
  }
  onCloseAdd(){
    this.isAddingExpense = false;
  }
}
