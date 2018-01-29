> More : https://basarat.gitbooks.io/typescript/docs/types/typeGuard.html

Say you have an interface `Foo` with property `foo` of type number
And and interface `Bar` with a property `bar` of type string
And you have a case where a value might be of type `Foo` or `Bar` represented here as a union type

```js
interface Foo {
  foo: number
}
interface Bar {
  bar: string
}

type Union = Foo | Bar;
```

If you wanted to discriminate between such interfaces you needed to write a custom type guard with a simple assertion followed by a type check.

```js
function isFoo(value: Union): value is Foo {
  const foo = value as Foo;
  return typeof foo === 'number';
}
```

Using this type guard is easy e.g. we have a test function that takes a union and does something after doing a type filtering call to our type guard

```js
function test(value: Union) {
  if (isFoo(value)) {
    console.log(value.foo) // Okay!
  }
}
```
Now with TypeScript 2.7 you no longer need to create a custom type guard for filtering between these types ***delete isFoo***. You can use the standard javascript `in` operator.

```js
function test(value: Union) {
  if ('foo' in value) {
    console.log(value.foo) // Okay!
  }
}
```

This just another example of TypeScript understanding and standardizing best practices for JavaScript development.

> If you enjoyed this video and would like to see more don't forget to subscribe.
