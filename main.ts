input.onButtonPressed(Button.A, function () {
    for (let h2 = 0; h2 <= 4; h2++) {
        for (let v2 = 0; v2 <= 4; v2++) {
            for (let horiz = 0; horiz <= 4; horiz++) {
                for (let vertik = 0; vertik <= 4; vertik++) {
                    if (led.point(vertik, horiz)) {
                    	
                    } else {
                        led.plot(vertik, horiz)
                        basic.pause(25)
                        led.unplot(vertik, horiz)
                    }
                }
            }
            led.plot(4 - v2, 4 - h2)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function () {
	
})
