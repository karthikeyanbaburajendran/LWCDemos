import { LightningElement, api } from 'lwc';

export default class VideoPlayer extends LightningElement {
@api navList

handlerNavSelection(event){
const playerName=new CustomEvent('selection',{detail:event.target.name

})
this.dispatchEvent(playerName)
}
}

    