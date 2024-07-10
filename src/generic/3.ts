function merge<T extends object>(objA: T, objB: T): T {
  return Object.assign(objA, objB);
}
