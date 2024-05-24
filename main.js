var s = "";

for ( var b = 0; b < 10; b++ ) {
    for (var k = 0; k <= b; k++ ) { 
        s += "*";
        }    s += '\n';
}
for ( var b = 18; b > 0; b-- ) {
    for (var k = 8; k < b; k++ ) { 
        s += "*";
        }    s += '\n';
}

console.log(s);