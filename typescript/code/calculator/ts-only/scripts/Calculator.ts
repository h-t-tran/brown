/// <reference path="IMathOps.ts" />

module GDMath {

     export class Calculator implements GDMath.IMathOps {
         constructor() {
            console.debug("Calculator constructor");
         }

         public add(x: number, y: number) : number {
            return this._addHelper(x, y);
        };

        public substract(x: number, y: number) : number {
            return x - y
        };

        public multiply(x: number, y: number) : number {
            return x * y;
        };

        public divide(x: number, y: number) : number {
            return x / y;
        };

        protected _addHelper(x : number, y : number) : number {
            return x + y;
        };
    }

}