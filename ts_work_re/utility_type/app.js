"use strict";
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const todo1 = {
    title: 'organize desk',
    description: 'clear clutter',
};
const todo2 = updateTodo(todo1, {
    description: 'throw out trash',
});
console.log(todo2);
const todo = {
    title: 'Delete inactive users',
};
const x = {
    about: { title: 'about' },
    contact: { title: 'contact' },
    home: { title: 'home' },
};
const todo3 = {
    title: 'Clean room',
    completed: false,
};
const todo4 = {
    title: 'Clean room',
    completed: false,
};
// type T27 = ReturnType<string>;  // 오류
// type T28 = ReturnType<Function>;  // 오류
// InstanceType<T>
class C {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
;
const obj = { a: 5 }; // 성공
// const obj2: Required<Props> = { a: 5 }; // 오류: 프로퍼티 'b'가 없습니다
// ThisParameterType 
function toHex() {
    return this.toString(16);
}
function numberToString(n) {
    return toHex.apply(n);
}
console.log(numberToString(10));
// OmitThisParameter 
function toHex2() {
    return this.toString(16);
}
// `bind`의 반환 타입은 이미 `OmitThisParameter`을 사용하고 있습니다, 이는 단지 예제를 위한 것입니다.
const fiveToHex = toHex2.bind(5);
console.log(fiveToHex());
function makeObject(desc) {
    let data = desc.data || {};
    let methods = desc.methods || {};
    return Object.assign(Object.assign({}, data), methods);
}
let obj3 = makeObject({
    data: { x: 0, y: 0 },
    methods: {
        moveBy(dx, dy) {
            this.x += dx; // 강하게 타입이 정해진 this
            this.y += dy; // 강하게 타입이 정해진 this
            return [this.x, this.y];
        }
    }
});
obj3.x = 10;
obj3.y = 20;
console.log(obj3.moveBy(5, 5));
