let CONTRASENYA = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("Pass=")
    for (let index = 0; index < 8; index++) {
        CONTRASENYA = randint(0, 3)
        if (CONTRASENYA == 1) {
            basic.showNumber(randint(0, 9))
        } else {
        	
        }
    }
})
basic.forever(function () {
	
})
