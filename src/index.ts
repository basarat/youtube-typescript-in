interface Foo {
  foo: number
}
interface Bar {
  bar: string
}

type Union = Foo | Bar;

function test(value: Union) {
  if ('foo' in value) {
    console.log(value.foo) // Okay!
  }
}