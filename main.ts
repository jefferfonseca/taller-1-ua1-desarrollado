let Humedad = 0
let PHumedad = 0
let Conductividad = 0
let PConduct = 0
let Acidez = 0
let PAcidez = 0
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
            . # . . .
            `)
    } else {
        if (PHumedad > 1 && PHumedad <= 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . # . . .
                . # . . .
                `)
        } else {
            if (PHumedad > 2 && PHumedad <= 3) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . # . . .
                    . # . . .
                    . # . . .
                    `)
            } else {
                if (PHumedad > 3 && PHumedad <= 4) {
                    basic.showLeds(`
                        . . . . .
                        . # . . .
                        . # . . .
                        . # . . .
                        . # . . .
                        `)
                } else {
                    if (PHumedad > 4 && PHumedad <= 5) {
                        basic.showLeds(`
                            . # . . .
                            . # . . .
                            . # . . .
                            . # . . .
                            . # . . .
                            `)
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
    Acidez = pins.analogReadPin(AnalogPin.P2)
    PAcidez = pins.map(
    Acidez,
    0,
    1023,
    0,
    5
    )
    if (PAcidez == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (PAcidez > 0 && PAcidez <= 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
    } else {
        if (PAcidez > 1 && PAcidez <= 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . # . .
                . . # . .
                `)
        } else {
            if (PAcidez > 2 && PAcidez <= 3) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . . # . .
                    . . # . .
                    `)
            } else {
                if (PAcidez > 3 && PAcidez <= 4) {
                    basic.showLeds(`
                        . . . . .
                        . . # . .
                        . . # . .
                        . . # . .
                        . . # . .
                        `)
                } else {
                    if (PAcidez > 4 && PAcidez <= 5) {
                        basic.showLeds(`
                            . . # . .
                            . . # . .
                            . . # . .
                            . . # . .
                            . . # . .
                            `)
                    }
                }
            }
        }
    }
})
