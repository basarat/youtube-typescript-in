function test(value) {
    if ('foo' in value) {
        console.log(value.foo); // Okay!
    }
}
