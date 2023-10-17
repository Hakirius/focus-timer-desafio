import * as timerEvent from './timerEvent.js'
import * as timer from './timer.js'
import state from './state.js'
import * as events from './musicEvent.js'

export function start(minutes, seconds){
    state.minutes = minutes
    state.seconds = seconds
    
    timer.updateDisplay()
    timerEvent.registerControls()
    events.trueMusic()
}