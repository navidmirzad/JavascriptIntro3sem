
// der er 7 (3+2+2) primitive typer i Javascript
// Number, String, Boolean
// Undefined, Null
// Symbol & BigInt .. dem bruger vi ikke

// der er yderligere 2 typer
// Object, Function

function showTypes(list) {
    console.log("STARTER Udskrivning")
    for (const obj of list) {
        console.log(obj + " er en af typen=" + typeof obj)
    }
}


function out(any) {
    console.log(any)
}

function outtype(any) {
    console.log("type= " + typeof any)
    console.log(any)
}

let b
let array = [5, "hej", true, 5.6, 'a', b, null, [1,2,3], {"navn": "Navid"}, out]
array.forEach(outtype)