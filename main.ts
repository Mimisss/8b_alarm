pins.digitalWritePin(DigitalPin.P11, 0)
pins.digitalWritePin(DigitalPin.P12, 0)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P5) == 1) {
        pins.digitalWritePin(DigitalPin.P11, 1)
        pins.digitalWritePin(DigitalPin.P12, 1)
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(932, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(880, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P11, 0)
    }
})
