module GDCollection {
    export class Stack<T> {
        private _array: [T];

        public push( obj : T) : void {
            this._array.push(obj);
        }

        public pop() : T {
            return this._array.pop();
        }
    }
}