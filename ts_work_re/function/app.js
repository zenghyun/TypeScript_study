"use strict";
// myAdd는 전체 함수 타입을 가집니다.
let myAdd = function (x, y) {
    return x + y;
};
// 매개변수 x와 y는 number 타입을 가집니다.
let myAdd2 = function (x, y) {
    return x + y;
};
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let result1 = buildName("Bob"); // 지금은 바르게 동작
// let result2 = buildName("Bob", "Adams", "Sr.");  // 오류, 너무 많은 매개변수
let result3 = buildName("Bob", "Adams"); // 정확함
