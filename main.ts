let Conductividad = 0
let PConduct = 0
let Humedad = 0
let PHumedad = 0
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
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (PConduct > 0 && PConduct <= 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    } else {
        if (PConduct > 1 && PConduct <= 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                `)
        } else {
            if (PConduct > 2 && PConduct <= 3) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # . . . .
                    # . . . .
                    # . . . .
                    `)
            } else {
                if (PConduct > 3 && PConduct <= 4) {
                    basic.showLeds(`
                        . . . . .
                        # . . . .
                        # . . . .
                        # . . . .
                        # . . . .
                        `)
                } else {
                    if (PConduct > 4 && PConduct <= 5) {
                        basic.showLeds(`
                            # . . . .
                            # . . . .
                            # . . . .
                            # . . . .
                            # . . . .
                            `)
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    Humedad = pins.analogReadPin(AnalogPin.P1)
    PHumedad = pins.map(
    Humedad,
    0,
    1023,
    0,
    5
    )
    if (PHumedad == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (PHumedad > 0 && PHumedad <= 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    } else {
        if (PHumedad > 1 && PHumedad <= 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                `)
        } else {
            if (PHumedad > 2 && PHumedad <= 3) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # . . . .
                    # . . . .
                    # . . . .
                    `)
            } else {
                if (PHumedad > 3 && PHumedad <= 4) {
                    basic.showLeds(`
                        . . . . .
                        # . . . .
                        # . . . .
                        # . . . .
                        # . . . .
                        `)
                } else {
                    if (PHumedad > 4 && PHumedad <= 5) {
                        basic.showLeds(`
                            # . . . .
                            # . . . .
                            # . . . .
                            # . . . .
                            # . . . .
                            `)
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    Humedad = pins.analogReadPin(AnalogPin.P1)
    PHumedad = pins.map(
    Humedad,
    0,
    1023,
    0,
    5
    )
    if (PHumedad == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (PHumedad > 0 && PHumedad <= 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    } else {
        if (PHumedad > 1 && PHumedad <= 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # . . . .
                # . . . .
                `)
        } else {
            if (PHumedad > 2 && PHumedad <= 3) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # . . . .
                    # . . . .
                    # . . . .
                    `)
            } else {
                if (PHumedad > 3 && PHumedad <= 4) {
                    basic.showLeds(`
                        . . . . .
                        # . . . .
                        # . . . .
                        # . . . .
                        # . . . .
                        `)
                } else {
                    if (PHumedad > 4 && PHumedad <= 5) {
                        basic.showLeds(`
                            # . . . .
                            # . . . .
                            # . . . .
                            # . . . .
                            # . . . .
                            `)
                    }
                }
            }
        }
    }
})
