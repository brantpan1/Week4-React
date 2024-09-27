import { ActionKeys } from "../enums/action-keys.enum";
import { NumericKeys } from "../enums/numeric-keys.enum";
import { OperatorKeys } from "../enums/operator-keys.enum";
import { ICalculatorModel } from "../interfaces/calculator-model.interface";

export class BetterCalculatorModel implements ICalculatorModel {
  private _operands: Array<string> = [];
  private _buffer: string = "";
  private _displayBuffer: string = "";
  private _operators: Array<OperatorKeys> = [];

  public pressNumericKey(key: NumericKeys): void {
    this._buffer += key;
    this._displayBuffer += key;
  }

  public pressOperatorKey(key: OperatorKeys): void {
    this._operators.push(key);
    this._operands.push(this._buffer);
    this._displayBuffer += key;
    this._buffer = "";
  }

  public pressActionKey(key: ActionKeys): void {
    if (key === ActionKeys.CLEAR) {
      this._operands = [];
      this._buffer = "";
      this._displayBuffer = "";
      this._operators = [];
    } else if (key === ActionKeys.EQUALS) {
      this.evaluate();
    } else if (key === ActionKeys.DOT) {
    } else if (key === ActionKeys.SIGN_FLIP) {
    }
  }

  public display(): string {
    return this._displayBuffer;
  }

  private evaluate(): number {
    return 0;
  }
}
