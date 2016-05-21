/**
/// <reference path="Calculator.ts" />
***/
module GDMath {
    export class SciCalculator extends GDMath.Calculator {

        public add(x: number, y: number) : number {
            return super._addHelper(x, y);
        }

        public sin(x: number ) : number {
            return Math.sin(x);
        }

    }
}