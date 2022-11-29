import { LightningElement,api } from 'lwc';

export default class AlertParentComponent extends LightningElement {
    showNotification=false
showHandler(){
    this.showNotification=true

}
}