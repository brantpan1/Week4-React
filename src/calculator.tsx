import "./calculator.css";
import { CalculatorDisplay, CalculatorKey } from "./components";
import { NumericKeys } from "./enums/numeric-keys.enum";
import { OperatorKeys } from "./enums/operator-keys.enum";
import { ActionKeys } from "./enums/action-keys.enum";
import { useState } from "react";
import { ICalculatorModel } from "./interfaces/calculator-model.interface";
import { CalculatorModel } from "./models/calculator.model";
import { BetterCalculatorModel } from "./models/calculatorBetter.model";

const calculatorModel: ICalculatorModel = new BetterCalculatorModel();

export default function Calculator() {
  const [display, setDisplay] = useState(calculatorModel.display());
  function numericKeyPressHandler(key: NumericKeys): void {
    calculatorModel.pressNumericKey(key);
    setDisplay(calculatorModel.display());
  }

  function operatorKeyPressHandler(key: OperatorKeys): void {
    calculatorModel.pressOperatorKey(key);
    setDisplay(calculatorModel.display());
  }

  function actionKeyPressHandler(key: ActionKeys): void {
    calculatorModel.pressActionKey(key);
    setDisplay(calculatorModel.display());
  }

  return (
    <div className="container">
      <div className="calculator">
        <CalculatorDisplay displayValue={display} />

        <div className="calculator-keypad">
          <div className="input-keys">
            <div className="function-keys">
              <CalculatorKey
                onPress={actionKeyPressHandler}
                className="key-clear"
                label={ActionKeys.CLEAR}
              />
              <CalculatorKey
                onPress={actionKeyPressHandler}
                className="key-sign"
                label={ActionKeys.SIGN_FLIP}
              />
              <CalculatorKey
                onPress={actionKeyPressHandler}
                className="key-percent"
                label={OperatorKeys.SQRT}
              />
            </div>
            <div className="digit-keys">
              <CalculatorKey
                onPress={numericKeyPressHandler}
                className="key-0"
                label={NumericKeys.ZERO}
              />
              <CalculatorKey
                onPress={actionKeyPressHandler}
                className="key-dot"
                label={ActionKeys.DOT}
              />
              <CalculatorKey
                onPress={numericKeyPressHandler}
                className="key-1"
                label={NumericKeys.ONE}
              />
              <CalculatorKey
                onPress={numericKeyPressHandler}
                className="key-2"
                label={NumericKeys.TWO}
              />
              <CalculatorKey
                onPress={numericKeyPressHandler}
                className="key-3"
                label={NumericKeys.THREE}
              />
              <CalculatorKey
                onPress={numericKeyPressHandler}
                className="key-4"
                label={NumericKeys.FOUR}
              />
              <CalculatorKey
                onPress={numericKeyPressHandler}
                className="key-5"
                label={NumericKeys.FIVE}
              />
              <CalculatorKey
                onPress={numericKeyPressHandler}
                className="key-6"
                label={NumericKeys.SIX}
              />
              <CalculatorKey
                onPress={numericKeyPressHandler}
                className="key-7"
                label={NumericKeys.SEVEN}
              />
              <CalculatorKey
                onPress={numericKeyPressHandler}
                className="key-8"
                label={NumericKeys.EIGHT}
              />
              <CalculatorKey
                onPress={numericKeyPressHandler}
                className="key-9"
                label={NumericKeys.NINE}
              />
            </div>
          </div>
          <div className="operator-keys">
            <CalculatorKey
              onPress={operatorKeyPressHandler}
              className="key-divide"
              label={OperatorKeys.DIV}
            />
            <CalculatorKey
              onPress={operatorKeyPressHandler}
              className="key-multiply"
              label={OperatorKeys.MULT}
            />
            <CalculatorKey
              onPress={operatorKeyPressHandler}
              className="key-subtract"
              label={OperatorKeys.MINUS}
            />
            <CalculatorKey
              onPress={operatorKeyPressHandler}
              className="key-add"
              label={OperatorKeys.PLUS}
            />
            <CalculatorKey
              onPress={actionKeyPressHandler}
              className="key-equals"
              label={ActionKeys.EQUALS}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
