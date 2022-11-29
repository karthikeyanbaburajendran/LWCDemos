import { LightningElement, api } from 'lwc';

export default class VideoPlayer extends LightningElement {
@api userDetails


handleClick(event){
  const selectedContact= new CustomEvent('selection',{detail:event.target.name})

this.dispatchEvent(selectedContact)
}
}