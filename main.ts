let Conductividad = 0
let PConduct = 0
basic.forever(function () {
    Conductividad = pins.analogReadPin(AnalogPin.P0)
    PConduct = pins.map(
    Conductividad,
    0,
    1023,
    0,
    4
    )
    if (PConduct >= 0 && PConduct <= 1) {
        for (let index = 4; index > 4; index--) {
            led.plot(0, index)
        }
    } else {
    	
    }
})
