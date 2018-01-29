> More : https://basarat.gitbooks.io/typescript/docs/types/typeGuard.html

Today we are going to be demonstrating `in` based type guards which is a new feature in TypeScript 2.7

Say you have an interface `Foo` with property `foo` of type number
And and interface `Bar` with a property `bar` of type string
And you have a use case where a value might be of type `Foo` or `Bar` represented here as a union type

```js
interface Foo {
  foo: number
}
interface Bar {
  bar: string
}

type Union = Foo | Bar;
```

Before TypeScript 2.7, if you wanted to discriminate between such interfaces you needed to write a custom type guard. One simple type guard function would use a simple assertion followed by a type check.

```js
function isFoo(value: Union): value is Foo {
  return typeof (value as Foo).foo === 'number';
}
```

Using this type guard was fairly easy e.g. we have a test function that takes a union and wants to do something special with values of type Foo.
It can do this after making a call to our custom type guard.

```js
function test(value: Union) {
  if (isFoo(value)) {
    console.log(value.foo) // Okay!
  }
}
```
Now with TypeScript 2.7 you no longer need to create a custom type guard for filtering between such types ***delete isFoo***. You can use the standard javascript `in` operator.

```js
function test(value: Union) {
  if ('foo' in value) {
    console.log(value.foo) // Okay!
  }
}
```

This just another example of TypeScript understanding and standardizing best practices for JavaScript development.

> If you enjoyed this video and would like to learn more JavaScript best practices, don't forget to subscribe. Thank you!
