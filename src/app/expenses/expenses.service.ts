import { Injectable } from "@angular/core";
import { ExpensesModel } from "./expenses.model"

@Injectable({providedIn: 'root'})
export class ExpensesService{
    expenses:ExpensesModel[] = [];

    constructor(){
        const exp = localStorage.getItem('expenses');
        if(exp){
            this.expenses = JSON.parse(exp);
        }
    }

    saveNewExpense(newExpense: ExpensesModel){
        this.expenses.push(newExpense);
        this.save();
    }

    totalExpenses(){
        let total = 0;
        this.expenses.forEach(item => {
            if(item.value){
                total = total + item.value;
            }
        })
        return total;
    }

    deleteExpense(id: string){
        this.expenses = this.expenses.filter(item => item.id !== id);
        this.save();
    }

    save(){
        localStorage.setItem('expenses',JSON.stringify(this.expenses))
    }

}