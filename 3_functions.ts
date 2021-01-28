function add(a: number, b: number): string {
    return ((a + b) + "итог суммы");
}

function upperCase(): void {
    console.log(add(7, 9).toUpperCase());
}

upperCase();