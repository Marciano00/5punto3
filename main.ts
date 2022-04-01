let CONTRASENYA = 0
let lletra = 0
let SÍMBOL = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("Pass=")
    for (let index = 0; index < 8; index++) {
        CONTRASENYA = randint(1, 3)
        if (CONTRASENYA == 1) {
            basic.showNumber(randint(1, 9))
        }
        if (CONTRASENYA == 2) {
            lletra = randint(1, 4)
            if (lletra == 1) {
                basic.showString("A")
            } else if (lletra == 2) {
                basic.showString("B")
            } else if (lletra == 3) {
                basic.showString("C")
            } else if (lletra == 4) {
                basic.showString("D")
            }
        }
        if (CONTRASENYA == 3) {
            SÍMBOL = randint(1, 4)
            if (SÍMBOL == 1) {
                basic.showString("?")
            } else if (SÍMBOL == 2) {
                basic.showString("!")
            } else if (SÍMBOL == 3) {
                basic.showString("+")
            } else if (SÍMBOL == 4) {
                basic.showString("$")
            }
        }
    }
})
basic.forever(function () {
	
})
