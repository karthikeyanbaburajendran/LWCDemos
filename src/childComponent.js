import { LightningElement, api } from 'lwc';

export default class VideoPlayer extends LightningElement {
    @api headerText
    @api contentText
    colorName="green"


closeHandler(){
    this.dispatchEvent(new CustomEvent('close'))
}
}

    