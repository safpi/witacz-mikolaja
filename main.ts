input.onButtonPressed(Button.A, function () {
    normalna_odleglosc = maqueen.Ultrasonic(PingUnit.Centimeters)
    basic.showNumber(normalna_odleglosc)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let min_odleglosc = 0
let max_odleglosc = 0
let zmierzona_odleglosc = 0
let normalna_odleglosc = 0
basic.showIcon(IconNames.Heart)
normalna_odleglosc = maqueen.Ultrasonic(PingUnit.Centimeters)
basic.showNumber(normalna_odleglosc)
basic.showIcon(IconNames.Yes)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    zmierzona_odleglosc = maqueen.Ultrasonic(PingUnit.Centimeters)
    max_odleglosc = normalna_odleglosc + 3
    min_odleglosc = normalna_odleglosc - 3
    if (zmierzona_odleglosc != 0) {
        if (zmierzona_odleglosc <= max_odleglosc && zmierzona_odleglosc >= min_odleglosc) {
        	
        } else {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            basic.pause(1000)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
            basic.showLeds(`
                . . . . .
                . . . # .
                . . # . .
                . # # # .
                # # # # #
                `)
        }
    }
})
