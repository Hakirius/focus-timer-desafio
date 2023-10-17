import { buttons } from "./controls.js"
import * as actions from "./functions.js"

//Indentifica os botões e executa as funções respectivas
export function registerControls(){
    buttons.addEventListener('click', (event)=>{
        const action = event.target.dataset.action // retorna uma string
        console.log(action)
        if(typeof actions[action] != "function")
            return 

        actions[action]() //actions["string retornada pela variável action"]
    })
}
