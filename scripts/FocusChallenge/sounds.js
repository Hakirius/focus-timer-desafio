export const forest = new Audio('./musics/Forest.wav')
export const campfire = new Audio('./musics/CampFire.wav')
export const rain = new Audio('./musics/Rain.wav')
export const marketplace = new Audio ('./musics/MarketPlace.wav')
export const kitchenTimer = new Audio('./musics/kitchen-timer.mp3')
export const buttonPress = new Audio('./musics/button-press.wav')

   forest.loop = true
   campfire.loop = true
   rain.loop = true
   marketplace.loop = true

export function soundPause()
{
   forest.pause()
   campfire.pause()
   rain.pause()
   marketplace.pause()
}



