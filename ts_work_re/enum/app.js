"use strict";
var Response1;
(function (Response1) {
    Response1[Response1["No"] = 0] = "No";
    Response1[Response1["Yes"] = 1] = "Yes";
})(Response1 || (Response1 = {}));
;
function respond(recipient, message) {
    console.log(recipient, message);
}
respond("Zenghyun", Response1.Yes);
var E;
(function (E) {
    E[E["X"] = 0] = "X";
    E[E["Y"] = 1] = "Y";
    E[E["Z"] = 2] = "Z";
})(E || (E = {}));
function getX(obj) {
    return console.log("obj.X : ", obj.X);
}
getX(E); // 이넘 E의 X는 숫자이기 때문에 정상 동작
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["WARN"] = 1] = "WARN";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
})(LogLevel || (LogLevel = {}));
function printImportant(key, message) {
    const num = LogLevel[key];
    console.log("num", num);
    if (num <= LogLevel.WARN) {
        console.log('Log level key is: ', key);
        console.log('Log level value is: ', num);
        console.log('Log level message is: ', message);
    }
}
printImportant('ERROR', 'This is a message');
