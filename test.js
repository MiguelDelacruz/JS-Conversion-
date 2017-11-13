 // (50°F - 32) x .5556 = 10°C
var f = 20;
var c = 32;
var t = 1.8;

(f - c)/ t

   // C= (F32) / 1.8;

function FahrenheitConversion(f,c,t) {
    return c = (f - c)/ t;
}
var temp = FahrenheitConversion(f,c,t)
console.log(temp);