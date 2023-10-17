import * as control from './controls.js'
import state from './state.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'

export function resetCard(){
    control.forest.classList.remove('musicRunning')
    control.rain.classList.remove('musicRunning')
    control.marketplace.classList.remove('musicRunning')
    control.campfire.classList.remove('musicRunning')
}
export function falseState(){
    state.forest = false
    state.campfire = false
    state.marketplace = false
    state.rain = false

    sounds.soundPause()
}
export function toggleRunning(){
    sounds.buttonPress.play()
    state.isRunning = document.documentElement.classList.toggle('runningTimer')
    timer.countdown()
}
export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove('runningTimer')
    timer.updateDisplay()
}
export function increase(){
    timer.increase()
}
export function decrease(){
    timer.decrease()
}