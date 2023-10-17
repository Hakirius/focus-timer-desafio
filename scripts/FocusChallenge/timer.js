import state from "./state.js"
import * as controls from './controls.js'
import {reset } from "./functions.js"
import { kitchenTimer } from "./sounds.js"

// Bloco do Temporizador
export function countdown(){
    clearTimeout(state.countdownId)
    if(!state.isRunning)
        return
    let minutes = Number(controls.minutes.textContent)
    let seconds = Number(controls.seconds.textContent)
    seconds--
    if(seconds < 0){
        seconds = 59
        minutes--
    }
    if(minutes<0){
        kitchenTimer.play()
        reset()
        return
    }
    updateDisplay(minutes, seconds)
    state.countdownId = setTimeout(()=> countdown(), 1000)
}
export function updateDisplay(minutes, seconds){
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    controls.minutes.textContent = String(minutes).padStart(2, '0')
    controls.seconds.textContent = String(seconds).padStart(2,'0')
}
export function increase(minutes,seconds){
    minutes = Number(controls.minutes.textContent)
    seconds = Number(controls.seconds.textContent)
    minutes += 5

    if(minutes > 120)
        return 0

        updateDisplay(minutes,seconds)
}
export function decrease(minutes,seconds){
     minutes = Number(controls.minutes.textContent)
     seconds = Number(controls.seconds.textContent)
    
     if(minutes < 10)
        return 0
    
    minutes -= 5
    updateDisplay(minutes,seconds)
}