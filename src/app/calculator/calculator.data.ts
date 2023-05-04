export enum CalculatorFunction {
    Clear = 'c',
    Percent = '%',
    Divide = '/',
    Multiply = '*',
    Subtract = '-',
    Add = '+',
    Equals = '='
  }
 export enum ButtonType {
    Number = 'number',
    Function = 'function',
  }
export interface ButtonModel {
    value: CalculatorFunction | string;
    type: ButtonType; 
}

export const buttonArray:ButtonModel[] = [
    { value: CalculatorFunction.Clear, type: ButtonType.Function },
    { value: CalculatorFunction.Percent, type: ButtonType.Function },
    { value: CalculatorFunction.Divide, type: ButtonType.Function },
    { value: '7', type: ButtonType.Number },
    { value: '8', type: ButtonType.Number },
    { value: '9', type: ButtonType.Number },
    { value: CalculatorFunction.Multiply, type: ButtonType.Function },
    { value: '4', type: ButtonType.Number },
    { value: '5', type: ButtonType.Number },
    { value: '6', type: ButtonType.Number },
    { value: CalculatorFunction.Subtract, type: ButtonType.Function },
    { value: '1', type: ButtonType.Number },
    { value: '2', type: ButtonType.Number },
    { value: '3', type: ButtonType.Number },
    { value: CalculatorFunction.Add, type: ButtonType.Function },
    { value: '0', type: ButtonType.Number },
    { value: '.', type: ButtonType.Number },
    { value: CalculatorFunction.Equals, type: ButtonType.Function },
  ];