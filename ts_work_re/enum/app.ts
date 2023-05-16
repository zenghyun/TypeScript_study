enum Response1 {
  No = 0,
  Yes = 1,
};

function respond(recipient: string, message: Response1): void {
  console.log(recipient, message);
}

respond("Zenghyun", Response1.Yes);

enum E {
    X, Y, Z
  }
  
  function getX(obj: { X: number }) {
    return console.log("obj.X : ", obj.X);
  }
  getX(E); // 이넘 E의 X는 숫자이기 때문에 정상 동작
  
  enum LogLevel {
    ERROR, WARN, INFO, DEBUG
  }
  
  // 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
  type LogLevelStrings = keyof typeof LogLevel;
  
  function printImportant(key: LogLevelStrings, message: string) {
      const num = LogLevel[key];
      console.log("num", num);
      if (num <= LogLevel.WARN) {
         console.log('Log level key is: ', key);
         console.log('Log level value is: ', num);
         console.log('Log level message is: ', message);
      }
  }
  printImportant('ERROR', 'This is a message');