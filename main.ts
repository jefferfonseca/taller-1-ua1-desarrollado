let Acidez = 0
let PAcidez = 0
let Conductividad = 0
let PConduct = 0
let Humedad = 0
let PHumedad = 0
basic.forever(function () {
    Acidez = pins.analogReadPin(AnalogPin.P1)
    PAcidez = pins.map(
    Acidez,
    0,
    1023,
    0,
    5
    )
    if (PAcidez == 0) {
        led.unplot(1, 0)
        led.unplot(1, 1)
        led.unplot(1, 2)
        led.unplot(1, 3)
        led.unplot(1, 4)
    }
    if (PAcidez > 0 && PAcidez <= 1) {
        led.unplot(1, 0)
        led.unplot(1, 1)
        led.unplot(1, 2)
        led.unplot(1, 3)
        led.plot(1, 4)
    } else {
        if (PAcidez > 1 && PAcidez <= 2) {
            led.unplot(1, 0)
            led.unplot(1, 1)
            led.unplot(1, 2)
            led.plot(1, 3)
            led.plot(1, 4)
        } else {
            if (PAcidez > 2 && PAcidez <= 3) {
                led.unplot(1, 0)
                led.unplot(1, 1)
                led.plot(1, 2)
                led.plot(1, 3)
                led.plot(1, 4)
            } else {
                if (PAcidez > 3 && PAcidez <= 4) {
                    led.unplot(1, 0)
                    led.plot(1, 1)
                    led.plot(1, 2)
                    led.plot(1, 3)
                    led.plot(1, 4)
                } else {
                    if (PAcidez > 4 && PAcidez <= 5) {
                        led.plot(1, 0)
                        led.plot(1, 1)
                        led.plot(1, 2)
                        led.plot(1, 3)
                        led.plot(1, 4)
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    Conductividad = pins.analogReadPin(AnalogPin.P0)
    PConduct = pins.map(
    Conductividad,
    0,
    1023,
    0,
    5
    )
    if (PConduct == 0) {
        led.unplot(0, 0)
        led.unplot(0, 1)
        led.unplot(0, 2)
        led.unplot(0, 3)
        led.unplot(0, 4)
    } else {
        if (PConduct > 0 && PConduct <= 1) {
            led.unplot(0, 0)
            led.unplot(0, 1)
            led.unplot(0, 2)
            led.unplot(0, 3)
            led.plot(0, 4)
        } else {
            if (PConduct > 1 && PConduct <= 2) {
                led.unplot(0, 0)
                led.unplot(0, 1)
                led.unplot(0, 2)
                led.plot(0, 3)
                led.plot(0, 4)
            } else {
                if (PConduct > 2 && PConduct <= 3) {
                    led.unplot(0, 0)
                    led.unplot(0, 1)
                    led.plot(0, 2)
                    led.plot(0, 3)
                    led.plot(0, 4)
                } else {
                    if (PConduct > 3 && PConduct <= 4) {
                        led.unplot(0, 0)
                        led.plot(0, 1)
                        led.plot(0, 2)
                        led.plot(0, 3)
                        led.plot(0, 4)
                    } else {
                        if (PConduct > 4 && PConduct <= 5) {
                            led.plot(0, 0)
                            led.plot(0, 1)
                            led.plot(0, 2)
                            led.plot(0, 3)
                            led.plot(0, 4)
                        }
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    Humedad = pins.analogReadPin(AnalogPin.P2)
    PHumedad = pins.map(
    Humedad,
    0,
    1023,
    0,
    5
    )
    if (PHumedad == 0) {
        led.unplot(2, 0)
        led.unplot(2, 1)
        led.unplot(2, 2)
        led.unplot(2, 3)
        led.unplot(2, 4)
    }
    if (PHumedad > 0 && PHumedad <= 1) {
        led.unplot(2, 0)
        led.unplot(2, 1)
        led.unplot(2, 2)
        led.unplot(2, 3)
        led.plot(2, 4)
    } else {
        if (PHumedad > 1 && PHumedad <= 2) {
            led.unplot(2, 0)
            led.unplot(2, 1)
            led.unplot(2, 2)
            led.plot(2, 3)
            led.plot(2, 4)
        } else {
            if (PHumedad > 2 && PHumedad <= 3) {
                led.unplot(2, 0)
                led.unplot(2, 1)
                led.plot(2, 2)
                led.plot(2, 3)
                led.plot(2, 4)
            } else {
                if (PHumedad > 3 && PHumedad <= 4) {
                    led.unplot(2, 0)
                    led.plot(2, 1)
                    led.plot(2, 2)
                    led.plot(2, 3)
                    led.plot(2, 4)
                } else {
                    if (PHumedad > 4 && PHumedad <= 5) {
                        led.plot(2, 0)
                        led.plot(2, 1)
                        led.plot(2, 2)
                        led.plot(2, 3)
                        led.plot(2, 4)
                    }
                }
            }
        }
    }
})
