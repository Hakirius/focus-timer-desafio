import * as control from './controls.js'
import state from './state.js'
import * as functions from './functions.js'
import * as sounds from './sounds.js'
import { cards } from './controls.js'
import { falseState } from './functions.js'

//Ativa as musicas e pressiona os cards através do uso de  condicionais que verifica se os estados daqueles cards são true ou false.
export function trueMusic(){
    cards.addEventListener('click', (event)=>
    {
        const music = event.target.dataset.music
        console.log(music)
        if(state[music]){
            falseState()  // Deixa todos como !state[music]
            control[music].classList.remove('musicRunning')
    }
        else{
            functions.resetCard() // Não deixa que dois cards fiquem pressionados juntos.
            falseState()
            state[music] = true
            sounds[music].play()
            control[music].classList.add('musicRunning')
        }
        })
}