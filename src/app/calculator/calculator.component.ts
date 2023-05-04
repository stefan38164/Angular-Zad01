import { Component } from '@angular/core';
import { buttonArray, CalculatorFunction, ButtonType } from './calculator.data';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})

export class CalculatorComponent {
  //pocetne vrednosti u templejtu
  private _inputValue = 0;
  calValue = 0;
  funcT = 'No Function';
  get inputValue() {
    return this._inputValue;
  }
  set inputValue(value) {
    
      this._inputValue = +(Number(value)).toFixed(3);
      this.calValue = this._inputValue;
  }
  // pocetne vrednosti u logici

  calNumber = 'noValue';
  firstNumber = 0;
  secondNumber = 0;
  buttons = buttonArray;
  //kada se klikne na dugme
  onClickValue(val: string, type: any) {
    if (type === ButtonType.Number) {
      this.onNumberClick(val);
    } else if (type === ButtonType.Function) {
      this.onFunctionClick(val);
    }
  }

  //ako se kliknulo na broj
  onNumberClick(val: string) {
    if (this.calNumber !== 'noValue') {
      this.calNumber = this.calNumber + val;
    } else {
      this.calNumber = val;
    }
    this.calValue = +this.calNumber;
    this.inputValue = this.calValue;
  }

  //ako se kliknulo na operator
  onFunctionClick(val: string) {
    if (val === CalculatorFunction.Clear) {
      this.clearAll();
    } else if (this.funcT === 'No Function') {
      this.funcT = val;
      this.firstNumber = this.calValue;
      this.inputValue = this.firstNumber;
      this.calValue = this.firstNumber;
      this.calNumber = 'noValue';
    } else if (this.funcT !== 'No Function') {
      this.secondNumber = this.calValue;
      this.valueCalculate(val);
    }
  }

  //izracunavanje
  valueCalculate(val: string) {
    let Total: number;

    switch (this.funcT) {
      case CalculatorFunction.Add:
        Total = this.firstNumber + this.secondNumber;
        break;
      case CalculatorFunction.Subtract:
        Total = this.firstNumber - this.secondNumber;
        break;
      case CalculatorFunction.Multiply:
        Total = this.firstNumber * this.secondNumber;
        break;
      case CalculatorFunction.Divide:
        Total = this.firstNumber / this.secondNumber;
        break;
      case CalculatorFunction.Percent:
        Total = (this.firstNumber * this.secondNumber) / 100;
        break;
     case CalculatorFunction.Equals:
        this.onEqualPress();
        break;
      default:
        console.log(this.funcT);
        throw new Error(`Invalid operator: ${this.funcT}`);
    }
    this.totalAssignValues(Total, val);
  }

  totalAssignValues(Total: number, val: string) {
    this.calValue = Total;
    this.firstNumber = Total;
    this.inputValue = Total;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.funcT = val;
    if (val === CalculatorFunction.Equals) {
      this.onEqualPress();
    }
  }

  //jednako dugme
  onEqualPress() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = 'No Function';
    this.calNumber = 'noValue';
  }

  //c dugme
  clearAll() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calValue = 0;
    this.funcT = 'No Function';
    this.calNumber = 'noValue';
    this.inputValue = 0;
  }
}
