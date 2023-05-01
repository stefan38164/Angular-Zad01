import { Component } from '@angular/core';

enum CalculatorFunction {
  Clear = 'c',
  Percent = '%',
  Divide = '/',
  Multiply = '*',
  Subtract = '-',
  Add = '+',
  Equals = '=',
};
enum ButtonType {
 Number = 'number',
 Function = 'function'
};

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  //pocetne vrednosti u templejtu
  private _inputValue = 0;
  calValue = 0;
  funcT='No Function';
  get inputValue() {
    return this._inputValue;
  }
  
  set inputValue(value) {
    this._inputValue = +value;
    this.calValue = this._inputValue;
  }
  // pocetne vrednosti u logici

  calNumber = 'noValue';
  firstNumber = 0;
  secondNumber = 0;
  

  
  buttonRows = [
    [
      { label: 'C', value:  CalculatorFunction.Clear, type: ButtonType.Function, width: 50 },
      { label: '%', value:  CalculatorFunction.Percent, type: ButtonType.Function, width: 25 },
      { label: '/', value:  CalculatorFunction.Divide, type: ButtonType.Function, width: 25 },
    ],
    [
      { label: '7', value: '7', type: ButtonType.Number, width: 25 },
      { label: '8', value: '8', type: ButtonType.Number, width: 25 },
      { label: '9', value: '9', type: ButtonType.Number, width: 25 },
      { label: '*', value:  CalculatorFunction.Multiply,  type: ButtonType.Function, width: 25 },
    ],
    [
      { label: '4', value: '4', type: ButtonType.Number, width: 25 },
      { label: '5', value: '5', type: ButtonType.Number, width: 25 },
      { label: '6', value: '6', type: ButtonType.Number, width: 25 },
      { label: '-', value:  CalculatorFunction.Subtract, type: ButtonType.Function, width: 25 },
    ],
    [
      { label: '1', value: '1', type: ButtonType.Number, width: 25 },
      { label: '2', value: '2', type: ButtonType.Number, width: 25 },
      { label: '3', value: '3', type: ButtonType.Number, width: 25 },
      { label: '+', value:  CalculatorFunction.Add, type: ButtonType.Function, width: 25 },
    ],
    [
      { label: '0', value: '0', type: ButtonType.Number, width: 50 },
      { label: '.', value: '.', type: ButtonType.Number, width: 25 },
      { label: '=', value: CalculatorFunction.Equals, type: ButtonType.Function, width: 25 },
    ],
  ];
  
  
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
    this.inputValue=this.calValue;
  }

  //ako se kliknulo na operator
  onFunctionClick(val: string) {
    if (val ===  CalculatorFunction.Clear) {
      this.clearAll();
    } else if (this.funcT === 'NoFunction') {
      this.firstNumber = this.calValue;
      this.inputValue = this.firstNumber;
      this.calValue = this.firstNumber;
      this.calNumber = 'noValue';
      this.funcT = val;
    } else if (this.funcT !== 'Nofunction') {
      this.secondNumber = this.calValue;
      this.valueCalculate(val);
    }
  }

  //izracunavanje
  valueCalculate(val:string) {
    let Total: number;

    switch (this.funcT) {
      case  CalculatorFunction.Add:
        Total = this.firstNumber + this.secondNumber;
        break;
      case  CalculatorFunction.Subtract:
        Total = this.firstNumber - this.secondNumber;
        break;
      case  CalculatorFunction.Multiply:
        Total = this.firstNumber * this.secondNumber;
        break;
      case  CalculatorFunction.Divide:
        Total = this.firstNumber / this.secondNumber;
        break;
      case  CalculatorFunction.Percent:
        Total = (this.firstNumber * this.secondNumber) / 100;
        break;
      default:
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
    if (val ===  CalculatorFunction.Equals) {
      this.onEqualPress();
    }
  }

  //jednako dugme
  onEqualPress() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = 'NoFunction';
    this.calNumber = 'noValue';
  }

  //c dugme
  clearAll() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calValue = 0;
    this.funcT = 'NoFunction';
    this.calNumber = 'noValue';
    this.inputValue = 0;
  }
}
