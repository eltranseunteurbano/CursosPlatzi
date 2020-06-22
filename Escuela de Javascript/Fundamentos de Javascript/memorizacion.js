console.log(1)
setTimeout(() => console.log(2), 0);
console.log(3)


/*function factorial(n) {

    if( !this.cache ) this.cache = {}
     
    if (this.cache[n]) return this.cache[n]

    if ( n == 1 ) return 1

    this.cache[ n ] = n * factorial( n - 1 )
    console.log(this.cache[n])
    return this.cache[ n ]
}*/