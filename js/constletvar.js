

const a = 5 // const you cannot assign to other variable
let b = "hej" // let, normal assign, you can reassign
let b = 8
var c = null // its not allowed, because of scope

function testScope() {
    let x = 5
    let y = 6
    if (y>x) {
        console.log("inside scope2")
        let a = 4
        let b = 5
        if (b>a) {
            let a1 = 10
            var b1 = 11
        }
    }
    console.log(b1) // kan tilgås og det er en fejl ved 'var'
    console.log(a1) // kan ikke tilgås da det er uden for scopet. Fungerer som det skal
}

testScope()