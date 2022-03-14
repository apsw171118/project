input.onButtonPressed(Button.A, function () {
    if (fell == 1) {
        basic.showString("Ok, but remember, our system is not a toy, I can really call help!")
    } else {
        basic.showString("Our system is not a toy, I can really call help!")
    }
})
function timer2 (last: number) {
    timer = last
    basic.pause(1000)
    basic.showNumber(timer)
    timer += -1
    if (timer == 0) {
    	
    } else {
        timer2(last - 1)
    }
}
input.onButtonPressed(Button.B, function () {
    if (fell == 1) {
        music.playTone(988, music.beat(BeatFraction.Breve))
    } else {
        basic.showString("Ok, but remember, our system is not a toy, I can really call help!")
    }
})
input.onGesture(Gesture.Shake, function () {
    fell = 1
    basic.showString("Press A if you're fine else press B if you can")
    timer2(10)
    fell = 0
})
let timer = 0
let fell = 0
fell = 0
