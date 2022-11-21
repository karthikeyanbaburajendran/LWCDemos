import { LightningElement, api } from 'lwc';

export default class VideoPlayer extends LightningElement {
@api userDetails
phoneNumber=false

handleClick(){
this.phoneNumber=!this.phoneNumber
}
}