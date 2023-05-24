// Partial<T>
interface Todo {
    title: string;
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
    title: 'organize desk',
    description: 'clear clutter',
};

const todo2 = updateTodo(todo1, {
    description: 'throw out trash',
});

console.log(todo2);

// Readonly<T>
interface Todo1 {
    title: string;
}

const todo: Readonly<Todo1> = {
    title: 'Delete inactive users',
};

// todo.title = 'Hello'; // 오류: 읽기 전용 프로퍼티에 재할당할 수 없음

// Record<K,T>
interface PageInfo {
    title: string;
}

type Page = 'home' | 'about' | 'contact';

const x: Record<Page, PageInfo> = {
    about: { title: 'about' },
    contact: { title: 'contact' },
    home: { title: 'home' },
};

// Pick<T,K> 
interface Todo2 {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo2, 'title' | 'completed'>;

const todo3: TodoPreview = {
    title: 'Clean room',
    completed: false,
};

// Omit<T,K>
interface Todo3 {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview2 = Omit<Todo3, 'description'>;

const todo4: TodoPreview2 = {
    title: 'Clean room',
    completed: false,
};

// Exclude<T,U>
type T0 = Exclude<"a" | "b" | "c", "a">;  // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;  // "c"
type T2 = Exclude<string | number | (() => void), Function>;  // string | number

// Extract<T,U>
type T3 = Extract<"a" | "b" | "c", "a" | "f">;  // "a"
type T4 = Extract<string | number | (() => void), Function>;  // () => void

// NonNullable<T>
type T5 = NonNullable<string | number | undefined>;  // string | number
type T6 = NonNullable<string[] | null | undefined>;  // string[]

// Parameters<T>
declare function f1(arg: { a: number, b: string }): void
type T10 = Parameters<() => string>;  // []
type T11 = Parameters<(s: string) => void>;  // [string]
type T12 = Parameters<(<T>(arg: T) => T)>;  // [unknown]
type T14 = Parameters<typeof f1>;  // [{ a: number, b: string }]
type T15 = Parameters<any>;  // unknown[]
type T16 = Parameters<never>;  // never
// type T17 = Parameters<string>;  // 오류
// type T18 = Parameters<Function>;  // 오류

// ConstructorParameters<T>
type T17 = ConstructorParameters<ErrorConstructor>;  // [(string | undefined)?]
type T18 = ConstructorParameters<FunctionConstructor>;  // string[]
type T19 = ConstructorParameters<RegExpConstructor>;  // [string, (string | undefined)


// ReturnType<T>
declare function f1(): { a: number, b: string }
type T20 = ReturnType<() => string>;  // string
type T21 = ReturnType<(s: string) => void>;  // void
type T22 = ReturnType<(<T>() => T)>;  // {}
type T23 = ReturnType<(<T extends U, U extends number[]>() => T)>;  // number[]
type T24 = ReturnType<typeof f1>;  // { a: number, b: string }
type T25 = ReturnType<any>;  // any
type T26 = ReturnType<never>;  // any
// type T27 = ReturnType<string>;  // 오류
// type T28 = ReturnType<Function>;  // 오류


// InstanceType<T>
class C {
    x = 0;
    y = 0;
}

type T30 = InstanceType<typeof C>;  // C
type T31 = InstanceType<any>;  // any
type T32 = InstanceType<never>;  // any
// type T33 = InstanceType<string>;  // 오류
// type T34 = InstanceType<Function>;  // 오류

// Reauired<T>
interface Props {
    a?: number;
    b?: string;
};

const obj: Props = { a: 5 }; // 성공

// const obj2: Required<Props> = { a: 5 }; // 오류: 프로퍼티 'b'가 없습니다

// ThisParameterType 
function toHex(this: Number) {
    return this.toString(16);
}

function numberToString(n: ThisParameterType<typeof toHex>) {
    return toHex.apply(n);
}

console.log(numberToString(10));

// OmitThisParameter 
function toHex2(this: Number) {
    return this.toString(16);
}

// `bind`의 반환 타입은 이미 `OmitThisParameter`을 사용하고 있습니다, 이는 단지 예제를 위한 것입니다.
const fiveToHex: OmitThisParameter<typeof toHex2> = toHex2.bind(5);

console.log(fiveToHex());


// ThisType<T>
// --noImplicitThis 로 컴파일

type ObjectDescriptor<D, M> = {
    data?: D;
    methods?: M & ThisType<D & M>;  // 메서드 안의 'this 타입은 D & M 입니다.
}

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
    let data: object = desc.data || {};
    let methods: object = desc.methods || {};
    return { ...data, ...methods } as D & M;
}

let obj3 = makeObject({
    data: { x: 0, y: 0 },
    methods: {
        moveBy(dx: number, dy: number) {
            this.x += dx;  // 강하게 타입이 정해진 this
            this.y += dy;  // 강하게 타입이 정해진 this
            return [this.x, this.y];
        }
    }
});
obj3.x = 10;
obj3.y = 20;
console.log(obj3.moveBy(5, 5));