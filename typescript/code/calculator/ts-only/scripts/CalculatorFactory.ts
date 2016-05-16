/// <reference path="IMathOps.ts" />
/// <reference path="Calculator.ts" />
module GDMath {

    export enum CalcType {
        BASE_CALC,
        SCI_CALC
    }

    export class CalculatorFactory {

        public static createCalc(type : GDMath.CalcType) : GDMath.IMathOps {

            var resultCalc : GDMath.IMathOps;

            if(type == CalcType.BASE_CALC) {
                resultCalc = new GDMath.Calculator();
            }
            else if(type == CalcType.SCI_CALC) {
                //resultCalc = new GDMath.SciCalculator();
            }

            return resultCalc;
        }
    }

}