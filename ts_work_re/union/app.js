"use strict";
function introduce(someone) {
    console.log(someone.name); // O 정상 동작
    // someone.age; // X 타입 오류
    // someone.skill; // X 타입 오류
}
function introduce2(someone) {
    console.log(someone.name, someone.age, someone.skill);
}
const zenghyun = {
    name: "zenghyun",
    age: 27,
    skill: "typescript",
};
introduce(zenghyun);
introduce2(zenghyun);
