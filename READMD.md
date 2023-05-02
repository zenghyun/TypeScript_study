## TypeScript_Study 🔥🔥


<br>

### install

```
npm install -g typescript
```

<br>

### TypeScript => JavaScript

```
tsc 바꿀 파일 이름.ts
```

<br>

### 파일 수정시 서버에서 자동 갱신 

```
npm install --save-dev lite-server
```

<br>

### TypeScript 관찰 모드 
```javascript
tsc 파일이름.ts --watch or tsc 파일이름.ts --w
```
규모가 큰 프로젝트에서는 이 방법을 사용하지는 않음 

<br>

### 특정 파일을 지정하지 않은 전체 관찰 모드 
```
tsc --init 후 tsc --watch or tsc --w 
```

<br>

### 컴파일 과정에서 포함시킬 파일을 타입스크립트에 알리는 법 ( 관찰할 파일을 추가하고, 여기 없으면 관찰 모드에서 제외 )
tsconfig.json
```
"include": [
    "app.ts",
    "analytics.ts"
]
```

<br>

### 특정 파일을 관찰 모드에서 제외하는 법 
tsconfig.json
```
"exclude": [
    "특정 파일.ts",
    "*.dev.ts",
    "**/*.dev.ts",
    "node_modules" // would be the default 
]
```

<br>

### js로 변환시 javascript version 선택 하는 방법
tsconfig.json 
```
{
    "target" : "여기서 바꾼다.",
}
```
es6 version 부터 js로 변환시 변수를 var이 아닌 let과 const도 지원한다. 

<br>

### 입력파일이 있는 위치와 출력 파일이 생성될 위치에 대해서 설정하는 법
tsconfig.json
```
// "outDir": "./",    
// "rootDir": "./",      
```

<br>

### 타입스크립트에 단 주석 모두 제거 
tsconfig.json
```
"removeComments": true
```

<br>

### 자바스크립트 파일 생성 막기 
tsconfig.json
```
"noEmit": true 
```

<br>

### 타입스크립트에서 문제가 발생하면 자바스크립트 파일 생성 막기
tsconfig.json
```
"noEmitOnError": false(기본값) 여기서 true로 설정하면 에러났을 때 파일 생성 안됨 
```
이 옵션은 일반적으로 타입스크립트 파일에 에러가 있는 경우 자바스크립트 파일을 가져오고 싶지 않을 때 설정한다. 

