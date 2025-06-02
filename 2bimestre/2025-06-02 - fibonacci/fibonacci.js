function fibonacci(termo) {
    let a = 0;
    let b = 1;
    let resp = a + "," + b;
    let p = 0;
    for (let i = 0; i < termo - 2; i++) {
        p = a + b;
        resp = resp + ", " + p;
        a = b;
        b = p;
    }

    return resp;
}

let r = fibonacci(10);
console.log(r);