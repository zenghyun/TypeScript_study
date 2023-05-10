// autobind decorator
// 1: type, 2: methodName, 3: descriptor: PropertyDescriptor
export function autobind(_: any, _2: String, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}
